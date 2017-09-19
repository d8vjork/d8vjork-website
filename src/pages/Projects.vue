<template>
  <div class="container">
    <transition-group tag="div" class="row" name="fade" enter-class="animated fadeIn" leave-class="animated fadeOut" appear>
      <div v-for="(project, index) in projects" :key="index" class="col-12 col-lg-4 mb-3">
        <div class="card">
          <img class="card-img-top" :src="project.meta.image" :alt="project.meta.title + ' image'">
          <div class="card-body">
            <h4 class="card-title">
              {{ project.meta.title }}
            </h4>
            <div class="mb-2">
              <span v-for="(lang, index) in project.meta.languages" :key="index" class="badge badge-dark mr-1">
                {{ lang }}
              </span>
            </div>
            <p class="card-text" v-html="project.content"></p>
            <a :href="project.meta.website" target="_blank" class="btn btn-primary float-left">Website</a>
            <a href="#" class="btn btn-secondary float-right">Read more</a>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      projects: []
    }
  },

  mounted () {
    this.fetchProjects()
  },

  methods: {
    fetchProjects () {
      axios.get(this.$env.API_URL + '/contents/content/projects')
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          axios.get(response.data[i].url, {
            headers: {
              'accept': 'application/vnd.github.v3.raw'
            }
          }).then(response => {
            var project = this.$md.render(response.data)
            this.projects.push({
              content: project,
              meta: this.$md.meta
            })
          })
        }
      })
    }
  }
}
</script>
