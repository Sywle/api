const express = require("express")
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors")
const app = express();
app.use(cors())
app.use('/api', createProxyMiddleware({ target: 'http://127.0.0.1:2000', changeOrigin: true}));
app.listen(3000);
