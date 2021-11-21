<script>
import vSelect from "vue-select";
import { deleteItem, listItems } from "../services/service";
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
        { id: "3", name: "Less Voted" },
        { id: "4", name: "Most Voted" },
      ],
      selectedSort: null,
      links: [],
      paginate: ["links"],
      modalShow: false,
      deleteLink: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.links = listItems(this.selectedSort?.id);
    },
    showModal(link) {
      this.modalShow = true;
      this.deleteLink = link;
    },
    deleteFnc() {
      if (this.deleteLink) {
        deleteItem(this.deleteLink);
        this.modalShow = false;
        this.deleteLink = null;
        this.getData();
      }
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
        @deleteItem="showModal"
      />
    </paginate>
    <paginate-links for="links" :show-step-links="true"></paginate-links>
    <b-modal v-model="modalShow">
      <template #modal-title> Delete Link </template>

      <p>
        Do you want to remove:

        <b>{{ deleteLink }}</b>
      </p>
      <template #modal-footer>
        <b-button variant="secondary" @click="modalShow = false">
          Close
        </b-button>
        <b-button
          variant="danger"
          @click="deleteFnc"
          class="d-flex justify-content-center align-items-center"
        >
          Delete
        </b-button>
      </template>
    </b-modal>
  </div>
</template>
