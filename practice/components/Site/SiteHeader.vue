<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <nuxt-link :to="{ name: 'index' }" class="navbar-brand">Nuxt</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="collapse navbar-collapse mx-auto">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link :to="{ name: 'slider' }" class="nav-link nav"
                >Slider</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link :to="{ name: 'slider' }" class="nav-link nav"
                >Slider</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
0
