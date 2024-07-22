<template>
  <component :is="props.as" v-bind:type="{type}" @click="a">
    <slot name="suffix"/>

    <slot/>

    <slot name="prefix"/>
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

type Props = {
  as?: 'button' | typeof RouterLink
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  type: 'button'
})

const a = () => alert(props.as)
</script>

<style lang="scss" scoped>

</style>