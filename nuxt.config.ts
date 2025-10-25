// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@vueuse/nuxt",
		"@pinia/nuxt",
		"@nuxt/eslint",
	],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	devtools: { enabled: true },
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	shadcn: {
		/**
     * Prefix for all the imported component
     */
		prefix: "",
		/**
     * Directory that the component lives in.
     * @default "./app/components/ui"
     */
		componentDir: "./app/components/ui",
	},
});
