"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/***************************** Task 1 *******************/
/*const url1 = "https://api.ipify.org?format=json";

async function printMyIP(url:string) {
  let response = await fetch(url);
  let myIP = await response.json();
  console.log(myIP.ip);
}

printMyIP(url1);
*/
/***************************** Task 2 *******************/
/*const url2 = "https://api.ipify.org?format=json";

async function printMyIP(url:string) {
  let response = await fetch(url);
  let myIP = await response.json();
  return myIP;
}

printMyIP(url2).then(result => console.log(result.ip));
*/
/***************************** Task 3 *******************/
/*const url3 = "https://random-data-api.com/api/name/random_name";

async function getThreeNameWay1(url:string){
  let responses = await Promise.all([
    (await fetch(url)).json(),
    (await fetch(url)).json(),
    (await fetch(url)).json()
  ])

  let result = responses.map(value => value.name);
  return result;
}

getThreeNameWay1(url3).then(values => console.log(values));

async function getThreeNameWay2(url:string){

  let promises = [
    fetch(url).then(response => response.json()),
    fetch(url).then(response => response.json()),
    fetch(url).then(response => response.json())
  ]
  let responses:{name?: string}[] = [];

  for (let promise of promises){
    promise.then(response => responses.push(response));
  }
  

  await waitForExecution();

  let result = responses.map(value => value.name);
  return result;

  function waitForExecution(): Promise<void>{
    return new Promise(resolve => {
    const intervalId = setInterval(() => {
      if (responses.length === 3) {
        clearInterval(intervalId);
        resolve();
      }
    }, 1000);
  });
  }
}
getThreeNameWay2(url3).then(values => console.log(values));

function getThreeNameWay3(url:string): Promise<string[]>{

  let promises = [
    fetch(url).then(response => response.json()),
    fetch(url).then(response => response.json()),
    fetch(url).then(response => response.json())
  ]
  let responses:{name?: string}[] = [];

  for (let promise of promises){
    promise.then(response => responses.push(response));
  }
 
  let result =  waitForExecutionPromise().then(() => responses.map(value => value.name) as string[]);

  return result;

  function waitForExecutionPromise(): Promise<void>{
    return new Promise(resolve => {
    const intervalId = setInterval(() => {
      if (responses.length === 3) {
        clearInterval(intervalId);
        resolve();
      }
    }, 1000);
  });
  }
}
getThreeNameWay3(url3).then(values => console.log(values));*/
/***************************** Task 4 *******************/
/*let url4 =  "https://random-data-api.com/api/users/random_user";
function getFemaleUserWay1(url: string, interval: number = 1000, genderToSearch: string = "Female"): Promise<any> {
  return new Promise((resolve, reject) => {
    const fetchDataInterv = setInterval(async () => {
      try {
        const user = fetch(url).then(value => value.json());
        
        user.then(value => {
          if (value.gender === genderToSearch) {
            clearInterval(fetchDataInterv);
            resolve(user);
          }
        });

        
      } catch (error) {
        clearInterval(fetchDataInterv);
        reject(error);
      }
    }, interval);
  });
}

getFemaleUserWay1(url4).then(value => console.log(value));

async function getFemaleUserWay2(url:string, genderToSearch:string = "Female"){
  let response = await fetch(url);
  let user = await response.json();
  while(user.gender !== genderToSearch){
    response = await fetch(url);
    user = await response.json();
  };
  return user;
}

getFemaleUserWay2(url4).then(value => console.log(value));*/
/***************************** Task 5 *******************/
function getIPAndInvokeCallback(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "https://api.ipify.org?format=json";
            let response = yield fetch(url);
            let value = yield response.json();
            const ip = value.ip;
            callback(ip);
        }
        catch (error) {
            console.error("IP retrieval error: ", error);
            throw error;
        }
    });
}
function displayDataAboutIP(ip) {
    console.log("Data about your IP address has been received.");
    console.log(`Your IP address: ${ip}`);
}
getIPAndInvokeCallback(displayDataAboutIP);
/***************************** Task 6 *******************/
function getIpAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://api.ipify.org?format=json";
        try {
            let response = yield fetch(url);
            let value = yield response.json();
            const ip = value.ip;
            return ip;
        }
        catch (error) {
            console.error("IP retrieval error: ", error);
            throw error;
        }
    });
}
function useIpAddress(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        let ipAdress = yield getIpAddress();
        callback(ipAdress);
    });
}
useIpAddress((ip) => {
    console.log(`Your IP address: ${ip}`);
});
