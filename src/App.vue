<template>
  <div>
    
    <div class="container pb-5">
    

      <!-- Something awesome -->
      <PeopleList></PeopleList>
    </div>

    <Transition name="slide-fade">
      <TheLoader v-if="store.loading"></TheLoader>
    </Transition>

  </div>
</template>

<script>
import PeopleList from './components/PeopleList.vue';

import TheLoader from './components/TheLoader.vue';
import { store } from "./store";

export default {
  components: {  PeopleList, TheLoader },
  data () {
    return {
      welcome: "Welcome Boolean",
      store
    };
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>
