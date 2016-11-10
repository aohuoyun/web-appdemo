var path = require('path')
var postcss = require('postcss')

exports.postfactory = function (opts) {
    return [
    	//css中引入内联样式表
    	require('postcss-import')(),
    	//css混合宏的使用
    	require('postcss-mixins')(),
    	//css的for循环插件  必须在postcss-simple-vars之前运行
    	require('postcss-for')(),
    	require('postcss-each')(),
    	//类似于sass语法的css变量定义 
    	require('postcss-simple-vars')({
    		variables: commoncss.common
    	}),
        //sass扩展语法
        require('postcss-sass-extend')(),
    	//css层级写法  https://github.com/postcss/postcss-nested
    	require('postcss-nested')(),
    	//css选择器简写
    	require('postcss-selector-matches')(),
        require('postcss-selector-not')(),
      	//css缩写与简写  crip的缩写列表 https://github.com/johnie/crip-css-properties
        require('postcss-alias')(),
        require('postcss-crip')(),
        //css浏览器兼容
		require('autoprefixer')({ browsers: ['last 2 versions'] }),
        //css计算
        require("postcss-calc")
    ];
}