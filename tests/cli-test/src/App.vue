<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@use '@zebra-ui/swiper/index';
@use '@zebra-ui/swiper/modules/pagination/pagination.scss';
@use '@zebra-ui/swiper/modules/virtual/virtual.scss';
</style>
