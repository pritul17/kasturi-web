"use client";

import { useState } from "react";

const ContactMapSection = () => {
  const [mapLock, setMapLock] = useState(false);
  
  // Google Maps link for when user clicks
  const googleMapsLink = "https://maps.app.goo.gl/PcshpJH8BD6sy6fS8";

  return (
    <>
        {/* map */}
        <div className="sb-map-frame" style={{ position: 'relative' }}>
            {/* Clickable overlay */}
            {!mapLock && (
              <div 
                onClick={() => window.open(googleMapsLink, '_blank')}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 10,
                  cursor: 'pointer',
                  background: 'transparent'
                }}
                title="Click to open in Google Maps"
              />
            )}
            
            {/* Custom Logo Marker Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -100%)',
                zIndex: 5,
                pointerEvents: 'none'
              }}
            >
              <div
                onClick={() => window.open(googleMapsLink, '_blank')}
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundImage: 'url(/img/ui/logo.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  transition: 'transform 0.2s ease',
                  animation: 'bounce 2s infinite'
                }}
                title="Kasturi Restaurant - Click to open in Google Maps"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Restaurant Name Label */}
              <div
                style={{
                  position: 'absolute',
                  top: '75px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#3F4F2A',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none'
                }}
              >
                Kasturi Restaurant
              </div>
            </div>
            
            <iframe 
                id="map"
                className={`sb-map ${mapLock ? "sb-active": ""}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8!2d17.0355!3d51.1100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27bb1ec7c53%3A0x4c8e8e8e8e8e8e8e!2sKomuny%20Paryskiej%2045%2C%2050-451%20Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1234567890!5m2!1sen!2spl"
                width="100%" 
                height="100%" 
                style={{
                  border: 0, 
                  minHeight: '500px', 
                  pointerEvents: mapLock ? 'auto' : 'none',
                  filter: 'grayscale(20%)' // Slight desaturation to make your logo stand out
                }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kasturi Restaurant Location"
            />
            
            <div 
              className={`sb-lock ${mapLock ? "sb-active": ""}`} 
              onClick={() => setMapLock(!mapLock)} 
              style={{ zIndex: 20 }}
            >
              <i className={`fas ${mapLock ? "fa-unlock": "fa-lock"}`} />
            </div>
        </div>
        {/* map end */}
        
        {/* Add bounce animation */}
        <style jsx>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
    </>
  );
};

export default ContactMapSection;