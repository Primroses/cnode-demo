import {LOGIN ,LOGINSTATE,ISSHOW} from './mutationsType'

export default {
    // 判断能否登录
    [LOGIN](state,data){
        state.accesstoken = data.accesstoken;
        state.loginname =data.loginname
    },
    // 判断登录状态
    [LOGINSTATE](state,data){
        state.loginState = data;
    },
    [ISSHOW](state,data){
        state.isShow = localStorage.getItem('loginState') ? false : true;
    },
}