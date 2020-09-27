<template>
    <div class="md-comp-wrapper">
        <div class="md-comp-content" v-html="mdContent"></div>
    </div>
</template>
<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')

    preEl.forEach((el) => {
        hljs.highlightBlock(el)
    })
}

export default {
    props: 
    mdContent: require(`~/assets/posts/${fileName}.md`),
     mounted() {
        highlightCode()
    },

    updated() {
        highlightCode()
    },
}
</script>
<style lang="scss">
@import '~/assets/scss/markdown.scss';
// @import 'github-markdown-css';
</style>
