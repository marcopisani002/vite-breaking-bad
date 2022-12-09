<template>
  <div class="card bg-info">

    <img :src="character.image" class="card-img-top" :alt="('Immagine di ' + character.name)">

    <div class="card-body">

      <h5 class="card-title">{{ character.name }}</h5>
      <!-- <p class="card-text"></p> -->
      <a :href="character.url" class="btn btn-success"
          target="_blank">info personaggio</a>


    
    </div>

  </div>
</template>

<script>

export default {
  name: "SingleCharacter",
  props: {
   
    character: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
    };
  },
  computed: {
  
    
  },
  methods: {

  }
};
</script>