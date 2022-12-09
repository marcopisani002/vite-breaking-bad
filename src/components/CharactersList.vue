<template>
  <Pagination :currentPage="store.currentPage"
      @pageChange="onPageChange"></Pagination>

  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col"
        v-for="(singleCharacter, index) in store.charactersList"
        :key="index">
      <SingleCharacter :character="singleCharacter"
          @cardClicked="onCardClicked"></SingleCharacter>
    </div>
  </div>

  <div class="alert alert-danger" v-if="ajaxError">{{ ajaxError }}</div>

  <Pagination class="mt-4"></Pagination>
</template>

<script>

import SingleCharacter from "./SingleCharacter.vue";
import { store, fetchCharacters } from "../store";
import Pagination from "./Pagination.vue";

export default {
  name: "CharactersList",
  components: { SingleCharacter, Pagination },
  props: {},
  data () {
    return {
      ajaxError: "",
      store,
    };
  },
  computed: {},
  methods: {
    onPageChange (newPage) {
      this.store.currentPage = newPage;

      fetchCharacters();
    },
    onCardClicked(clickedCharacter){
      console.log(clickedCharacter);
    }
  },
 
  created () {
   
    fetchCharacters();


  },
};
</script>