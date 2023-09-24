let stri;
let objj = [ { topic: 'topic1', city: 'city1'}, { topic: 'topic2', city: 'city2'}, { topic: 'topic3', city: 'city3'}, { topic: 'topic4', city: 'city4'}, { topic: 'topic5', city: 'city5'}, { topic: 'topic6', city: 'city6'} ]
let str = 'topic1;city1;topic2;city2;topic3;city3;topic4;city4;topic5;city5;topic6;city6;'

function to_obj(str){
    let arr = str.split(';');
    let obj = [];
    for(let i = 0; i < arr.length-1; i+=2){
        obj.push({topic: arr[i], city: arr[i+1]});
    }
    return obj;
}

let obj =to_obj(str);
console.dir(obj);
for(let i =0;i<5;i++){
    console.log(obj[i]);
}

function to_string2(obj){
    let stri = '';
    for(let i = 0; i < obj.length; i++){
        stri += obj[i].topic + ';' + obj[i].city + ';';
    }
    return stri;
}
console.log("the string is \n",to_string2(objj));
