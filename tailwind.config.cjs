/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'poppins': "'poppins', serif"
			},
			colors: {
				'custom-gray': '#5E5E5E',
				'yellowz':'#F7A746',
				'yellowzGradient':'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400',
				'purple':'7D2389'
			  },
			gradientColorStops:{
				
			}
		},
	},
	plugins: [],
}


//linear-gradient(45deg, #F7A746, #FFDF93)