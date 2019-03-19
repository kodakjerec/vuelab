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
export default {
  name: 'CarouselDemo',
  data: function () {
    return {
      dataList: []
    }
  },
  mounted: function () {
    this.$http
      .post('http://localhost:9999/product/list')
      .then(response => {
        if (response.data.isSuccess) {
          this.dataList = response.data.data
          if (response.data.data.length === 0) {
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
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}
</script>
