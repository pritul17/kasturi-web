"use client";
import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Data from '@data/sliders/testimonial';
import Link from "next/link";
import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";
import { useLanguage, pick } from "@common/LanguageContext";
import { useReviews } from "@library/useReviews";

const TestimonialSlider = () => {
  const { lang } = useLanguage();
  const { reviews } = useReviews();
  const swiperRef = useRef(null);

  useEffect(() => {
    ScrollAnimation();
  }, []);

  const stars = [ '', '', '', '', '' ];

  return (
    <>
      {/* reviews */}
      <section className="sb-reviews sb-p-0-30">
        <div className="container">
          {/* Desktop: title left, button+arrows right */}
          <div className="sb-products-header-desktop" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '30px', gap: '20px' }}>
            <div>
              <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html: pick(Data, 'title', lang)}} />
              <p className="sb-text" dangerouslySetInnerHTML={{__html: pick(Data, 'description', lang)}} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px', flexShrink: 0 }}>
              <a href={Data.button.link} target="_blank" rel="noopener noreferrer" className="sb-btn">
                <span className="sb-icon"><img src={Data.button.icon} alt="icon" /></span>
                <span>{pick(Data.button, 'label', lang)}</span>
              </a>
              <div className="sb-slider-nav">
                <div className="sb-prev-btn sb-reviews-prev"><i className="fas fa-arrow-left"></i></div>
                <div className="sb-next-btn sb-reviews-next"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>

          {/* Mobile: stacked layout */}
          <div className="sb-products-header-mobile" style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{__html: pick(Data, 'title', lang)}} />
            <p className="sb-text" style={{ marginBottom: '12px' }} dangerouslySetInnerHTML={{__html: pick(Data, 'description', lang)}} />
            <a href={Data.button.link} target="_blank" rel="noopener noreferrer" className="sb-btn" style={{ display: 'flex', width: '100%', justifyContent: 'center', marginRight: 0, marginBottom: '8px', boxSizing: 'border-box' }}>
              <span className="sb-icon"><img src={Data.button.icon} alt="icon" /></span>
              <span>{pick(Data.button, 'label', lang)}</span>
            </a>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div onClick={() => swiperRef.current?.slidePrev()} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #FEB600', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px', color: '#3F4F2A' }}>
                <i className="fas fa-arrow-left"></i>
              </div>
              <div onClick={() => swiperRef.current?.slideNext()} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #FEB600', background: '#FEB600', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px', color: '#1a1a1a' }}>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <Swiper
            {...SliderProps.reviewsSlider}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            className="swiper-container sb-reviews-slider"
          >
            {reviews.map((item, key) => (
            <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>
              <div className="sb-review-card">
                <div className="sb-review-header sb-mb-15">
                  <h4 className="sb-mb-15">{item.title}</h4>
                  <ul className="sb-stars">
                    {stars.slice(0, item.rating).map((star_item, star_key) => (
                    <li key={`testimonial-item-${key}-rating-star-${star_key}`}><i className="fas fa-star"></i></li>
                    ))}
                  </ul>
                </div>
                <p className="sb-text sb-mb-15">{item.text}</p>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* reviews end */}
    </>
  );
};

export default TestimonialSlider;
