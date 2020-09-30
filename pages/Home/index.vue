<template>
    <div :class="[classPrefix + '-container-wrapper']">
        <ArticalList :classPrefix="classPrefix" :postsData="postsData" />
    </div>
</template>
<script>
let ctx = require.context('~/assets/posts', true, /\.md$/)
let fileNames = ctx.keys().map((item) => {
    return item.match(/\.\/(.*)\.md/)[1]
})
let postsData = fileNames.map((item) => {
    return {
        title: item,
        authorName: '张三',
        date: '2020/12/23',
        category: 'JS',
    }
})
console.log(ctx.keys(), 'ctx', fileNames)
export default {
    props: {
        classPrefix: {
            type: String,
            default: 'home',
        },
    },
    layout: 'Home',
    data: function () {
        console.log(this.$props, 'props')
        return {
            postsData,
        }
    },
}
</script>
<style lang="scss" scoped></style>
