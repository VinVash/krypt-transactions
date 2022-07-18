require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		rinkeby: {
			url: process.env.ALCHEMY_API_KEY,
			accounts: [ 'ecaf9f0a40e1ed53fe61e2d9140c00d038f170d564a25fe8ae3f24f8961b4908' ]
		}
	}
}