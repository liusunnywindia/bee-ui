// main.js
import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import Main from "./BeeMessage.vue"; 

let ToastConstructor = Vue.extend(Main); // 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
let instance;

const Message = function(options={}) {
  instance = new ToastConstructor({ data: options }).$mount(); // 渲染组件,options会合并到data里面
  document.getElementById('main').appendChild(instance.$el); // 挂载到 main下
};
['error', 'warning'].forEach(type=>{
  Message[type] = options =>{
    options.type=type;
    return Message(options)
  }
})

export default Message;
