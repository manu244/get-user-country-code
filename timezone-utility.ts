/*******************************
 * these both libraries are needed
 * Countries time zone json file needed
npm install moment
npm install moment-timezone 

Name   : MKV 
Date   : 19-feb-2021
*********************************/

import * as moment from "moment-timezone";
import { countryTimeZone } from "./countries-time-zone";
export default class TimezoneUtility {
  static getCountry() {
    let actualTimezone: any = moment.tz.guess(true);
    let zoneDataArry:any;
    
    // load Deafult data
    let zoneData: any = {
        timezones: ["Asia/Calcutta"],
        latlng: [20, 77],
        name: "India",
        country_code: "IN",
        capital: "New Delhi",
    };

    zoneDataArry = countryTimeZone.filter((f: any) => f.timezones == actualTimezone);

    if(zoneDataArry.length==1){
        // pop last data  to return object when length is one only
        zoneData=zoneDataArry.pop();
    }else{
        zoneData=zoneData;
    }
   
    return zoneData;
  }
}
