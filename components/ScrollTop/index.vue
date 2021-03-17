<template>
    <div 
    v-if="visible"
    @click="scrollTop"
    :class="['scroll-top']">
        
    </div>
</template>
<script>
import throttle from 'loadsh/throttle';
export default {
    props: {
        
    },
    computed: {},
    data: function () {
        return {
            visible: true
        }
    },
    methods: {
        scrollTop: function () {
            window.scrollTo(0, 0);
        },
        scroll: throttle(function () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop <= 200) {
                this.visible = false;
            } else {
                this.visible = true;
            }
        }, 50)
    },
    mounted: function () {
        window.document.addEventListener('scroll', this.scroll)
    },
    updated: function () {
       
    },
    destroyed: function () {
        window.document.removeEventListener('scroll', this.scroll)
    },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';

.scroll-top {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    position: fixed;
    right: 24px;
    bottom: 24px;
    text-align: center;
    line-height: 35px;
    box-shadow: 0 0 5px #ddd;
    &:hover {
        box-shadow: 0 0 10px #ddd;
        cursor: pointer;
    }
    &:before {
        display: inline-block;
        content: '';
        width: 5px;
        height: 5px;
        border: 5px solid transparent;
        border-bottom-color: hsla(0,0%,54.9%,.8);
    }
}
</style>
