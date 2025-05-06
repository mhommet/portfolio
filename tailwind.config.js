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
        // Catppuccin Latte
        latte: {
          rosewater: '#dc8a78',
          flamingo: '#dd7878',
          pink: '#ea76cb',
          mauve: '#8839ef',
          red: '#d20f39',
          maroon: '#e64553',
          peach: '#fe640b',
          yellow: '#df8e1d',
          green: '#40a02b',
          teal: '#179299',
          sky: '#04a5e5',
          sapphire: '#209fb5',
          blue: '#1e66f5',
          lavender: '#7287fd',
          text: '#4c4f69',
          subtext1: '#5c5f77',
          subtext0: '#6c6f85',
          overlay2: '#7c7f93',
          overlay1: '#8c8fa1',
          overlay0: '#9ca0b0',
          surface2: '#acb0be',
          surface1: '#bcc0cc',
          surface0: '#ccd0da',
          base: '#eff1f5',
          mantle: '#e6e9ef',
          crust: '#dce0e8',
        },
        // Catppuccin Mocha
        mocha: {
          rosewater: '#f5e0dc',
          flamingo: '#f2cdcd',
          pink: '#f5c2e7',
          mauve: '#cba6f7',
          red: '#f38ba8',
          maroon: '#eba0ac',
          peach: '#fab387',
          yellow: '#f9e2af',
          green: '#a6e3a1',
          teal: '#94e2d5',
          sky: '#89dceb',
          sapphire: '#74c7ec',
          blue: '#89b4fa',
          lavender: '#b4befe',
          text: '#cdd6f4',
          subtext1: '#bac2de',
          subtext0: '#a6adc8',
          overlay2: '#9399b2',
          overlay1: '#7f849c',
          overlay0: '#6c7086',
          surface2: '#585b70',
          surface1: '#45475a',
          surface0: '#313244',
          base: '#1e1e2e',
          mantle: '#181825',
          crust: '#11111b',
        },
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          // Catppuccin Latte
          "primary": "#8839ef", // mauve
          "primary-content": "#ffffff",
          "secondary": "#209fb5", // sapphire
          "accent": "#ea76cb", // pink
          "neutral": "#4c4f69", // text
          "base-100": "#eff1f5", // base
          "base-200": "#e6e9ef", // mantle
          "base-300": "#dce0e8", // crust
          "base-content": "#4c4f69", // text
          "info": "#1e66f5", // blue
          "success": "#40a02b", // green
          "warning": "#df8e1d", // yellow
          "error": "#d20f39", // red
        },
        dark: {
          // Catppuccin Mocha
          "primary": "#cba6f7", // mauve
          "primary-content": "#11111b", // base-content inverse
          "secondary": "#74c7ec", // sapphire
          "accent": "#f5c2e7", // pink
          "neutral": "#cdd6f4", // text
          "base-100": "#1e1e2e", // base
          "base-200": "#181825", // mantle
          "base-300": "#11111b", // crust
          "base-content": "#cdd6f4", // text
          "info": "#89b4fa", // blue
          "success": "#a6e3a1", // green
          "warning": "#f9e2af", // yellow
          "error": "#f38ba8", // red
        }
      }
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
    darkTheme: "dark",
  }
}

export default config; 