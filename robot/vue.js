  mounted() {
    this.help()
  }

  // methods: {
  help() {
    const g = document.createElement('script')
    const s = document.getElementsByTagName('script')[0]
    g.src = `${this.BASE_URL}/packs/js/sdk.js`
    s.parentNode.insertBefore(g, s)
    g.onload = () => {
    window.chatwootSDK.run({
        websiteToken: 'NrvWuJzwnojCKHjZmpn8YvFR',
        baseUrl: this.BASE_URL,
    })
    }
  },
