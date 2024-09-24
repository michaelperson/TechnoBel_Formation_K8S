
export default class Controller
{
    constructor(req,res, next=null)
    {
        this.request=req;
        this.response=res;
        this.next=next;
    }
}