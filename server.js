const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Thiết lập reverse proxy
app.use('/manhvu', createProxyMiddleware({
    target: 'https://primary-production-02bd.up.railway.app/',
    changeOrigin: true,
    pathRewrite: {
        '^/manhvu': '',  
    },
}));

// Cổng mặc định là 3000, bạn có thể thay đổi nếu cần thiết
const port = 3000;
app.listen(port, () => {
    console.log(`Reverse proxy listening at http://localhost:${port}`);
});
