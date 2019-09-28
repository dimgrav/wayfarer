import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import en from "./locales/en";


i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {translations: en}
        },
        lng: "en",
        debug: true,

        // translation resource namespace
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;