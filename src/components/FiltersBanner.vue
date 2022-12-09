<template>

  <form action="" class="mb-4" @submit.prevent="onSearchClick">

    <div class="row">
      <div class="col-sm-4 text-white">
        <div class="mb-3">
          <label>Nome</label>
          <input type="text" class="form-control bg-warning" name="name" v-model="filters.name">
        </div>
      </div>
      <div class="col-sm-4 text-white">
        <div class="mb-3">
          <label>Stato</label>
          <input type="text" class="form-control bg-warning" name="status" v-model="filters.status">
        </div>
      </div>
   

    
     
     
      <div class="col-sm-4 text-white">
        <div class="mb-3">
          <label>Genere</label>
          <input type="text" class="form-control bg-warning" name="gender" v-model="filters.gender">
        </div>
      </div>
    </div>

    <div class="d-flex gap-3 justify-content-center">
      <button class="btn btn-secondary" type="reset">Reset </button>
      <button class="btn btn-success">Cerca</button>
    </div>
  </form>



 
</template>

<script>
import { store, } from "../store";

export default {
  data () {
    return {
      store,
      filters: {
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
      }
    };
  },
  emits: ["search"],
  computed: {
   
    speciesList () {
      const toReturn = [];

      this.store.charactersList.forEach((character) => {

        if (!toReturn.includes(character.species)) {
          toReturn.push(character.species);
        }

      });

      return toReturn;
    },
 
    statusList () {
      const toReturn = [];

      this.store.charactersList.forEach((character) => {

        if (!toReturn.includes(character.status)) {
          toReturn.push(character.status);
        }

      });

      return toReturn;
    }
  },
  methods: {
    onSearchClick () {
      this.$emit("search", { ...this.filters });
    }
  }
}

</script>