const { execFile } = require('child_process');
console.log(process.env.PWD, 'process')
const child = execFile('sh', ['./pm2/start.sh'],(error, stdout, stderr) => {
    if (error) {
        console.error(`执行的错误: ${error}`);
        return;
    }
    if(stdout) {
        console.log(`stdout: ${stdout}`);
    }
    if(stderr) {
        console.error(`stderr: ${stderr}`);
    }
});