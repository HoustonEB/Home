module.exports = {
    apps: [{
        name: "home-server",
        cwd: './', // 当前工作路径
        script: "./pm2/pm2-server.js",
        instances: 'max',
        exec_mode: 'cluster',
        watch: './pm2/version.txt',
        // ignore_watch: ['[\/\\]\./', 'node_modules', 'dist', '.nuxt'],
        out_file: './logs/out.log', // 普通日志路径
        error_file: './logs/err.log', // 错误日志路径
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm Z',
    }]
}