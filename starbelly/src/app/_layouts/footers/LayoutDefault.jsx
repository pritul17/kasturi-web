"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { useLanguage, pick } from "@common/LanguageContext";

const DefaultFooter = () => {
  const { lang } = useLanguage();

  return (
    <>
      <footer>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px 0 24px',
            gap: '20px',
          }}>
            {/* Logo centered */}
            <Link href="/" style={{ flexShrink: 0, transition: 'opacity 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <img src="/img/ui/deer-head.png" alt="Kasturi"
                style={{ width: '64px', height: '64px', objectFit: 'contain', display: 'block' }} />
            </Link>

            {/* Social icons centered with generous spacing */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px' }}>
              {AppData.social.map((item, key) => (
                <a key={key} href={item.link} target="_blank" rel="noopener noreferrer" title={item.title}
                  style={{ fontSize: '22px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FEB600'}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.08)' }} />

            {/* Copyright + Privacy centered */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '13px' }}>{pick(AppData.footer, 'copy', lang)}</span>
              <a href="/privacy" style={{ color: 'inherit', opacity: 0.6, textDecoration: 'underline', fontSize: '12px' }}>
                {pick(AppData.footer, 'privacy', lang)}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default DefaultFooter;
