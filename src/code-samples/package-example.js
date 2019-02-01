{
  name: 'root',
  description: 'Monorepo for all new Justa apps',
  scripts: {
    'workspaces-info': 'yarn workspaces info',
    clean: 'yarn workspaces run clean'
  },
  'private': true,
  workspaces: [
    'packages/*',
  ],
  devDependencies: {
    '@types/node': '^10.12.18',
    concurrently: '^4.1.0',
    'cross-env': '^5.2.0',
    husky: '^1.3.1',
    rimraf: '^2.6.3',
    typescript: '^3.2.4',
  },
}