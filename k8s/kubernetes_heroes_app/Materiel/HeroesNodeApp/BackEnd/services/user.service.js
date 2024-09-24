import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import db from '../helpers/Db.js';
import Config from '../config/config.js'
import jwt from 'jsonwebtoken';
class userService
{

Create=async function(User)
{
    await User.save();
}

    Authenticate= async function ({ username, password, ipAddress }) {
        const user = await db.User.findOne({ username });
     
        if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
           console.log("KO");
            throw 'Username or password is incorrect';
        }
        
        // authentication successful so generate jwt and refresh tokens
        const jwtToken = this.GenerateJwtToken(user);
   
        const refreshToken = this.GenerateRefreshToken(user, ipAddress);
    
        // save refresh token
        await refreshToken.save();
       
        // return basic details and tokens
        return { 
            ...this.GetDetails(user),
            jwtToken,
            refreshToken: refreshToken.token
        };
    }

    RefreshToken = async function ({ token, ipAddress }) {
        const refreshToken = await this.GetRefreshToken(token);
        const { user } = refreshToken;
    
        // REmplace le vieux refreshToken par un nouveau et le sauve  
        const newRefreshToken = this.GenerateRefreshToken(user, ipAddress);
        refreshToken.revoked = Date.now();
        refreshToken.revokedByIp = ipAddress;
        refreshToken.replacedByToken = newRefreshToken.token;
        await refreshToken.save();
        await newRefreshToken.save();
    
        // generation d'un nouveau token jwt
        const jwtToken = this.GenerateJwtToken(user);
    
        // renvoie les détails et le token
        return { 
            ...this.GetDetails(user),
            jwtToken,
            refreshToken: newRefreshToken.token
        };
    }

    RevokeToken=async function ({ token, ipAddress }) {
        const refreshToken = await this.GetRefreshToken(token);
    
        // revoke le token et sauvegarde
        refreshToken.revoked = Date.now();
        refreshToken.revokedByIp = ipAddress;
        await refreshToken.save();
    }

    GetAll=async function () {
        const users = await db.User.find();
        return users.map(x => this.GetDetails(x));
    }

    GetById=async function (id) {
        const user = await this.GetUser(id);
        return this.GetDetails(user);
    }
    
    GetRefreshTokens = async function (userId) {
        // vérifie que l'utilisateur existe
        await this.GetUser(userId);
    
        // retuour un jeton de rafraichissement pour l'utilisateur
        const refreshTokens = await db.RefreshToken.find({ user: userId });
        return refreshTokens;
    }
    
    
    
    GetUser= async function (id) {
        if (!db.isValidId(id)) throw 'User not found';
        const user = await db.User.findById(id);
        if (!user) throw 'User not found';
        return user;
    }
    
   GetRefreshToken = async function (token) {
        const refreshToken = await db.RefreshToken.findOne({ token }).populate('user');
        if (!refreshToken || !refreshToken.isActive) throw 'Invalid token';
        return refreshToken;
    }
    
     GenerateJwtToken=function(user) {
          
    // create a jwt token containing the user id that expires in 15 minutes
    return jwt.sign({ sub: user.id, id: user.id }, Config("local").secret, { expiresIn: '15m' });
       
    }
    
    GenerateRefreshToken= function (user, ipAddress) {
        // create a refresh token that expires in 7 days
       
        return new db.RefreshToken({
            user: user.id,
            token: this.randomTokenString(),
            expires: new Date(Date.now() + 7*24*60*60*1000),
            createdByIp: ipAddress
        });
     
    }
    
    randomTokenString=function () {
        return crypto.randomBytes(40).toString('hex');
    }
    
    GetDetails= function (user) {
        const { id, firstName, lastName, username, role } = user;
      
        return { id, firstName, lastName, username, role };
    }


}

export default userService;