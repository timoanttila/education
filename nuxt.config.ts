export default {
	ssr: false,
	target: 'static',
	type: 'universal',
	server: {
		port: 3000
	},
	head: {
		link: [{rel: 'preconnect', href: 'https://api.timoanttila.com'}],
		title: 'Education Highway',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'format-detection', content: 'telephone=no'},
			{name: 'twitter:creator', content: '@_timoanttila'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
			{property: 'og:type', content: 'website'},
			{property: 'og:locale', content: 'fi_FI'},
			{'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}
		]
	},
	css: ['@/assets/global.scss'],
	components: true,
	modules: ['@unocss/nuxt', '@nuxt/image-edge'],
	unocss: {
		attributify: true,
		icons: true,
		uno: true
	},
	typescript: {
		strict: true
	},
	telemetry: false
}
