
module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  require('shipit-yarn')(shipit)

  shipit.initConfig({
    default: {
      workspace: '/tmp/koaplate',
      deployTo: '/var/local/koaplate',
      repositoryUrl: 'git://github.com/ijse/koaplate.git',
      ignores: ['.git', 'node_modules' ],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      yarn: {
        remote: true
      }
    },
    pi: {
      servers: 'pi@pi.ijser.cn'
    }
  })

  shipit.on('deployed', function () {
    return shipit.remote([
      `cd ${shipit.config.deployTo}/current`,
      'npm run build',
      'pm2 kill',
      'NODE_CONFIG_ENV=pi pm2 start package.json'
    ].join('&&'))
  })
}
