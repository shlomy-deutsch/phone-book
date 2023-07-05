<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <form @submit.prevent="sendForm">
      <input type="text" placeholder="First Name" v-model="firstname" />
      <input type="text" placeholder="Last Name" v-model="lastname" />
      <input type="text" placeholder="Phone" v-model="phone1" />
      <button type="submit">Send</button>
    </form>
    <h2>{{ firstName }}</h2>
    <h2>{{ lastName }}</h2>
    <h2>{{ phone }}</h2>
  </div>
</template>

<script>
export default {
  props: ["firstName", "lastName", "phone", "id"],
  name: "person-card",
  data() {
    return {
      formValues: {
        firstName: "",
        lastName: "",
        phone: 0,
        id: 0,
      },
    };
  },

  computed: {
    firstname: {
      get() {
        return this.firstName;
      },
      set(value) {
        this.formValues.firstName = value;
      },
    },
    lastname: {
      get() {
        return this.lastName;
      },
      set(value) {
        this.formValues.lastName = value;
      },
    },
    phone1: {
      get() {
        return this.phone;
      },
      set(value) {
        this.formValues.phone = value;
      },
    },
  },
  methods: {
    sendForm() {
      this.formValues.firstName == ""
        ? (this.formValues.firstName = this.firstName)
        : null;
      this.formValues.lastName == ""
        ? (this.formValues.lastName = this.lastName)
        : null;
      this.formValues.phone == "" ? (this.formValues.phone = this.phone) : null;

      this.formValues.id = this.id;
      const formValuesObject = {
        firstName: this.formValues.firstName,
        lastName: this.formValues.lastName,
        phone: this.formValues.phone,
        id: this.id,
      };
      this.$store.commit("changeProduct", formValuesObject);
    },
  },
};
</script>

<style scoped></style>
