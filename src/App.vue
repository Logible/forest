<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("time", {
      setInitialvalue: "setInitialvalue",
      setExitValue: "setExitValue",
    }),
  },
  mounted() {
    this.setInitialvalue();
  },

  name: "App",
  components: {},
};
</script>

<style scoped>
</style>
