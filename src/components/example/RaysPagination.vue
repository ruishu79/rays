<template>
    <div class="example_body">
        <h2>Pagination分页</h2>
        <div><p>当多条数据,不弄完全展示的情况下,进行分页展示操作</p></div>
        <h4>统一引用方式</h4>
        <mark>
    <textarea class="rs-mark-text">
        <script>
            import {rsPagination} from 'rays'
            export default{
                components:{
                    rsPagination
                }
            }
        </script>
    </textarea>
        </mark>
        <h4 class="sample_line">1.基础分页</h4>
        <p>
            <div class="box">
                <ul>
                    <li v-for="data in list">
                        <span class="bLeft">{{data.text}}</span>
                        <span class="bRight">{{data.index}}</span>
                    </li>
                </ul>
                <div>
                    <div class="pull-left">
                        <rs-pagination :async="false" :data="lists" :is-lens="false"></rs-pagination>
                        <!-- <button class="btn btn-default" @click="refresh">刷新</button> -->
                    </div>
                </div>
            </div>
        </p>
        <p>为了避免各个分页间相互影响,同页面内添加多个分页需将分页部分分离成独立模块,再对分页模块进行引用</p>
        <div v-show="codeBox1">
            <mark>
    <textarea class="rs-mark-text">
        <template>
            <rs-pagination :async="false" :data="lists" :is-lens="false"></rs-pagination>
        </template>
    </textarea>
            </mark>
            <mark>
    <textarea class="rs-mark-text">
        <script>
            import {rsTable} from 'rays'
            export default{
                components:{
                    rsTable
                },
                data(){
                    return{
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
                        ],
                        list: []
                    }
                    events: {
                        'data' (data) {
                            this.list = data
                        },
                    }
                }
            }
        </script>
    </textarea>
            </mark>
        </div>
        <p><rs-button @click="codeToggle1">{{codeBtn1}}</rs-button></p>
        <h4 class="sample_line">2.可设置分页</h4>
        <list-frame></list-frame>
        <p>通过添加<em>lens</em>属性来添加设置每页展示信息条数功能,通过设置<em>page-len</em>属性,设置分页最大展示页数</p>
        <div v-show="codeBox2">
            <mark>
    <textarea class="rs-mark-text">
        <template>
            <rs-pagination :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param"></rs-pagination>
        </template>
    </textarea>
            </mark>
            <mark>
    <textarea class="rs-mark-text">
        <script>
            import {rsTable} from 'rays'
            export default{
                components:{
                    rsTable
                },
                data(){
                    return{
                        lenArr: [2, 5, 10], 
                        pageLen: 5, 
                        param: {},
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
                            略...
                        ],
                        list: []
                    }
                    events: {
                        'data' (data) {
                            this.list = data
                        },
                    }
                }
            }
        </script>
    </textarea>
            </mark>
        </div>
        <p><rs-button @click="codeToggle2">{{codeBtn2}}</rs-button></p>
        <h3>API</h3>
        <h4>props</h4>
        <p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
    </div>
</template>
<style>
    .box{overflow: hidden; font-size: 12px; margin-top: 20px;}
    .box>ul{padding-left: 0; list-style-type: none; width: 100%;}
    .box>ul>li{border-bottom: 1px dotted #ddd; line-height: 36px; padding: 0 10px; overflow: hidden;}
    .bLeft{float: left;}
    .bRight{float: right; color: #999;}
</style>
<script>
import listFrame from '../view/RaysPaginationFrame.vue'
import {rsPagination} from 'rays'
import {rsTable} from 'rays'
import {rsButton} from 'rays'
import Mark from '../../mark.vue'
//import ListFrame from 'RaysBox.vue'

export default {
    data () {
            return {
                apiOption:{
                    align:'left'
                },
                apiData:{
                    columns:[{
                        key: 'attr',
                        value: '属性',
                    },{
                        key: 'instruction',
                        value: '说明'
                    },{
                        key: 'type',
                        value: '类型',
                    },{
                        key: 'default',
                        value: '默认',
                    }],
                    tdDate:[
                        {
                            attr: 'async',
                            instruction: '是否请求服务器端数据',
                            type: 'Boolean',
                            default: 'false',
                        },
                        {
                            attr: 'len',
                            instruction: '用于设置每页显示信息条数',
                            type: 'Number',
                            default: '5',
                        },
                        {
                            attr: 'is-lens',
                            instruction: '是否有可设置的显示信息条数功能',
                            type: 'Boolean',
                            default: 'true',
                        },
                        {
                            attr: 'lens',
                            instruction: '配置可设置的显示信息条数,提供可选的选项',
                            type: 'Array',
                            default: '[5,10,20]',
                        },
                        {
                            attr: 'data',
                            instruction: '数据内容,使用服务器数据时无需使用',
                            type: 'Array',
                            default: '空',
                        },
                        {
                            attr: 'url',
                            instruction: 'AJAX地址,请求路径',
                            type: 'String',
                            default: '空',
                        },
                        {
                            attr: 'param',
                            instruction: '向服务器传递的参数',
                            type: 'Object',
                            default: '空',
                        },
                        {
                            attr: 'pageLen',
                            instruction: '配置可显示的分页数量',
                            type: 'Number',
                            default: '5',
                        },
                        {
                            attr: 'activeNum',
                            instruction: '设置当前的显示页',
                            type: 'Number',
                            default: '0',
                        }
                    ]
                },
                check01:{
                    checked:true
                },
                codeBox1:false,
                codeBtn1:"显示代码",
                codeBox2:false,
                codeBtn2:"显示代码",
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
                ], // 表格原始数据
                list: [] // 分页组件传回的分页后数据
            }
        },
        components: {
            rsPagination,
            rsTable,
            rsButton,
            Mark,
            listFrame
        },
        methods: {
            refresh () {
                this.$refs.page.refresh()
                console.log(this.lists)
            },
            codeToggle1(){
                if(!this.codeBox1)
                {
                    this.codeBtn1="隐藏代码"
                    this.codeBox1=true
                }
                else
                {
                    this.codeBtn1="显示代码"
                    this.codeBox1=false
                }
            },
            codeToggle2(){
                if(!this.codeBox2)
                {
                    this.codeBtn2="隐藏代码"
                    this.codeBox2=true
                }
                else
                {
                    this.codeBtn2="显示代码"
                    this.codeBox2=false
                }
            }
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