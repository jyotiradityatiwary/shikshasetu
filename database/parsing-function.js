
function toArrofObj(str) {
    let arr = str.split(";");
    let obj = [];
    for (let i = 0; i < arr.length - 1; i += 3) {
        obj.push({ topic: arr[i], city: arr[i + 1], description: arr[i + 2] });
    }
    return obj;
}

function toStr(arrOfObj) {
    const obj = arrOfObj;
    let stri = "";
    for (let i = 0; i < obj.length; i++) {
        stri += obj[i].topic + ";" + obj[i].city + ";" + obj[i].description + ";";
    }
    return stri;
}

// function test() {
//     let objj = [
//         { topic: "topic1", city: "city1", description: "description 1" },
//         { topic: "topic2", city: "city2", description: "description2" },
//         { topic: "topic3", city: "city3", description: "description3" },
//         { topic: "topic4", city: "city4", description: "description4" },
//         { topic: "topic5", city: "city5", description: "description5" },
//         { topic: "topic6", city: "city6", description: "description6" },
//     ];
//     let str =
//         "topic1;city1;description 1;topic2;city2;description2;topic3;city3;description3;topic4;city4;description4;topic5;city5;description5;topic6;city6;description6;";

//     console.log("the string is \n", to_str(objj));
//     console.dir(to_obj(str));
//     // for(let i =0;i<5;i++){
//     //     console.log(obj[i]);
//     // }
// }
//
// test()

module.exports = {toArrofObj, toStr}