<template>
  <div class="container">
    <div class="top">
      <div class="content">
        <el-button
          @click="startTiming(false, inputMinites, inputSeconds)"
          class="controlButton"
          type="success"
        >
          REST
        </el-button>
        <!--  :min="1" :max="10" @change="handleChange" -->
        <el-input-number
          type="number"
          class="input"
          v-model="inputMinites"
          controls-position="right"
        ></el-input-number>

        <el-input-number
          class="input"
          controls-position="right"
          v-model="inputSeconds"
        ></el-input-number>
        <el-button
          @click="startTiming(true, inputMinites, inputSeconds)"
          class="controlButton"
          type="success"
        >
          START
        </el-button>
      </div>
    </div>
    <div class="mid">
      <span class="second" id="minute">👆输入时间</span>
      <span class="second" id="second"></span>
      <span id="rest_1" class="tip">之后，成长为{{ period }}🌳</span>
      <br />
      <span id="rest_2" class="second">您已经{{ status }}了</span>
      <span class="passtime">{{ passMinites }}</span>
      <span class="second">分</span>
      <span class="passtime">{{ passSeconds }}</span>
      <span class="second">秒</span>
    </div>
    <div>
      <el-button @click="addStudyTime" class="controlButton" type="primary">
        查看作业
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      status: "专注",
      //输入时间
      inputMinites: 25,
      inputSeconds: 0,
      //学习时间
      studyMinites: 0,
      studySeconds: 0,
      //过去时间
      passMinites: 0,
      passSeconds: 0,
      //有无开始
      hasStart: false,
      //计时器
      Interval: 0,
    };
  },
  computed: {
    ...mapState("time", ["todayTime", "period"]),
  },
  methods: {
    ...mapActions("time", { addTime: "addTime" }),
    ...mapMutations("time", { clearTodayTime: "clearTodayTime" }),
    addStudyTime() {
      this.clearTodayTime();
    },
    startTiming(value, inputMinites, inputSeconds) {
      this.setStatus(value);
      this.studyMinites = inputMinites;
      this.studySeconds = inputSeconds;

      this.passSeconds = 0;
      this.passMinites = 0;
      if (!this.Interval) {
        this.Interval = setInterval(() => {
          this.passSeconds += 1;
          //等于60，加1分钟
          if (this.passSeconds == 60) {
            this.passSeconds = 0;
            this.passMinites += 1;
          }
          //时间到了
          if (
            this.passMinites === this.studyMinites &&
            this.passSeconds === this.studySeconds
          ) {
            this.stopTiming(value);
          }
        }, 1000);
      }
    },
    stopTiming(value) {
      window.clearTimeout(this.Interval);
      this.Interval = 0;
      if (value) {
        alert("您已经专注了" + this.inputMinites + "分钟!，休息一下吧");
        this.addTime(this.studyMinites);
        if (this.studyMinites >= 5) {
          this.startTiming(false, this.studyMinites / 5, 0);
        } else {
          this.startTiming(false, 1, 0);
        }
      } else {
        alert("休息时间到，开始学习噜");
      }
    },
    setStatus(value) {
      if (value) {
        this.status = "专注";
      } else {
        this.status = "休息";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.colon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
}
.second {
  color: green;
}
.tip {
  color: darkgoldenrod;
}
.passtime {
  color: red;
  margin: 5px 5px;
}
.container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  .top {
    display: flex;
    justify-content: center;
    .content {
      display: flex;
      width: 430px;
      input {
        width: 80px;
        height: 40px;
      }
    }
  }
  .mid {
    font-size: 180%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

.buttom {
  // text-align: center;
  // display: flex;
  text-align: center;
}
.input {
  margin: 0 10px;
  width: 120px;
}
.controlButton {
  width: 140px;
}
</style>