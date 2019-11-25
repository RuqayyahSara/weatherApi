const axios = require("axios");
const readLineSync = require("readline-sync");
const appid = "d35039cbfbbc291cc946c91d18f1edd8";
var apiKey,input;

    var opt;
    console.log("Find Weather details by entering:\n");
    opt = Number(readLineSync.question("1. City name\n2. City ID\nEnter option: "));
    if(opt==1){
        input = readLineSync.question("Enter city name: ");
        apiKey = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+appid;
    }

    else if(opt == 2){
        input = readLineSync.question("Enter city ID: ");
        apiKey = "https://api.openweathermap.org/data/2.5/weather?id="+input+"&appid="+appid;
    }
    
    else{
        console.log("Enter correct choice");
        process.exit(0);
    } 

    axios.get(apiKey)
        .then((res)=>{
         console.log(res.data);
       })
        .catch(err => console.error(err,"Enter the correct value"))
        .finally(()=>{
         console.log("Continue to search");
 });








