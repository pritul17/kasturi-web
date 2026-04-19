"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import Data from '@data/sliders/products';
import Link from "next/link";

import MenuItem from "@components/menu/MenuItem";
import ProductItem from "@components/products/ProductItem";
import { useLanguage, pick } from "@common/LanguageContext";

const ProductsSlider = ( {items, title, description, button = {}, slidesPerView, paddingTop = 0, bgType, itemType} ) => {
  var moreType = '';
  const { lang } = useLanguage();
  const swiperRef = useRef(null);

  if ( slidesPerView == 3 ) {
    moreType = 2;
  }

  return (
    <>
    {/* short menu */}
    <section className={`sb-short-menu sb-p-${paddingTop}-90`}>
        {bgType == 2 ? (
        <div className="sb-bg-1" style={{"marginTop": "-120px"}}>
            <div></div>
        </div>
        ) : (
        <div className="sb-bg-2">
            <div></div>
        </div>
        )}
        <div className="container">
            {/* Desktop: title left, buttons+arrows right */}
            <div className="sb-products-header-desktop" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '30px', gap: '20px' }}>
                <div>
                    <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html : title ? title : pick(Data, 'title', lang)}} />
                    <p className="sb-text" dangerouslySetInnerHTML={{__html : description ? description : pick(Data, 'description', lang)}} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
                    {/* Buttons stacked vertically — same as Testimonial */}
                    {button != 0 &&
                    <Link href={button.link ? button.link : Data.button.link} className="sb-btn" style={{ marginRight: 0, marginBottom: 0 }}>
                        <span className="sb-icon"><img src={button.icon ? button.icon : Data.button.icon} alt="icon" /></span>
                        <span>{button.label ? button.label : pick(Data.button, 'label', lang)}</span>
                    </Link>
                    }
                    {Data.button2 &&
                    <a href={Data.button2.link} target="_blank" rel="noopener noreferrer" className="sb-btn" style={{ marginRight: 0, marginBottom: 0 }}>
                        <span className="sb-icon"><img src={Data.button2.icon} alt="icon" /></span>
                        <span>{pick(Data.button2, 'label', lang)}</span>
                    </a>
                    }
                    {Data.button3 &&
                    <a href={Data.button3.link} target="_blank" rel="noopener noreferrer" className="sb-btn" style={{ marginRight: 0, marginBottom: 0 }}>
                        <span className="sb-icon"><img src={Data.button3.icon} alt="icon" /></span>
                        <span>{pick(Data.button3, 'label', lang)}</span>
                    </a>
                    }
                    {/* Arrows below buttons */}
                    <div className="sb-slider-nav" style={{ marginRight: 0 }}>
                        <div className="sb-prev-btn sb-short-menu-prev"><i className="fas fa-arrow-left"></i></div>
                        <div className="sb-next-btn sb-short-menu-next"><i className="fas fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>

            {/* Mobile: stacked layout */}
            <div className="sb-products-header-mobile" style={{ marginBottom: '24px' }}>
                {/* Line 1: title + description */}
                <h2 style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{__html : title ? title : pick(Data, 'title', lang)}} />
                <p className="sb-text" style={{ marginBottom: '12px' }} dangerouslySetInnerHTML={{__html : description ? description : pick(Data, 'description', lang)}} />
                {/* Line 2: View Full Menu */}
                {button != 0 &&
                <Link href={button.link ? button.link : Data.button.link} className="sb-btn" style={{ display: 'flex', width: '100%', justifyContent: 'center', marginRight: 0, marginBottom: '8px', boxSizing: 'border-box' }}>
                    <span className="sb-icon"><img src={button.icon ? button.icon : Data.button.icon} alt="icon" /></span>
                    <span>{button.label ? button.label : pick(Data.button, 'label', lang)}</span>
                </Link>
                }
                {/* Line 3: Wolt + Uber Eats — same start/end as View Full Menu */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    {Data.button2 &&
                    <a href={Data.button2.link} target="_blank" rel="noopener noreferrer" className="sb-btn" style={{ flex: 1, minWidth: 0, justifyContent: 'center', fontSize: '13px', marginRight: 0, marginBottom: 0, boxSizing: 'border-box' }}>
                        <span className="sb-icon"><img src={Data.button2.icon} alt="icon" /></span>
                        <span>Wolt</span>
                    </a>
                    }
                    {Data.button3 &&
                    <a href={Data.button3.link} target="_blank" rel="noopener noreferrer" className="sb-btn" style={{ flex: 1, minWidth: 0, justifyContent: 'center', fontSize: '13px', marginRight: 0, marginBottom: 0, boxSizing: 'border-box' }}>
                        <span className="sb-icon"><img src={Data.button3.icon} alt="icon" /></span>
                        <span>Uber Eats</span>
                    </a>
                    }
                </div>
                {/* Line 4: arrows */}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div onClick={() => swiperRef.current?.slidePrev()} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #FEB600', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px', color: '#3F4F2A' }}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div onClick={() => swiperRef.current?.slideNext()} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #FEB600', background: '#FEB600', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px', color: '#1a1a1a' }}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>

            {slidesPerView == 4 ? (
            <Swiper
                {...SliderProps.shortMenuSlider4}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                className={`swiper-container sb-short-menu-slider-4i`}
            >
                {items.slice(0, 8).map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`products-slider-item-${key}`}>
                    {itemType == "product" ? (
                    <ProductItem item={item} index={key} marginBottom={0} moreType={moreType} />
                    ) : (
                    <MenuItem item={item} index={key} marginBottom={0} />
                    )}
                </SwiperSlide>
                ))}
            </Swiper>

            ) : (

            <Swiper
                {...SliderProps.shortMenuSlider3}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                className={`swiper-container sb-short-menu-slider-3i`}
            >
                {items.slice(0, 6).map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`products-slider-item-${key}`}>
                    {itemType == "product" ? (
                    <ProductItem item={item} index={key} marginBottom={0} moreType={moreType} />
                    ) : (
                    <MenuItem item={item} index={key} marginBottom={0} />
                    )}
                </SwiperSlide>
                ))}
            </Swiper>

            )}
        </div>
    </section>
    {/* short menu end */}
    </>
  );
};
export default ProductsSlider;
