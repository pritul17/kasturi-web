"use client";

import React, { useEffect, useState } from "react";
import AppData from "@data/app.json";
import MenuData from "@data/menu.json";
import MenuFiltered from "@components/menu/MenuFiltered";
import { useLanguage } from "@common/LanguageContext";

const Menu1 = () => {
  const [initialFilter, setInitialFilter] = useState(null);
  const { lang } = useLanguage();
  const [isReady, setIsReady] = useState(false);  // ← Add ready state

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window === 'undefined') return;
    
    // Check for URL hash on initial load
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      setInitialFilter(hash);
    } else {
      setInitialFilter('*');  // ← Set default if no hash
    }
    
    setIsReady(true);  // ← Mark as ready
  }, []);

  return (
    <>
      <div className="sb-nav-spacer" />

      {/* menu section with filters */}
      <section id="menu-section" className="sb-menu-section sb-p-90-60">
        <div className="container">
          <div className="sb-mb-60">
            {/* Row 1: title + description */}
            <div className="sb-mb-30">
              <h2 className="sb-cate-title sb-mb-15">{lang === 'pl' ? 'Odkryj Nasze Autentyczne Menu' : 'Explore Our Authentic Menu'}</h2>
              <p className="sb-text">{lang === 'pl' ? 'Przeglądaj nasze dania lub użyj filtrów poniżej.' : 'Browse our dishes or use the filters below to find exactly what you\'re craving.'}</p>
            </div>
            {/* Row 2: buttons in a row */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="/menu.pdf" target="_blank" rel="noopener noreferrer"
                className="sb-btn" style={{ background: '#5a7040', borderColor: '#5a7040' }}>
                <span className="sb-icon"><img src="/img/ui/icons/arrow.svg" alt="icon" /></span>
                <span>{lang === 'pl' ? 'Pobierz Menu (PDF)' : 'Download Menu (PDF)'}</span>
              </a>
              <a href="https://wolt.com/en/pol/wroclaw/restaurant/kasturi-kuchnia-indyjska"
                target="_blank" rel="noopener noreferrer" className="sb-btn">
                <span className="sb-icon"><img src="/img/ui/icons/cart.svg" alt="icon" /></span>
                <span>{lang === 'pl' ? 'Zamów na Wolt' : 'Order on Wolt'}</span>
              </a>
              <a href="https://www.ubereats.com/pl-en/store/kasturi-kuchnia-indyjska/clKqgEl4QdCODYeeoxzI9w"
                target="_blank" rel="noopener noreferrer" className="sb-btn">
                <span className="sb-icon"><img src="/img/ui/icons/cart.svg" alt="icon" /></span>
                <span>{lang === 'pl' ? 'Zamów na Uber Eats' : 'Order on Uber Eats'}</span>
              </a>
            </div>
          </div>

          {/* Only render when ready */}
          {isReady && (
            <MenuFiltered 
              categories={MenuData.categories} 
              columns={3} 
              initialFilter={initialFilter}
            />
          )}
        </div>
      </section>
      {/* menu section end */}
    </>
  );
};

export default Menu1;