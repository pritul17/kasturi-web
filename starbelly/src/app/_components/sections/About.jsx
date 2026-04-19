"use client";

import Data from "@data/sections/about.json";
import { useLanguage, pick } from "@common/LanguageContext";

const AboutSection = () => {
    const { lang } = useLanguage();

    return (
        <>
            {/* features */}
            <section className="sb-p-60-0">
                <div className="container">
                <div className="row flex-md-row-reverse">
                    <div className="col-lg-6 align-self-start sb-mb-30">
                    <h2 className="sb-mb-60" dangerouslySetInnerHTML={{__html: pick(Data, 'title', lang)}} />

                    <div>
                        {Data.items.map((item, key) => (
                        <div key={`about-list-item-${key}`} style={{ borderTop: '2px solid #FEB600', paddingTop: '14px', marginBottom: '36px' }}>
                            <i className={item.icon} style={{ color: '#FEB600', fontSize: '24px', marginBottom: '12px', display: 'block' }} />
                            <h3 style={{ marginBottom: '8px' }}>{pick(item, 'title', lang)}</h3>
                            <p className="sb-text">{pick(item, 'text', lang)}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                    <div className="col-lg-6 align-self-start sb-mb-30">
                        <div className="sb-illustration-2 sb-mb-90">
                            <div className="sb-interior-frame">
                                <img src={Data.image.url} alt={Data.image.alt} className="sb-interior" style={{ objectPosition: 'top center' }} />
                            </div>
                            <div className="sb-cirkle-1"></div>
                            <div className="sb-cirkle-2"></div>
                            <div className="sb-cirkle-3"></div>
                            <div className="sb-cirkle-4"></div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* features end */}
        </>
    );
};

export default AboutSection;
