"use strict";
// 初始化一个评论
var json = [
    {
        id: 1,
        name: '小明',
        data: '文章很好!'
    },
    {
        id: 2,
        name: '小刚',
        data: '哈哈哈哈哈'
    },
];
var jsonData = JSON.stringify(json);
localStorage.setItem('ts-demo1', jsonData);
