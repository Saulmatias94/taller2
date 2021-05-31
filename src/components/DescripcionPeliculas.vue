<template>
  <div>
    <b-card
      overlay
      :img-src="peliculas.backdrop_path" 
    >
   
    </b-card>
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