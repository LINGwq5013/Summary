<!--
 * @Author: your name
 * @Date: 2021-10-12 14:15:48
 * @LastEditTime: 2021-10-12 19:02:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editanf
 * @FilePath: \chelx\src\components\common\GoodsTop.vue
-->
<template>
	<div class="goods-top clearfix">
		<h3 class="top-title">{{topTitle}}</h3>
		<ul class="top-sub">
			<li v-for="(sub,index) in subs"
			:key="index"
			:class="{'active': topSubStatus === sub.key}"
			@mouseenter="topSubEnter(sub.key)">{{sub.name}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			topSubStatus: this.subs[0].key
		}
	},
	computed: {
	},
	props: {
		subs: {
			required: true,
			type: Array
		},
		topTitle: {
			required: true,
			type: String
		}
	},
	methods: {
		topSubEnter (key) {
			this.$emit('topSubEnter',key)
			this.topSubStatus = key
		}
	}
}
</script>

<style lang='less' >
.goods-top {
	width: 100%;
	height: 58px;
	.top-title {
		float: left;
		margin: 0;
		font-size: 22px;
		font-weight: 200;
		line-height: 58px;
		color: #333;
	}
	.top-sub {
		float: right;
		margin-right: 5px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
		font-size: 16px;
		margin-top: 16px;
		color: #424242;
		li {
			width: auto;
			height: 24px;
			line-height: 24px;
			margin-left: 30px;
			cursor: pointer;
			border-bottom: 2px solid #f5f5f5;
			&.active {
				color: #ff6700;
				border-bottom: 2px solid #ff6700;
			}
		}
	}
}
</style>
