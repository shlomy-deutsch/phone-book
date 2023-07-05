<template>
  <div class="table-container">
    <person-card
      :firstName="firstName"
      :lastName="lastName"
      :phone="phone"
      :id="id"
    ></person-card>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th>{{ product.id }}</th>
          <th>
            <button @click="navigateToPersonPhone(product)">
              {{ product.firstName }}
            </button>
          </th>
          <th>{{ product.lastName }}</th>
          <th>{{ product.phone }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PersonCard from "./Person-Card.vue";

export default {
  props: ["products"],
  components: { PersonCard },
  name: "App-Table",
  data() {
    return {
      firstName: "",
      lastName: "",
      phone: "",
      id: "",
    };
  },
  methods: {
    navigateToPersonPhone(product) {
      // this.$router.push({ name: "Person-Phone", params: { person: phone } });
      this.firstName = product.firstName;
      this.lastName = product.lastName;
      this.phone = product.phone;
      this.id = product.id;
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

.table thead th {
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.table tbody td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table tbody tr:hover {
  background-color: #e9e9e9;
}

.router-link {
  text-decoration: none;
  color: #333;
}

.router-link:hover {
  text-decoration: underline;
}
</style>
