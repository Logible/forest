<template>
  <div class="container">
    <div class="left">
      <div>
        <span id="display_gold" class="gold">
          您的金币 {{ goldNum }}
          <img src="./img/gold.png" class="pic" />
        </span>
      </div>
      <div>
        <span class="gold"
          ><a class="text" href="#">我的主页</a>
          <img src="./img/默认头像.png" class="pic" />
        </span>
      </div>
    </div>
    <div class="right">
      <div>
        <span class="gold">
          <a class="text" href="#">更换树种</a>
          <img src="./img/小树11.png" class="pic" />
        </span>
      </div>
      <div>
        <span class="gold">
          <a class="text" href="#">进入商店</a>
          <img src="./img/shop.png" class="pic" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("time", ["goldNum"]),
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  .left {
    flex-shrink: 0;
    display: flex;
  }
  .right {
    flex-shrink: 0;
    display: flex;
  }
}
.pic {
  height: 45px;
  margin-left: 10px;
}
.gold {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
  color: gold;
  font-size: 160%;
  display: flex;
  align-items: center;
}
.text {
  color: #337ab7;
}
</style>
