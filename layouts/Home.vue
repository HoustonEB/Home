<template>
    <div :class="[classPrefix + '-layout-wrapper']">
        <Header 
            :imgSrc="blogSrc" 
            :categoryList="categoryList"
            :classPrefix="classPrefix" />
        <div :class="[classPrefix + '-content-wrapper']">
            <nuxt :classPrefix="classPrefix"/>
        </div>
    </div>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)
export default {
    data: () => {
        return {
            classPrefix: 'home',
            categoryList: [
                {
                    name: '首页',
                    href: '/Home',
                },
                {
                    name: '沸点',
                    href: '/Home',
                },
            ],
            blogSrc: require('~/assets/images/cat.jpg')
        }
    },
}
</script>
<style lang="scss">
@import '~/assets/scss/global.scss';
</style>
<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';

$header-height: 60px;
$class-prefix: 'home';
$page-max-width: 960px;

.#{$class-prefix}-layout-wrapper {
    padding-top: $header-height;
    .#{$class-prefix}-content-wrapper {
        max-width: $page-max-width;
        margin: 10px auto 20px;
    }
}
</style>
