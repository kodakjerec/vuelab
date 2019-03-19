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
            <li><router-link to="/filterDemo">FilterDemo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/listDemo">ListDemo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/modalDemo">ModalDemo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/ajaxDemo">AjaxDemo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/refDemo">RefDemo</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/carouselDemo">CarouselDemo</router-link></li>
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
  text-align: center;
}
.practice ul {
  text-align: left;
}
</style>
