/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ui-primary': 'var(--primary)',
        'ui-primary-contrast': 'var(--on-primary)',
        'ui-primary-container': 'var(--primary-container)',
        'ui-primary-container-contrast': 'var(--on-primary-container)',
        'ui-secondary': 'var(--secondary)',
        'ui-secondary-contrast': 'var(--on-secondary)',
        'ui-secondary-container': 'var(--secondary-container)',
        'ui-secondary-container-contrast': 'var(--on-secondary-container)',
        'ui-tertiary': 'var(--tertiary)',
        'ui-tertiary-contrast': 'var(--on-tertiary)',
        'ui-tertiary-container': 'var(--tertiary-container)',
        'ui-tertiary-container-contrast': 'var(--on-tertiary-container)',
        'ui-error': 'var(--error)',
        'ui-error-contrast': 'var(--on-error)',
        'ui-error-container': 'var(--error-container)',
        'ui-error-container-contrast': 'var(--on-error-container)',
        'ui-background': 'var(--background)',
        'ui-background-contrast': 'var(--on-background)',
        'ui-surface': 'var(--surface)',
        'ui-surface-contrast': 'var(--on-surface)',
        'ui-surface-secondary': 'var(--surface-variant)',
        'ui-surface-secondary-contrast': 'var(--on-surface-variant)',
        'ui-outline': 'var(--outline)'
      },
      boxShadow: {
        'elevation-0': 'var(--elevation-0)',
        'elevation-1': 'var(--elevation-1)',
        'elevation-2': 'var(--elevation-2)',
        'elevation-3': 'var(--elevation-3)',
        'elevation-4': 'var(--elevation-4)',
        'elevation-5': 'var(--elevation-5)',
      },
      opacity: {
        disabled: 'var(--opacity-disabled)',
        hover: 'var(--opacity-hover)',
        pressed: 'var(--opacity-pressed)',
        focus: 'var(--opacity-focus)'
      },
      animation: {
        panelIn: 'panelIn 200ms linear forwards',
        panelOut: 'panelOut 200ms linear forwards',
        modalIn: 'modalIn 200ms linear forwards',
        modalOut: 'modalOut 200ms linear forwards'
      },
      keyframes: {
        panelIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        panelOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        modalIn: {
          '0%': {
            'z-index': -50,
            opacity: 0
          },
          '1%': {
            'z-index': 50,
            opacity: 0
          },
          '100%': {
            'z-index': 50,
            opacity: 1
          }
        },
        modalOut: {
          '0%': {
            'z-index': 50,
            opacity: 1
          },
          '99%': {
            'z-index': 50,
            opacity: 0
          },
          '100%': {
            'z-index': -50,
            opacity: 0
          }
        }
      },
    },
    transitionTimingFunction: {
      'IOS': 'cubic-bezier(0.36,0.66,0.04,1)'
    }
  },
  plugins: [],
}