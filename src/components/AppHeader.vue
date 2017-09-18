<template>
  <div class="blog-masthead">
    <div class="container">
      <nav class="nav">
        <router-link :to="{ name: 'home' }" class="nav-link">
          Home
        </router-link>
        <router-link :to="{ name: 'blog' }" class="nav-link">
          Blog
        </router-link>
        <router-link :to="{ name: 'projects' }" class="nav-link">
          Projects
        </router-link>
        <router-link :to="{ name: 'about' }" class="nav-link">
          About
        </router-link>
      </nav>
    </div>
  </div>
</template>

<style>
.blog-masthead {
  background-color: #428bca;
  box-shadow: inset 0 -.1rem .25rem rgba(0,0,0,.1);
}

.blog-masthead .nav-link {
  position: relative;
  color: #cdddeb;
}

.blog-masthead .nav-link:hover,
.blog-masthead .nav-link:focus {
  color: #fff;
  background-color: transparent;
}

.blog-masthead .nav-link.active {
  color: #fff;
}

.blog-masthead .nav-link.active:after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -.3rem;
  vertical-align: middle;
  content: "";
  border-right: .3rem solid transparent;
  border-bottom: .3rem solid #e9ecef;
  border-left: .3rem solid transparent;
}
</style>
