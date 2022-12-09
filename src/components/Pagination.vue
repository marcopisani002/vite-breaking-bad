<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination">
      <li class="page-item">
        <button class="page-link bg-warning border-end  text-success"
            @click="onPrevClick"><strong> &#8647 </strong> </button>
      </li>
      
   
      <li class="page-item">
        <button class="page-link bg-warning  text-success"
            @click="onNextClick"><strong>&#8649</strong></button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {

    };
  },
  methods: {
    onPrevClick () {
      this.$emit("pageChange", this.currentPage - 1);
    },
    onNextClick () {
      this.$emit("pageChange", this.currentPage + 1);
    }
  }
};
</script>