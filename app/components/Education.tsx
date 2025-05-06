'use client';

import { useTranslation } from '../i18n/client';
import { FaGraduationCap, FaCheck } from 'react-icons/fa';
import React from 'react';

interface Education {
    degree: string;
    school: string;
    type: string;
    period: string;
    location: string;
    skills: string[];
}

interface EducationProps {
    lng: string;
}

export default function Education({ lng }: EducationProps): React.ReactElement {
    const { t } = useTranslation(lng);

    const educations: Education[] = [
        {
            degree: 'MBA Développeur Fullstack',
            school: 'MyDigitalSchool',
            type: 'Alternance',
            period: 'Septembre 2023 - Juillet 2025',
            location: 'Caen, France',
            skills: [
                'Gestion de projet',
                'Développement web, mobile et embarqué',
                'Flutter, NextJS, TypeScript, Python, Arduino, React',
            ],
        },
        {
            degree: "Bachelor Concepteur développeur d'applications",
            school: 'MyDigitalSchool',
            type: 'Alternance',
            period: 'Septembre 2022 - Juillet 2023',
            location: 'Caen, France',
            skills: ['Développement web et mobile', 'Flutter, Python, Javascript, CICD Gitlab'],
        },
        {
            degree: 'BTS SIO',
            school: 'Etablissement Saint Adjutor',
            type: '',
            period: 'Septembre 2020 - Juillet 2022',
            location: 'Vernon, France',
            skills: ['Développement web et logiciel', 'Symfony, React, Ionic, C#, MySQL'],
        },
    ];

    return (
        <div className="py-16 bg-base-100" id="education">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{t('education.title')}</h2>

                <div className="flex flex-col gap-8 w-full lg:w-3/4 mx-auto">
                    {educations.map((edu, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow border border-primary/20"
                        >
                            <div className="card-body p-5">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary p-2 rounded-full shrink-0 mt-1">
                                        <FaGraduationCap
                                            className="text-primary-content"
                                            size={20}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <h3 className="card-title text-lg">
                                                {edu.degree}
                                                {edu.type && ` - ${edu.type}`}
                                            </h3>
                                        </div>

                                        <div className="text-sm opacity-70 mb-3">
                                            <div>{edu.school}</div>
                                            <div className="flex items-center gap-1">
                                                <span>{edu.period}</span>
                                                <span>•</span>
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h4 className="font-bold mb-2">Programme :</h4>
                                            <ul className="space-y-1">
                                                {edu.skills.map((skill, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <FaCheck
                                                            className="text-primary mt-1 mr-2 shrink-0"
                                                            size={12}
                                                        />
                                                        <span className="text-sm">{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
