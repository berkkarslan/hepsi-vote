<script>
import { deleteItem, updateItem } from "@/services/service.js";
export default {
  props: {
    name: { type: String, required: true },
    url: { type: String, required: true },
    vote: { type: Number, required: true },
  },
  methods: {
    deleteItem() {
      deleteItem(this.url);
      this.$emit("fetchLinks");
    },
    voteButton(type) {
      updateItem(this.url, type);
      this.$emit("fetchLinks");
    },
  },
};
</script>

<template>
  <b-card class="mt-2 mb-2 mw-100 w-100 position-relative card-item">
    <b-card-body>
      <b-row>
        <b-col class="mb-4 mb-sm-0 col-sm-3">
          <div
            class="
              border
              mr-3
              rounded
              d-flex
              justify-content-center
              align-items-center
              point-square
            "
          >
            <span>{{ vote }}</span>
            <span>Points</span>
          </div>
        </b-col>
        <b-col class="col-sm-9">
          <b-card-title class="mb-1 text-ellipsis">{{ name }}</b-card-title>

          <small class="mb-2 text-muted text-ellipsis d-block">
            {{ url }}
          </small>
          <b-row class="mt-2">
            <b-col class="col-sm-6">
              <div class="vote-btn" @click="voteButton('upvote')">
                <b-icon-chevron-up></b-icon-chevron-up>
                Up Vote
              </div>
            </b-col>

            <b-col class="col-sm-6">
              <div class="vote-btn" @click="voteButton('downvote')">
                <b-icon-chevron-down></b-icon-chevron-down>
                Down Vote
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card-body>
    <b-icon-trash @click="deleteItem" class="trash-btn"></b-icon-trash>
  </b-card>
</template>
