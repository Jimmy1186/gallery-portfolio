const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://portfolio-pearl-zeta-68.vercel.app';