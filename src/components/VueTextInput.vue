<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
  focusOnMount ?: boolean;
}

const props = defineProps<Props>();

const inputRef = ref();

onMounted(() => {
  if (props.focusOnMount) {
    inputRef.value.focus();
  }
});
</script>

<template>
  <input
    ref="inputRef"
    type="text"
    class="
      font-bold
      focus:text-pink-500
      w-full
      shadow
      border
      rounded
      py-1
      px-2
      focus:outline-pink-500
    "
  >
</template>
