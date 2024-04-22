import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';

const testFunction = async  (req: Request, res: Response, next: NextFunction) =>{
    const result: AxiosResponse = await axios.get(`https://jasonplaceholder.typicode.com/todoes/1`);
    return res.send(result.data);
}

export {testFunction}
