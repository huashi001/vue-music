import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

export function getTopList(){
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
  const data = Object.assign({},commonParams,{
      gtk:589387796,
      platform:'h5',
      uin: 0,
      needNewCode: 1
  });
  return jsonp(url,data,options);
}