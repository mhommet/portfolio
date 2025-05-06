'use client';

import { useTranslation } from '../i18n/client';
import { FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';

interface RealisationsProps {
    lng: string;
}

export default function Realisations({ lng }: RealisationsProps): React.ReactElement {
    useTranslation(lng);

    return (
        <div className="py-16 bg-base-200" id="realisations">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {lng === 'fr' ? 'Réalisations' : 'Portfolio'}
                </h2>

                <div className="flex justify-center">
                    <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl">
                        <figure className="lg:w-1/2">
                            <Image
                                src="/normandy.jpg"
                                alt="DDay Normandy Experience"
                                width={400}
                                height={400}
                                className="object-cover h-full w-full"
                            />
                        </figure>
                        <div className="card-body lg:w-1/2">
                            <h3 className="card-title text-xl">DDay Normandy Experience</h3>
                            <div className="badge badge-primary mb-3">
                                {lng === 'fr' ? 'Site Web Touristique' : 'Tourism Website'}
                            </div>
                            <p>
                                {lng === 'fr'
                                    ? "Site web dédié à l'expérience du Jour J en Normandie, offrant des informations sur les visites historiques, les musées et les sites commémoratifs du débarquement de 1944."
                                    : 'Website dedicated to the D-Day experience in Normandy, providing information about historical tours, museums, and memorial sites related to the 1944 landings.'}
                            </p>

                            <div className="mt-3 mb-2">
                                <h4 className="font-semibold mb-1">
                                    {lng === 'fr'
                                        ? 'Technologies utilisées:'
                                        : 'Technologies used:'}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    <div className="badge badge-outline">NextJS</div>
                                    <div className="badge badge-outline">TailwindCSS</div>
                                </div>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <a
                                    href="https://ddaynormandyexperience.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <FaGlobe className="mr-2" />
                                    {lng === 'fr' ? 'Visiter le site' : 'Visit website'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
