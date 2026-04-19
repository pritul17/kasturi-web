"use client";
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export const LanguageProvider = ({ children }) => {
    const [lang, setLangState] = useState('pl');

    useEffect(() => {
        const saved = localStorage.getItem('kasturi_lang');
        if (saved === 'en') setLangState('en');
        else setLangState('pl');
    }, []);

    const setLang = (l) => {
        setLangState(l);
        localStorage.setItem('kasturi_lang', l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

/** Pick the right language field from a data object.
 *  e.g. pick(item, 'title', 'pl')  →  item.title_pl || item.title
 */
export const pick = (obj, key, lang) => {
    if (lang === 'pl' && obj[`${key}_pl`]) return obj[`${key}_pl`];
    return obj[key] ?? '';
};
