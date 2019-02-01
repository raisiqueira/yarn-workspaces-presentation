{
    name: '@justa/jst-common',
    version: '0.1.0',
    'private': true,
    main: 'build/index.js',
    module: 'build/index.es.js',
    typings: 'build/index.d.ts',
    files: [
      'build',
    ],
    scripts: {
      start: 'rollup -c -w',
      build: 'rollup -c',
      clean: 'rimraf build',
      format: 'prettier --write \'{.,src/**}/*.{js,jsx,ts,tsx}\'',
      lint: 'tslint -p .',
    },
    dependencies: {
      lodash: '^4.17.11',
      moment: '^2.22.2',
      qs: '^6.6.0'
    },
    devDependencies: {
      '@types/jest': '^23.3.10',
      '@types/lodash': '^4.14.118',
      'babel-jest': '^23.6.0',
      jest: '^23.6.0',
      prettier: '^1.15.3',
      rollup: '^1.1.2',
      'rollup-plugin-typescript2': '^0.19.2',
      'rollup-watch': '^4.3.1',
      'ts-jest': '^23.10.5',
      tslint: '^5.11.0',
      'tslint-config-airbnb': '^5.11.1',
      'tslint-config-prettier': '^1.17.0',
      typescript: '^3.2.4',
    }
  }