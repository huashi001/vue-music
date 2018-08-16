import originJsonp from 'jsonp';
export default function jsonp(url,data,options){
    url+='?'+param(data);
    return new Promise((resolve,reject)=>{
        originJsonp(url,options,(err,data)=>{
            if(!err){
                resolve(data);
            }else{
                reject(err);
            }
        })
    });
}

function param(data){
    let url='';
    for(let item in data){
        let value = data[item]!==undefined? data[item]:'';
        url +=`&${item}=${encodeURIComponent(data[item])}`;
    }
    return url?url.substring(1):'';
}