
module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  require('shipit-yarn')(shipit)

  shipit.initConfig({
    default: {
      workspace: '/tmp/koaplate',
      deployTo: '/var/local/app/koaplate-dist',
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

  shipit.on('deploy:finish', function () {
    shipit.remote('npm start')
  })
}
