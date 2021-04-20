const SftpConnection = require('sftp-connection');
const { readFileSync } = require('fs');

console.log($serverPass, '$serverPass---------')
const sftp = new SftpConnection({
    host: '180.76.58.86',
    port: 22,
    username: 'root',
    password: $serverPass
    // privateKey: readFileSync('/Users/v_yuzhuang01/.ssh/id_rsa')
});
let localPathPrefix = __dirname;
console.log(localPathPrefix, 'localPathPrefix------')
sftp.upload({
    localPathPrefix,
    // localPath: localPathPrefix + '{?(.nuxt|static|utils|plugins)/**,.npmrc,nuxt.config.js,package.json}',
    localPath: localPathPrefix + '{output/output.zip}',
    remotePath: '/usr/local/nginx/html/home-node-server/'
});