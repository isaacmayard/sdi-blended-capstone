import { createProxyMiddleware } from 'http-proxy-middleware';

// eslint-disable-next-line func-names
export default function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:8085',
      changeOrigin: true,
    }),
  );
}
