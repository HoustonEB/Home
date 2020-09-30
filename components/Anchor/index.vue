<template>
    <div :class="[classPrefix + '-anchor-wrapper']">
        <p class="catalog-title">目录</p>
        <ul>
            <li v-for="{ id, title, level } in catalogData">
                <a
                    :class="['catalog-link', 'level-' + level, activeLinkId === '#' + id ? 'active' : '']"
                    :href="['#' + id]"
                    @click="linkClick"
                >
                    {{ title }}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        classPrefix: {
            type: String,
            default: 'blog',
        },
        catalogData: {
            type: Array,
            default: [],
        },
    },
    computed: {
        activeLinkId: function() {
            if(this.clickFlag) {
                return this.$route.hash;
            } else {
                return this.isExitDomIds[0];
            }
        }
    },
    data: function () {
        return {
            anchorDoms: [],
            isExitDomIds: [],
            clickFlag: true
        }
    },
    methods: {
        linkClick: function() {
            this.clickFlag = true;
        },
        scroll: function() {
            this.getAnchorDom();
            this.clickFlag = false;
            this.isExitDomIds = this.anchorDoms.map(item => {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 视口的高度
                let top = item.getBoundingClientRect().top; // 与视口顶部的距离
                let bottom = item.getBoundingClientRect().bottom;

                if(bottom >= 0
                && top <= clientHeight) {
                    return '#' + item.getAttribute('id');
                }
            }).filter(Boolean);
            console.log(this.isExitDomIds)
        },
        getAnchorDom: function() {
            this.anchorDoms = [...this.catalogData.map(item => {
                return document.getElementById(`${item.id}`)
            })];
        }
    },
    mounted: function() {
        window.document.addEventListener('scroll', this.scroll)
    },
    destroyed: function() {
        window.document.removeEventListener('scroll', this.scroll)
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';

$class-prefix: 'blog';

.#{$class-prefix}-anchor-wrapper {
    position: fixed;
    p.catalog-title {
        font-size: 14px;
        font-weight: 600;
    }
    ul {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 7px;
            bottom: 0;
            width: 2px;
            background-color: #ebedef;
            opacity: 0.5;
        }
    }
    li {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;

        a {
            color: #333;
            position: relative;
            &.active {
                color: $theme-font-color;
            }
            &:before {
                content: '';
                position: absolute;
                top: 50%;
                left: -11px;
                margin-top: -2px;
                width: 4px;
                height: 4px;
                background-color: currentColor;
                border-radius: 50%;
            }
            &:hover {
                color: $theme-font-color;
            }
            &.level-1 {
                font-weight: 900;
                font-size: 16px;
                margin-left: 25px;
                &:before {
                    left: -20px;
                    margin-top: -3px;
                    width: 6px;
                    height: 6px;
                }
            }
            &.level-2 {
                font-size: 15px;
                margin-left: 35px;
            }
            &.level-3 {
                font-size: 14px;
                margin-left: 45px;
            }
            &.level-4 {
                font-size: 14px;
                margin-left: 55px;
            }
        }
    }
}
</style>
