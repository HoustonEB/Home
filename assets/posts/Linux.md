---
title: Linux
date: 2019-05-04 18:35:32
tags: Linux命令
---
## Linux常用命令
---
```bash
cd 进入目录

pwd 列出当前的路径

ls 列出目录的结构
  -a 列出隐藏的文件

mkdir 创建文件夹

cat 查看文件的内容
<!-- more -->
touch 文件名.格式 创建指定的文件

echo '文件内容' >> 文件名.文件格式 创建文件内容和文件

rm 删除文件和文件夹
  -rf 递归删除所有子目录和子文件

rmdir 只能删除空目录
```
### 复制文件
```sh
cp 复制目录时不会复制子目录和子文件
  -r 递归复制,会复制子目录和子文件
```
### 移动文件
```sh
mv 移动文件夹和目录, 还可以重命名文件和目录
eg: mv test.md test.txt 重命名
    mv test.md .. 移动到上一层目录
    mv test.md ../test2/ 移动到上一层的test2的目录下
    mv test.md ../test2 移动到上一层并重新命名为test2
    mv test1 test2 将目录test1重命名为test2
```
### 压缩文件
---
#### zip
```sh
将目录里的文件压缩到filename.zip
zip -r filename.zip directory
解压文件
unzip
```
#### gzip
```sh
递归压缩目录里的所有文件,gzip命令不能压缩目录
gzip -r directoryName 
递归解压目录里的文件
gzip -dr directoryName
在目录里 gzip -d *
gunzip *
```
| 参数 | 描述 |
| -- | -- |
| -c | 将压缩数据输出到标准输出中，并保留源文件. |
| -d | 对压缩文件进行解压缩 |
| -r | 递归压缩指定目录下以及子目录下的所有文件 |
| -v | 对于每个压缩和解压缩的文件，显示相应的文件名和压缩比 |
| -l | 对每一个压缩文件，显示以下字段 压缩文件的大小；未压缩文件的大小；压缩比；未压缩文件的名称|
| -数字 |	用于指定压缩等级，-1 压缩等级最低，压缩比最差；-9 压缩比最高。默认压缩比是 -6 |

### vim

| 命令 | 描述 |
| -- | -- |
| vi | 编辑文件 |
| i | 编辑内容 |
| esc | 退出操作 |
| shift+z+z | 保存退出vi模式|
