<style>
.rs_input_box{padding-bottom: 15px; position: relative;}
.rs_input{ width: 100%; background: #fff; border: 1px solid #eaeaed; height: 32px; line-height: 32px; border-radius: 4px; color: rgba(52,73,94,1); padding: 0 10px; font-size: 12px; outline: none;}
.rs_area{ width: 100%; background: #fff; border: 1px solid #eaeaed; line-height: 18px; border-radius: 4px; color: rgba(52,73,94,1); padding: 8px 10px; font-size: 12px; outline: none; resize: none;}
.rs_input:focus,.rs_input:hover{border-color: #1ABC9C; box-shadow: 0 0 8px rgba(26,188,156,.2)}
.rs_input_primary{border: 1px solid #3498DB;}
.rs_input_success{border: 1px solid #1ABC9C;}
.rs_input_warning{border: 1px solid #F1C40F;}
.rs_input_error{border: 1px solid #E74C3C;}
.rs_input_primary:focus,.rs_input_primary:hover{border: 1px solid #3498DB; box-shadow: none;}
.rs_input_success:focus,.rs_input_success:hover{border: 1px solid #1ABC9C; box-shadow: none;}
.rs_input_warning:focus,.rs_input_warning:hover{border: 1px solid #F1C40F; box-shadow: none;}
.rs_input_error:focus,.rs_input_error:hover{border: 1px solid #E74C3C; box-shadow: none;}
.rs_input_disable{background: #ECF0F1; cursor: not-allowed!important;}
.rs_input_disable:focus,.rs_input_disable:hover{border: 1px solid #eaeaed; box-shadow: none;}
.rs_input_label_head{font-weight: normal; font-size: 12px; padding-left: 6px;}
.rs_input_label_line{font-weight: normal; float: left; width: 30%; text-align: right; padding-right: 10px; line-height: 32px; font-size: 12px; margin-bottom: 0;}
.rs_input_label_head .rs_input_second_label{margin-left: 8px; color: #95A5A6;}
.rs_input_label_line .rs_input_second_label{margin-left: 3px; color: #95A5A6;}
.rs_input_important{margin-left: 3px; color: #E74C3C; font-size: 14px; position: relative; top: 3px; font-weight: bold;}
.rs_input_line{width: 70%; float: left;}
.rs_input_state_icon{position: absolute; right: 6px; top: 32px; width: 18px; height: 18px; line-height: 18px; font-size: 18px;}
.fa_nohead{top:7px;}
.rs_input_tip{font-size: 12px; color: #95A5A6; line-height: 24px; padding-left: 6px; margin-bottom: 0;}
.infoColor{color: #3498DB;}
.successColor{color: #1ABC9C;}
.warningColor{color: #E67E22;}
.errorColor{color: #E74C3C;}
.clear{clear: both;}
</style>
<template>
    <div class="rs_input_box">
        <label v-if="labelType=='line'&&label" class="rs_input_label_line">{{label}}<span class="rs_input_second_label" v-if="secondLabel">{{secondLabel}}</span><span class="rs_input_important" v-if="important">*</span></label>
        <label v-if="labelType=='head'&&label" class="rs_input_label_head">{{label}}<span class="rs_input_second_label" v-if="secondLabel">{{secondLabel}}</span><span class="rs_input_important" v-if="important">*</span></label>
        <input 
            class="rs_input" 
            :class="mainStyle" 
            :type="type"
            :placeholder="holder"
            :disabled="disable"
            v-model="text"
            @input="limitSuccess()"
            @change="limitError()"
            v-if="!area">
        <textarea 
            class="rs_area" 
            :class="mainStyle" 
            :type="type"
            :placeholder="holder"
            :disabled="disable"
            v-model="text"
            @input="limitSuccess()"
            @change="limitError()"
            v-if="area"
            v-bind:style="{height:row*18+18+'px'}"></textarea>
        <div class="clear"></div>
        <div class="fa rs_input_state_icon" :class="stateIcon" v-if="state||limitCheck"></div>
        <p class="rs_input_tip" v-if="limitTip">{{limitTip}}</p>
    </div>
</template>
<script>
const TYPE_MAP = {
    email: {
        reg: /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/,
        state: 'warning',
        tip: '请输入正确的邮箱地址'
    },
    phone: {
        reg: /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/,
        state: 'warning',
        tip: '请输入正确的手机号码'
    },
    tel:{
        reg: /^(^0\d{2}-?\d{8}$)|(^0\d{3}-?\d{7}$)|(^0\d2-?\d{8}$)|(^0\d3-?\d{7}$)$/,
        state: 'warning',
        tip: '请输入正确的固定电话'
    },
    phoneCM: {
        reg: /^1(3[4-9]|4[7]|5[0-27-9]|7[08]|8[2-478])\d{8}$/,
        state: 'warning',
        tip: '请输入正确的移动号码'
    },
    phoneCU: {
        reg: /^1(3[0-2]|4[5]|5[56]|7[0156]|8[56])\d{8}$/,
        state: 'warning',
        tip: '请输入正确的联通号码'
    },
    phoneCT: {
        reg: /^1(3[3]|4[9]|53|7[037]|8[019])\d{8}$/,
        state: 'warning',
        tip: '请输入正确的电信号码'
    },
    identity: {
        reg: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
        state: 'warning',
        tip: '请输入正确的身份证号'
    },
    ip: {
        reg: /^((([1-9]\d?)|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}(([1-9]\d?)|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/,
        state: 'warning',
        tip: '请输入正确的ip地址'
    },
    number: {
        reg: /^[0-9]*$/,
        state: 'warning',
        tip: '请输入数字'
    }
}
export default {
    data(){
        return{
            limitCheck:false,
            limitTip:''
        }
    },
    props: {
        label:String,
        secondLabel:String,
        labelType:{
            type:String,
            default (){
                return "head"
            }
        },
        state:String,
        holder:{
            type:String
        },
        type:{
            type:String,
            default (){
                return "text"
            }
        },
        disable:{
            type:Boolean,
            default(){
                return false
            }
        },
        text:{
            type:String,
            default(){
                return ""
            }
        },
        limit:String,
        userFunc:Object,
        min:{
            type:Number,
            default(){
                return 1
            }
        },
        max:{
            type:Number,
            default(){
                return Infinity
            }
        },
        important:{
            type:Boolean,
            default(){
                return false
            }
        },
        area:{
            type:Boolean,
            default(){
                return false
            }
        },
        row:{
            type:Number,
            default(){
                return 3
            }
        }
    },
    computed:{
        mainStyle(){
            let allClass=[];
            switch(this.labelType){
                case 'line':
                    allClass.push("rs_input_line")
                    break
                case 'head':
                    allClass.push("rs_input_head")
                    break
                default:
                    allClass.push("rs_input_head")
                    break
            }
            switch(this.state){
                case 'primary':
                    allClass.push("rs_input_primary")
                    break
                case 'success':
                    allClass.push("rs_input_success")
                    break
                case 'warning':
                    allClass.push("rs_input_warning")
                    break
                case 'error':
                    allClass.push("rs_input_error")
                    break
                default:
                    break
            }
            if(this.disable)
            {
                allClass.push("rs_input_disable");
            }
            return allClass;
        }, 
        stateIcon(){
            let icon=[];
            if(this.label&&(this.labelType=="head"))
            {
                switch(this.state){
                    case 'primary':
                        icon="fa-info-circle infoColor"
                        break
                    case 'success':
                        icon="fa-check-circle successColor"
                        break
                    case 'warning':
                        icon="fa-exclamation-circle warningColor"
                        break
                    case 'error':
                        icon="fa-times-circle errorColor"
                        break
                    default:
                        break
                }
                if(this.limitCheck)
                {
                    icon="fa-check-circle successColor"
                }
            }
            else
            {
                switch(this.state){
                    case 'primary':
                        icon="fa-info-circle infoColor fa_nohead"
                        break
                    case 'success':
                        icon="fa-check-circle successColor fa_nohead"
                        break
                    case 'warning':
                        icon="fa-exclamation-circle warningColor fa_nohead"
                        break
                    case 'error':
                        icon="fa-times-circle errorColor fa_nohead"
                        break
                    default:
                        break
                }
                if(this.limitCheck)
                {
                    icon="fa-check-circle successColor fa_nohead"
                }
            }
            
            return icon;
        },
    },
    methods: {
        publicLimit(){
            let TypeLimit = TYPE_MAP[this.limit];
            this.limitCheck=TypeLimit.reg.test(this.text);
        },
        userLimit(){
            let TypeLimit = this.userFunc;
            this.limitCheck=TypeLimit.reg.test(this.text);
        },
        rageLimit(){
            let limitMin=this.min;
            let limitMax=this.max;
            if(this.text.length>=limitMin&&this.text.length<=limitMax)
            {
                this.limitCheck=true;
            }
            else
            {
                this.limitCheck=false;
            }
        },
        publicLimitError(){
            this.limitCheck=TYPE_MAP[this.limit].reg.test(this.text);
            if(this.limitCheck)
            {
                this.limitTip="";
                this.state="success";
            }
            else
            {
                if(this.text!="")
                {
                    this.limitTip=TYPE_MAP[this.limit].tip;
                    this.state=TYPE_MAP[this.limit].state;
                } 
            } 
        },
        userLimitError(){
            this.limitCheck=this.userFunc.reg.test(this.text);
            if(this.limitCheck)
            {
                this.limitTip="";
                this.state="success";
            }
            else
            {
                if(this.text!="")
                {
                    this.limitTip=this.userFunc.tip;
                    this.state=this.userFunc.state;
                } 
            }
        },
        rangeLimitError(){
            let limitMin=this.min;
            let limitMax=this.max;
            if(this.text.length<limitMin&&this.text!="")
            {
                this.limitTip="输入内容应大于"+limitMin+"个字符";
                this.state="warning";
            }
            else if(this.text.length>limitMax&&this.text!="")
            {
                this.limitTip="输入内容应小于"+limitMax+"个字符";
                this.state="warning";
            }
            else if(this.text=="")
            {
                this.limitTip="";
            }
            else
            {
                this.limitTip="";
                this.state="success";
            }
        },
        limitSuccess(){
            if(this.limit)
            {
                this.limitTip="";
                this.state="";
                switch(this.limit){
                    case 'userDefined':
                        this.userLimit()
                        break
                    case 'range':
                        this.rageLimit()
                        break;
                    default:
                        this.publicLimit()
                        break
                } 
            }
        },
        limitError(){
            if(this.limit)
            {
                switch(this.limit){
                    case 'userDefined':
                        this.userLimitError()
                        break
                    case 'range':
                        this.rangeLimitError()
                        break
                    default:
                        this.publicLimitError()
                        break
                } 
            }
        }
    }
}
</script>