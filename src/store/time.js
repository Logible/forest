export default {
    namespaced: true,
    state: {
        todayTime: 0,
        period: "研究生",
        goldNum: 0
    },
    actions: {
        addTime(Context, value) {
            Context.commit("addTime", value)
            Context.commit("setExitValue");
        }
    },
    mutations: {
        addTime(state, value) {
            state.goldNum += value;
            state.todayTime += value;
        },
        setInitialvalue(state) {
            state.todayTime = Number(localStorage.getItem('todayTime') || 0);
            state.goldNum = Number(localStorage.getItem('goldNum') || 0);
        },
        setExitValue(state) {
            localStorage.setItem('todayTime', state.todayTime);
            localStorage.setItem('goldNum', state.goldNum);
        },
        clearTodayTime(state) {
            state.todayTime = 0;
            localStorage.setItem('todayTime', 0);
        }
    },
    getters: {

    }
}