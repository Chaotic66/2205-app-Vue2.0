////封装set
let set = (key,value) => {
    if(key && value){
        ////存储时需要转json
        let value2 = JSON.stringify(value)
        localStorage.setItem(key,value2)
    }else{
        console.error('key和value必须有')
    }
    
}

////封装get
let get = key => {
    let res = localStorage.getItem(key)
    try{
        ////转换成正常数据
        let res2 = JSON.parse(res)
        return res2
    }catch(erro){
        console.log(erro);
        return res
    }
}

export default {
    set,
    get
}