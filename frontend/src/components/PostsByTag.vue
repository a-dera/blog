<template>
  <div>
    <h2>Posts in #{{ $route.params.tag }}</h2>
    <PostList :posts="posts" v-if="posts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  name: 'PostsByTag',
  components: {
    PostList,
  },
  data () {
    return {
      posts: null,
    }
  },
}
</script>
