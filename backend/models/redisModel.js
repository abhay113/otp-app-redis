const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
//   tls: {} // Enable TLS for secure connection
});

redis.on('connect', () => console.log('Connected to Redis!'));
redis.on('error', (err) => console.error('Redis error:', err));

module.exports = redis;
