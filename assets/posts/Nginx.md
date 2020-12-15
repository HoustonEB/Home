---
title: Nginx
date: 2019-09-02 13:44:56
categories: 服务器
tags: 
- Nginx
---

### 命令
--- 
| 参数 | 描述 |
| --- | --- |
| -?,-h| 打开帮助信息 |
| -v | 显示版本信息并退出 |
| -V | 显示版本和配置选项信息,然后退出 |
| -t | 检测配置文件是否有语法错误,然后退出 |
| -q | 在检查配置文件期间屏蔽非错误信息 |
| -s signal | 给一个nginx主进程发送信号: `stop`(强制停止),`quit`(优雅退出),`reopen`(重启),`reload`(重新加载配置文件) |
| -p prefix | 设置前缀路径(默认是: /usr/share/nginx/) | 
| -c filename | 设置配置文件(默认是: /etc/nginx/nginx.conf) | 
| -g directives | 设置配置文件外的全局指令 |

1. `nginx -s reload`
2. `nginx -s stop`
3. `nginx -c /usr/local/nginx/conf/nginx.conf`
4. `ps aux | grep nginx` or `cat /path/to/nginx.pid` 获取nginx pid

```shell
ps aux | grep nginx
查看带nginx关键字的进程
USER     PID      %CPU %MEM VSZ    RSS  TTY      STAT STARTED TIME COMMAND
root     3481361  0.0  0.2  31364  2744 ?        Ss   Nov30   0:00 nginx: master process nginx -c /usr/local/nginx/conf/nginx.conf
www      3481511  0.0  0.4  65156  4724 ?        S    Nov30   0:08 nginx: worker process
root     3887931  0.0  0.1   9180  1048 pts/0    R+   14:51   0:00 grep --color=auto nginx
从容停止nginx,等所有请求结束后关闭服务
kill -QUIT  pid
nginx快速停止命令,立刻关闭进程
kill -TERM pid
nginx强制停止命令
kill -9 pid
```

### 安装
---
```shell
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim
```
### 配置
---
#### 错误页面配置
`error_page   500 502 503 504  /50x.html;`
自定义404错误页面
`error_page 404  /404_error.html;`显示根目录的404页面
错误页面配置成外服务器的页面
`error_page  404 http://baidu.com;`
#### 访问权限配置
```shell
location / {
        allow  45.76.202.231; // 允许这个ip地址访问
        deny   all;
}
```
上面的配置表示只允许45.76.202.231进行访问，其他的IP是禁止访问的。但是如果我们把deny all指令，移动到 allow 45.76.202.231之前，会发生什么那？会发现所有的IP都不允许访问了。**这说明了一个问题：就是在同一个块下的两个权限指令，先出现的设置会覆盖后出现的设置（也就是谁先触发，谁起作用）.**
##### 1.控制文件夹权限
在工作中，访问权限的控制需求更加复杂，例如，对于网站下的img（图片目录）是运行所有用户访问，但对于网站下的admin目录则只允许公司内部固定IP访问。这时候仅靠deny和allow这两个指令，是无法实现的。我们需要location块来完成相关的需求匹配。
```shell
location =/img{
        allow all;
}
location =/admin{
        deny all;
}
```
`=`号代表精确匹配，使用了`=`后是根据其后的模式进行精确匹配。这个直接关系到我们网站的安全.
##### 2.控制文件类型权限
只有精确匹配有时是完不成我们的工作任务的，比如现在我们要禁止访问所有php的页面，php的页面大多是后台的管理或者接口代码，所以为了安全我们经常要禁止所有用户访问，而只开放公司内部访问的。
```shell
location ~\.php$ {
        deny all;
}
```
这样我们再访问的时候就不能访问以php结尾的文件了
#### nginx设置虚拟主机
虚拟主机是指在一台物理主机服务器上划分出多个磁盘空间，每个磁盘空间都是一个虚拟主机，每台虚拟主机都可以对外提供Web服务，并且互不干扰。在外界看来，虚拟主机就是一台独立的服务器主机，这意味着用户能够利用虚拟主机把多个不同域名的网站部署在同一台服务器上，而不必再为简历一个网站单独购买一台服务器，既解决了维护服务器技术的难题，同时又极大地节省了服务器硬件成本和相关的维护费用.
配置虚拟主机,就是新增一个server.
```shell
server {
        listen       7000;
        server_name  180.76.58.86; ip地址或者是域名

        location / {
		    root /usr/local/nginx/html/home;
		    index  index.html index.htm;
	   }
}
```

#### nginx反向代理的设置
现在的web模式基本的都是标准的CS结构，即Client端到Server端。那代理就是在Client端和Server端之间增加一个提供特定功能的服务器，这个服务器就是我们说的代理服务器。
```shell
server{
        listen 80;
        server_name nginx2.jspang.com;
        location / {
               proxy_pass http://jspang.com;
        }
}
```
#### nginx适配pc或移动设备
现在很多网站都是有了PC端和H5站点的，因为这样就可以根据客户设备的不同，显示出体验更好的，不同的页面了。
$http_user_agent的使用：
Nginx通过内置变量$http_user_agent，可以获取到请求客户端的userAgent，就可以用户目前处于移动端还是PC端，进而展示不同的页面给用户。
```shell
server{
     listen 80;
     server_name nginx2.jspang.com;
     location / {
      root /usr/share/nginx/pc;
      if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
         root /usr/share/nginx/mobile;
      }
      index index.html;
     }
}
```

#### nginx的Gzip压缩配置
Gzip是网页的一种网页压缩技术，经过gzip压缩后，页面大小可以变为原来的30%甚至更小。更小的网页会让用户浏览的体验更好，速度更快。gzip网页压缩的实现需要浏览器和服务器的支持。
Nginx提供了专门的gzip模块，并且模块中的指令非常丰富。
- gzip : 该指令用于开启或 关闭gzip模块。
- gzip_buffers : 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。
- gzip_comp_level : gzip压缩比，压缩级别是1-9，1的压缩级别最低，9的压缩级别最高。压缩级别越高压缩率越大，压缩时间越长。
- gzip_disable : 可以通过该指令对一些特定的User-Agent不使用压缩功能。
- gzip_min_length:设置允许压缩的页面最小字节数，页面字节数从相应消息头的Content-length中进行获取。
- gzip_http_version：识别HTTP协议版本，其值可以是1.1.或1.0.
- gzip_proxied : 用于设置启用或禁用从代理服务器上收到相应内容gzip压缩。
- gzip_vary : 用于在响应消息头中添加Vary：Accept-Encoding,使代理服务器根据请求头中的Accept-Encoding识别是否启用gzip压缩。

```shell
http {
   .....
    gzip on;
    gzip_types text/plain application/javascript text/css;
   .....
}
```
### 参考
---
[一个前端必会的 Nginx免费教程 (共11集)](https://jspang.com/detailed?id=39)
[Nginx配置文件详解](https://www.cnblogs.com/54chensongxia/p/12938929.html)
[Nginx 入门（一）Nginx 配置Web服务器](https://www.jianshu.com/p/734ef8e5a712)