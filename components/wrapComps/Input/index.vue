<template>
  <div :class="[classPrefix + '-search-input-wrapper']">
    <a-input-search 
    v-bind="[$attrs]"
    @change="change" 
    @search="search"/>
  </div>
</template>
<script>
/*
$props和$attrs
$props只会存在在props中注册的属性,$attrs是只存在没有在props中注册的属性
*/
export default {
    props: {
      classPrefix: {
          type: String,
          default: ''
      },
      change: Function,
      search: Function
    },
    mounted: function() {
      // console.log(this, 'this')
    },
    data: () => {
      return {};
    }
}
</script>
<style lang="scss"></style>
