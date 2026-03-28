"use client";

import React from "react";
import AppData from "@data/app.json";
import Link from "next/link";
import ContactInfoSection from "@components/sections/ContactInfo";
import ContactMapSection from "@components/sections/ContactMap";

const Reservation = () => {
  return (
    <>
      {/* banner */}
      <section className="sb-banner sb-banner-color">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* main title */}
              <div className="sb-main-title-frame">
                <div className="sb-main-title">
                  <span className="sb-suptitle sb-mb-30">Table Inquiry</span>
                  <h1 className="sb-mb-30">Reserve Your <br/>Authentic Indian <br/>Experience</h1>
                  <p className="sb-text sb-text-lg sb-mb-30">
                    To make a reservation, please call us directly.<br/>
                    Our team will be happy to assist you!
                  </p>
                  <ul className="sb-breadcrumbs">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/reservation">Table Inquiry</Link></li>
                  </ul>
                </div>
              </div>
              {/* main title end */}
            </div>
            <div className="col-lg-5">
              <div className="sb-contact-form-frame">
                <div className="sb-illustration-9">
                  <img src="/img/illustrations/reservation.png" alt="reservation" className="sb-envelope-1" />
                  <div className="sb-cirkle-1"></div>
                  <div className="sb-cirkle-2"></div>
                  <div className="sb-cirkle-3"></div>
                </div>
                <div className="sb-form-content">
                  <div className="sb-main-content">
                    <h3 className="sb-mb-30">Call Us to Reserve</h3>
                    
                    {/* Call-to-action card */}
                    <div style={{
                      background: 'linear-gradient(135deg, #3F4F2A 0%, #2a3319 100%)',
                      padding: '40px 30px',
                      borderRadius: '16px',
                      textAlign: 'center',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      marginBottom: '30px'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        margin: '0 auto 20px',
                        background: 'rgba(254, 182, 0, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg 
                          width="30" 
                          height="30" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="#FEB600" 
                          strokeWidth="2.5"
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <p style={{
                        color: '#fff',
                        fontSize: '16px',
                        marginBottom: '25px',
                        opacity: 0.9
                      }}>
                        For table reservations, please contact us:
                      </p>
                      <a 
                        href="tel:+48123456789" 
                        style={{
                          display: 'inline-block',
                          color: '#FEB600',
                          fontSize: '28px',
                          fontWeight: '700',
                          textDecoration: 'none',
                          padding: '15px 30px',
                          background: 'rgba(254, 182, 0, 0.1)',
                          borderRadius: '12px',
                          transition: 'all 0.3s ease',
                          border: '2px solid #FEB600'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = '#FEB600';
                          e.currentTarget.style.color = '#3F4F2A';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(254, 182, 0, 0.1)';
                          e.currentTarget.style.color = '#FEB600';
                        }}
                      >
                        +48 123 456 789
                      </a>
                      <p style={{
                        color: '#fff',
                        fontSize: '14px',
                        marginTop: '25px',
                        marginBottom: '0',
                        opacity: 0.8
                      }}>
                        <strong>Opening Hours</strong><br/>
                        Tuesday - Sunday: 12:00 - 21:00
                      </p>
                    </div>

                    {/* Additional info */}
                    <div style={{
                      background: '#f8f9fa',
                      padding: '20px',
                      borderRadius: '12px',
                      borderLeft: '4px solid #FEB600'
                    }}>
                      <p style={{
                        color: '#666',
                        fontSize: '14px',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        💡 <strong>Tip:</strong> We recommend booking in advance, especially for weekends and special occasions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
      <ContactInfoSection />
      <ContactMapSection />
    </>
  );
};

export default Reservation;