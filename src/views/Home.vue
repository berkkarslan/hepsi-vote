<script>
import vSelect from "vue-select";
import { getItems } from "@/services/service";
export default {
  name: "Home",
  components: {
    vSelect,
  },
  data() {
    return {
      sortOptions: [
        { id: "1", name: "Newest" },
        { id: "2", name: "Oldest" },
        { id: "3", name: "Less Voted (A > Z)" },
        { id: "4", name: "Most Voted (Z > A)" },
      ],
      selectedSort: null,
    };
  },
  computed: {
    getLinks() {
      return getItems();
    },
  },
};
</script>

<template>
  <div class="home">
    <b-row class="d-flex justify-content-center border-bottom pb-2 mb-2">
      <router-link to="/create">
        <div class="text-center">SUBMIT A LINK</div>
      </router-link>
    </b-row>
    <b-row>
      <v-select
        :options="sortOptions"
        v-model="selectedSort"
        label="name"
      ></v-select>
    </b-row>
    {{ getLinks }}
  </div>
</template>
