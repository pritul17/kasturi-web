"use client";

import React, { useEffect, useState } from "react";
import AppData from "@data/app.json";
import MenuData from "@data/menu.json";
import PageBanner from "@components/PageBanner";
import MenuFiltered from "@components/menu/MenuFiltered";

const Menu1 = () => {
  const [initialFilter, setInitialFilter] = useState(null);  // ← Start with null
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
      <PageBanner pageTitle={"Kasturi menu."} breadTitle={"Menu"} type={1} />
      
      {/* menu section with filters */}
      <section id="menu-section" className="sb-menu-section sb-p-90-90">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-group-title sb-mb-60">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-cate-title sb-mb-30">Explore Our Authentic Menu</h2>
              <p className="sb-text">Browse our dishes or use the filters below to find exactly what you're craving.</p>
            </div>
            <div className="sb-right sb-mb-30">
              {/* Order on Wolt button */}
              <a 
                href="https://wolt.com/en/pol/wroclaw/restaurant/kasturi-kuchnia-indyjska" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sb-btn"
              >
                <span className="sb-icon">
                  <img src="/img/ui/icons/cart.svg" alt="icon" />
                </span>
                <span>Order on Wolt</span>
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