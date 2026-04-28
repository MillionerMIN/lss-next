export default {
	'*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
	'*.{css,json,md,js,mjs}': ['prettier --write'],

	'**/*.{ts,tsx}': () => 'tsc --noEmit --pretty'
};
