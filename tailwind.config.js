/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#1C2434',
        'black-2': '#010101',
        body: '#64748B',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        // primary: '#3C50E0',
        // secondary: '#80CAEE',
        stroke: '#E2E8F0',
        gray: '#EFF4FB',
        graydark: '#333A48',
        'gray-2': '#F7F9FC',
        'gray-3': '#FAFAFA',
        whiten: '#F1F5F9',
        whiter: '#F5F7FD',
        boxdark: '#24303F',
        'boxdark-2': '#1A222C',
        strokedark: '#2E3A47',
        'form-strokedark': '#3d4d60',
        'form-input': '#1d2a39',
        'meta-1': '#DC3545',
        'meta-2': '#EFF2F7',
        'meta-3': '#10B981',
        'meta-4': '#313D4A',
        'meta-5': '#259AE6',
        'meta-6': '#FFBA00',
        'meta-7': '#FF6766',
        'meta-8': '#F0950C',
        'meta-9': '#E5E7EB',
        success: '#219653',
        danger: '#D34053',
        warning: '#FFA70B',
        background: colors.white,
        foreground: colors.gray[600],
        muted: colors.gray[200],

        primary: {
          lighter: colors.gray[200],
          DEFAULT: colors.gray[800],
          dark: colors.gray[950],
          foreground: colors.white,
        },

        /*
        * secondary colors
        */
        secondary: {
          lighter: colors.indigo[200],
          DEFAULT: colors.indigo[500],
          dark: colors.indigo[700],
          foreground: colors.white,
        },

        /*
        * danger colors
        */
        red: {
          lighter: colors.rose[200],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
        },

        /*
        * warning colors
        */
        orange: {
          lighter: colors.amber[200],
          DEFAULT: colors.amber[500],
          dark: colors.amber[700],
        },

        /*
        * info colors
        */
        blue: {
          lighter: colors.sky[200],
          DEFAULT: colors.sky[500],
          dark: colors.sky[700],
        },

        /*
        * success colors
        */
        green: {
          lighter: colors.emerald[200],
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[700],
        },

      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}


