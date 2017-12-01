<template>
  <div id="app">
    <app-header></app-header>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">
          {{ $route.meta.heading }}
        </h1>
        <p class="lead">
          {{ $route.meta.subheading }}
        </p>
      </div>
    </div>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'app',

  components: {
    AppHeader, AppFooter
  }
}
</script>

<style>
.lead a {
  text-decoration: none;
}

.lead a:hover,
.lead a:focus,
.lead a:active {
  text-decoration: none;
  color: #212529;
}

small {
  font-size: 60%;
}

.text-big {
  font-size: 8rem !important;
}
</style>
