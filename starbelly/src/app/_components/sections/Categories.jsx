"use client";

import Data from "@data/sections/categories.json";
import Link from "next/link";
import { useLanguage, pick } from "@common/LanguageContext";

const CategoriesSection = ({ heading = 1, paddingTop = 0, type = 1, columns }) => {
  const { lang } = useLanguage();

  var columnsClass = '';
  switch (columns) {
    case 4: columnsClass = 'col-lg-3'; break;
    case 3: columnsClass = 'col-lg-4'; break;
    default: columnsClass = 'col-lg-6';
  }

  return (
    <>
        {/* categories */}
        <section className={`sb-p-${paddingTop}-60`}>
            <div className="container">
                {heading == 1 &&
                <div className="sb-group-title sb-mb-30">
                    <div className="sb-left sb-mb-30">
                        <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html: pick(Data, 'title', lang)}} />
                        <p className="sb-text" dangerouslySetInnerHTML={{__html: pick(Data, 'description', lang)}} />
                    </div>

                    <div className="sb-right sb-mb-30">
                    <Link href={Data.button.link} className="sb-btn sb-m-0">
                        <span className="sb-icon">
                            <img src="/img/ui/icons/arrow.svg" alt="icon" />
                        </span>
                        <span>{pick(Data.button, 'label', lang)}</span>
                    </Link>
                    </div>
                </div>
                }
                <div className="row" style={{ alignItems: 'stretch' }}>
                    {Data.items.map((item, key) => (
                    <div className={columnsClass} key={`categories-item-${key}`} style={{ display: 'flex', flexDirection: 'column' }}>
                        <a href={item.link} className={type == 1 ? "sb-categorie-card sb-categorie-card-2 sb-mb-30" : "sb-categorie-card sb-mb-30"} style={{ flex: 1 }}>
                            <div className="sb-card-body">
                            <div className="sb-category-icon">
                                <img src={item.image} alt={pick(item, 'title', lang)} />
                            </div>
                            <div className="sb-card-descr">
                                <h3 className="sb-mb-10">{pick(item, 'title', lang)}</h3>
                                <p className="sb-text">{pick(item, 'text', lang)}</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* categories end */}
    </>
  );
};

export default CategoriesSection;
