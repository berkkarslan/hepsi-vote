<script>
import List from "@/components/List";
export default {
  name: "Home",
  components: {
    List,
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
    <List />
    </b-row>
  </div>
</template>
