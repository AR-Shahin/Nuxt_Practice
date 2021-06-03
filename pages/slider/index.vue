<template>
  <div class="container">
    <h1 class="text-center">Slider</h1>
    <hr />
    <carousel :autoplay="true" :nav="true" :items="3" :dots="true">
      <div class="col-4">
        <img src="https://placeimg.com/200/200/any?1" />
      </div>
      <div class="col-4">
        <img src="https://placeimg.com/200/200/any?2" />
      </div>
      <div class="col-4">
        <img src="https://placeimg.com/200/200/any?5" />
      </div>
      <div class="col-4">
        <img src="https://placeimg.com/200/200/any?1" />
      </div>
      <div class="col-4">
        <img src="https://placeimg.com/200/200/any?5" />
      </div>
    </carousel>
    <carousel :autoplay="true" :nav="true" :items="3" :dots="true">
      <img src="https://placeimg.com/200/200/any?1" />

      <img src="https://placeimg.com/200/200/any?2" />

      <img src="https://placeimg.com/200/200/any?3" />

      <img src="https://placeimg.com/200/200/any?4" />
    </carousel>

    <hr />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
