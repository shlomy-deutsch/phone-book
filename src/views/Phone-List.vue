<template>
  <div>
    <App-Search @searching="send"></App-Search>
    <App-Table :products="lis"></App-Table>
  </div>
</template>

<script>
import { ArrWithId } from "@/components/numbers";
// import { mapState } from "vuex";
import AppTable from "./Table.vue";
import AppSearch from "./Searchme.vue";
// import { mapState } from "vuex";
export default {
  components: {
    AppTable,
    AppSearch,
  },
  name: "phone-list",
  data() {
    return {
      txt: "",
    };
  },
  mounted() {
    this.$store.commit("pushProducts", ArrWithId);
  },
  computed: {
    lis() {
      if (this.txt !== "") {
        return this.$store.state.products.filter((product) =>
          product.firstName.includes(this.txt)
        );
      } else {
        return this.$store.state.products;
      }
    },
  },
  methods: {
    send(val) {
      this.txt = val;
    },
  },
};
</script>

<style></style>
