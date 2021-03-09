<template>
    <div :class="[classPrefix + '-container-wrapper']">
        <div>{{count}}</div>
        <ArticalList :classPrefix="classPrefix" :postsData="activePostsList" />
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    props: {
        classPrefix: {
            type: String,
            default: 'octopus',
        },
    },
    layout: 'Octopus',
    data: function () {
        return {
        }
    },
    computed: {
        ...mapState(['activePostsList', 'count'])
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped></style>
