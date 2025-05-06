export const fallbackLng = 'fr';
export const languages = ['fr', 'en'];
export const defaultNS = 'translation';

interface I18nOptions {
    supportedLngs: string[];
    fallbackLng: string;
    lng: string;
    fallbackNS: string;
    defaultNS: string;
    ns: string;
}

export function getOptions(lng = fallbackLng, ns = defaultNS): I18nOptions {
    return {
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
