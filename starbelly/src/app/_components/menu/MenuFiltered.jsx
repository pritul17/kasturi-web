"use client";

import { Fragment, useState } from "react";
import MenuItem from "@components/menu/MenuItem";
import { useLanguage, pick } from "@common/LanguageContext";

const MenuFiltered = ({ categories, noImage, columns }) => {
    const [filterKey, setFilterKey] = useState("*");
    const { lang } = useLanguage();

    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);
    };

    const visibleCategories = filterKey === "*"
        ? categories
        : categories.filter(c => c.slug === filterKey);

    const colClass = columns === 3 ? 'col-lg-4 col-md-6' : columns === 2 ? 'col-lg-6' : 'col-lg-3 col-md-6';
    const allLabel = lang === 'pl' ? 'Wszystkie dania' : 'All dishes';

    return (
        <>
            {/* filter */}
            <div className="sb-filter mb-30" style={{ display: 'flex', flexWrap: 'nowrap', gap: '8px', alignItems: 'center', overflowX: 'auto', paddingBottom: '6px' }}>
                <a
                    href="#."
                    onClick={(e) => handleFilterKeyChange("*", e)}
                    className={`sb-filter-link ${filterKey === "*" ? "sb-active" : ""}`}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    {allLabel}
                </a>
                {categories.map((category, key) => (
                    <a
                        href="#."
                        key={`menu-filter-${key}`}
                        onClick={(e) => handleFilterKeyChange(category.slug, e)}
                        className={`sb-filter-link ${filterKey === category.slug ? "sb-active" : ""}`}
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        {pick(category, 'name', lang)}
                    </a>
                ))}
            </div>
            {/* filter end */}

            {/* sections */}
            {visibleCategories.map((category, category_key) => (
                <Fragment key={`section-${category_key}`}>
                    {/* Section header */}
                    <div style={{
                        borderBottom: '2px solid #3F4F2A',
                        marginBottom: '30px',
                        marginTop: category_key > 0 ? '60px' : '0',
                        paddingBottom: '12px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '16px',
                        flexWrap: 'wrap',
                    }}>
                        <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '700' }}>{pick(category, 'name', lang)}</h3>
                        {category.description && (
                            <p style={{ margin: 0, color: '#888', fontSize: '13px', paddingBottom: '2px' }}>
                                {pick(category, 'description', lang)}
                            </p>
                        )}
                    </div>

                    {/* Items grid */}
                    <div className="row" style={{ alignItems: 'stretch' }}>
                        {category.items.filter(item => !item.noImage).map((item, key) => (
                            <div
                                className={`${colClass} sb-mb-30`}
                                key={`item-${category_key}-${key}`}
                                style={{ display: 'flex' }}
                            >
                                <div style={{ width: '100%' }}>
                                    <MenuItem item={item} index={key} noImage={noImage} marginBottom={0} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Fragment>
            ))}
        </>
    );
};

export default MenuFiltered;
