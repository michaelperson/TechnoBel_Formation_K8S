import {Config} from "../config/marvelApi.config.js"        
import CryptoJS from 'crypto-js'
class Tools
{        
        /// <summary>
        /// Calculates the md5 as on marvel documentation
        /// </summary>
        /// <param name="key">The private key</param>
        /// <param name="ts">A timespan</param>
        /// <returns>the has to send to web api</returns>
        /// <remarks>
        /// Server-side applications must pass two parameters in addition to the apikey parameter:
        /// ts - a timestamp(or other long string which can change on a request-by-request basis)
        /// hash - a md5 digest of the ts parameter, your private key and your public key(e.g.md5(ts+privateKey+publicKey)
        /// For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)
        /// </remarks>
  CalculateMD5LikeMarvel=(ts,Privkey,PubKey)=>
{
    
    let sentenceToHash =ts + Privkey + PubKey;
    return this.CalculateMD5Hash(sentenceToHash,);
}
    /// <summary>
        /// Calculates the md5 hash.
        /// </summary>
        /// <param name="input">The input to hash with MD5 Algo.</param>
        /// <returns>The hash</returns>
 CalculateMD5Hash=(input)=>
{
    return CryptoJS.MD5(input).toString();

}
}
export default Tools;