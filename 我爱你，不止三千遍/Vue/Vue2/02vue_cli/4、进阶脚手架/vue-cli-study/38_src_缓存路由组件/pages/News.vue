<template>
	<ul>
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		beforeDestroy() {
			console.log('News组件即将被销毁了')
		},
	}
</script>