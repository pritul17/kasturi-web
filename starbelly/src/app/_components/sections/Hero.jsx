"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollAnimation } from "@common/scrollAnims";
import { useLanguage } from "@common/LanguageContext";
import FeaturesData from "@data/sections/features.json";

const ui = {
    en: {
        tag: "Authentic Indian · Wrocław",
        heading1: "Authentic Indian flavours,",
        heading2: "right at your ",
        highlight: "fingertips.",
        menu: "Our menu",
        about: "About us",
    },
    pl: {
        tag: "Autentyczna Kuchnia Indyjska · Wrocław",
        heading1: "Smaki Indii w autentycznej odsłonie,",
        heading2: "na wyciągnięcie ",
        highlight: "ręki.",
        menu: "Nasze menu",
        about: "O nas",
    },
};

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { lang } = useLanguage();
    const tx = ui[lang];

    useEffect(() => {
        ScrollAnimation();
        const checkMobile = () => setIsMobile(window.innerWidth <= 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // ── MOBILE HERO VARIANT ────────────────────────────────────────────────
    //   V=1  Current      — gradient fades to transparent (white visible on some devices)
    //   V=2  Dark fade    — gradient fades to #0d1a0d (exact video bg colour, seamless)
    //   V=3  Solid green  — no fade, solid green text block, clean cut into video
    //   V=4  Design A — heading + buttons + 3 feature chips below
    //   V=5  Design B — heading + circular stamp badge overlapping video
    //   V=6  Design C — heading + 3-column icon feature grid + buttons
    const V = 2;

    // Shared video block — never changes
    const mobileVideo = (
        <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', background: '#0d1a0d' }}>
            <video autoPlay muted loop playsInline poster="/img/hero/banner-poster.jpg"
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', display: 'block' }}>
                <source src="/img/hero/banner-bg-new.mp4" type="video/mp4" />
            </video>
        </div>
    );

    // Shared buttons
    const mobileButtons = (
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/menu" className="sb-btn" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span className="sb-icon"><img src="/img/ui/icons/menu.svg" alt="menu" /></span>
                <span>{tx.menu}</span>
            </Link>
            <Link href="/about" className="sb-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '88px' }}>
                <span style={{ padding: '0 16px' }}>{tx.about}</span>
            </Link>
        </div>
    );

    // Shared tag + heading
    const mobileTag = (
        <div style={{ display: 'inline-block', background: 'rgba(254,182,0,0.15)', border: '1px solid rgba(254,182,0,0.5)', borderRadius: '30px', padding: '6px 20px', marginBottom: '24px' }}>
            <span style={{ color: '#FEB600', fontSize: '11px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{tx.tag}</span>
        </div>
    );
    const mobileHeading = (
        <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', lineHeight: '1.2', marginBottom: '32px', letterSpacing: '-0.5px' }}>
            {tx.heading1}<br />{tx.heading2}<span style={{ color: '#ffffff', background: 'none', padding: 0 }}>{tx.highlight}</span>
        </h1>
    );

    if (isMobile) {
        // ── V=1: Current — transparent fade, white may show on some devices ──
        if (V === 1) return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'linear-gradient(to bottom, #1a2e14 0%, #2d4a20 85%, transparent 100%)', padding: '90px 24px 48px', position: 'relative', marginBottom: '-32px', zIndex: 1 }}>
                        {mobileTag}{mobileHeading}{mobileButtons}
                    </div>
                    {mobileVideo}
                </div>
            </>
        );

        // ── V=2: Dark fade — gradient ends in video bg colour, no white gap ──
        if (V === 2) return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'linear-gradient(to bottom, #1a2e14 0%, #2d4a20 60%, #0d1a0d 100%)', padding: '90px 24px 48px', position: 'relative', marginBottom: '-40px', zIndex: 1 }}>
                        {mobileTag}{mobileHeading}{mobileButtons}
                    </div>
                    {mobileVideo}
                </div>
            </>
        );

        // ── V=3: Solid green — no fade, sharp cut from green text into video ─
        if (V === 3) return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: '#1a2e14', padding: '90px 24px 40px', position: 'relative', zIndex: 1 }}>
                        {mobileTag}{mobileHeading}{mobileButtons}
                    </div>
                    {mobileVideo}
                </div>
            </>
        );

        // ── V=4: Design 1 — tag + heading + buttons + 3 horizontal chips below ─
        if (V === 4) return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'linear-gradient(160deg, #1e3517 0%, #2d4a20 60%, #1a2e14 100%)', padding: '90px 24px 28px' }}>
                        {mobileTag}
                        <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', lineHeight: '1.2', marginBottom: '28px', letterSpacing: '-0.5px' }}>
                            {tx.heading1}<br />{tx.heading2}<span style={{ color: '#fff', background: 'none', padding: 0 }}>{tx.highlight}</span>
                        </h1>
                        {mobileButtons}
                        <div style={{ height: '28px' }} />
                    </div>
                    {/* Thin gold separator line */}
                    <div style={{ height: '3px', background: 'linear-gradient(to right, #FEB600, rgba(254,182,0,0.3))' }} />
                    {mobileVideo}
                </div>
            </>
        );

        // ── V=5: Design 2 — green block + both buttons + decorative icon divider ─
        if (V === 5) return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'linear-gradient(160deg, #1e3517 0%, #2d4a20 60%, #1a2e14 100%)', padding: '90px 24px 28px' }}>
                        {mobileTag}
                        <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', lineHeight: '1.2', marginBottom: '28px', letterSpacing: '-0.5px' }}>
                            {tx.heading1}<br />{tx.heading2}<span style={{ color: '#fff', background: 'none', padding: 0 }}>{tx.highlight}</span>
                        </h1>
                        {mobileButtons}
                    </div>
                    {/* Decorative divider strip — gold line with 3 spice icons centred */}
                    <div style={{ background: '#1a2e14', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '0' }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(254,182,0,0.4)' }} />
                        <div style={{ display: 'flex', gap: '20px', padding: '0 20px' }}>
                            <i className="fas fa-leaf" style={{ color: '#FEB600', fontSize: '14px', opacity: 0.9 }} />
                            <i className="fas fa-fire" style={{ color: '#FEB600', fontSize: '14px', opacity: 0.9 }} />
                            <i className="fas fa-map-marker-alt" style={{ color: '#FEB600', fontSize: '14px', opacity: 0.9 }} />
                        </div>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(254,182,0,0.4)' }} />
                    </div>
                    {mobileVideo}
                </div>
            </>
        );

        // ── V=6: Design 3 — heading + 2-col feature grid (items 3&4) + buttons ─
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'linear-gradient(160deg, #1e3517 0%, #2d4a20 60%, #1a2e14 100%)', padding: '90px 24px 28px' }}>
                        {mobileTag}
                        {/* Heading with one word in gold */}
                        <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', lineHeight: '1.2', marginBottom: '24px', letterSpacing: '-0.5px' }}>
                            {lang === 'pl'
                                ? <>Smaki Indii w <span style={{ color: '#FEB600' }}>autentycznej</span> odsłonie,<br />na wyciągnięcie ręki.</>
                                : <><span style={{ color: '#FEB600' }}>Authentic</span> Indian flavours,<br />right at your fingertips.</>
                            }
                        </h1>
                        {/* 2-column feature grid — items 3 & 4 only */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                            {FeaturesData.items.slice(3, 5).map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px' }}>
                                    <i className={item.icon} style={{ color: '#FEB600', fontSize: '20px', flexShrink: 0 }} />
                                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', fontWeight: '600', lineHeight: 1.3 }}>
                                        {lang === 'pl'
                                            ? item.title_pl.split(' ').slice(0, 3).join(' ')
                                            : item.title.split(' ').slice(0, 3).join(' ')}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {mobileButtons}
                        <div style={{ height: '28px' }} />
                    </div>
                    {mobileVideo}
                </div>
            </>
        );
    }

    return (
        <>
            {/* Desktop: full-screen video */}
            <section style={{
                position: 'relative',
                marginTop: '120px',
                minHeight: 'calc(100vh - 120px)',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: '#0d1a0d',
            }}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/img/hero/banner-poster.jpg"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        zIndex: 0,
                    }}
                >
                    <source src="/img/hero/banner-bg-new.mp4" type="video/mp4" />
                </video>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(5,12,5,0.45) 0%, rgba(5,12,5,0.2) 50%, rgba(5,12,5,0.05) 100%)',
                    zIndex: 1,
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 2, padding: '120px 15px' }}>
                    <div className="row">
                        <div className="col-lg-7 col-xl-6">
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(254,182,0,0.15)',
                                border: '1px solid rgba(254,182,0,0.5)',
                                borderRadius: '30px',
                                padding: '6px 20px',
                                marginBottom: '28px',
                            }}>
                                <span style={{
                                    color: '#FEB600',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                }}>{tx.tag}</span>
                            </div>

                            <h1 style={{
                                color: '#fff',
                                fontSize: '44px',
                                fontWeight: '700',
                                lineHeight: '1.2',
                                marginBottom: '40px',
                                letterSpacing: '-0.5px',
                            }}>
                                {tx.heading1}<br/>{tx.heading2}<span style={{ color: '#ffffff', background: 'none', padding: 0 }}>{tx.highlight}</span>
                            </h1>

                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                                <Link href="/menu" className="sb-btn" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <span className="sb-icon">
                                        <img src="/img/ui/icons/menu.svg" alt="menu" />
                                    </span>
                                    <span>{tx.menu}</span>
                                </Link>
                                <Link href="/about" className="sb-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '88px' }}>
                                    <span style={{ padding: '0 16px' }}>{tx.about}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero;
