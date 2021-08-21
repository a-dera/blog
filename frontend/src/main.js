import router from '@/router'
import { createProvider } from './vue-apollo'

new Vue({
  apolloProvider: createProvider(),
  router
})
  