import axios from "axios";

const myArgs = process.argv.slice(2);
let result;

async function getData(){
    let config = { 
            headers: {'Cookie' : 'hasCookie=true'},
            withCredentials: true
          };

    return await axios.get("https://codequiz.azurewebsites.net/",config)
                .then(response => {
                  return response.data})
                .then((response)=> {
                  result = response;
                  return result
                });
} 

let response = await getData();
let startIndex = response.search(myArgs[0]);
let endIndex;
switch(myArgs[0]){
  case 'B-INCOMESSF':{
    startIndex+=11 + 9;
    endIndex = startIndex+7;
    break;
  }
  case 'BM70SSF':{
    startIndex+=7 + 9;
    endIndex = startIndex+6;
    break;
  }
  case 'BEQSSF':{
    startIndex+=6 + 9;
    endIndex = startIndex+6;
    break;
  }
  case 'B-FUTURESSF':{
    startIndex+=11 + 9;
    endIndex = startIndex+6;
    break;
  }
}
let fundNav = response.substring(startIndex,endIndex);
console.log(fundNav)