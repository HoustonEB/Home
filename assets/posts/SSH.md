---
authorName: Yu
title: SSH
date: 2021-01-26 11:09:07
categories: SSH
tags: SSH
---

## SSH
---
SSH 是 Linux 系统的登录工具,现在广泛用于服务器登录和各种加密通信.
SSH（Secure Shell 的缩写）是一种网络协议,用于加密两台计算机之间的通信,并且支持各种身份验证机制.
实务中,它主要用于保证远程登录和远程通信的安全,任何网络服务都可以用这个协议来加密.

### SSH是什么
历史上,网络主机之间的通信是不加密的,属于明文通信.这使得通信很不安全,一个典型的例子就是服务器登录.登录远程服务器的时候,需要将用户输入的密码传给服务器,如果这个过程是明文通信,就意味着传递过程中,线路经过的中间计算机都能看到密码,这是很可怕的.<br>
SSH 就是为了解决这个问题而诞生的,它能够加密计算机之间的通信,保证不被窃听或篡改.它还能对操作者进行认证（authentication）和授权（authorization）.明文的网络协议可以套用在它里面,从而实现加密.
### SSH 架构
SSH 的软件架构是服务器-客户端模式（Server - Client）.在这个架构中,SSH 软件分成两个部分: 向服务器发出请求的部分,称为客户端（client）,OpenSSH 的实现为`ssh`;接收客户端发出的请求的部分,称为服务器（server）,OpenSSH 的实现为`sshd`.<br>
另外,OpenSSH 还提供一些辅助工具软件（比如 `ssh-keygen`, `ssh-agent`）和专门的客户端工具（比如 `scp` 和 `sftp`）.

### 基本用法
Linux 系统一般都自带 ssh,如果没有就需要安装.
```shell
# Ubuntu 和 Debian
$ sudo apt install openssh-client

# CentOS 和 Fedora
$ sudo dnf install openssh-clients
```
安装以后,可以使用-V参数输出版本号,查看一下是否安装成功.
```shell
$ ssh -V
```
ssh 最常见的用途就是登录服务器,这要求服务器安装并正在运行 SSH 服务器软件.
ssh 登录服务器的命令如下.
```shell
$ ssh hostname
```
上面命令中,hostname是主机名,它可以是域名,也可能是 IP 地址或局域网内部的主机名.不指定用户名的情况下,将使用客户端的当前用户名,作为远程服务器的登录用户名.如果要指定用户名,可以采用下面的语法.
```shell
$ ssh user@hostname
```
上面的命令中,用户名和主机名写在一起了,之间使用@分隔.
用户名也可以使用ssh的-l参数指定,这样的话,用户名和主机名就不用写在一起了.
```shell
$ ssh -l username host
```
ssh 默认连接服务器的22端口,`-p`参数可以指定其他端口.
```shell
$ ssh -p 8821 foo.com
```
上面命令连接服务器foo.com的8821端口.
### 连接流程
ssh 连接远程服务器后,首先有一个验证过程,验证远程服务器是否为陌生地址.
如果是第一次连接某一台服务器,命令行会显示一段文字,表示不认识这台机器,提醒用户确认是否需要连接.
```shell
The authenticity of host 'foo.com (192.168.121.111)' can't be established.
ECDSA key fingerprint is SHA256:Vybt22mVXuNuB5unE++yowF7lgA/9/2bLSiO3qmYWBY.
Are you sure you want to continue connecting (yes/no)?
```
上面这段文字告诉用户,`foo.com`这台服务器的指纹是陌生的,让用户选择是否要继续连接（输入 yes 或 no）.<br>
所谓`服务器指纹`,指的是 SSH 服务器公钥的哈希值.每台 SSH 服务器都有唯一一对密钥,用于跟客户端通信,其中公钥的哈希值就可以用来识别服务器.
下面的命令可以查看某个公钥的指纹.
```shell
$ ssh-keygen -l -f /etc/ssh/ssh_host_ecdsa_key.pub
256 da:24:43:0b:2e:c1:3f:a1:84:13:92:01:52:b4:84:ff   (ECDSA)
```
上面的例子中,`ssh-keygen -l -f`命令会输出公钥`/etc/ssh/ssh_host_ecdsa_key.pub`的指纹.
ssh 会将本机连接过的所有服务器公钥的指纹,都储存在本机的`~/.ssh/known_hosts`文件中.每次连接服务器时,通过该文件判断是否为陌生主机（陌生公钥）.
在上面这段文字后面,输入yes,就可以将当前服务器的指纹也储存在本机`~/.ssh/known_hosts`文件中,并显示下面的提示.以后再连接的时候,就不会再出现警告了.
```shell
Warning: Permanently added 'foo.com (192.168.121.111)' (RSA) to the list of known hosts
```
然后,客户端就会跟服务器建立连接.接着,ssh 就会要求用户输入所要登录账户的密码.用户输入并验证密码正确以后,就能登录远程服务器的 Shell 了.
### 服务器密钥变更
服务器指纹可以防止有人恶意冒充远程主机.如果服务器的密钥发生变更（比如重装了 SSH 服务器）,客户端再次连接时,就会发生公钥指纹不吻合的情况.这时,客户端就会中断连接,并显示一段警告信息.
```shell
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that the RSA host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
77:a5:69:81:9b:eb:40:76:7b:13:04:a9:6c:f4:9c:5d.
Please contact your system administrator.
Add correct host key in /home/me/.ssh/known_hosts to get rid of this message.
Offending key in /home/me/.ssh/known_hosts:36
```
上面这段文字的意思是,该主机的公钥指纹跟`~/.ssh/known_hosts`文件储存的不一样,必须处理以后才能连接.这时,你需要确认是什么原因,使得公钥指纹发生变更,到底是恶意劫持,还是管理员变更了 SSH 服务器公钥.<br>
如果新的公钥确认可以信任,需要继续执行连接,你可以执行下面的命令,将原来的公钥指纹从`~/.ssh/known_hosts`文件删除.
```shell
$ ssh-keygen -R hostname
删除那个主机的指纹,并生成known_hosts.old文件
```
上面命令中,hostname是发生公钥变更的主机名.
除了使用上面的命令,你也可以手工修改`known_hosts`文件,将公钥指纹删除.
删除了原来的公钥指纹以后,重新执行 ssh 命令连接远程服务器,将新的指纹加入`known_hosts`文件,就可以顺利连接了.

