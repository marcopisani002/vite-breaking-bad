<template>
  <div>
    <TheHeader message="Rick & Morty"></TheHeader>

    <div class="container pb-5">
      <FiltersBanner @search="onSearch"></FiltersBanner>

      <CharactersList></CharactersList>
    </div>

    <Transition name="slide-fade">
      <TheLoader v-if="store.loading"></TheLoader>
    </Transition>

   
  </div>
</template>

<script>
import CharactersList from './components/CharactersList.vue';
import FiltersBanner from './components/FiltersBanner.vue';

import TheHeader from './components/TheHeader.vue';
import TheLoader from './components/TheLoader.vue';
import { fetchCharacters, store } from "./store";

export default {
  components: { TheHeader,  CharactersList, FiltersBanner, TheLoader },
  data () {
    return {
 
      store
    };
  },
  computed: {
  },
  methods: {
    onSearch (filtersEmitted) {
      this.store.activeFilters = filtersEmitted;

      fetchCharacters();

      console.log(filtersEmitted);
    }
  },
 

};
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>
