module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': 'src/assets',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views ',
			}
		}
	}
}