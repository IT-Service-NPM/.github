// eslint-disable-next-line max-len
// https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-angular/README.md
// https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit
// https://commitlint.js.org/reference/configuration.html

const Configuration = {

  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [2, 'always', [
      'build',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test',
      // additional types
      'chore'
    ]],
    'scope-enum': [2, 'always', [
      'plugin',
      'vscode',
      'git',
      'github',
      'github-actions',
      'deps',
      'devtools',
      'readme',
      'release'
    ]],
    'scope-empty': [0],
  },
  defaultIgnores: true,
  ignores: [
    (commit) => commit.startsWith('build(deps): bump'),
    (commit) => commit.startsWith('ci(deps): bump')
  ],
};

export default Configuration;
