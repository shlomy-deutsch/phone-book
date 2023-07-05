<template>
  <div>
    <App-Search @searching="send"></App-Search>
    <App-Table :products="local"></App-Table>
  </div>
</template>

<script>
import { ArrWithId } from "@/components/numbers";
import { mapState } from "vuex";
import AppTable from "./Table.vue";
import AppSearch from "./Searchme.vue";
export default {
  components: {
    AppTable,
    AppSearch,
  },
  name: "phone-list",
  data() {
    return {
      txt: "",
      local: [],
    };
  },
  mounted() {
    this.$store.commit("pushProducts", ArrWithId);
    this.local = [...this.products];
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    send(val) {
      this.txt = val;
      if (this.txt != "") {
        const filteredArray = [];

        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].firstName.includes(this.txt)) {
            filteredArray.push(this.products[i]);
          }
        }
        this.local = filteredArray;
      } else {
        this.local = [...this.products];
      }
      console.log(this.txt);
    },
  },
};
</script>

<style></style>
v
