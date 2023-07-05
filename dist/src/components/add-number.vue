<template>
  <div>
    <form @submit.prevent="sendForm">
      <input
        type="text"
        placeholder="First Name"
        v-model="formValues.firstName"
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        v-model="formValues.lastName"
      />
      <br />
      <input type="text" placeholder="Phone" v-model="formValues.phone" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { formMixin } from "../mixins/form";

export default {
  name: "AddNumber",
  mixins: [formMixin],
};
</script>

<style scoped></style>
