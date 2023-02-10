import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
            translation: {
                "Welcome": "Welcome!",
                "English": "English",
                "Portuguese": "Portuguese"
            }
            },
            pt: {
            translation: {
                "Welcome": "Bem-vindo!",
                "English": "Inglês",
                "Portuguese": "Português"
            }
            },
        },
        lng: "en",
        fallbackLng: "en"
    })

export default i18n