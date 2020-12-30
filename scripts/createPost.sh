#!/bin/bash
echo "请输入文档名:"
read file_name
if [ -z $file_name ]
then
    echo "ERROR: 文档名不能为空"
    exit 1
fi
create_date=`date '+%Y-%m-%d %H:%M:%S'`
cd /Users/v_yuzhuang01/Documents/Home/assets/posts

# 文件存在结束
if [ -e ./$file_name.md ] 
then
    echo "文件已存在"
    exit 1
fi

echo "---
authorName: Yu
title: $file_name
date: $create_date
categories: $file_name
tags: $file_name
---" > "$file_name".md
mkdir $file_name