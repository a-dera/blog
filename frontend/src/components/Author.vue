<template>
  <div v-if="author">
    <h2>{{ displayName }}</h2>
    <a
      :href="author.website"
      target="_blank"
      rel="noopener noreferrer"
    >Website</a>
    <p>{{ author.bio }}</p>

    <h3>Posts by {{ displayName }}</h3>
    <PostList :posts="author.postSet" :showAuthor="false" />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  name: 'Author',
  components: {
    PostList,
  },
  data () {
    return {
      author: null,
    }
  },
  computed: {
    displayName () {
      return (
        this.author.user.firstName &&
        this.author.user.lastName &&
        `${this.author.user.firstName} ${this.author.user.lastName}`
      ) || `${this.author.user.username}`
    },
  },
}
</script>
