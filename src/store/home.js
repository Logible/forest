import { reqCategoryList } from "@/axios"

export default {
    namespaced: true,
    state: { categoryList: [] },
    actions: {
        async categoryList(context) {
            let result = await reqCategoryList();
            if (result.code == 200) {
                context.commit("categoryList", result.data)
            }
        }
    },
    mutations: {
        categoryList(state, value) {
            state.categoryList = value
        }
    },
    getters: {}
}