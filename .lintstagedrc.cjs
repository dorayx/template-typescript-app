module.exports = {
  '*.{ts,tsx,cjs,mjs}': ['prettier -w', 'eslint --fix', 'eslint'],
  '*.{md,json}': ['prettier -w'],
};
