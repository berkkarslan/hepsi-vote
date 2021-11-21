<script>
import vSelect from "vue-select";
import { listItems } from "../services/service";
import CardItem from "./CardItem";
export default {
  name: "List",
  components: {
    vSelect,
    CardItem,
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
      links: [],
      paginate: ["links"],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.links = listItems(this.selectedSort?.id);
    },
  },
};
</script>

<template>
  <div class="w-100">
    <b-row>
      <v-select
        :options="sortOptions"
        @input="getData"
        v-model="selectedSort"
        label="name"
        class="w-100"
      ></v-select>
    </b-row>
    <paginate name="links" :list="links" :per="5">
      <CardItem
        v-for="item in paginated('links')"
        :key="item.url"
        :name="item.name"
        :url="item.url"
        :vote="item.vote"
        @fetchLinks="getData"
      />
    </paginate>
    <paginate-links for="links" :show-step-links="true"></paginate-links>
  </div>
</template>
