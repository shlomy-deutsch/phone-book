/* eslint-disable prettier/prettier */

export const formMixin = {
  data() {
    return {
      formValues: {
        firstName: "",
        lastName: "",
        phone: 0,
      },
    };
  },
  methods: {
    sendForm() {
      const formValuesObject = {
        firstName: this.formValues.firstName,
        lastName: this.formValues.lastName,
        phone: this.formValues.phone,
        id: this.$store.state.products.length + 1,
      };
      this.$store.commit("addProduct", formValuesObject);
      this.$router.push({ name: "Phone-List" });
    },
  },
};
