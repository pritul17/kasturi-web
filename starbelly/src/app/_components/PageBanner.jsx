"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";
import { useLanguage } from "@common/LanguageContext";

const PageBanner = ({ pageTitle, pageTitle_pl, breadTitle, breadTitle_pl, description, type }) => {
  const asPath = usePathname();
  const { lang } = useLanguage();

  const displayTitle = (lang === 'pl' && pageTitle_pl) ? pageTitle_pl : pageTitle;
  const displayBread = (lang === 'pl' && breadTitle_pl) ? breadTitle_pl : (breadTitle ?? pageTitle?.replace(/<[^>]+>/g, ''));
  const homeLabel = lang === 'pl' ? 'Strona główna' : 'Home';

  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
      {/* banner */}
      <section className={type == 2 ? "sb-banner sb-banner-sm sb-banner-color" : "sb-banner sb-banner-xs sb-banner-color"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sb-main-title-frame">
                <div className={type == 2 ? "sb-main-title text-center" : "sb-main-title"}>
                  {type == 2 &&
                    <span className="sb-suptitle sb-mb-30" dangerouslySetInnerHTML={{__html: displayBread}} />
                  }
                  <h1 className={type == 2 ? "sb-h1 sb-mb-30" : "sb-h2"} dangerouslySetInnerHTML={{__html: displayTitle}} />
                  {type == 2 &&
                    <p className="sb-text sb-text-lg sb-mb-30" dangerouslySetInnerHTML={{__html: description}} />
                  }
                  <ul className="sb-breadcrumbs">
                    <li><Link href="/">{homeLabel}</Link></li>
                    <li><a dangerouslySetInnerHTML={{__html: displayBread}} /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
