<template>
  <div>
    <b-container>
      <h1 class="mt-2">{{ peliculas.title }}.</h1>
      <b-card-group>
        <b-card no-body class=" mb-2">
          <b-row class="justify-content-center">
            <b-col md="5">
              <b-card-img
                :src="peliculas.poster_path"
                alt="Image"
                class="rounded my-2 img-fluid"
                style="max-width: 20rem; min-height: 32rem"
              ></b-card-img>
            </b-col>
            <b-col md="5">
              <b-card-group class="d-inline">
                <p class="me-2 my-3">Estreno:{{ peliculas.release_date }} </p>
                <b-icon
                  icon="star-fill"
                  style="width: 20px; height: 20px"
                  
                  variant="warning"
                >
                </b-icon>
                <b-card-text class="d-inline">
                  {{ peliculas.vote_average }}</b-card-text
                >
              </b-card-group>
              <b-card-body title="Description." >
                <b-card-text > 
                  {{ peliculas.overview }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>


<script>
import api from "@/services/api.service";
import Movie from "@/models/Movie";
export default {
  name: "DescripcionPeliculas",
  props: ["numer"],
  mounted() {
    this.getPeliculas(this.$route.params.id);
  },

  data() {
    return {
      peliculas: "",
    };
  },
  methods: {
    async getPeliculas(id) {
      const { data } = await api.getMovie(id);
      this.peliculas = new Movie(data);
    },
  },
};
</script>

<style>
</style>