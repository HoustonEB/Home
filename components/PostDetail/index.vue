<template>
    <div class="md-comp-wrapper">
        <div
            class="md-comp-content markdown-body-style"
            v-html="mdContent"
        ></div>
        <div class="anchor-list-box">
            <Anchor :catalogData="catalogData" />
        </div>
    </div>
</template>
<script>
import hljs from 'highlight.js'
import anchor from 'ant-design-vue/lib/anchor'
// import 'highlight.js/styles/atom-one-dark.css'
// import '~/assets/scss/markdown.scss';

const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')

    preEl.forEach((el) => {
        hljs.highlightBlock(el)
    })
}

export default {
    props: {},
    data: function () {
        const {
            params: { id },
        } = this.$route
        // console.log(this.$route, 'route', id)
        return {
            postId: id,
            mdContent: require(`~/assets/posts/${id}.md`),
            catalogData: [],
        }
    },
    methods: {
        getAnchorData: function () {
            let headList = [...document.querySelectorAll('.post-anchor')]
            this.catalogData = headList.map((item) => {
                return {
                    id: item.getAttribute('data-id'),
                    title: item.getAttribute('data-text'),
                    level: item.getAttribute('data-level'),
                }
            })
        },
    },
    mounted: function () {
        highlightCode()
        this.getAnchorData()
    },

    updated: function () {
        highlightCode()
    },
}
</script>
<style lang="scss">
@import 'highlight.js/styles/atom-one-dark.css';
@import '~/assets/scss/markdown.scss';
</style>
<style lang="scss" scoped>
// @import 'github-markdown-css';
@import '~/assets/scss/variable.scss';

.md-comp-wrapper {
    display: flex;
    color: #333;
    .md-comp-content {
        flex: 1;
        padding: 24px 35px 24px;
        background-color: #fff;
        overflow: auto;
        &/deep/ .post-anchor {
            position: absolute;
            &:hover {
                img {
                    visibility: visible;
                }
            }
            img {
                position: absolute;
                top: 6px;
                left: -25px;
                width: 20px;
                visibility: hidden;
                z-index: 1;
            }
        }
    }
    .anchor-list-box {
        flex: 0 0 240px;
        padding: 24px;
        background-color: $page-bgc;
    }
}
</style>
