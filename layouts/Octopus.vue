<template>
    <div :class="[classPrefix + '-layout-wrapper']">
        <Header :imgSrc="blogSrc" :categoryList="categoryList" :classPrefix="classPrefix" />
        <div :class="[classPrefix + '-content-wrapper']">
            <nuxt :classPrefix="classPrefix" />
            <ScrollTop />
        </div>
    </div>
</template>
<script>
import 'viewerjs/dist/viewer.css';
import Viewer from 'v-viewer';
import Vue from 'vue';
Vue.use(Viewer);
export default {
    data: () => {
        let obj = { a: 1 };
        let u = [1, 2];
        return {
            classPrefix: 'octopus',
            categoryList: [
                {
                    name: '首页',
                    href: '/Octopus',
                },
                // {
                //     name: '沸点',
                //     href: '/Octopus',
                // },
            ],
            blogSrc: require('~/assets/images/cat.jpg'),
        };
    },
};
</script>
<style lang="scss">
@import '~/assets/scss/global.scss';
</style>
<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';

$header-height: 60px;
$class-prefix: 'octopus';
$page-max-width: 960px;

.#{$class-prefix}-layout-wrapper {
    padding-top: $header-height;
    .#{$class-prefix}-content-wrapper {
        max-width: $page-max-width;
        margin: 10px auto 20px;
        padding-bottom: 20px;
    }
}
</style>
