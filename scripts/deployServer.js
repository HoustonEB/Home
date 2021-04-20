const SftpConnection = require('sftp-connection');
const p = require('path');
const { readFileSync } = require('fs');
const password = process.argv[2];

console.log(password, 'password---------')
const sftp = new SftpConnection({
    host: '180.76.58.86',
    port: 22,
    username: 'root',
    password: password
    // privateKey: readFileSync('/Users/v_yuzhuang01/.ssh/id_rsa')
});
let localPathPrefix = __dirname;
console.log(localPathPrefix, 'localPathPrefix------')
sftp.upload({
    localPathPrefix,
    // localPath: localPathPrefix + '{?(.nuxt|static|utils|plugins)/**,.npmrc,nuxt.config.js,package.json}',
    localPath: p.join(localPathPrefix + '../' + '/output/output.zip}'),
    remotePath: '/usr/local/nginx/html/home-node-server/'
});