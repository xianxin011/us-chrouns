import { converNum2En } from './tools';

export const timeAgoCN = (pastTime:string|undefined) => {
    // 拿到当前时间戳和发布时的时间戳，然后得出时间戳差
    if(pastTime === undefined) return;
    const curTime = new Date();
    const postTime = new Date(pastTime);
    const timeDiff = curTime.getTime() - postTime.getTime();
    
  
    // 单位换算
    const sec = 1000;
    const min = 60 * 1000;
    const hour = min * 60;
    const day = hour * 24;
    const week = day * 7;
  
    // 计算发布时间距离当前时间的周、天、时、分、秒
    const exceedWeek = Math.floor(timeDiff / week);
    const exceedDay = Math.floor(timeDiff / day);
    const exceedHour = Math.floor(timeDiff / hour);
    const exceedMin = Math.floor(timeDiff / min);
    const exceedSec = Math.floor(timeDiff / sec);

  
    // 最后判断时间差到底是属于哪个区间，然后return
    if(exceedWeek > 0){
        return pastTime;
    }else{
        if(exceedDay < 7 && exceedDay > 0){
            return exceedDay + '天前';
        }else{
            if(exceedHour < 24 && exceedHour > 0){
                return exceedHour + '小时前';
            }else{
                if(exceedMin<60 && exceedMin > 0){
                    return exceedMin + '分钟前'
                }else{
                    return exceedSec + '秒前';
                }
            }
        }
    }
  };
  

  export const timeAgoUS = (pastTime:string|undefined) => {
    // 拿到当前时间戳和发布时的时间戳，然后得出时间戳差
    if(pastTime === undefined) return;
    const curTime = new Date();
    const postTime = new Date(pastTime);
    const timeDiff = curTime.getTime() - postTime.getTime();
  
    // 单位换算
    const sec = 1000;
    const min = 60 * 1000;
    const hour = min * 60;
    const day = hour * 24;
    const week = day * 7;
  
    // 计算发布时间距离当前时间的周、天、时、分、秒
    const exceedWeek = Math.floor(timeDiff / week);
    const exceedDay = Math.floor(timeDiff / day);
    const exceedHour = Math.floor(timeDiff / hour);
    const exceedMin = Math.floor(timeDiff / min);
    const exceedSec = Math.floor(timeDiff / sec);
  
    // 最后判断时间差到底是属于哪个区间，然后return
    if(exceedWeek > 0){
        return pastTime;
    }else{
        if(exceedDay < 7 && exceedDay > 0){
            return converNum2En(exceedDay) + (exceedDay>1 ?' days':' day');
        }else{
            if(exceedHour < 24 && exceedHour > 0){
                return converNum2En(exceedHour) + (exceedHour>1?' hours':' hour');
            }else{
                if(exceedMin<60 && exceedMin > 0){
                    return converNum2En(exceedMin) + (exceedMin>1? ' minuts':" minute");
                }else{
                    return converNum2En(exceedSec) + (exceedSec>1? ' seconds':' second'
                    );
                }
            }
        }
    }
  };