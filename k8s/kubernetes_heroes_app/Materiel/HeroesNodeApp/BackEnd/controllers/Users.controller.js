import express from 'express';
import Controller from "./Controller.js"  
import Role from '../helpers/Roles.js';
import userService from '../services/user.service.js';
export default class UsersController extends Controller
{


    constructor(req,res,next=null)
    {   
        super(req,res,next);
        this._service = new userService();
    }

    Create= function(User)
    {       
        console.log("Creation de l'utilisateur");
        console.log(User);
        console.log("--------------------------------------------------------")
        this._service.Create(User)
            .then(rep => this.response.json(rep))
            .catch(this.next);
    }

    GetAll = function () {
        
        this._service.GetAll()
            .then(users => this.response.json(users))
            .catch(this.next);
    }

    GetById=function (id, role) {
        // les utilisateurs normaux peuvent obtenir leur propre détails et
        // l'admin peut tous les obtenir  
        
        if (id !== this.request.user.id && role !== Role.Admin) {
            return this.response.status(401).json({ message: 'Unauthorized' });
        }
    
        this._service.GetById(id)
            .then(user => user ? this.response.json(user) : this.response.sendStatus(404))
            .catch(this.next);
    }

    Authenticate=async function()
    {
        const { username, password } = this.request.body;
        const ipAddress = this.request.ip;
         
        this._service.Authenticate({ username, password, ipAddress })
        .then(({ refreshToken, ...user }) => {
             
            this.SetTokenCookie(this.res, refreshToken);
            this.response.json(user);
        })
        .catch(this.next);

    }

    RefreshToken = function () {
        const token = this.request.cookies.refreshToken;
        const ipAddress = this.request.ip;
        this._service.RefreshToken({ token, ipAddress })
            .then(({ refreshToken, ...user }) => {
                this.SetTokenCookie(res, refreshToken);
                this.response.json(user);
            })
            .catch(this.next);
    }

    RevokeToken= function () {
        // accepte le token à partir de l'objet request body ou d'un cookie
        const token = this.request.body.token || this.request.cookies.refreshToken;
        const ipAddress = this.request.ip;
    
        if (!token) return this.response.status(400).json({ message: 'Token is required' });
    
        //L'utilisateur peut révoker ces propres token et l'admin peut révoker 
        // tout les tokens 
        if (!this.request.user.ownsToken(token) && this.request.user.role !== Role.Admin) {
            return this.response.status(401).json({ message: 'Unauthorized' });
        }
    
        this._service.RevokeToken({ token, ipAddress })
            .then(() => this.response.json({ message: 'Token revoked' }))
            .catch(this.next);
    }

    GetRefreshTokens= function (id, role) {
        // users can get their own refresh tokens and admins can get any user's refresh tokens
        if (id !== this.request.user.id && role !== Role.Admin) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    
        this._service.GetRefreshTokens(id)
            .then(tokens => tokens ? this.response.json(tokens) : this.response.sendStatus(404))
            .catch(this.next);
    }
    
    SetTokenCookie= function(token)
    {
        // create http only cookie with refresh token that expires in 7 days
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now() + 7*24*60*60*1000)
        };
        this.response.cookie('refreshToken', token, cookieOptions);
    }
    
}