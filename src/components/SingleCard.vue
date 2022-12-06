<template>
  <div class="card bg-info">

    <img src="https://i.pinimg.com/736x/18/13/bb/1813bb07eb46ad79e1bccbd809a3a49d.jpg" class="card-img-top" :alt="('Immagine di ' + character.name)">

    <div class="card-body">
      <h5 class="card-title">{{ character.name }}</h5>
     <small  class="text-secondary">{{ character.height }}</small> <br>
     <small class="text-secondary">{{ character.mass }}</small> <br>
     <small class="text-secondary">{{ character.gender }}</small>
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
  methods: {

  }
};
</script>