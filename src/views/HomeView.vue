<script setup>
import Carousel from '../components/Carousel.vue'

</script>

<template>
  <Card class="welcome-content">
    <template #header>
      <img src="../assets/logo.png" class="welcome-image" /> 
    </template>
    <template #title>
      <h1>Welcome to TinyFurn!</h1>
    </template>
    <template #subtitle>
      <h3><i>Where Comfurrt Meets Inspurration &#8482;</i></h3>
    </template>
    <template #content>
      <p>
        Domestic cats, especially young kittens, are known for their love of play. This behavior mimics hunting and is important in helping kittens learn to stalk, capture, and kill prey.
        Owing to the close similarity between play and hunting, cats prefer to play with objects that resemble prey, such as small furry toys that move rapidly, but rapidly lose interest. They become habituated to a toy they have played with before.
        
      </p>
      <br />
      <p>View our Categories above to start finding your spirit furniture!</p>
    </template>
  </Card>
  <div>
    <Carousel />
  </div>
  <div>
    <h2>Celebrate National Cat Day with savings on select cat-tailored furniture!</h2>
  </div>
</template>

<style lang="scss" scoped>
p {
  line-height: 1.5;
  margin: 0;
}
h1 {
  color:rgb(127, 255, 176)
}

.welcome-content {
  width: 100%;
  text-align: center;
  margin-bottom: 2em;
  margin-top: 1em;
}
.welcome-image {
  width: 25%;
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(176, 238, 141, 0.712);
  text-align: center;
  margin-top: 1em;
}
</style>

<!-- box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); -->


