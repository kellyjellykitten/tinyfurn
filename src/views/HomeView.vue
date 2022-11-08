<script setup>
import { ref } from 'vue'
import { useToast } from "primevue/usetoast"
import Carousel from '../components/Carousel.vue'

const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({severity:'success', summary:'TinyFurn', detail: text.value})
}
</script>

<template>
  <h2 class="greet">Welcome to TinyFurn!</h2>
  <Toast></Toast>
  <Button label="Greet" @click="greet" icon="pi pi-user"></Button>
  <div>
    <Carousel />
  </div>
</template>

<style scoped>
.greet {
    text-align: center;
}
</style>


