<template>
  <b-card-group class="col-md-4 col-lg-3 col-sm-6">
    <b-container>
      <b-card
        :title="movie.title"
        :img-src="movie.poster_path"
        img-top
        tag="article"
        style="max-width: 18rem; min-height: 30rem"
        class="mb-2 bg-info m-auto"
      >
      
        <b-icon
          icon="star-fill"
          style="width: 20px; height: 20px"
          class="me-2"
          variant="warning"
        >
        </b-icon>
        <b-card-text class="d-inline"> {{ movie.vote_average }}</b-card-text>
        <hr />
        <b-link class="btn btn-primary" :to="{ path: `/${tipos}/${movie.id}` }"
          >Descripción</b-link
        >
        
      </b-card>
    </b-container>
  </b-card-group>
</template>

<script>
export default {
  name: "Tarjetas",
  props: ["movie", "tipos"],
  components: {
   
  },
  mounted() {},

  data() {
    return {
      datos: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>