"use client";

import Data from "@data/sections/about-2.json";
import { useLanguage, pick } from "@common/LanguageContext";

const AboutTwoSection = () => {
    const { lang } = useLanguage();

    return (
        <>
            {/* About text */}
            <section className="sb-about-text sb-p-90-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-start">
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
                        <div className="col-lg-6 align-self-start sb-mb-60">
                            <h2 className="sb-mb-60" dangerouslySetInnerHTML={{__html: pick(Data, 'title', lang)}} />
                            <div className="sb-text sb-mb-30" dangerouslySetInnerHTML={{__html: pick(Data, 'description', lang)}} />
                        </div>
                    </div>
                </div>
            </section>
            {/* About text end */}
        </>
    );
};

export default AboutTwoSection;
