import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import fr from "./fr";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    fr,
    en,
  },
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
