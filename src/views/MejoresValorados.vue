<template>
  <div class="hello">
    <h1>Peliculas Mejores Valoraciones.</h1>
    <div v-if="loading">
      <b-spinner variant="success" style="width: 5rem; height: 5rem" />
    </div>
    <b-container v-else class="row m-auto" fluid>
      <Tarjetas
        v-for="peli in peliculas"
        :key="peli.id"
        :movie="peli"
        :tipos="Url"
      >
        {{ peli.id }}
      </Tarjetas>
    </b-container>
    <button
      v-if="loading == false"
      class="btn btn-success m-2"
      @click="getPeliculasTop(pag + 1)"
    >
      Ver más
    </button>
  </div>
</template>

<script>
import api from "@/services/api.service";
import Movie from "@/models/Movie";
import Tarjetas from "@/components/Tarjetas";

export default {
  name: "Populares",
  components: {
    Tarjetas,
  },
  props: {},
  data() {
    return {
      Url: "MejoresValorados",
      peliculas: [],
      pag: 1,
      loading: true,
    };
  },
  mounted() {
    this.getPeliculasTop(1);
  },
  methods: {
    async getPeliculasTop(pag) {
      this.loading = true;
      const { data } = await api.getTopRated(pag);
      this.peliculas = data.results;

      for (let index = 0; index < this.peliculas.length; index++) {
        this.peliculas[index] = await this.getPeliculaTop(
          this.peliculas[index].id
        );
      }
      console.log(this.peliculas);
      this.loading = false;
    },

    async getPeliculaTop(id) {
      console.log(id);
      const { data } = await api.getMovie(id);
      return new Movie(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
