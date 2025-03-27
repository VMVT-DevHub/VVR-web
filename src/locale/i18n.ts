import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ltTranslation from "./lt/lt.json";
import enTranslation from "./en/en.json";

const resources = {
  lt: {
    translation: ltTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "lt",
  fallbackLng: ["lt", "en"],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
