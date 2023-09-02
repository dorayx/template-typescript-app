module.exports = {
  branches: ['main', { name: 'next', channel: 'next' }, { name: 'dev', channel: 'dev', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    'semantic-release-yarn',
    '@semantic-release/github',

    [
      '@semantic-release/git',
      {
        assets: ['docs/CHANGELOG.md'],
      },
    ],
  ],
};
