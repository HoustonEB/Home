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

export default {
    data: () => {
        return {
            classPrefix: 'home',
            categoryList: [
                {
                    name: '首页',
                    href: '/home',
                },
                {
                    name: '沸点',
                    href: '/home',
                },
            ],
            blogSrc:
                'https://avatars3.githubusercontent.com/u/31442858?s=460&u=6aaf81231201d85367f8296525a8b1886285635d&v=4',
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
