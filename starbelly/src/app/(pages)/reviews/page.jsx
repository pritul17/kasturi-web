"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useReviews } from "@library/useReviews";
import { useLanguage } from "@common/LanguageContext";

const ReviewsMasonry = dynamic( () => import("@components/reviews/ReviewsMasonry"), { ssr: false } );

const Reviews1 = () => {
  const { reviews, loading } = useReviews();
  const { lang } = useLanguage();

  return (
    <>
      <div className="sb-nav-spacer" />

      {/* reviews */}
      <section className="sb-reviews sb-p-90-90">
        <div className="sb-bg-2" style={{"marginTop": "190px"}}>
          <div></div>
        </div>
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-mb-15">{lang === 'pl' ? 'Zobacz co o nas mówią' : 'See What Our Guests Say'}</h2>
            <p className="sb-text">{lang === 'pl' ? 'Prawdziwe opinie naszych gości z Google.' : 'Real reviews from our guests on Google.'}</p>
          </div>
          {!loading && <ReviewsMasonry items={reviews} />}
        </div>
      </section>
      {/* reviews end */}
    </>
  );
};
export default Reviews1;
