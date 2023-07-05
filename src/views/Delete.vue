<template>
  <div>
    <div>
      <button @click="deleteme" :id="id">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App-Delete",
  props: ["id"],
  methods: {
    deleteme() {
      this.$store.commit("deleteProduct", this.id);
    },
  },
};
</script>

<style scoped></style>
