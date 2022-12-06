<template>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="(singleCard, index) in store.peoplesList" :key="index">
        <SingleCard :character="singleCard"></SingleCard>
      </div>
    </div>
  
    <div class="alert alert-danger" v-if="ajaxError">{{ ajaxError }}</div>
  </template>
  
  <script>
  import axios from "axios";
  import SingleCard from "./SingleCard.vue";
  import { store, fetchPeoples } from "../store";
  
  export default {
    name: "CharactersList",
    components: { SingleCard },
    props: {},
    data () {
      return {
   
        store,
      };
    },
    computed: {},
    methods: {},
   
    created () {
      
      fetchPeoples()
  
     
    },
  };
  </script>