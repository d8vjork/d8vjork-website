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
  },

  /* eslint-disable */
  created () {
    window.fbAsyncInit = function () {
      FB.init({
        appId      : '22619868441322',
        xfbml      : true,
        version    : 'v2.10'
      })

      FB.getLoginStatus(function(response) {
        console.log(response)
      })
    }

    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.10&appId=226198684413227";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))

    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
  }
  /* eslint-enable */
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
</style>
