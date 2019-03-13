/* Dynamic Exporter:
 * Dynamically export all files (except self) in current folder
 */
const req = require.context('.', false, /\.js$/)
const exportModules = {}
req.keys().forEach((key) => {
  const name = key.replace(/^\.\/(.*)\.js/, '$1')

  if (name !== 'index') {
    exportModules[name] = req(key).default
  }
})

export default exportModules
