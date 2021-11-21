<script>
export default {};
</script>

<template>
  <div>
    <b-container class="mt-3 position-relative px-4 px-md-0">
      <b-row class="border-bottom">
        <b-col>
          <b-row>
            <b-col
              class="
                d-flex
                justify-content-center justify-content-md-start
                col-sm-12 col-md-6
              "
            >
              <router-link to="/">
                <img src="@/assets/hepsi.svg" alt="hepsiburada" />
              </router-link>
            </b-col>
            <b-col
              class="
                d-flex
                justify-content-md-end
                justify-content-center
                col-sm-12 col-md-6
              "
            >
              <span>Link</span>
              <span>VOTE</span>
              Challenge
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-3">
        <b-col class="col-md-8 col-lg-6">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style></style>
