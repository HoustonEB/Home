<template>
    <div class="md-comp-wrapper">
        <div class="md-comp-content">
            <div class="md-title-wrapper">
                <p class="title">
                    <span>{{ title }}</span>
                </p>
                <p class="desc">
                    <span>发表于: {{ date }}</span>
                    <span>分类:</span>
                    <span
                        class="categories-item"
                        v-for="(item, index) in categories"
                        >{{(index !== 0 ? '&nbsp;' : '') + item }}</span
                    >
                    <span>标签:</span>
                    <span 
                    class="tags-item" 
                    v-for="(item, index) in tags"
                    >{{ (index !== 0 ? '&nbsp;' : '') + item }}</span>
                </p>
            </div>
            <viewer :trigger="mdContent">
                <div class="markdown-body-style" v-html="mdContent"></div>
            </viewer>
        </div>
        <div class="anchor-list-box">
            <Anchor :catalogData="catalogData" />
        </div>
    </div>
</template>
<script>
import hljs from 'highlight.js';
// import anchor from 'ant-design-vue/lib/anchor';
// import 'highlight.js/styles/atom-one-dark.css'
// import '~/assets/scss/markdown.scss';

const highlightCode = () => {
    document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
}

export default {
    props: {},
    data: function () {
        const {
            params: { id },
        } = this.$route;
        let {postsDetail} = this.$store.state;
        let mdContent, title, date, categories, tags;
        postsDetail.forEach(item => {
            if(item.id === id) {
                mdContent = item.content;
                title = item.title;
                date = item.date;
                categories = item.categories;
                tags = item.tags;
            }
        })
        return {
            postId: id,
            mdContent,
            title,
            date,
            categories,
            tags,
            catalogData: []
        };
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
        highlightCode();
        this.getAnchorData()
        // document.addEventListener('DOMContentLoaded', (event) => {
        
        // });
    },

    updated: function () {
        highlightCode();
    },
}
</script>
<style lang="scss">
@import 'highlight.js/styles/atom-one-light.css';
// @import 'highlight.js/styles/atom-one-dark.css';
// @import 'highlight.js/styles/solarized-light.css';
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
        overflow-x: auto;
        overflow: hidden;
        .md-title-wrapper {
            .title {
                font-size: 30px;
                text-align: center;
                word-break: break-word;
                font-weight: 500;
            }
            .desc {
                margin-top: 5px;
                margin-bottom: 10px;
                font-family: 'Lato', 'PingFang SC', 'Microsoft YaHei', sans-serif;
                font-size: 12px;
                text-align: center;
                color: #999;
                // .categories-item {
                //     &:nth-child(odd) {
                //         color: $categories-color1;
                //     }
                //     &:nth-child(even) {
                //         color: $categories-color2;
                //     }
                // }
                // .tags-item {
                //     &:nth-child(odd) {
                //         color: $tags-color1;
                //     }
                //     &:nth-child(even) {
                //         color: $tags-color2;
                //     }
                // }
            }
        }
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
