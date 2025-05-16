// @ts-check
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config & { daisyui: any }} */
const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // One Light
                oneLight: {
                    bg: '#fafafa',
                    text: '#383a42',
                    secondary: '#696c77',
                    border: '#d4d4d4',
                    accent: '#4078f2',
                    accent2: '#50a14f',
                    cyan: '#0184bc',
                    red: '#e45649',
                    orange: '#c18401',
                    gray: '#a0a1a7',
                    purple: '#a626a4',
                },
                // One Dark
                oneDark: {
                    bg: '#282c34',
                    text: '#abb2bf',
                    secondary: '#5c6370',
                    border: '#3e4451',
                    accent: '#61afef',
                    accent2: '#98c379',
                    cyan: '#56b6c2',
                    red: '#e06c75',
                    orange: '#d19a66',
                    gray: '#828997',
                    purple: '#c678dd',
                },
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    // One Light
                    primary: '#4078f2',
                    'primary-content': '#ffffff',
                    secondary: '#50a14f',
                    accent: '#a626a4',
                    neutral: '#383a42',
                    'base-100': '#fafafa',
                    'base-200': '#f0f0f0',
                    'base-300': '#e5e5e5',
                    'base-content': '#383a42',
                    info: '#0184bc',
                    success: '#50a14f',
                    warning: '#c18401',
                    error: '#e45649',
                },
                dark: {
                    // One Dark
                    primary: '#61afef',
                    'primary-content': '#282c34',
                    secondary: '#98c379',
                    accent: '#c678dd',
                    neutral: '#abb2bf',
                    'base-100': '#282c34',
                    'base-200': '#21252b',
                    'base-300': '#1b1f23',
                    'base-content': '#abb2bf',
                    info: '#56b6c2',
                    success: '#98c379',
                    warning: '#d19a66',
                    error: '#e06c75',
                },
            },
        ],
        base: true,
        styled: true,
        utils: true,
        prefix: '',
        logs: true,
        themeRoot: ':root',
        darkTheme: 'dark',
    },
};

export default config;
