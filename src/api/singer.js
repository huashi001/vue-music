import jsonp from 'common/js/jsonp';
import {commonParams,options} from './config';
export function getSingerList(){
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg';
    const data = Object.assign({},commonParams,{
        platform:'yqq',
        loginUin: 0,
        hostUin:0,
        needNewCode: 0,
        data: JSON.stringify({"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}})
    });
    return jsonp(url,data,{});
}
export function getSingerDetail(singerId) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
    const data = Object.assign({}, commonParams, {
      hostUin: 0,
      needNewCode: 0,
      platform: 'yqq',
      order: 'listen',
      begin: 0,
      num: 80,
      songstatus: 1,
      singermid: singerId
    })
  
    return jsonp(url, data, options)
  }