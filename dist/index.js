import express from 'express';
import { WebSocketServer } from 'ws';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';
import { createServer } from 'node:http';
import dotenv from 'dotenv';
dotenv.config();
const REST_SERVER_PORT = process.env.MY_APP_SERVER_REST_PORT;
const WS_SERVER_PORT = process.env.MY_APP_SERVER_SOCKET_PORT;
const app = express();
const server = createServer(app);
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const wss = new WebSocketServer({
    port: Number(WS_SERVER_PORT),
    host: 'localhost',
    path: '/stream'
});
app.get('/api/stream', (req, res) => {
    res.send('Api stream!');
});
app.get('/', (req, res) => {
    res.send('Hello dsa!');
});
app.post('/p2p', (req, res) => {
    fetch('https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search', {
        method: 'POST',
        body: JSON.stringify({
            fiat: 'CNY',
            page: 1,
            rows: 10,
            tradeType: 'BUY',
            asset: 'USDT',
            countries: [],
            proMerchantAds: false,
            shieldMerchantAds: false,
            filterType: 'all',
            periods: [],
            additionalKycVerifyFilter: 0,
            publisherType: null,
            payTypes: [],
            classifies: ['mass', 'profession']
        }),
        headers: {
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
            'Content-Length': '123',
            'content-type': 'application/json',
            Host: 'p2p.binance.com',
            Origin: 'https://p2p.binance.com',
            Pragma: 'no-cache',
            TE: 'Trailers',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0'
        }
    }).then((res2) => {
        res2.json().then((res3) => {
            console.log(res3);
            res.send(res3);
        });
    });
});
server.listen(REST_SERVER_PORT, () => {
    console.log(`Example app listening on port ${REST_SERVER_PORT}`);
});
wss.on('connection', function connection(ws) {
    ws.on('message', (data) => {
        console.log(data.toString());
        // const wssBinanceStream = new WebSocket('wss://stream.binance.com/stream');
        // wssBinanceStream.addEventListener('open', () => {
        //   wssBinanceStream.send(
        //     JSON.stringify({
        //       id: 1,
        //       method: 'SUBSCRIBE',
        //       params: ['!ticker_24h@arr@3000ms', '!miniTicker@arr@3000ms']
        //     })
        //   );
        // });
        // wssBinanceStream.addEventListener('close', () => {
        //   console.log('wss binance stream closed');
        // });
        // wssBinanceStream.addEventListener('message', (event) => {
        //   ws.send(event.data);
        // });
    });
    ws.on('close', function close() {
        // wssBinanceStream.close();
    });
});
