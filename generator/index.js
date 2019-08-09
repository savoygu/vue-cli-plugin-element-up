module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    dependencies: {
      'element-up': '^0.8.0',
      'element-ui': '^2.11.0'
    }
  })

  api.injectImports(utils.getMain(), `import './plugins/element-up.js'`)

  api.render({
    './src/plugins/element-up.js': './templates/src/plugins/element-up.js',
    './src/App.vue': './templates/src/App.vue'
  })

  if (opts.import === 'partial') {
    api.extendPackage({
      devDependencies: {
        'babel-plugin-component': '^1.1.1'
      }
    })
  } else if (opts.customTheme) {
    api.render({
      './src/element-up-variables.scss': './templates/src/element-up-variables.scss'
    })
    api.extendPackage({
      devDependencies: {
        "sass-bem": "^2.6.5",
        'sass-loader': '^7.0.3',
        'node-sass': '^4.9.2'
      }
    })
  }

  api.onCreateComplete(() => {
    if (opts.import === 'partial') {
      utils.updateBabelConfig(cfg => {
        const pluginComponent = ['component', {
          'libraryName': 'element-up',
          'styleLibraryName': 'theme-chalk'
        }]
        cfg.plugins = cfg.plugins || []
        cfg.plugins.push(pluginComponent)
        return cfg
      })
    }
  })
}
