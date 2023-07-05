<template>
  <div>
    <input
      @input="send"
      type="text"
      placeholder="text to search"
      v-model="txt"
    />
  </div>
</template>

<script>
export default {
  name: "App-Search",
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    send() {
      this.$emit("searching", this.txt);
    },
  },
};
</script>

<style scoped></style>
