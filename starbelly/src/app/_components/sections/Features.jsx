"use client";

import Data from "@data/sections/features.json";
import { useLanguage, pick } from "@common/LanguageContext";

const FeaturesOneSection = () => {
  const { lang } = useLanguage();

  return (
    <>
        {/* features */}
        <section className="sb-features sb-p-0-60">
            <div className="container">
                <div className="row">
                    {Data.items.map((item, key) => (
                    <div className="col-lg-4 col-md-6" key={`features-item-${key}`}>
                        <div style={{ borderTop: '2px solid #FEB600', paddingTop: '14px', marginBottom: '40px' }}>
                            <i className={item.icon} style={{ color: '#FEB600', fontSize: '24px', marginBottom: '12px', display: 'block' }} />
                            <h3 style={{ marginBottom: '8px' }}>{pick(item, 'title', lang)}</h3>
                            <p className="sb-text" dangerouslySetInnerHTML={{__html: pick(item, 'text', lang)}} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* features end */}
    </>
  );
};

export default FeaturesOneSection;
