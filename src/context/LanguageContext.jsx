import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../translations/en';
import { pt } from '../translations/pt';

const LanguageContext = createContext();

export const translations = { en, pt };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check if a language is saved in localStorage
    const savedLang = localStorage.getItem('app_lang');
    return savedLang === 'en' || savedLang === 'pt' ? savedLang : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', language);
  }, [language]);

  // Translate function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to Portuguese or return key if missing
        let fallbackValue = translations['pt'];
        for (const fbK of keys) {
          if (fallbackValue && fallbackValue[fbK]) {
            fallbackValue = fallbackValue[fbK];
          } else {
            return key;
          }
        }
        return fallbackValue;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
