"use client";

import React from "react";
import AppData from "@data/app.json";
import ContactInfoSection from "@components/sections/ContactInfo";
import ContactMapSection from "@components/sections/ContactMap";

const Contact = () => {
  return (
    <>
      {/* Spacer so content clears the fixed navbar */}
      <div style={{ height: '100px' }} />

      {/* Info row: location, hours, contact */}
      <ContactInfoSection />

      {/* Reach us section */}
      <section className="sb-p-90-0">
        <div className="container">
          <div className="sb-group-title sb-mb-60">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-mb-15">Reach Us Directly</h2>
              <p className="sb-text">Call us for reservations or connect on social media.</p>
            </div>
          </div>

          <div className="row sb-mb-60">
            {/* Phone CTA */}
            <div className="col-lg-4 sb-mb-30">
              <a href="tel:+48721770999" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '28px 30px',
                background: '#3F4F2A',
                borderRadius: '16px',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '52px', height: '52px', flexShrink: 0,
                  background: 'rgba(254,182,0,0.2)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className="fas fa-phone" style={{ color: '#FEB600', fontSize: '20px' }} />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Call us</p>
                  <p style={{ color: '#fff', fontSize: '20px', fontWeight: '700', margin: 0 }}>+48 721 770 999</p>
                </div>
              </a>
            </div>

            {/* Social links */}
            {AppData.social.map((item, key) => (
              <div className="col-lg-2 col-6 sb-mb-30" key={key}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '28px 16px',
                  background: '#f8f7f4',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  border: '2px solid transparent',
                  transition: 'border-color 0.2s, transform 0.2s',
                  height: '100%',
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = '#FEB600'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <i className={item.icon} style={{ color: '#3F4F2A', fontSize: '26px' }} />
                  <span style={{ color: '#3F4F2A', fontSize: '13px', fontWeight: '600', textAlign: 'center' }}>{item.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <ContactMapSection />
    </>
  );
};

export default Contact;
