<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8">
        <div v-for="(post, index) in posts" :key="index" class="mb-5">
          <h2>
            {{ post.meta.title }}
            <small class="d-block text-muted mt-3 mb-4">
              {{ $moment(post.meta.date, $moment.ISO_8601).format("dddd, D MMMM YYYY") }}
            </small>
          </h2>
          <div v-html="post.content"></div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <a class="twitter-timeline" data-height="500" href="https://twitter.com/D8vjork">Tweets by D8vjork</a>
        <div class="fb-page" data-href="https://www.facebook.com/d8vjork/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/d8vjork/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/d8vjork/">D8vjork</a></blockquote></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: []
    }
  },

  mounted () {
    this.fetchPosts()
  },

  methods: {
    fetchPosts () {
      axios.get(this.$env.API_URL + '/contents/content/blog')
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          axios.get(response.data[i].url, {
            headers: {
              'accept': 'application/vnd.github.v3.raw'
            }
          }).then(response => {
            var post = this.$md.render(response.data)
            this.posts.push({
              content: post,
              meta: this.$md.meta
            })
          })
        }
      })
    }
  }
}
</script>
