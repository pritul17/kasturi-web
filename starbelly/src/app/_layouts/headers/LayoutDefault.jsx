"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import AppData from "@data/app.json";
import { useLanguage, pick } from "@common/LanguageContext";

const DefaultHeader = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const asPath = usePathname();
    const { lang, setLang } = useLanguage();

    const isPathActive = (path) => {
        const normalized = asPath.replace(/\/$/, '');
        return (normalized.endsWith(path) && path !== '/') || normalized === path;
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
        setMobileMenu(false);
        setOpenSubMenu(false);
    }, [asPath]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const logoImg = (
        <Link href="/" className="sb-logo-frame" style={{ transition: 'all 0.3s ease', flexShrink: 0 }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
            <img src="/img/ui/kasturi-logo-new.png" alt={AppData.header.logo.alt}
                className="sb-logo-img"
                style={{ height: isMobile ? '60px' : '80px', width: 'auto', display: 'block' }} />
        </Link>
    );

    const langToggle = (
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <button onClick={() => setLang('en')} style={{
                padding: '5px 11px', background: lang === 'en' ? '#FEB600' : 'transparent',
                color: lang === 'en' ? '#1a1a1a' : 'inherit', border: 'none', cursor: 'pointer',
                fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px', lineHeight: 1,
                fontFamily: 'inherit', transition: 'background 0.2s, color 0.2s',
                borderRadius: '4px',
            }}>EN</button>
            <button onClick={() => setLang('pl')} style={{
                padding: '5px 11px', background: lang === 'pl' ? '#FEB600' : 'transparent',
                color: lang === 'pl' ? '#1a1a1a' : 'inherit', border: 'none', cursor: 'pointer',
                fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px', lineHeight: 1,
                fontFamily: 'inherit', transition: 'background 0.2s, color 0.2s',
                borderRadius: '4px',
            }}>PL</button>
        </div>
    );

    return (
        <>
            <div className="sb-top-bar-frame">
                <div className="sb-top-bar-bg"></div>
                <div className="container">
                    <div className="sb-top-bar">

                        {isMobile ? (
                            /* ── Mobile: logo left, toggle + hamburger right ── */
                            <>
                                {logoImg}
                                <div className="sb-right-side">
                                    <nav id="sb-dynamic-menu" className="sb-nav sb-menu-transition">
                                        <ul className={`sb-navigation ${mobileMenu ? "sb-active" : ""}`}>
                                            {AppData.header.menu.map((item, index) => (
                                                <li className={`sb-has-children ${isPathActive(item.link) ? "sb-active" : ""}`} key={`header-menu-item-${index}`}>
                                                    <Link href={item.link} onClick={(item.children != 0 && item.children.length > 0) ? (e) => handleSubMenuClick(index, e) : null}>
                                                        {pick(item, 'label', lang)}
                                                    </Link>
                                                    {item.children != 0 && item.children.length > 0 && (
                                                        <ul className={openSubMenu === index ? 'sb-active' : ''}>
                                                            {item.children.map((subitem, subIndex) => (
                                                                <li key={`header-submenu-item-${subIndex}`} className={isPathActive(subitem.link) ? "sb-active" : ""}>
                                                                    <Link href={subitem.link}>{pick(subitem, 'label', lang)}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <div className="sb-buttons-frame">
                                        {langToggle}
                                        <div style={{ marginLeft: '10px' }}>
                                            <div className={`sb-menu-btn ${mobileMenu ? "sb-active" : ""}`} onClick={() => setMobileMenu(!mobileMenu)}><span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            /* ── Desktop: [logo] LEFT  ···empty center···  [nav + toggle] RIGHT ── */
                            <>
                                {/* LEFT: logo only */}
                                {logoImg}

                                {/* RIGHT: all nav items + language toggle with equal spacing */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {AppData.header.menu.map((item, index) => (
                                        <div key={`header-menu-item-${index}`} style={{ position: 'relative' }}>
                                            <Link href={item.link}
                                                style={{
                                                    padding: '0 22px',
                                                    display: 'inline-block',
                                                    fontWeight: isPathActive(item.link) ? '600' : '500',
                                                    color: isPathActive(item.link) ? '#FEB600' : 'inherit',
                                                    fontSize: '15px',
                                                    transition: 'color 0.3s',
                                                    whiteSpace: 'nowrap',
                                                }}
                                                onMouseEnter={(e) => { if (!isPathActive(item.link)) e.currentTarget.style.color = '#FEB600'; }}
                                                onMouseLeave={(e) => { if (!isPathActive(item.link)) e.currentTarget.style.color = 'inherit'; }}
                                            >
                                                {pick(item, 'label', lang)}
                                            </Link>
                                        </div>
                                    ))}
                                    {/* Language toggle — same row, same gap */}
                                    <div style={{ paddingLeft: '22px' }}>
                                        {langToggle}
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};
export default DefaultHeader;
