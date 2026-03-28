"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        ScrollAnimation();
        
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
            {/* banner */}
            <section style={{
                position: 'relative',
                minHeight: isMobile ? '100svh' : '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
                {/* Background photo */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/img/hero/banner-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }} />
                {/* Overlay: dark on left fading to slightly lighter on right */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(10,8,20,0.88) 0%, rgba(10,8,20,0.70) 55%, rgba(10,8,20,0.45) 100%)',
                    zIndex: 1,
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 2, padding: '120px 15px' }}>
                    <div className="row">
                        <div className="col-lg-7 col-xl-6">
                            {/* Subtitle tag */}
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
                                }}>Authentic Indian Restaurant · Wrocław</span>
                            </div>

                            {/* Main heading */}
                            <h1 style={{
                                color: '#fff',
                                fontSize: isMobile ? '42px' : '62px',
                                fontWeight: '700',
                                lineHeight: '1.1',
                                marginBottom: '24px',
                                letterSpacing: '-1px',
                            }}>
                                {isMobile ? (
                                    <>Authentic<br/>Indian Cuisine<br/>in <span style={{ color: '#FEB600', background: 'none', padding: 0 }}>Wrocław</span></>
                                ) : (
                                    <>Authentic Indian<br/>Cuisine in <span style={{ color: '#FEB600', background: 'none', padding: 0 }}>Wrocław</span></>
                                )}
                            </h1>

                            {/* Description */}
                            <p style={{
                                color: 'rgba(255,255,255,0.80)',
                                fontSize: '18px',
                                lineHeight: '1.7',
                                marginBottom: '40px',
                                maxWidth: '480px',
                            }}>
                                Where heritage <span style={{ opacity: 0.6 }}>(विरासत)</span> meets flavor.<br/>
                                Experience the rich aromas of tradition in every dish.
                            </p>

                            {/* Buttons */}
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Link href="/menu" className="sb-btn">
                                    <span className="sb-icon">
                                        <img src="/img/ui/icons/menu.svg" alt="menu" />
                                    </span>
                                    <span>Our menu</span>
                                </Link>
                                <Link href="/about" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 28px',
                                    border: '2px solid rgba(255,255,255,0.5)',
                                    borderRadius: '50px',
                                    color: '#fff',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    transition: 'border-color 0.3s, background 0.3s',
                                }}
                                onMouseOver={e => { e.currentTarget.style.borderColor = '#FEB600'; e.currentTarget.style.color = '#FEB600'; }}
                                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; }}
                                >
                                    <span>About us</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default Hero;