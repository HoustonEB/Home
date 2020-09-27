<template>
    <div class="blog-layout-wrapper">
        <div class="blog-header-content-wrapper">
            <Header :imgSrc="blogSrc" :categoryList="categoryList" />
        </div>
        <div class="blog-content-wrapper">
            <nuxt />
        </div>
    </div>
</template>
<script>

export default {
    data: () => {
        return {
            categoryList: [
                {
                    name: '文档',
                    href: '/sources',
                },
                {
                    name: '文档2',
                    href: '/sources2',
                },
            ],
            ui,
            blogSrc:
                'https://avatars3.githubusercontent.com/u/31442858?s=460&u=6aaf81231201d85367f8296525a8b1886285635d&v=4',
        }
    },
}
</script>
<style lang="scss">
@import '~/assets/scss/global.scss';

$header-height: 60px;

.blog-layout-wrapper {
    padding-top: $header-height;
    .blog-header-content-wrapper {
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        border-bottom: 1px solid #eee;
        z-index: 99;
    }
    .blog-content-wrapper {
    }
}
</style>
