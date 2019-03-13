<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div class="footer">
      <span>© 2019 Thinkpower.</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#app {
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px;
}

#nav {
  padding: 30px;
  margin-bottom: 10px;
  background-color: #eee;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: #eee;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & span {
    color: #333;
    font-size: 12px;
    padding-right: 10px;
  }
}
</style>
