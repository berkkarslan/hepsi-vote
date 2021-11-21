<script>
export default {
  data(){
    return {
      form: {
        name: '',
        link: '',
        },
    }
  },
  methods: {
    addLink(event){
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<template>
  <div class="create">
    <b-row>
      <router-link to="/"> Return to List</router-link>
    </b-row>
    <b-row>
      <b-col>
        <b-row class="my-3">
          <h3 class="m-0">Add New Link</h3>
        </b-row>
        <b-row>
          <b-form class="w-100" @submit="addLink">
            <b-form-group label="Link Name:">
              <b-form-input placeholder="e.g. Alphabet" name="name" v-model="form.name" />
            </b-form-group>

            <b-form-group class="mt-3" label="Link Url:">
              <b-form-input placeholder="e.g. https://abc.xyz" name="url" v-model="form.link" />
            </b-form-group>
            <b-form-group class="mt-3 text-end">
              <b-button variant="primary" type="submit">
                Add
              </b-button>
            </b-form-group>
          </b-form>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
