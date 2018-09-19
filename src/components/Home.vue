<template>
  <div>
    <!-- Header-->
    <div class="header">
      <div class="header-top">
        <h3>Jackson de Fraga</h3>
        <div class="title-page">
          <div class="title">
            <h1>Desenvolvedor de Sistemas</h1>
          </div>
          <a class="btn-demo" data-scroll data-options='{ "easing": "easeOutQuad" }' href="#demos">See Demo</a>
        </div>
      </div>
    </div>
    <!-- End-Header-->
    <div id="demos" class="us-themes">
      <!--box-themes-->
      <div class="container">
        <div class="row single-section">
          <i class="lnr lnr-diamond"></i>
          <h3>Choose one of the Demos</h3>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="hvr-float-shadow wow zoomIn">
              <img class="img-responsive" src="static/image/img1.jpg" alt="">
              <p>Home Version o1</p>
              <a target="_blank" class="view-btn hvr-bounce-to-right" href="theme/index.html">View Demo</a>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="hvr-float-shadow wow zoomIn">
              <img class="img-responsive" src="static/image/img2.jpg" alt="">
              <p>Home Version 02</p>
              <a target="_blank" class="view-btn hvr-bounce-to-right" href="theme/index2.html">View Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End-box-themes-->
    <section class="responsive_details">
      <div class="container">
        <div class="row">
          <div id="app" class="col-sm-12">

          </div>
        </div>
      </div>
    </section>
    <div class="footer text-center">
      <!--footer-->
      <div class="container">
        <div class="footer-inner">
          <h3 class="text-40">Create your own website today !</h3>
          <a class="buttons" href="#">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
