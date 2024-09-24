 
import Controller from "./Controller.js"
import Config from "../config/config.js"

export default class ConfigController extends Controller
{
     

    index= async ()=>
    {
        const configuration =  Config("local");
         
       return configuration;
    }
}