module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'bun tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `bun eslint --fix ${filenames.join(' ')}`,
    `bun prettier --write ${filenames.join(' ')}`,
  ],
};
