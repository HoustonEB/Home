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
    let mdContent = require(`~/assets/posts/${item}.md`)
    let data = { id: item }
    mdContent.replace(/^<hr>(.*?)<hr>/gis, function (match, p1) {
        p1.replace(/(\w*): (.*?)</gis, function (mah, i1, i2) {
            data[i1] = i2;
            if (['categories', 'tags'].includes(i1)) {
                data[i1] = i2.split(' ')
            }
        })
    }) // 修饰符s使.可以匹配\n换行符
    return data
})
// console.log(ctx.keys(), 'ctx', fileNames)
export default {
    props: {
        classPrefix: {
            type: String,
            default: 'octopus',
        },
    },
    layout: 'Octopus',
    data: function () {
        // console.log(this.$props, 'props')
        return {
            postsData,
        }
    },
}
</script>
<style lang="scss" scoped></style>
