<template>
  <div class="container">
    <TopMessage class="TopMessage" />
    <Tree />
    <TimeShow />
  </div>
</template>

<script>
import TimeShow from "@/pages/Time/TimeShow";
import Tree from "@/pages/Time/Tree";
import TopMessage from "@/pages/Time/TopMessage";
export default {
  components: {
    TimeShow,
    Tree,
    TopMessage,
  },
};
</script>

<style lang="less">
body {
  background: darkseagreen;
}
.TopMessage{
  height: 80px;
}
</style>