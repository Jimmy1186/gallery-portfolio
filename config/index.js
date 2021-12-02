const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://portfolio-kivhitkji-jimmy1186.vercel.app';