import Tools from "../helpers/Tools.js" 
import {Config, MarvelEndpoint} from "../config/marvelApi.config.js"
import Axios from 'axios'
export default class MarvelRequester
{
   

    constructor(url)
    { 
        this.url=url; 
    }

    GetCharacters=async function(limit = 1, offset = 0 )
    {
        let tools = new Tools();
        let pKey = Config.Priv;
        let key = Config.Pub;
        if (limit > 100)
        {
            throw "Limit 0 to 100 only";
        } 
        let EndPoint = MarvelEndpoint.All;

         //1- Get the time
         let t =new Date().getTime();
         //2- Calculate hash in accordance with marvel documentation
         let strhash = tools.CalculateMD5LikeMarvel(t,pKey, key);
        //3- Prepare the parameters
        t=t+"";
        let urlParameters = "?ts=" + t.replace(":", "").replace(".", "") + "&limit=" + limit + "&offset=" + offset + "&apikey=" + key + "&hash=" + strhash;
        console.log(this.url+EndPoint+urlParameters);
        return await Axios.get(this.url+EndPoint+urlParameters)
        .then(resp => { 
           return resp.data;
        })
        .catch(err => {
            // Handle Error Here
             console.error(err);
        });

    }

    
}