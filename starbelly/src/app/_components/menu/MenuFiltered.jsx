"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import MenuItem from "@components/menu/MenuItem";

const MenuFiltered = ({ categories, noImage, columns, initialFilter = "*" }) => {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState(initialFilter);
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    // ← ADD THIS: Sync filterKey when initialFilter changes
    useEffect(() => {
        if (initialFilter && initialFilter !== filterKey) {
            setFilterKey(initialFilter);
        }
    }, [initialFilter]);

    useEffect(() => {
        if (!isClient || typeof window === 'undefined') return;

        // Dynamically import Isotope only on client side
        import('isotope-layout').then((Isotope) => {
            isotope.current = new Isotope.default(".sb-masonry-grid", {
                itemSelector: ".sb-grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: '.sb-grid-sizer'
                },
                transitionDuration: '0.5s',
            });
            
            // Apply initial filter immediately after Isotope loads
            if (initialFilter !== "*") {
                setTimeout(() => {
                    if (isotope.current) {
                        isotope.current.arrange({ filter: `.${initialFilter}` });
                    }
                }, 100);
            }
        });

        return () => {
            if (isotope.current) {
                isotope.current.destroy();
            }
        };
    }, [isClient, initialFilter]);

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    
    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);
        
        if (typeof document === 'undefined') return;
        
        const filterLinks = document.querySelectorAll(".sb-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == key) {
                filter.classList.add("sb-active");
            } else {
                filter.classList.remove("sb-active");
            }
        });
    };

    var columnsClass = '';
  
    switch (columns) {
        case 3:
            columnsClass = 'sb-item-33';
        break;
        case 2:
            columnsClass = 'sb-item-50';
        break;
        default:
            columnsClass = 'sb-item-25';
    }

    return (
      <>
        {/* filter */}
        <div className="sb-filter mb-30">
            <a 
                href="#." 
                data-filter="*" 
                onClick={(e) => handleFilterKeyChange("*", e)} 
                className={`sb-filter-link ${filterKey === "*" ? "sb-active" : ""}`}
            >
                All dishes
            </a>
            {categories.map((category, key) => (
            <a 
                href="#." 
                data-filter={category.slug} 
                key={`menu-category-item-${key}`} 
                onClick={(e) => handleFilterKeyChange(category.slug, e)} 
                className={`sb-filter-link ${filterKey === category.slug ? "sb-active" : ""}`}
            >
                {category.name}
            </a>
            ))}
        </div>
        {/* filter end */}

        <div className="sb-masonry-grid">
            <div className="sb-grid-sizer"></div>
            
            {categories.map((category, category_key) => (
            <Fragment key={`menu-filtered-category-${category_key}`}>
                {category.items.map((item, key) => (
                <div className={`sb-grid-item ${columnsClass} ${category.slug}`} key={`menu-filtered-item-${category_key}-${key}`}>
                    <MenuItem item={item} index={key} noImage={noImage} marginBottom={30} />
                </div>
                ))}
            </Fragment>
            ))}
        </div>
      </>
    );
};

export default MenuFiltered;