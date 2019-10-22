import Vue from 'vue';
import App from './App.vue';
import router from './router';
//入口文件
const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render : (h) => h(App),
    router:router,
}).$mount(root)