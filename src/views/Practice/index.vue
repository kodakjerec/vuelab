<template>
  <div class="practice">
    <h1>Practice</h1>
    <p>練習項目清單</p>
    <div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/counter">Counter</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/search">Search</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/filterDemo">Filter Demo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/listDemo">List Demo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/modalDemo">Modal Demo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/ajaxDemo">Ajax Demo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/refDemo">Ref Demo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/carouselDemo">Carousel Demo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/counterWithState">Counter With State</router-link></li>
        </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.practice p {
  padding: 0 150px;
  text-align: center;
}
.practice div {
  padding: 0.2%;
  width: 20%;
  background-color:#eee;
  margin-left:auto;
  margin-right: auto;
  text-align: center;
}
.practice ul {
  text-align: left;
}
</style>
