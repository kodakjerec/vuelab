<template>
    <div class="carouselDemo">
        <h1>Carousel Demo</h1>
                    <!-- {{ dataList }} -->
        <div class="owl-carousel owl-theme">
            <template v-for="(data, index) in dataList">
                <div class="item" :key="index">
                    <img :src="data.prodImg">
                </div>
            </template>
        </div>
    </div>
</template>

<script>

import CallService from '@/services/ajaxService.js'

export default {
  name: 'CarouselDemo',
  data: function () {
    return {
      dataList: []
    }
  },
  mounted: function () {
    CallService.getProList().then(
      value => {
        if (value.data.isSuccess) {
          this.dataList = value.data.data
          if (value.data.data.length === 0) {
            alert('查無資料！！')
          } else {
            this.$nextTick(function () {
              $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 1000,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 3
                  }
                }
              })
            })
          }
        } else {
          alert('查無資料！！')
        }
      }
    )
  }
}
</script>
