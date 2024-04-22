<template>

<!-- 顶部安全区 -->
<div class="van-safe-area-top"></div>

<div class='mymap'>
  <tmap-map 
  v-if = "!loading"
    mapKey = "VFSBZ-H2VWT-4YOXK-VY3F7-C45GK-MABHH"
    longitude = "{{ longitude }}"
    latitude = "{{ latitude }}"
    :scale = 1
    :minZoom = 5
    :maxZoom = 20
    bindcontroltap = 'controltap'
    bindmarkertap = 'markertap'
    bindregionchange = 'regionchange'
    polyline = '{{ polyline }}'
  >
  </tmap-map>
  <!-- loading状态 -->
  <van-loading v-else type="circular" size="100px" color="#1989fa" class="loadingDisplay">加载中</van-loading>
</div>

<!-- 下边框 -->
<div class="van-hairline--bottom"></div>

<van-cell-group>
  <!-- 
    disabled="true"
    禁用聊天框  
  -->
  <van-field
  value="{{ name }}"
  label="姓名"
  placeholder="用户名锁定"
  >
    <!-- 定义插槽，放置图标 -->
    <template #label>
      <van-icon name="user-o" style="margin-right: 10px;"></van-icon>
      姓名
    </template>
  </van-field>

<van-field
  value="{{ phone }}"
  label="电话"
  placeholder="电话锁定"
  >
    <template #label>
      <van-icon name="phone-o" style="margin-right: 10px;"></van-icon>
      电话
    </template>
</van-field>

<van-field
  value="{{ location_str }}"
  label="位置信息"
  placeholder="位置信息锁定"
  >
    <template #label>
      <van-icon name="location-o" style="margin-right: 10px;"></van-icon>
      位置信息
    </template>
</van-field>
  

</van-cell-group>
<view class="ct">
  <!--渐变色-->
  <van-button  color="linear-gradient(to right, #ff6034, #ee0a24)"  bindtap="send_msg" class="van-haptics-feedback">提交信息</van-button>
</view>

<!--

  <van-image :src="require('../assets/版权标识.png')" class="foot"/>
-->
  <div class="foot">
    <img :src="require('../assets/版权标识.png')" alt="版权标识">
  </div>

<div class="tabbar">
  <van-tabbar >
    <van-tabbar-item icon="checked">签到</van-tabbar-item>
    <van-tabbar-item icon="user">我的</van-tabbar-item>
    <!-- replace to="/search"属性实现路由 -->
  </van-tabbar>
   
</div>

<!-- 底部安全区 -->
<div class="van-safe-area-bottom"></div>
</template>

<script>
import { Loading, Button, CellGroup, Field, Icon, Image, Tabbar, TabbarItem, } from 'vant';
import Tmap from "@map-component/vue-tmap";


export default {
  data() {
    return {
      loading: true,
      longitude: 120.074387,
      latitude: 30.290756,
      polyline: '',
      name: 'Jack',
      phone: '1923',
      location_str: '11',
    };
  },
  methods: {
    send_msg() {
      //提交信息
    },
  },
  mounted() {
    //数据加载完成后取消 loading 状态
      this.loading = false;
    },
  components: {
    Loading,
    Button,
    Icon,
    CellGroup,
    Field,
    Image,
    Tabbar,
    TabbarItem,
    Tmap,
  },
  
}


  
</script>

<style>
.mymap{
  width:100%;
  height:20%;
}
.loadingDisplay{
  display: flex;
  align-items:center;
  justify-content: center;
  top:40%;
}
.ct{
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.foot {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.foot img {
  max-height: 80%;
  height: 125px;
}
.tabbar {
  width: 100%; 
  height: 5%; 

}
</style>
