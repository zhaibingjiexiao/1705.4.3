<template>
	<div class="home">
		<div class="lunbo"></div>
		<div class="content clear">
			<div class="left">
				<ul class=" clear">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div class="loupan clear">
					<h1></h1>
					<p></p>
					<div class="one">
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
					</div>
					<button>浏览更多新楼盘</button>
				</div>
			</div>
			<div class="right">
				<div class="rtop">
					<h1><span></span></h1>
					<h1></h1>
					<p></p>
				</div>
				<div class="rcenter">
					<h1><span></span></h1>
					<h1></h1>
					<p></p>
				</div>
				<div class="rfooter">
					<h1><span></span></h1>
					<h1></h1>
					<p></p>
				</div>
				<div class="rdizhi">
					<h1><span></span></h1>
					<h1></h1>
					<p></p>
				</div>
			</div>
		</div>
		<div class="footer">
			<p>地产REALSTATE  © 2020 All Rights Reserved.</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	},
	// created(){
	// 	this.$http.get("http://localhost:8000/").then((e)=>this.arr=e.body)
	// },
	data(){
		return {
			arr:[]
		}
	}
}
</script>

<style>
	*{
		padding:0;
		margin:0;
		text-decoration:none;
		list-style:none;
	}
	.clear:after {
		display:block;
		content:'';
		clear:both;
	}
	.clear {
		zoom:1;
	}
	.lunbo{
		width: 1259px;
		height: 600px;
		margin:0 auto 120px;
		background-color: red;
	}
	.content{
		width: 1200px;
		margin: 0 auto;
	}
	.left{
		float: left;
		width: 820px;
	}
	.left ul{
		margin-bottom: 40px;
	}
	.left ul li{
		float: left;
		width: 405px;
		height: 138px;
		background-color: black;
	}
	.left ul li:nth-of-type(2){
		margin:0 0 10px 10px;
	}
	.left ul li:nth-of-type(3){
		margin-right: 10px;
	}
	.loupan{
		width: 818px;
		height: 500px;
		margin-bottom: 40px;
		border:1px solid #ccc;
		background-color: #F7F7F7;
	}
	.loupan h1{
		font-size: 22px;
		font-weight: bold;
		margin:29px 0 10px;
	}
	.loupan p{
		margin-bottom: 23px;
	}
	.loupan button{
		width: 136px;
		height: 38px;
		border:1px solid blue;
		margin-top:26px;
		background-color: #F7F7F7;
	}
	.one{
		float: left;
		width: 270px;
		height: 316px;
		margin:0 1px;
		background-color: white;
	}

	.right{
		float: right;
		width: 270px;
		background-color: #ccc
	}
	.right div{
		margin-bottom: 10px;
	}


	.rtop{
		height: 423px;
		background-color: yellow;
	}
	.rcenter{
		height: 266px;
		background-color: yellow;
	}
	.rfooter{
		height: 409px;
		background-color: yellow;
	}
	.rdizhi{
		height: 126px;
		background-color: yellow;
	}
	.rtop h1 span,.rcenter h1 span,.rfooter h1 span,.rdizhi h1 span{
		width: 18px;
		height: 18px;
		display: block;
		margin:28px 15px;
		background-color: black;
	}
	.rtop h1,.rcenter h1,.rfooter h1,.rdizhi h1{
		font-size: 14px;
		font-weight: bold;
		margin:35px 0 11px;
	}
	.rtop span{
		color: #ccc;
	}
	.rcenter span{
		color: blue;
	}





	.footer{
		width: 100%;
		height: 80px;
		color: #666666;
		line-height: 80px;
		font-weight: bold;
		/*text-align: center;*/
		background-color: black;
	}

</style>