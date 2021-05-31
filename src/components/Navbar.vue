<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand>
          <b-icon
            icon="exclamation-circle"
            style="width: 30px; height: 30px"
            class="d-inline-block align-top me-2"
          ></b-icon>

          <b-link to="/Populares" class="text-white text-decoration-none">Tabla </b-link>
        </b-navbar-brand>

        <b-navbar-toggle
          target="nav-collapse"
          class="bg-primary"
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="ml-auto" is-nav>
          <div>
            <b-navbar-nav class="navbar-nav">
              <b-link to="/Populares" class="text-white nav-link text-decoration-none"
                >Populares</b-link
              >
              <b-link
                to="/MejoresValorados"
                class="text-white nav-link text-decoration-none"
                >Mejores Valoraciones
              </b-link>
            </b-navbar-nav>
          </div>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      texto: "Hola mundo",
    };
  },
};
</script>

<style>
#nav-collapse {
  flex-grow: initial;
}
</style>
