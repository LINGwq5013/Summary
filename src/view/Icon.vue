<!--
 * @Author: your name
 * @Date: 2021-09-07 12:41:02
 * @LastEditTime: 2021-09-07 12:41:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\src\view\Icon.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-05-02 12:45:47
 * @LastEditTime: 2021-05-04 19:06:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chelx\src\pages\home\Icon.vue
-->
<template>
    <i :class="[{'iconfont': name}, className]" :style="{fontSize: size + 'px', color: color, cursor: cursor}" @click.stop="clickIcon"></i>
</template>
<script>
    export default{
        name: 'Icon',
        props: {
            name: {
                type: String,
                default: ''
            },
            size: {
                type: Number,
                default: 20
            },
            color: {
                type: String,
                default: '#5b5b5b'
            },
            cursor: {
                type: String,
                default: 'inherit'
            },
        },
        computed: {
            className() {
                return 'icon-' + this.name;
            }
        },
        data() {
            return {};
        },
        methods: {
            clickIcon() {
                this.$emit('clickIcon')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('./../../static/css/iconfont.scss');
    i{
        display: inline-block;
    }
</style>