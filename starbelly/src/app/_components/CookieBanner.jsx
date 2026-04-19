"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@common/LanguageContext";

const ui = {
    en: {
        title: "We use cookies",
        desc: "This site uses cookies for embedded maps (Google Maps). By clicking \"Accept all\" you consent to their use.",
        privacy: "Privacy Policy",
        reject: "Reject all",
        accept: "Accept all",
    },
    pl: {
        title: "Używamy plików cookie",
        desc: "Ta strona używa plików cookie do obsługi map Google. Klikając \u201EZaakceptuj wszystkie\u201D wyrażasz zgodę na ich użycie.",
        privacy: "Polityka prywatności",
        reject: "Odrzuć wszystkie",
        accept: "Zaakceptuj wszystkie",
    },
};

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);
    const { lang } = useLanguage();
    const tx = ui[lang];

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) setVisible(true);
    }, []);

    const acceptAll = () => {
        localStorage.setItem("cookie_consent", "accepted");
        window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'accepted' }));
        setVisible(false);
    };

    const rejectAll = () => {
        localStorage.setItem("cookie_consent", "rejected");
        window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'rejected' }));
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="kasturi-cookie-banner" style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: '#1a1a1a',
            borderTop: '3px solid #FEB600',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
        }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
                <p style={{ color: '#fff', fontSize: '14px', margin: '0 0 4px', fontWeight: '600' }}>
                    🍪 {tx.title}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    {tx.desc}{' '}
                    <Link href="/privacy" style={{ color: '#FEB600', textDecoration: 'underline' }}>
                        {tx.privacy}
                    </Link>
                </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexShrink: 0, flexWrap: 'wrap' }}>
                <button
                    onClick={rejectAll}
                    style={{
                        background: 'transparent',
                        color: 'rgba(255,255,255,0.7)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '50px',
                        padding: '10px 20px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s',
                        fontFamily: 'inherit',
                    }}
                    onMouseOver={e => e.currentTarget.style.borderColor = '#fff'}
                    onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                >
                    {tx.reject}
                </button>
                <button
                    onClick={acceptAll}
                    style={{
                        background: '#FEB600',
                        color: '#000',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '10px 24px',
                        fontSize: '13px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                    }}
                >
                    {tx.accept}
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
