import EventBus from '../eventBus'

export const openContact = {

  data () {
    return {
        isOpen: '',
    }
  },
  methods: {
    updateData (payload) {
      this.isOpen = payload
    }
  },
  mounted () {
    EventBus.$on('OPEN', (payload) => {
      this.updateData(payload)
    })
    EventBus.$on('CLOSE', (payload) => {
      this.updateData(payload)
    })
  }


}