### ssh 命令行配置项
1. `-F`
`-F`参数指定配置文件.
```shell
$ ssh -F /usr/local/ssh/other_config
```
上面命令指定使用配置文件other_config.
2. `-l`
`-l`参数指定远程登录的账户名.
```shell
$ ssh -l sally server.example.com
```
等同于`$ ssh sally@server.example.com`
3. `-p`
`-p`参数指定 SSH 客户端连接的服务器端口.
```shell
$ ssh -p 2035 server.example.com
```
上面命令连接服务器的2035端口.
4. `-t`
`-t`参数在 ssh 直接运行远端命令时,提供一个互动式 Shell.
```shell
$ ssh -t server.example.com emacs
```

### 客户端配置文件
#### 位置
SSH 客户端的全局配置文件是`/etc/ssh/ssh_config`,用户个人的配置文件在`~/.ssh/config`,优先级高于全局配置文件.
除了配置文件,`~/.ssh`目录还有一些用户个人的密钥文件和其他文件.下面是其中一些常见的文件.
- ~/.ssh/id_ecdsa: 用户的 ECDSA 私钥.
- ~/.ssh/id_ecdsa.pub: 用户的 ECDSA 公钥.
- ~/.ssh/id_rsa: 用于 SSH 协议版本2 的 RSA 私钥.
- ~/.ssh/id_rsa.pub: 用于SSH 协议版本2 的 RSA 公钥.
- ~/.ssh/identity: 用于 SSH 协议版本1 的 RSA 私钥.
- ~/.ssh/identity.pub: 用于 SSH 协议版本1 的 RSA 公钥.
- ~/.ssh/known_hosts: 包含 SSH 服务器的公钥指纹.

#### 主机设置
用户个人的配置文件`~/.ssh/config`,可以按照不同服务器,列出各自的连接参数,从而不必每一次登录都输入重复的参数.下面是一个例子.
```shell
Host *
     Port 2222

Host remoteserver
     HostName remote.example.com
     User neo
     Port 2112
```
上面代码中,`Host *`表示对所有主机生效,后面的`Port 2222`表示所有主机的默认连接端口都是`2222`,这样就不用在登录时特别指定端口了.这里的缩进并不是必需的,只是为了视觉上,易于识别针对不同主机的设置.<br>
后面的`Host remoteserver`表示,下面的设置只对主机`remoteserver`生效.`remoteserver`只是一个别名,具体的主机由`HostName`命令指定,`User`和`Port`这两项分别表示用户名和端口.这里的`Port`会覆盖上面`Host *`部分的`Port`设置.<br>
以后,登录`remote.example.com`时,只要执行`ssh remoteserver`命令,就会自动套用`config`文件里面指定的参数.
单个主机的配置格式如下.
```shell
$ ssh remoteserver
# 等同于
$ ssh -p 2112 neo@remote.example.com
```
`Host`命令的值可以使用通配符,比如`Host *`表示对所有主机都有效的设置,`Host *.edu`表示只对一级域名为`.edu`的主机有效的设置.它们的设置都可以被单个主机的设置覆盖.
#### 配置命令的语法
ssh 客户端配置文件的每一行,就是一个配置命令.配置命令与对应的值之间,可以使用空格,也可以使用等号.
```shell
Compression yes
# 等同于
Compression = yes
```
`#`开头的行表示注释,会被忽略.空行等同于注释.

