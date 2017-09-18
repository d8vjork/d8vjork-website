import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import Projects from '@/pages/Projects'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        heading: 'You\'re welcome!',
        subheading: 'Welcome to my official website, here I\'ll write (if I have time) some blog entries and present my projects.'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {
        heading: 'Last blog entries',
        subheading: 'Stay tunned with my last blog entries (or not...). I\'ll write about miscellaneous topics.'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        heading: 'My projects',
        subheading: 'Here\'s the place where I present my proyects to the world, take a look!'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        heading: 'Rubén Robles Manrique',
        subheading: 'A.k.a. d8vjork, freelance full-stack web developer (back-end and front-end) with projects in mind since childhood.'
      }
    }
  ]
})
