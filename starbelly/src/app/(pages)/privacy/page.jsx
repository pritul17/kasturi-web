"use client";

import React from "react";
import { useLanguage } from "@common/LanguageContext";

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: April 2026",
    sections: [
      { heading: "1. Controller", text: "The controller of personal data is Kasturi Restaurant, Komuny Paryskiej 45/2U, 50-451 Wrocław, Poland." },
      { heading: "2. What data we collect", text: "We do not collect personal data through this website directly. We do not operate a contact form or user accounts. If you contact us by phone or email, we process only the data you provide voluntarily for the purpose of responding to your enquiry." },
      { heading: "3. Google Maps", text: "Our Contact page contains an embedded Google Maps map. This map is not loaded automatically — it is only activated after you explicitly click \"Load map\" and consent to Google's data processing. When loaded, Google Maps may set cookies and collect data including your IP address in accordance with Google's Privacy Policy." },
      { heading: "4. Cookies", text: "This website does not set any first-party cookies. Third-party cookies may be set by Google Maps only after you explicitly consent to loading the map as described above." },
      { heading: "5. Third-party services", text: "This website uses Google Fonts loaded via Next.js (self-hosted at build time — no external requests). No analytics, tracking pixels, or advertising services are used." },
      { heading: "6. Your rights", text: "Under GDPR you have the right to access, rectify, erase, and object to processing of your personal data. To exercise these rights, contact us at the address above." },
      { heading: "7. Contact", text: "For privacy-related questions, call us at +48 721 770 999 or visit us at Komuny Paryskiej 45/2U, Wrocław." },
    ]
  },
  pl: {
    title: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: kwiecień 2026",
    sections: [
      { heading: "1. Administrator danych", text: "Administratorem danych osobowych jest Restauracja Kasturi, ul. Komuny Paryskiej 45/2U, 50-451 Wrocław, Polska." },
      { heading: "2. Jakie dane zbieramy", text: "Nie zbieramy danych osobowych bezpośrednio przez tę stronę. Nie prowadzimy formularza kontaktowego ani kont użytkowników. Jeśli skontaktujesz się z nami telefonicznie lub mailowo, przetwarzamy wyłącznie dane podane dobrowolnie w celu udzielenia odpowiedzi." },
      { heading: "3. Google Maps", text: "Nasza strona kontaktowa zawiera mapę Google Maps. Mapa nie jest ładowana automatycznie — aktywuje się dopiero po wyraźnym kliknięciu \"Załaduj mapę\" i wyrażeniu zgody na przetwarzanie danych przez Google. Po załadowaniu Google Maps może ustawiać pliki cookies i zbierać dane, w tym adres IP, zgodnie z Polityką prywatności Google." },
      { heading: "4. Pliki cookies", text: "Ta strona nie ustawia żadnych własnych plików cookies. Pliki cookies stron trzecich mogą być ustawiane przez Google Maps wyłącznie po wyrażeniu przez użytkownika zgody na załadowanie mapy." },
      { heading: "5. Usługi zewnętrzne", text: "Strona używa czcionek Google Fonts ładowanych przez Next.js (hostowanych lokalnie podczas kompilacji — bez zewnętrznych żądań). Nie używamy analityki, pikseli śledzących ani usług reklamowych." },
      { heading: "6. Twoje prawa", text: "Na podstawie RODO przysługuje Ci prawo dostępu, sprostowania, usunięcia i sprzeciwu wobec przetwarzania Twoich danych osobowych. Aby skorzystać z tych praw, skontaktuj się z nami pod powyższym adresem." },
      { heading: "7. Kontakt", text: "W sprawach dotyczących prywatności zadzwoń pod numer +48 721 770 999 lub odwiedź nas przy ul. Komuny Paryskiej 45/2U we Wrocławiu." },
    ]
  }
};

const PrivacyPolicy = () => {
  const { lang } = useLanguage();
  const tx = content[lang] || content.en;

  return (
    <>
      <div className="sb-nav-spacer" />
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ marginBottom: '12px' }}>{tx.title}</h1>
              <p style={{ color: '#888', marginBottom: '40px' }}>{tx.updated}</p>
              {tx.sections.map((s, i) => (
                <div key={i}>
                  <h3>{s.heading}</h3>
                  <p className="sb-text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
