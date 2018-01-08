import * as types from '../../constants';
import { Map } from "immutable"


//公共类reducer

//初始数据

const $$initData = Map({
    isLogin: false, 
    sessionId: null,
    activeIndex:0,
    isShow:true,
})

export default (state = $$initData, action) => {
    switch(action.type){
        case types.SET_LOGINDATA:   //登录
            const $$newData1 = state.set("isLogin", true).set("sessionId", action.data.sessionId)
            return $$newData1
            break
        case types.PH_SET_ACTIVEINDEX: //设置activeIndex
            const $$newData2 = state.set('activeIndex',action.data)
            return $$newData2
            break
        case types.PH_SET_ISSHOW: //设置头部尾部是否显示
            const $$newData3 = state.set('isShow',action.data) 
            return $$newData3
            break   
        default:
            return state




    }
    

}

