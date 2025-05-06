import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

interface TranslationResult {
    i18n: ReturnType<typeof createInstance>;
    t: (key: string, options?: Record<string, unknown>) => string;
}

export default async function initTranslations(
    lng: string,
    ns?: string
): Promise<TranslationResult> {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`./locales/${language}/${namespace}.json`)
            )
        )
        .init(getOptions(lng, ns));

    return {
        i18n: i18nInstance,
        t: i18nInstance.getFixedT(lng, ns),
    };
}
