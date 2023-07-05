<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <h1>This is the number you need: {{ $route.params.person }}</h1>
  </div>
</template>

<script>
export default {
  props: { firstName: String },
  name: "person-phone",
  data() {
    return {
      s: "",
    };
  },
};
</script>

<style scoped></style>
