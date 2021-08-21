import router from '@/router'
import { createProvider } from './vue-apollo'
import gql from 'graphql-tag'

new Vue({
  apolloProvider: createProvider({
    httpEndpoint: 'http://localhost:8000/graphql',
    wsEndpoint: null,
  }),
  router,
})

export default {
  
  async created () {
    const post = await this.$apollo.query({
        query: gql`query ($slug: String!) {
          postBySlug(slug: $slug) {
            title
            subtitle
            publishDate
            metaDescription
            slug
            body
            author {
              user {
                username
                firstName
                lastName
              }
            }
            tags {
              name
            }
          }
        }`,
        variables: {
          slug: this.$route.params.slug,
        },
    })
    this.post = post.data.postBySlug
  },


  async created () {
    const user = await this.$apollo.query({
      query: gql`query ($username: String!) {
        authorByUsername(username: $username) {
          website
          bio
          user {
            firstName
            lastName
            username
          }
          postSet {
            title
            subtitle
            publishDate
            published
            metaDescription
            slug
            tags {
              name
            }
          }
        }
      }`,
      variables: {
        username: this.$route.params.username,
      },
    })
    this.author = user.data.authorByUsername
  },


  async created () {
    const posts = await this.$apollo.query({
      query: gql`query ($tag: String!) {
        postsByTag(tag: $tag) {
          title
          subtitle
          publishDate
          published
          metaDescription
          slug
          author {
            user {
              username
              firstName
              lastName
            }
          }
          tags {
            name
          }
        }
      }`,
      variables: {
        tag: this.$route.params.tag,
      },
    })
    this.posts = posts.data.postsByTag
  },

  async created () {
    const posts = await this.$apollo.query({
      query: gql`query {
        allPosts {
          title
          subtitle
          publishDate
          published
          metaDescription
          slug
          author {
            user {
              username
              firstName
              lastName
            }
          }
          tags {
            name
          }
        }
      }`,
    })
    this.allPosts = posts.data.allPosts
  },


}


  