"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import AppData from "@data/app.json";

const DefaultHeader = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const asPath = usePathname();

    const isPathActive = (path) => {
        return (asPath.endsWith(path) == 1 && path !== '/') || asPath === path;
    };

    const handleSubMenuClick = (index, e) => {
        if (window !== undefined) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                setOpenSubMenu(openSubMenu === index ? false : index);
            }
        }
    };

    useEffect(() => {
        // close mobile menu
        setMobileMenu(false);
        setOpenSubMenu(false);
    }, [asPath]);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            {/* top bar */}
            <div className="sb-top-bar-frame">
                <div className="sb-top-bar-bg"></div>
                <div className="container">
                    <div className="sb-top-bar">
                        <Link
                            href="/"
                            className="sb-logo-frame"
                            style={{
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(110%)'}
                            onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(100%)'}
                        >
                            <img
                                src={AppData.header.logo.image}
                                alt={AppData.header.logo.alt}
                                style={{
                                    width: '100%',
                                    maxWidth: isMobile ? '75px' : '130px',
                                    maxHeight: isMobile ? '50px' : '90px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    imageRendering: 'auto',
                                    filter: 'contrast(1.08) brightness(1.02) sharpen(1)',
                                    WebkitFontSmoothing: 'antialiased',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        </Link>
                        {/* menu */}
                        <div className="sb-right-side">
                            <nav id="sb-dynamic-menu" className="sb-nav sb-menu-transition">
                                <ul className={`sb-navigation ${mobileMenu ? "sb-active" : ""}`}>
                                    {AppData.header.menu.map((item, index) => (
                                        <li className={`sb-has-children ${isPathActive(item.link) ? "sb-active" : ""}`} key={`header-menu-item-${index}`}>
                                            <Link href={item.link} onClick={(item.children != 0 && item.children.length > 0) ? (e) => handleSubMenuClick(index, e) : null}>
                                                {item.label}
                                            </Link>
                                            {item.children != 0 && item.children.length > 0 && (
                                                <ul className={openSubMenu === index ? 'sb-active' : ''}>
                                                    {item.children.map((subitem, subIndex) => (
                                                        <li key={`header-submenu-item-${subIndex}`} className={isPathActive(subitem.link) ? "sb-active" : ""}>
                                                            <Link href={subitem.link}>
                                                                {subitem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="sb-buttons-frame">
                                {/* menu btn */}
                                <div className={`sb-menu-btn ${mobileMenu ? "sb-active" : ""}`} onClick={() => setMobileMenu(!mobileMenu)}><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* top bar end */}
        </>
    );
};
export default DefaultHeader;