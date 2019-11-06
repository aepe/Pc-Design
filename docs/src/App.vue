<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 11:44:57
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-05 16:30:27
 -->
<template>
    <div id="app">
        <mt-button />
        <mt-input />
        <mt-sider />
        <mt-test />
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
    created() {},
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
