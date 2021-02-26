const SftpConnection = require('sftp-connection');
const { readFileSync } = require('fs');
const sftp = new SftpConnection({
    host: '180.76.58.86',
    port: 22,
    username: 'root',
    privateKey: readFileSync('/Users/v_yuzhuang01/.ssh/id_rsa')
});

sftp.upload({
    localPathPrefix: '/Users/v_yuzhuang01/Documents/Home/',
    localPath: '/Users/v_yuzhuang01/Documents/Home/{?(.nuxt|static|utils|plugins)/**,.npmrc,nuxt.config.js,package.json}',
    remotePath: '/usr/local/nginx/html/home-node-server/'
});