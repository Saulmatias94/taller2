<template>
  <div class="hello">
    <h1>Peliculas Populares.</h1>
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
      @click="getPeliculasPopular(pag + 1)"
    >
      Ver más
    </button>
  </div>
</template>

<script>
import api from "@/services/api.service";
import movie from "@/models/Movie";
import Tarjetas from "@/components/Tarjetas";

export default {
  name: "Populares",
  components: {
    Tarjetas,
  },

  data() {
    return {
      Url: "Populares",
      pag: 1,
      loading: true,
      peliculas: [],
    };
  },
  mounted() {
    this.getPeliculasPopular(1);
   
  },
  methods: {
    async getPeliculasPopular(pag) {
      this.pag = pag;
      this.loading = true;
      const { data } = await api.getPopular(pag);
      this.peliculas = data.results;
      for (let index = 0; index < this.peliculas.length; index++) {
        this.peliculas[index] = await this.getPelicula(
          this.peliculas[index].id
        );
      }
      this.loading = false;
    },

    async getPelicula(id) {
      const { data } = await api.getMovie(id);
      
      return new movie(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
