<script>

  export default {
    functional: true,
    props: {
      level: {
        type: Number,
        default: 1
      }
    },
    render (h, c) {
      //const component = c.props.enableEdit ? RestfulApiForm : RestfulApiView
      //c.data.props = c.props
      return h('h'+this.level, this.$slots.default)
    }
  }
</script>