#### 主要配置命令
下面是 ssh 客户端的一些主要配置命令,以及它们的范例值.
```shell
AddressFamily inet: 表示只使用 IPv4 协议.如果设为inet6,表示只使用 IPv6 协议.
BindAddress 192.168.10.235: 指定本机的 IP 地址（如果本机有多个 IP 地址）.
CheckHostIP yes: 检查 SSH 服务器的 IP 地址是否跟公钥数据库吻合.
Ciphers blowfish,3des: 指定加密算法.
Compression yes: 是否压缩传输信号.
ConnectionAttempts 10: 客户端进行连接时,最大的尝试次数.
ConnectTimeout 60: 客户端进行连接时,服务器在指定秒数内没有回复,则中断连接尝试.
DynamicForward 1080: 指定动态转发端口.
GlobalKnownHostsFile /users/smith/.ssh/my_global_hosts_file: 指定全局的公钥数据库文件的位置.
Host server.example.com: 指定连接的域名或 IP 地址,也可以是别名,支持通配符.Host命令后面的所有配置,都是针对该主机的,直到下一个Host命令为止.
HostKeyAlgorithms ssh-dss,ssh-rsa: 指定密钥算法,优先级从高到低排列.
HostName myserver.example.com: 在Host命令使用别名的情况下,HostName指定域名或 IP 地址.
IdentityFile keyfile: 指定私钥文件.
LocalForward 2001 localhost:143: 指定本地端口转发.
LogLevel QUIET: 指定日志详细程度.如果设为QUIET,将不输出大部分的警告和提示.
MACs hmac-sha1,hmac-md5: 指定数据校验算法.
NumberOfPasswordPrompts 2: 密码登录时,用户输错密码的最大尝试次数.
PasswordAuthentication no: 指定是否支持密码登录.不过,这里只是客户端禁止,真正的禁止需要在 SSH 服务器设置.
Port 2035: 指定客户端连接的 SSH 服务器端口.
PreferredAuthentications publickey,hostbased,password: 指定各种登录方法的优先级.
Protocol 2: 支持的 SSH 协议版本,多个版本之间使用逗号分隔.
PubKeyAuthentication yes: 是否支持密钥登录.这里只是客户端设置,还需要在 SSH 服务器进行相应设置.
RemoteForward 2001 server:143: 指定远程端口转发.
SendEnv COLOR: SSH 客户端向服务器发送的环境变量名,多个环境变量之间使用空格分隔.环境变量的值从客户端当前环境中拷贝.
ServerAliveCountMax 3: 如果没有收到服务器的回应,客户端连续发送多少次keepalive信号,才断开连接.该项默认值为3.
ServerAliveInterval 300: 客户端建立连接后,如果在给定秒数内,没有收到服务器发来的消息,客户端向服务器发送keepalive消息.如果不希望客户端发送,这一项设为0.
StrictHostKeyChecking yes: yes表示严格检查,服务器公钥为未知或发生变化,则拒绝连接.no表示如果服务器公钥未知,则加入客户端公钥数据库,如果公钥发生变化,不改变客户端公钥数据库,输出一条警告,依然允许连接继续进行.ask（默认值）表示询问用户是否继续进行.
TCPKeepAlive yes: 客户端是否定期向服务器发送keepalive信息.
User userName: 指定远程登录的账户名.
UserKnownHostsFile /users/smith/.ssh/my_local_hosts_file: 指定当前用户的known_hosts文件（服务器公钥指纹列表）的位置.
VerifyHostKeyDNS yes: 是否通过检查 SSH 服务器的 DNS 记录,确认公钥指纹是否与known_hosts文件保存的一致.
```

### 密钥是什么

