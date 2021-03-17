<template>
    <div class="audio-spectrum-wrapper"></div>
</template>
<script>
export default {
    props: {
        imgSrc: String,
        categoryList: Array,
        classPrefix: String,
    },
    data: function () {
        return {};
    },
    computed: {},
    methods: {
        prepareAPIs: function () {
            window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
            window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
            window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
            try {
                this.audioContext = new window.AudioContext(); // 1.set audioContext
            } catch (e) {
                // console.error('!Your browser does not support AudioContext')
                console.log(e);
            }
        },
    },
    mounted: function () {},
};
</script>
<style lang="scss" scoped></style>
