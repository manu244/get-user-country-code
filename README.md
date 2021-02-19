# get-user-country-code || get country code || get country details

Get Country code with moment js
 * these both libraries are needed to get the response
        npm install moment
        npm install moment-timezone 
 * Countries time zone json file needed


response :-  
     {
        timezones: ["Asia/Calcutta"],
        latlng: [20, 77],
        name: "India",
        country_code: "IN",
        capital: "New Delhi",
    };



Here is the complete code


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
