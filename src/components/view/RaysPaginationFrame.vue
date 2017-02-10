<template>
	<p>
	    <div class="box">
	        <ul>
	            <li v-for="data in list">
	                <span class="bLeft">{{data.text}}</span>
	                <span class="bRight">{{data.index}}</span>
	            </li>
	        </ul>
	        <div>
	            <rs-pagination :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param" :active-num="2"></rs-pagination>
	        </div>
	    </div>
	</p>
</template>
<style>
    .box{overflow: hidden; font-size: 12px; margin-top: 20px;}
    .box>ul{padding-left: 0; list-style-type: none; width: 100%;}
    .box>ul>li{border-bottom: 1px dotted #ddd; line-height: 36px; padding: 0 10px; overflow: hidden;}
    .bLeft{float: left;}
    .bRight{float: right; color: #999;}
</style>
<script>
import {rsPagination} from 'rays'
export default {
    data () {
        return {
            lenArr: [2, 5, 10], // 每页显示长度设置
            pageLen: 5, // 可显示的分页数
            //url: '/static/data.json', // 请求路径
            param: {
            }, // 传递参数
            lists: [
                {
                    text:'ECMAScript 6简介',
                    index:'2017-1-1'
                },
                {
                    text:'let和const命令',
                    index:'2017-1-1'
                },
                {
                    text:'变量的解构赋值',
                    index:'2017-1-1'
                },
                {
                    text:'字符串的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'正则的扩展',
                    index:'2017-1-1'
                },

                {
                    text:'数值的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'数组的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'函数的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'对象的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'ECMAScript 6简介',
                    index:'2017-1-1'
                },
                {
                    text:'let和const命令',
                    index:'2017-1-1'
                },
                {
                    text:'变量的解构赋值',
                    index:'2017-1-1'
                },
                {
                    text:'字符串的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'正则的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'数值的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'数组的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'函数的扩展',
                    index:'2017-1-1'
                },
                {
                    text:'对象的扩展',
                    index:'2017-1-1'
                }
            ], // 表格原始数据
            list: [] // 分页组件传回的分页后数据
        }
    },
    components: {
        rsPagination,
    },
    events: {
        // 分页组件传回的表格数据
        'data' (data) {
            this.list = data
        },
        // 刷新数据
        'refresh' () {
            this.refresh()
        }
    }
}
</script>
