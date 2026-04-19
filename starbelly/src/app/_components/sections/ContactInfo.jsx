"use client";

import Data from "@data/sections/contact-info.json";
import { useLanguage, pick } from "@common/LanguageContext";

const ContactInfoSection = () => {
  const { lang } = useLanguage();

  return (
    <>
        {/* contact info */}
        <section className="sb-p-30-30">
            <div className="container">
                <div className="row">
                    {Data.items.map((item, key) => (
                    <div className="col-lg-4" key={`contact-info-item-${key}`}>
                        <div style={{ borderTop: '2px solid #FEB600', paddingTop: '14px', marginBottom: '60px' }}>
                            <i className={item.icon} style={{ color: '#FEB600', fontSize: '24px', marginBottom: '12px', display: 'block' }} />
                            <h3 style={{ marginBottom: '8px' }}>{pick(item, 'title', lang)}</h3>
                            <p className="sb-text">{pick(item, 'text', lang)}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* contact info end */}
    </>
  );
};

export default ContactInfoSection;
