import {SETLOGINOUT,SETLOGIN,LOGIN,LOGINSTATE,ISSHOW,SETISSHOW} from './mutationsType'

export default {
    [SETLOGIN]({commit},res){
        localStorage.setItem('accesstoken',JSON.stringify(res.accesstoken))
        localStorage.setItem('loginname',JSON.stringify(res.loginname))
        localStorage.setItem('loginState',true)
        commit(LOGINSTATE,true);
        commit(LOGIN,res)
    },
    [SETLOGINOUT]({commit},res){
        localStorage.removeItem('username');
        localStorage.removeItem('loginState');
        commit(LOGINSTATE,false);
    },
    [SETISSHOW]({commit},res){
        // localStorage.setItem('isShow',false)
        commit(ISSHOW,false)
    }
}