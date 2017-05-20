module.exports = {
  apps: [{
    name: 'NodeJSTest',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-211-4-216.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:magicwhale/NodeJSTest.git',
      path: '/home/ubuntu/NodeJSTest',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
