import {Config} from "../config/marvelApi.config.js"
import MarvelRequester from "../helpers/MarvelRequester.js"
class marvelService
{
     getAllCharacters = async function(page)
    { 
        let MRequester = new MarvelRequester(Config.base);
        if(page===0 || page == undefined) page =1;
        let offset = page * 20;
        return  MRequester.GetCharacters(20, offset);
    }
}

export default marvelService;