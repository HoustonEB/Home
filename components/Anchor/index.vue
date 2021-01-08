<template>
    <div :class="[classPrefix + '-anchor-wrapper']">
        <p class="catalog-title">目录</p>
        <ul>
            <li 
            v-for="{ id, title, level } in catalogData"
            :class="activeLinkId === '#' + id ? 'active' : ''">
                <a
                    :class="[
                        'catalog-link',
                        'level-' + level
                    ]"
                    :href="['#' + id]"
                    @click.prevent="linkClick(id, $event)"
                >
                    {{ title }}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import throttle from 'loadsh/throttle';
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
        activeLinkId: function () {
            return this.isExitDomIds[this.isExitDomIds.length - 1] || '#heading'
        }
    },
    data: function () {
        return {
            anchorDoms: [],
            isExitDomIds: [],
        }
    },
    methods: {
        linkClick: function (id, e) {
            // e.preventDefault();
            // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let scrollHeadDom = document.getElementById(id)
            let top = scrollHeadDom.getBoundingClientRect().top

            window.scrollBy({top: top - 120, left: 0, behavior: 'smooth'})
        },
        scroll: throttle(function () {
            this.isExitDomIds = this.anchorDoms
                .map((item) => {
                    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight // 视口的高度
                    let top = item.getBoundingClientRect().top // 与视口顶部的距离
                    let bottom = item.getBoundingClientRect().bottom

                    if (top <= 150) {
                        return '#' + item.getAttribute('id')
                    }
                })
                .filter(Boolean)
            // console.log(this.isExitDomIds)
        }, 50),
        getAnchorDom: function () {
            let domArr = this.catalogData.map((item) => {
                return document.getElementById(`${item.id}`)
            })
            this.anchorDoms = [...domArr]
        },
    },
    mounted: function () {
        window.document.addEventListener('scroll', this.scroll)
    },
    updated: function () {
        this.getAnchorDom()
        this.anchorDoms.forEach((item) => {
            item.children[0].onclick = (e) => {
                e.preventDefault()
                this.linkClick(item.id)
            }
        })
    },
    destroyed: function () {
        window.document.removeEventListener('scroll', this.scroll)
    },
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
            // background-color: #ebedef;
            opacity: 0.5;
        }
    }
    li {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        padding-right: 5px;
        cursor: pointer;
        &.active, &:hover {
            background-color: #ebedef;
        }
        &.active a{
                color: $theme-font-color;
        }
        a {
            display: block;
            color: #333;
            position: relative;
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
            // &:hover {
            //     color: $theme-font-color;
            // }
            &.level-1 {
                font-weight: 900;
                font-size: 16px;
                padding-left: 25px;
                &:before {
                    left: 5px;
                    margin-top: -3px;
                    width: 7px;
                    height: 7px;
                }
            }
            &.level-2 {
                font-size: 15px;
                padding-left: 25px;
                font-weight: 700;
                &:before {
                    left: 5px;
                    margin-top: -3px;
                    width: 6px;
                    height: 6px;
                }
            }
            &.level-3 {
                font-size: 14px;
                padding-left: 41px;
                &:before {
                    left: 30px;
                }
            }
            &.level-4 {
                font-size: 13px;
                padding-left: 57px;
                 &:before {
                    left: 46px;
                }
            }
            &.level-5 {
                font-size: 12px;
                padding-left: 72px;
                 &:before {
                    left: 61px;
                }
            }
            &.level-6 {
                font-size: 12px;
                padding-left: 86px;
                 &:before {
                    left: 75px;
                }
            }
        }
    }
}
</style>
