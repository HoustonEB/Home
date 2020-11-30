<template>
    <div :class="[classPrefix + '-artical-wrapper']">
        <div class="post-l-box">
            <ul>
                <li v-for="item in postsData">
                    <nuxt-link no-prefetch :to="{path: '/Posts/' + item.title}">
                        <div>
                            <p class="post-content-info">
                                <a href="#">{{ item.authorName }}</a>
                                <span>{{ item.date }}</span>
                                <a href="#">{{ item.category }}</a>
                            </p>
                            <p class="posts-title ellipsis">
                                {{ item.title }}
                            </p>
                            <p class="posts-operate"></p>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div class="post-r-box">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
/*
nuxt-link no-prefetch:不预加载子代码
*/
export default {
    props: {
        classPrefix: {
            type: String,
            default: '',
        },
        postsData: {
            type: Array,
            defalut: [],
        },
    },
    data: function () {
        return {}
    },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';

$class-prefix: 'home';

.#{$class-prefix}-artical-wrapper {
    display: flex;
    .post-l-box {
        flex: 1;
    }
    .post-r-box {
        width: 240px;
        padding-left: 20px;
        ul {
            li {
                height: 100px;
                background-color: #fff;
            }
        }
    }
    ul {
        background-color: #fff;
        li {
            padding: 18px 24px;
            border-top: 1px solid #eee;
            div {
                height: 100%;
            }
            &:last-child {
                border-bottom: 1px solid #eee;
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.01);
                cursor: pointer;
            }
            .post-content-info {
                color: #b2bac2;
                a {
                    color: #b2bac2;
                    &:hover {
                        color: $theme-font-color;
                    }
                }
                a:nth-child(1):after,
                span:after {
                    content: '·';
                    margin: 5px;
                    color: #b2bac2;
                }
            }
            .posts-title {
                margin: 6px 0 12px 0;
                font-size: 16px;
                font-weight: 600;
                line-height: 1.2;
                color: #2e3135;
                a {
                    color: #2e3135;
                    &:hover {
                        color: #2e3135;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
