import express from 'express';
import db from "../helpers/Db.js"
import bcrypt from "bcryptjs"
import Role from "../helpers/Roles.js"
import HeroesController from "../controllers/Heroes.controller.js"
import UsersController from "../controllers/Users.controller.js"
import ConfigController from "../controllers/Config.controller.js"
import authorize from "../middleWare/authorize.js"
const router = express.Router();


router.get('/config', async (req, res) => {
   let ctl = new ConfigController(req,res); 
   res.json(await ctl.index());
});


/*API ROUTES*/
router.get('/api/Heroes/:page', async (req, res) => {
    let ctl = new HeroesController(req,res); 
   let page = req.params.page;
    res.json(await ctl.index(page));
 });
 
//USERS
//Public routes
 router.post("/api/users", async(req,res,next)=>
 {
    
    let ctl = new UsersController(req,res,next); 
    const user = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        role: Role.Admin //TODO - change after first user creation
    });

    ctl.Create(user);

 });
 router.post("/api/users/authenticate", async (req,res, next)=>{
    let ctl = new UsersController(req,res,next); 
    ctl.Authenticate();

 });

 router.post("/api/users/refresh-token", async (req,res,next)=>{
    let ctl = new UsersController(req,res,next); 

 });
//Secure routes
 router.post("/api/users/revoke-token",authorize('Admin', 'User'), async (req,res,next)=>{
    let ctl = new UsersController(req,res,next); 

 });
 router.get("/api/users", async (req,res,next)=>{
    let ctl = new UsersController(req,res,next); 
     ctl.GetAll();
 });
 router.get("/api/users/:id", authorize('Admin', 'User'), async (req,res,next)=>{
    
    let ctl = new UsersController(req,res,next); 
    let id = req.params.id;
    let role = req.user.role;
    ctl.GetById(id,role);
 });
 router.get("/api/users/{id}/refresh-tokens",authorize('Admin', 'User'), async (req,res,next)=>{
    let ctl = new UsersController(req,res,next); 
    let id = req.params.id;
 });
  

/*STATIC ROUTES*/ 
router.get('/', (req, res) => {
    res.sendFile('index.html');
 });

 






export default router