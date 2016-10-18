<template>
  <div class="test">
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1">jhasdjhajshas</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="page-toast">
      <div class="page-toast-wrapper">
        <mt-button @click.native="openToast" size="large" class="button1">点击弹出 Toast</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    openToast(){
      Toast({
        message:'成功',
        position:'bottom',
        className:'totalbg',
        duration:50000
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   /*   @descendent desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;
      }*/
      .test{
        margin-top: -50px;
        padding: 0 5px;
      }
      .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 10px;
      }
      .mint-swipe-item {
        line-height: 200px;
      }
      .slide1 {
        background-color: green;
        color: #fff;
      }
      .slide2 {
        background-color: blue;
        color: #000;
      }
      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
    .button1{
     
      height: 40px;
    }
    .totalbg{
      background: rgba(255,255,255,0.3);
    }
</style>
