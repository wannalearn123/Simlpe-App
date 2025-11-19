import {Ratelimit} from '@upstash/ratelimit' // for REST API
import { Redis } from '@upstash/redis'
import dotenv from 'dotenv';

dotenv.config();

//create a new ratelimiter, that allows 10 requests per 30 seconds
const ratelimiter = new Ratelimit({
    redis: Redis.fromEnv(), 
    limiter: Ratelimit.slidingWindow(10, "30 s")
});

export default ratelimiter;

