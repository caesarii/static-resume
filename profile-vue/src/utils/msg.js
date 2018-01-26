/**
 * Created by vtroo on 2017/7/13.
 */
import {Message} from 'element-ui';
export default (type,err)=>{
  return Message({
    message: err,
    type: type,
    duration: 2 * 1000,
    showClose:true
  });
}
