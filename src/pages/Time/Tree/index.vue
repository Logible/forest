<template>
  <div class="container">
    <div class="focus">今天您已经专注了{{ todayTime }}分钟 !</div>
    <div>
      <img
        src="https://st4.depositphotos.com/20597342/25068/v/380/depositphotos_250688134-stock-illustration-cartoon-tree-face-mustache-isolated.jpg?forcejpeg=true"
        class="tree"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("time", ["todayTime"]),
  },
};
</script>

<style lang='less' scoped>
.focus {
  color: white;
  font-size: 30px;
}
.container {
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.tree {
  margin-top: 20px;
  height: 230px;
  border-radius: 50%;
}
</style>