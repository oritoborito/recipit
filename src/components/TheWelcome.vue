<script setup lang="ts">
import {useNavigation} from "@/composables/navigation";
import Button from "@/components/SimpleButton.vue";

const {navigateToPath} = useNavigation()
</script>

<template>
  <div>
    <h1>
      recipit
    </h1>
    <p>
      create recipes that makes sense
    </p>
    <h2>
      get started by pressing the button below
    </h2>
    <Button @click="navigateToPath('/recipes')">
      get started
    </Button>
  </div>
</template>

<style scoped>
button {
  margin-top: 2em;
}
</style>


