<template>
	<div class="row">
		<div class="col-sm-4">
			<rs-input label="家庭住址" label-type="line" holder="请输入信息" :important="true"></rs-input>
		</div>
		<div class="col-sm-4">
			<rs-input label="邮政编码" label-type="line" holder="请输入信息"></rs-input>
		</div>
		<div class="col-sm-4">
			<rs-input label="联系电话" label-type="line" holder="请输入信息"></rs-input>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<rs-input label="姓名" holder="请输入信息" :important="true"></rs-input>
		</div>
		<div class="col-sm-4">
			<rs-input label="年龄" holder="请输入信息"></rs-input>
		</div>
		<div class="col-sm-4">
			<rs-input label="性别" holder="请输入信息"></rs-input>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-3">
			<rs-input holder="加强" state="primary"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input holder="成功" state="success"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input holder="警告" state="warning"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input holder="错误" state="error"></rs-input>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-3">
			<rs-input label="密码" type="password"></rs-input>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-3">
			<rs-input label="性别" text="铁血真汉子" :disable="true"></rs-input>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-3">
			<rs-input label="手机号" holder="请输入联系电话" limit="phone"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input label="Email" holder="请输入Email" limit="email"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input label="身份证" holder="请输入身份证号" limit="identity"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input label="邮政编码" holder="请输入邮政编码" limit="userDefined" :user-func="postcode"></rs-input>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-3">
			<rs-input label="账号" second-label="(限制2-4位)" holder="请输入账号" limit="range" :min="2" :max="4"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input label="密码" second-label="(限制小于8位)" holder="请输入密码" type="password" limit="range" :max="8"></rs-input>
		</div>
		<div class="col-sm-3">
			<rs-input label="验证码" second-label="(限制大于2位)" holder="请输入短信验证码" limit="range" :min="2"></rs-input>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-6">
			<rs-input label="备注1" holder="请输入备注信息" :area="true" :row="5"></rs-input>
		</div>
	</div>
</template>
<script>
	import rsInput from '../form/RsInput.vue'
	export default{
		data(){
			return{
				postcode:{
					reg: /^\d{6}$/,
			        state: 'error',
			        tip: '请输入正确的邮政编码'
				}
			}
		},
		components:{
			rsInput
		},
		methods:{

		}
	}
</script>