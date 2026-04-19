"use client";

import { useState, useEffect } from "react";

const ContactMapSection = () => {
  const [consent, setConsent] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapLock, setMapLock] = useState(false);

  const googleMapsLink = "https://www.google.com/maps/place/KASTURI+kuchnia+indyjska/@51.1015772,17.0469246,17z/data=!3m1!4b1!4m6!3m5!1s0x470fc3032f60f75b:0x256ddd8eccaa3e64!8m2!3d51.1015772!4d17.0469246!16s%2Fg%2F11x7jszq5m?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";

  useEffect(() => {
    // Read existing consent
    const stored = localStorage.getItem("cookie_consent");
    setConsent(stored || "pending");

    // React immediately when cookie banner is accepted/rejected on this page
    const onConsentChange = (e) => setConsent(e.detail);
    window.addEventListener('cookie-consent-changed', onConsentChange);
    return () => window.removeEventListener('cookie-consent-changed', onConsentChange);
  }, []);

  if (consent === null) return null;

  return (
    <>
      {/* map */}
      <div className="sb-map-frame" style={{ position: 'relative', minHeight: '500px' }}>

        {consent !== "accepted" ? (
          /* No consent yet — show address only */
          <div style={{
            position: 'absolute',
            inset: 0,
            background: '#f0ece4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '40px 24px',
            textAlign: 'center',
          }}>
            <div style={{
              width: '64px', height: '64px',
              background: '#3F4F2A', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#FEB600', fontSize: '26px' }} />
            </div>
            <div>
              <p style={{ fontWeight: '700', fontSize: '18px', color: '#3F4F2A', margin: '0 0 6px' }}>Kasturi Restaurant</p>
              <p style={{ color: '#666', fontSize: '14px', margin: '0 0 10px' }}>Komuny Paryskiej 45/2U, Wrocław</p>
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer"
                style={{ color: '#3F4F2A', fontSize: '14px', textDecoration: 'underline', fontWeight: '600' }}>
                Open in Google Maps ↗
              </a>
            </div>
            <p style={{ color: '#999', fontSize: '12px', maxWidth: '320px', margin: 0, lineHeight: '1.6' }}>
              Accept cookies to load the interactive map.
            </p>
          </div>
        ) : (
          <>
            {/* Fade-in placeholder until iframe loads */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 8,
              background: '#e8e4dc',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'opacity 0.5s ease',
              opacity: mapLoaded ? 0 : 1,
              pointerEvents: mapLoaded ? 'none' : 'auto',
            }}>
              <div style={{
                width: '56px', height: '56px', background: '#3F4F2A',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className="fas fa-map-marker-alt" style={{ color: '#FEB600', fontSize: '22px' }} />
              </div>
              <p style={{ color: '#3F4F2A', fontWeight: '600', fontSize: '15px', margin: 0 }}>Kasturi Restaurant</p>
              <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>Komuny Paryskiej 45/2U, Wrocław</p>
            </div>

            {/* Clickable overlay when not locked */}
            {!mapLock && (
              <div
                onClick={() => window.open(googleMapsLink, '_blank')}
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '100%', height: '100%',
                  zIndex: 10, cursor: 'pointer', background: 'transparent',
                }}
                title="Click to open in Google Maps"
              />
            )}

            <iframe
              className={`sb-map ${mapLock ? "sb-active" : ""}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.373038779791!2d17.044349677091393!3d51.101577171723825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3032f60f75b%3A0x256ddd8eccaa3e64!2sKASTURI%20kuchnia%20indyjska!5e0!3m2!1sen!2sin!4v1775373008214!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{
                border: 0, minHeight: '500px',
                pointerEvents: mapLock ? 'auto' : 'none',
                filter: 'grayscale(20%)',
              }}
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kasturi Restaurant Location"
              onLoad={() => setMapLoaded(true)}
            />

            <div
              className={`sb-lock ${mapLock ? "sb-active" : ""}`}
              onClick={() => setMapLock(!mapLock)}
              style={{ zIndex: 20 }}
            >
              <i className={`fas ${mapLock ? "fa-unlock" : "fa-lock"}`} />
            </div>
          </>
        )}
      </div>
      {/* map end */}

    </>
  );
};

export default ContactMapSection;
