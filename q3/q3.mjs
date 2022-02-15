import axios from "axios";
// import fetch from "node-fetch";

// const { default: axios } = require("axios");

const myArgs = process.argv.slice(2);

// const playwright = require('playwright');
// const browserType = 'chromium'; // chrome

// async function main(){
//     const browser = await playwright[browserType].launch({ headless: false });
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://codequiz.azurewebsites.net/');
//     await page.waitForLoadState('load');
//     const button = await page.$('input');
//     await button.press('Enter');
//     await page.waitForLoadState('load');
//     const data = await page.$('body');
//     console.log(data.data)
//     return data.data;
// }

// var inputs = document.getElementsByTagName('input');

// console.log(response)
let result;
async function getData(){
    let config = { 
            headers: {'Cookie' : 'hasCookie=true'},
            withCredentials: true
          };

    return await axios.get("https://codequiz.azurewebsites.net/",config)
                .then(response => {
                  // console.log(response.data);
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
let test = response.substring(startIndex,endIndex);
console.log(test)