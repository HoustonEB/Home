const SftpConnection = require('sftp-connection');
const p = require('path');
const { readFileSync } = require('fs');
const shell = require('shelljs');
const password = process.argv[2];

console.log(password, 'password---------')
const sftp = new SftpConnection({
    host: '180.76.58.86',
    port: 22,
    username: 'root',
    password: password
    // privateKey: readFileSync('/Users/v_yuzhuang01/.ssh/id_rsa')
});
let localPathPrefix = p.resolve(__dirname + '/../') + '/';
console.log(localPathPrefix, 'localPathPrefix------')
sftp.upload({
    localPathPrefix,
    localPath: localPathPrefix + '{?(.nuxt|static|utils|plugins|pm2)/**,.npmrc,nuxt.config.js,package.json,ecosystem.config.js,package-lock.json}',
    // localPath: localPathPrefix + '?(output)/**',
    remotePath: '/usr/local/nginx/html/home-node-server/resources/'
});

// shell.echo('上传结束');
// shell.exit(0);