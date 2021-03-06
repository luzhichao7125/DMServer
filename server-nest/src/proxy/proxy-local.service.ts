
const { createProxyMiddleware } = require('http-proxy-middleware');
export class ProxyLocalService {
    static setup(app) {
        app.use(
            '/log',
            createProxyMiddleware(() => true, {
                target: `http://localhost:8048`,
                ws: true,
                pathRewrite: {
                    '^/api/remove/path': '/path', // remove base path
                },
                changeOrigin: true,
            }),
        );
    }
}