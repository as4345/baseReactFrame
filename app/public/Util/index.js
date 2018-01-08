import axios from "axios"

//二次封装的axios
/**
 * 方法接受一个对象，
 * url 字段接受一个字符串，必传，内容为接口地址
 * method 字段接受一个字符串，选传，内容为请求类型，不传默认为get
 * data 字段接受一个对象，选传，内容为post类型的接口参数， 
 */
export const Axios = arg => {
    let parmArr = []
    let data = {}   //最终调接口用的数据
    //装进token
    //const token = localStorage.getItem("usertoken")
    const token = "monitoken"
    token && parmArr.push("token=" + token)
    //接口参数分解
    //get类型
    if(arg.type == "GET" || arg.type == "get" || !arg.type){
        if(arg.data){
            const temData = arg.data
            for(var key in temData){
                parmArr.push(key + "=" + temData[key])
            }
        }
    }else{  //post类型
        data["data"] = arg.data
    }

    const parmStr = parmArr.join("&") ? "?" + parmArr.join("&") : ""
    data["url"] = arg.url + parmStr
    arg.type && (data["method"] = arg.type)
    	


    axios.defaults.withCredentials = true
    return axios({
            ...data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            return(res.data)    //东西太多，只返回data字段
        })
        .catch(err => {
            console.log(err)
        })
}


//传入秒(num)，返回hh:mm:ss格式时间字符串
export const formatSecond = second => {
        const hour = second/3600 >= 1 ? (second/3600).toFixed(0) : "0"
        const beMin = hour >= 1 ? second%3600 : second
        const min = beMin/60 >= 1 ? (second/60).toFixed(0) : "0"
        const sec = (min >= 1 || hour>= 1) ? beMin%60 : second
        const timeArr = [
            hour > 9 ? hour : "0"+hour,
            min > 9 ? min : "0"+min,
            sec > 9 ? sec : "0"+sec,
        ]
        return timeArr.join(":")
    }



//时间戳转换
export const formatDate = tm => {
    const tt = new Date(tm).toLocaleString()
    return tt
}