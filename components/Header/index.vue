<template>
    <div class="blog-header-wrapper">
        <div class="h-l">
            <img :src="imgSrc" alt="" />
        </div>
        <div class="h-r">
            <ul>
                <li v-for="item in categoryListDuplicate">
                    <a :href="item.href">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgSrc: String,
        categoryList: Array,
    },
    data: function() {
        return {
            categoryListDuplicate: this.categoryList.reverse()
        }
    },
}
</script>
<style lang="scss">
@import '~/assets/scss/global.scss';

$header-height: 60px;
.blog-header-wrapper {
    width: 100%;
    height: $header-height;
    background-color: $theme-bg-color;
    color: $theme-font-color;
    padding: 0 40px;
    display: flex;
    .h-l {
        // float: left;
        line-height: $header-height;
        flex: 1;
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    .h-r {
        // float: right;
        flex: 4;
        line-height: $header-height;
        li {
            float: right;
            padding: 0 10px;
            a {
                color: $theme-font-color;
            }
        }
    }
}
</style>
