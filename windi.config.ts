import {defineConfig} from '@windicss/plugin-utils'

export default defineConfig({
	/**
	 * Write windi classes in html attributes.
	 * @see https://windicss.org/features/attributify.html
	 */
	attributify: true,
	theme: {
		extend: {
			screens: {
				sm: '450px',
				md: '750px',
				lg: '1000px',
				xl: '1280px',
				'2xl': '1520px'
			},
			maxWidth: {
				sm: '450px',
				md: '750px',
				lg: '1000px',
				xl: '1280px',
				'2xl': '1520px'
			},
			colors: {
				button: 'var(--button)',
				buttonBG: 'var(--buttonBG)',
				header: 'var(--header)',
				light: 'rgba(255, 255, 255, 0.87)',
				link: 'var(--link)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				submenu: 'var(--submenu)'
			},
			borderRadius: {
				submenu: 'var(--rounded-submenu)'
			}
		}
	},
	fontFamily: false,
	fontWeight: false,
	preflight: false
})
