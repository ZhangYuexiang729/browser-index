<template>
<header>
<!--  显示时间-->
  <div class="datebox">
      <el-button class="date" @click="show = !show"  plain>
        <span>{{ dateFormat(newDate) }}</span>
      </el-button>
  </div>
</header>
<!--  搜索框-->
  <div class="content">
    <el-input v-model="wd"
              @keydown="keydown($event)"
              placeholder="请输入搜索内容，按回车键搜索"
              type="text"
              id="input"
              @focus="focus"
              @blur="blur">

    </el-input>


<!--        <el-card shadow="always" v-if="isSearch">-->
<!--          总是显示-->
<!--        </el-card>-->


  </div>

<!--用来放标签页-->
  <transition name="el-fade-in-linear">
<div class="iconall" v-show="show" >
  <div class="iconbox">
    <a class="iconBackBox" href="https://www.bilibili.com/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/bilibili.png" alt="bilibili">
      </div>
      <p>bilibili</p>
    </a>
  </div>

<!--  -->
  <div class="iconbox">
  <a class="iconBackBox" href="https://github.com/" target="_blank">
    <div class="img">
    <img src="../src/assets/icon/github.png" alt="github">
    </div>
      <p>github</p>
  </a>
  </div>

  <!--  -->
  <div class="iconbox">
    <a class="iconBackBox" href="https://www.cnki.net/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/zhiwang.png" alt="知网">
      </div>
      <p>知网</p>
    </a>
  </div>


  <!--  -->
  <div class="iconbox">
    <a class="iconBackBox" href="https://www.taobao.com/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/淘宝.png" alt="淘宝">
      </div>
      <p>淘宝</p>
    </a>
  </div>

  <!--  -->
  <div class="iconbox">
    <a class="iconBackBox" href="https://www.jd.com/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/京东.png" alt="京东">
      </div>
      <p>京东</p>
    </a>
  </div>

  <!--  -->
  <div class="iconbox">
    <a class="iconBackBox" href="https://i.mooc.chaoxing.com/space/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/学习通.png" alt="学习通">
      </div>
      <p>学习通</p>
    </a>
  </div>

  <!--  -->
  <div class="iconbox">
  <a class="iconBackBox" href="https://fanyi.youdao.com/" target="_blank">
    <div class="img">
      <img src="../src/assets/icon/语言翻译.png" alt="有道在线翻译">
    </div>
    <p>有道翻译</p>
  </a>
</div>

  <!--  -->
  <div class="iconbox">
    <a class="iconBackBox" href="https://www.pianku.li/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/tv.png" alt="片库">
      </div>
      <p>片库</p>
    </a>
  </div>

  <!--  -->
  <div class="iconbox">
    <a class="iconBackBox" href="https://weibo.com/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/微博.png" alt="微博">
      </div>
      <p>微博</p>
    </a>
  </div>

  <!--  -->
  <div class="iconbox">
    <a class="iconBackBox" href="https://chrome.zzzmh.cn/" target="_blank">
      <div class="img">
        <img src="../src/assets/icon/插件.png" alt="Chrome插件">
      </div>
      <p>Chrome插件</p>
    </a>
  </div>
</div>
  </transition>

<div class="sentence1">
  <span class="sentence">但行好事，莫问前程 </span>
</div>
  <footer>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      newDate: new Date(),
      wd:'',
      show:false,
      isfocus:focus()
    }
  },
// 挂载时间
  mounted() {
    alert(123)
    let that = this
    this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString()
    })
  },
  methods: {
    // 时间格式化
    dateFormat() {
      var date = new Date()
      // var year = date.getFullYear()
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      let week = date.getDay() // 星期
      let weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// 拼接 时间格式处理
      return  month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds + ' ' + weekArr[week]
    },

      keydown(event){
        console.log(event);
       if(event.keyCode==13)
          //如果你按的是enter，那么就跳转到百度搜索结果
          window.open("https://www.baidu.com/s?wd="+this.wd);
        }

  },
  computed: {
    isSearch() {
      return this.isFocus;
    }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 50%;
}
.date{
  width: 380px;
  height: 60px;
  font-size: 25px;
  background-color: rgba(255,255,255, 0.4);
  border-style: none;
  /*margin-left: -1%;*/
  margin-top: 5%;
  margin-bottom: 3%;
  border-radius: 15px;
}
.el-button{
  color: #2c5050;
}
.content{
  width: 750px;
  height: 50px;
  margin: 0 auto;
}
.iconall{
  width: 700px;
  height: 350px;
  margin: 50px auto;
  display: flex;
   /*让一行中的元素平均分配宽度 */
  justify-content: space-around;
  align-items: center;
  /*!* 元素在一行放不下时自动换行 *!*/
  flex-wrap: wrap;
  /*width: 700px;*/
  /*height: 600px;*/
}
 .iconbox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* 让元素垂直排列 这里就是让包含图片的div和文字垂直排列 */
  flex-direction: column;
  width: 100px;
  height: 140px;
  margin: 20px;
  /* 鼠标放上去变成小手 */
  cursor: pointer;

}
 .iconbox .img{
   display: flex;
   /*在主轴上居中*/
   justify-content: center;
   align-items: center;
   width: 100px;
   height: 100px;
   border-radius: 20px;
   background-color: #fff;
   box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.5), -18px -18px 30px rgba(255, 255, 255, 0.5);
   /*box-shadow:-1px 0 20px #3B3B3B, 1px 0 20px #3B3B3B, 0 -1px 20px #3B3B3B, 0 1px 20px #3B3B3B;*/
   /* 过渡时间 ease-out是指先快速 后慢速 */
   transition: all 0.2s ease-out;
 }
img {
  width: 60px;
  transition: all 0.2s ease-out;
}
p{
  color: #ffffff;
}
.iconall a{
  text-decoration: none;
}
.img:hover {
  /* inset 是内部阴影 默认是外部阴影outset */
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.8),
  inset 18px 18px 30px rgba(0, 0, 0, 0.1),
  inset -18px -18px 30px rgba(255, 255, 255, 1);
}

.img:hover img {
  width: 50px;
}
.el-input{
  height: 70px;
}
.sentence{
  line-height: 36px;
  color: #ffffff;
  font-size: 20px;
}
.sentence1{
 width: 300px;
  height: 40px;
  background-color: rgba(169,169,169, 0.2);
  position: fixed;
  margin-top: 10px;
  left: 40%;
}
#input:focus{
  height: 56px;
  transition: all 0.3s ease-out;
  margin-bottom: 20px;
}
#input{
  transition: all 0.3s ease-out;
}

</style>
