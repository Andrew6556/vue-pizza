<template>
  <div>
<!--    <RouterLink to="/1">-->
      <UiButton :as="RouterLink" to="/1">
        <template #prefix>
          1111
        </template>
        Home page!
      </UiButton>
<!--    </RouterLink>-->
  </div>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
import UiButton from "../../ui/ui-button/UiButton.vue";
</script>

<style scoped>

</style>