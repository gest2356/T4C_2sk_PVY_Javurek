import {Logger} from "../classes/logger.js";

export async function loggingMiddleware(res, req, next){
    const logger = new Logger('loggingMiddleware');
    logger.log(req.url);

    try {
        await next();
    } catch (error) {
        console.log(error);
    }
}