密钥（key）是一个非常大的数字,通过加密算法得到.对称加密只需要一个密钥,非对称加密需要两个密钥成对使用,分为公钥`public key`和私钥`private key`.<br>
SSH 密钥登录采用的是非对称加密,每个用户通过自己的密钥登录.其中,私钥必须私密保存,不能泄漏；公钥则是公开的,可以对外发送.它们的关系是,公钥和私钥是一一对应的,每一个私钥都有且仅有一个对应的公钥,反之亦然.<br>
如果数据使用公钥加密,那么只有使用对应的私钥才能解密,其他密钥都不行；反过来,如果使用私钥加密（这个过程一般称为“签名”）,也只有使用对应的公钥解密.
### 密钥登录的过程 
SSH 密钥登录分为以下的步骤.
预备步骤,客户端通过`ssh-keygen`生成自己的公钥和私钥.
第一步,手动将客户端的公钥放入远程服务器的指定位置.
第二步,客户端向服务器发起 SSH 登录的请求.
第三步,服务器收到用户 SSH 登录的请求,发送一些随机数据给用户,要求用户证明自己的身份.
第四步,客户端收到服务器发来的数据,使用私钥对数据进行签名,然后再发还给服务器.
第五步,服务器收到客户端发来的加密签名后,使用对应的公钥解密,然后跟原始数据比较.如果一致,就允许用户登录
### ssh-key命令: 生成密钥

#### 基本用法
密钥登录时,首先需要生成公钥和私钥.OpenSSH 提供了一个工具程序`ssh-keygen`命令,用来生成密钥.
直接输入`ssh-keygen`,程序会询问一系列问题,然后生成密钥.
```shell
$ ssh-keygen
```
通常做法是使用-t参数,指定密钥的加密算法.
```shell
$ ssh-keygen -t dsa
```
上面示例中,-t参数用来指定密钥的加密算法,一般会选择dsa算法或rsa算法.注意,这个参数没有默认值.
输入上面的命令以后,`ssh-keygen`会要求用户回答一些问题.
```shell
$ ssh-keygen -t dsa
Generating public/private dsa key pair.
Enter file in which to save the key (/home/username/.ssh/id_dsa):  press ENTER
Enter passphrase (empty for no passphrase): ********
Enter same passphrase again: ********
Your identification has been saved in /home/username/.ssh/id_dsa.
Your public key has been saved in /home/username/.ssh/id_dsa.pub.
The key fingerprint is:
14:ba:06:98:a8:98:ad:27:b5:ce:55:85:ec:64:37:19 username@shell.isp.com
```
上面示例中,执行`ssh-keygen`命令以后,会出现第一个问题,询问密钥保存的文件名,默认是`~/.ssh/id_dsa文件`,这个是私钥的文件名,对应的公钥文件`~/.ssh/id_dsa.pub`是自动生成的.用户的密钥一般都放在主目录的.ssh目录里面.
如果选择rsa算法,生成的密钥文件默认就会是`~/.ssh/id_rsa`（私钥）和`~/.ssh/id_rsa.pub`（公钥）.
接着,就会是第二个问题,询问是否要为私钥文件设定密码保护`passphrase`.这样的话,即使入侵者拿到私钥,还是需要破解密码.如果为了方便,不想设定密码保护,可以直接按回车键,密码就会为空.后面还会让你再输入一次密码,两次输入必须一致.注意,这里“密码”的英文单词是 `passphrase`,这是为了避免与 Linux 账户的密码单词 password 混淆,表示这不是用户系统账户的密码.
最后,就会生成私钥和公钥,屏幕上还会给出公钥的指纹,以及当前的用户名和主机名作为注释,用来识别密钥的来源.
公钥文件和私钥文件都是文本文件,可以用文本编辑器看一下它们的内容.公钥文件的内容类似下面这样.
```shell
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIEAvpB4lUbAaEbh9u6HLig7amsfywD4fqSZq2ikACIUBn3GyRPfeF93l/
weQh702ofXbDydZAKMcDvBJqRhUotQUwqV6HJxqoqPDlPGUUyo8RDIkLUIPRyq
ypZxmK9aCXokFiHoGCXfQ9imUP/w/jfqb9ByDtG97tUJF6nFMP5WzhM= username@shell.isp.com
```
上面示例中,末尾的`username@shell.isp.com`是公钥的注释,用来识别不同的公钥,表示这是哪台主机（shell.isp.com）的哪个用户（username）的公钥,不是必需项.
{% note warning %}
注意,公钥只有一行.因为它太长了,所以上面分成三行显示.
{% endnote %}
下面的命令可以列出用户所有的公钥.
```shell
$ ls -l ~/.ssh/id_*.pub
```
生成密钥以后,建议修改它们的权限,防止其他人读取.
```shell
$ chmod 600 ~/.ssh/id_rsa
$ chmod 600 ~/.ssh/id_rsa.pub
```

### 连接远程服务器

### 命令
| 命令 | 描述 |
| --- | --- |
| `ssh -i /Users/v_yuzhuang01/.ssh/id_rsa root@180.76.58.86` | 使用密钥连接远端服务器 |
| `ssh -i  root@180.76.58.86` | 使用密钥连接远端服务器 |

### 相关文章
[SSH 教程](https://wangdoc.com/ssh/)