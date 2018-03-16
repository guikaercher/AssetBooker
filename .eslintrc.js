module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
		"mocha": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module"
	},
	"rules": {
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", "always"],
		"keyword-spacing": [
			"error",
			{
				"before": true,
				"after": true
			}
		],
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": 0,
		"semi": [
			"error",
			"always"
		],
		"no-console": 0,
	}
};
