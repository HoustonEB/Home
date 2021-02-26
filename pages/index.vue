<template>
  <div class="container">
    <div class="content-box">
      <Logo />
      <h1 class="title">OCTOPUS</h1>
      <div class="links">
        <a
          href="/Octopus"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <ThemePicker />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%); */
  // background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
  /* background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%); */
  /* background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%); */
  .content-box {
    img {
      width: 200px;
    }
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
