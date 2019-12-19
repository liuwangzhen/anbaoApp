<template>
  <div class="pagepb">
    <div class="bghead">
      <div class="row acen pt10">
        <van-icon class="cfff ml20" size='30px' name="service-o" />
        <van-search
         background='#2173e7'
         :class="searchvalue==''?'longer':'smaller'" shape='round' placeholder="请输入新闻通知标题" v-model="searchvalue" />
        <button style="background:none;border:none;" class="f18 cfff le2" v-show='searchvalue' @click="goNews(searchvalue)">搜索</button>
        <div class="cfff abs r20">
        <van-icon  size='30px' name='chat-o' />
        </div>
      </div>
      <div class="news bgfff wvw90 mlvw5">
      <van-swipe :autoplay="2000" style="margin-top:1vw;height:40vw">
        <van-swipe-item @click="goNews(item)" :key="item" v-for="item in 7">
          <van-image 
          width="90vw"
          height="32vw"
          style=""
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
           />
          <div>[新闻通知] 热烈庆祝中华人民共和国70周年{{item}}</div>
        </van-swipe-item>
      </van-swipe>
      <!-- <div
        @click="goNews"
        style="line-height:8vw;z-index:2"
        class="f16 r30 abs"
      >更多新闻</div> -->
    </div>
      <!-- <div class="row acen pt20">
        <van-image
          round
          class="ml20"
          width="26vw"
          height="26vw"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="col acen f18 cfff le1 ml10">
          <div>{{user.name}}</div>
          <div class="mt5">当前在线4人</div>
        </div>
        <div class="abs r30">
          <van-icon size="2rem" color="#fff" name="chat-o" info="9" />
        </div>
      </div>-->
    </div>
    
    <div :key="item" v-for="item in 4" class="mt20 wvw100">
      <div  class="row bgfff acen">
        <van-image
          class="ml20"
          width="40px"
          height="40px"
          fit="cover"
          :src="require('../assets/bt.png')"
        />
        <div class="abs f20 cfff l30 mt5">R</div>
        <div class="b f20 ml20">日常应用</div>
      </div>
      <div class="row fwrap">
        <div :key="item" v-for="item in 5" class="col menuItem bgfff acen jcen">
          <van-image width="15vw" height="15vw" fit="cover" :src="require('../assets/3.png')" />
          <div class="f18 lh30">签到</div>
        </div>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/shop" icon="cart-o">商城</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import vue from "vue";
import { Image, Icon, Swipe, SwipeItem } from "vant";
vue
  .use(Image)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem);
export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      user: { name: "王强" },
      img: require("../assets/bt.png"),
      active: 0,
      searchvalue:''
    };
  },
  methods: {
    goNews: function(e) {
      window.console.log(e);
      this.$router.push({
        path: "/news"
      });
    },
    getNews: function() {
      this.axios
        .get(`${this.$store.state.https}/gettzgg_ui`, {
          params: {
            xqid: this.$route.query.xqid
          }
        })
        .then(res => {
          this.$store.state.user = res.data.data[0];
        });
    }
  }
};
</script>

<style scoped>
.news {
  border-radius: 10px;
  /* border:1px solid #fff; */
  height: 40vw;
}

.longer{
  width:calc( 100vw - 40px - 60px );
}
.smaller{
  width:calc( 100vw - 40px - 60px - 60px);
}
</style>
<style lang='scss' >
// @each $color in $colors {
//   .c#{$color.name} {
//     color: #{$color};
//   }
// }
.pagepb {
  padding-bottom: 70px;
}
.menuItem {
  width: calc(80vw / 3);
  height: calc(80vw / 3);
  margin-left: 5vw;
  margin-top: 5vw;
  border-radius: 10px;
}
.fwrap {
  flex-wrap: wrap;
}
.b {
  font-weight: bold;
}
.cfff {
  color: #fff;
}
.bgfff {
  background-color: #fff;
}
@for $i from 1 through 6 {
  .ml#{$i*5} {
    margin-left: (5px * $i);
  }
}
@for $i from 1 through 101 {
  .wvw#{$i} {
    width: (1vw * $i);
  }
}
@for $i from 1 through 20 {
  .mlvw#{$i} {
    margin-left: (1vw * $i);
  }
}
@for $i from 1 through 4 {
  .le#{$i} {
    letter-spacing: (1px * $i);
  }
}

@for $i from 12 through 40 {
  .f#{$i*1} {
    font-size: (1px * $i);
  }
}
@for $i from 1 through 10 {
  .pt#{$i*5} {
    padding-top: (5px * $i);
  }
}
@for $i from 1 through 10 {
  .lh#{$i*10} {
    line-height: (10px * $i);
  }
}
@for $i from 1 through 8 {
  .mt#{$i*5} {
    margin-top: (5px * $i);
  }
}
@for $i from 1 through 8 {
  .l#{$i*5} {
    left: (5px * $i);
  }
}
@for $i from 1 through 8 {
  .r#{$i*5} {
    right: (5px * $i);
  }
}
.col {
  display: flex;
  flex-direction: column;
}
.acen {
  align-items: center;
}
.jcen {
  justify-content: center;
}
.row {
  display: flex;
  flex-direction: row;
}
.abs {
  position: absolute;
}
.bghead {
  background-color: #2173e7;
  height: 60vw;
  width: 100vw;
}
</style>
