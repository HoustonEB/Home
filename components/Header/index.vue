<template>
    <div :class="[classPrefix + '-header-wrapper']">
        <div :class="[classPrefix + '-header-content-wrapper']">
            <div class="h-l">
                <ul>
                    <li><a href="/"><img src="~/assets/images/logo.svg" alt=""></a></li>
                    <li v-for="item in categoryListDuplicate">
                        <a :href="item.href">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="h-r">
                <div 
                :class="[
                    'header-search-box',
                    $route.fullPath.indexOf('/Octopus') >= 0 ? 'v-show' : 'v-hidden'
                    ]"
                >
                    <a-select
                        show-search
                        :show-arrow="false"
                        label-in-value
                        :value="value"
                        placeholder="Search Title"
                        style="width: 150px"
                        :filter-option="false"
                        :not-found-content="fetching ? undefined : null"
                        @search="fetchPosts"
                        @change="handleChange"
                    >
                        <a-spin v-if="fetching" slot="notFoundContent" size="small" />
                        <a-select-option v-for="d in data" :key="d.value">
                        {{ d.text }}
                        </a-select-option>
                    </a-select>
                </div>
                <div class="avatar-box">
                    <img :src="imgSrc" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {
    props: {
        imgSrc: String,
        categoryList: Array,
        classPrefix: String,
    },
    data: function () {
        return {
            loading: false,
            fetching: false,
            data: [],
            value: [],
            categoryListDuplicate: this.categoryList,
        }
    },
    computed: {
        ...mapState(['postsDetail', 'count'])
    },
    methods: {
        ...mapMutations(['searchArticle']),
        fetchPosts(value) {
            this.data = [];
            this.fetching = true;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.fetching = false;
                    const data = this.postsDetail.map(({title}) => (
                        title.toLowerCase().indexOf(value.toLowerCase()) < 0 ? undefined : {
                    text: title,
                    value: title,
                    }));
                    this.data = data.filter(Boolean);
                    resolve(this.postsDetail);
                }, 100)
            })
        },
        handleChange(value) {
            this.$store.commit('searchArticle', {title: value.key});
            Object.assign(this, {value});
        },
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';

$header-height: 60px;
$class-prefix: 'octopus';
$page-max-width: 960px;
$header-font-color: #71777c;

.#{$class-prefix}-header-wrapper {
    width: 100%;
    height: $header-height;
    background-color: $theme-bg-color;
    color: $theme-font-color;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 250;
    transition: all .5;
    border-bottom: 1px solid #eee;
    .#{$class-prefix}-header-content-wrapper {
        position: relative;
        display: flex;
        height: $header-height;
        margin: 0 auto;
        max-width: $page-max-width;
        .h-l {
            flex: 4;
            ul {
                display: flex;
                height: 100%;
            }
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 10px;
                font-size: 15px;
                cursor: pointer;
                 &:hover {
                     a {
                        color: $theme-font-color;
                     }
                }
                &:first-child {
                    padding-left: 0;
                    font-size: 17px;
                    font-weight: 600;
                    width: 45px;
                    img {
                        width: 100%;
                    }
                }
                a {
                    color: $header-font-color;
                }
            }
        }
        .h-r {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            font-size: 14px;
            img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
            }
            .header-search-box, .avatar-box {
                padding: 0 15px;
                span {
                    color: red;
                }
            }
        }
    }
}
</style>
