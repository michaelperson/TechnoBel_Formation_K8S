// Nom des actions possible
export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR'; 

export const onStart = ()=>
(
    {
        type:START 
    }
);
export const onSuccess = (data)=>
(
    {
        type:SUCCESS, //OBLIGATOIRE!!!!!
        data 
    }
);
export const onError = (error)=>
(
    {
        type:ERROR, //OBLIGATOIRE!!!!!
        error 
    }
);