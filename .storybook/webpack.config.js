const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
  config.resolve.alias['@']          = rootPath
  config.resolve.alias['@atoms']     = `${rootPath}/components/atoms`
  config.resolve.alias['@modules']   = `${rootPath}/components/modules`
  config.resolve.alias['@organisms'] = `${rootPath}/components/organisms`
  config.resolve.alias['@pages']     = `${rootPath}/pages`
  config.resolve.alias['@constants'] = `${rootPath}/constants`
  config.resolve.alias['@assets']    = `${rootPath}/assets`
  
  config.module.rules.push({
    test: /\.scss$/,    
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });
  config.module.rules.push({ // addon
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config
}