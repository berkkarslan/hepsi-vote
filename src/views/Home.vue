<script>
import vSelect from "vue-select";
import { getItems } from "@/services/service";
import CardItem from "@/components/CardItem";
export default {
  name: "Home",
  components: {
    vSelect,
    CardItem
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
     <CardItem v-for="item in getLinks" :key="item.url" :name="item.name" :url="item.url" :vote="item.vote" />
  </div>
</template>
