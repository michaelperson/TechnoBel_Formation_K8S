import marvelService from "../services/marvel.service.js";
import Controller from "./Controller.js"

export default class HeroesController extends Controller
{
     

    index= async (page)=>
    {
       let MService = new marvelService();
        let resp = await MService.getAllCharacters(page);
         
       return resp;
    }
}
 