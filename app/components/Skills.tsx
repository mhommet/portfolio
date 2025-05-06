'use client';

import { useTranslation } from '../i18n/client';
import { FaCode, FaMobile, FaDesktop, FaGlobe, FaDatabase } from 'react-icons/fa';
import React from 'react';

interface SkillsProps {
    lng: string;
}

export default function Skills({ lng }: SkillsProps): React.ReactElement {
    const { t } = useTranslation(lng);

    return (
        <div className="py-16 bg-base-100" id="skills">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{t('skills.title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all border border-primary/20">
                        <div className="card-body p-5">
                            <div className="flex items-center mb-3">
                                <div className="bg-primary/10 p-3 rounded-full mr-3">
                                    <FaCode className="text-primary" size={24} />
                                </div>
                                <h3 className="card-title">
                                    {t('skills.languages').split(':')[0]}
                                </h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <div className="badge badge-primary badge-lg">Python</div>
                                <div className="badge badge-primary badge-lg">JavaScript</div>
                                <div className="badge badge-primary badge-lg">TypeScript</div>
                                <div className="badge badge-primary badge-lg">Dart</div>
                                <div className="badge badge-primary badge-lg">PHP</div>
                                <div className="badge badge-primary badge-lg">C#</div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all border border-primary/20">
                        <div className="card-body p-5">
                            <div className="flex items-center mb-3">
                                <div className="bg-primary/10 p-3 rounded-full mr-3">
                                    <FaMobile className="text-primary" size={24} />
                                </div>
                                <h3 className="card-title">{t('skills.mobile').split(':')[0]}</h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <div className="badge badge-primary badge-lg">Flutter</div>
                                <div className="badge badge-primary badge-lg">React Native</div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all border border-primary/20">
                        <div className="card-body p-5">
                            <div className="flex items-center mb-3">
                                <div className="bg-primary/10 p-3 rounded-full mr-3">
                                    <FaDesktop className="text-primary" size={24} />
                                </div>
                                <h3 className="card-title">{t('skills.software').split(':')[0]}</h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <div className="badge badge-primary badge-lg">Electron</div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all border border-primary/20">
                        <div className="card-body p-5">
                            <div className="flex items-center mb-3">
                                <div className="bg-primary/10 p-3 rounded-full mr-3">
                                    <FaGlobe className="text-primary" size={24} />
                                </div>
                                <h3 className="card-title">{t('skills.web').split(':')[0]}</h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <div className="badge badge-primary badge-lg">React</div>
                                <div className="badge badge-primary badge-lg">Symfony</div>
                                <div className="badge badge-primary badge-lg">VueJS</div>
                                <div className="badge badge-primary badge-lg">NextJS</div>
                                <div className="badge badge-primary badge-lg">NodeJS</div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all border border-primary/20">
                        <div className="card-body p-5">
                            <div className="flex items-center mb-3">
                                <div className="bg-primary/10 p-3 rounded-full mr-3">
                                    <FaDatabase className="text-primary" size={24} />
                                </div>
                                <h3 className="card-title">{t('skills.database').split(':')[0]}</h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <div className="badge badge-primary badge-lg">MySQL</div>
                                <div className="badge badge-primary badge-lg">MongoDB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
