var validator = require('validator');
var moment = require('moment');

module.exports = {
    issetNotEmpty,
    isset,
    isValidDate
}
   

function issetNotEmpty(str){
    if(str!=undefined && typeof(str)=='string' && str.trim()!='')
        return true;
    else if(str!=undefined && str!='')
        return true;
    else
        return false;
}

function isset(str){
    if(str!=undefined)
        return true;
    else
        return false;
}

function isValidDate(timestamp){
    if(issetNotEmpty(timestamp)){
        if((typeof(timestamp) =='string' && timestamp.length == 13) || (typeof(timestamp) =='number' && timestamp.toString().length == 13) )
            timestamp = (typeof(timestamp) =='number')?timestamp.toString().substring(0, timestamp.length-3):timestamp.substring(0, timestamp.length-3);
            
            console.log('Is valid Date >>>   ',moment.unix(timestamp).format("YYYY-MM-DD HH:mm:ss"));
            
            if(moment.unix(timestamp).format("YYYY-MM-DD HH:mm:ss")=='Invalid date'){
                return false;
            }else{
                return true;
            }
    }else{
        return false;
    }
}

