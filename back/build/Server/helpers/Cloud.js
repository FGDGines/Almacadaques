"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMail = void 0;
const formdata_node_1 = require("formdata-node");
require('dotenv').config();
const SendMail = (init) => {
    const bag = new formdata_node_1.FormData();
    bag.set('req', 'gmail_send');
    bag.set('topic', '');
    bag.set('body', '');
    bag.set('reciver', String(process.env.MAIL_RECIBER));
    Object.keys(init).forEach(item => {
        bag.set(String(item), String(init[item]));
    });
    fetch(String(process.env.API_MAIL), {
        method: 'POST',
        body: bag
    })
        .then(res => res.json())
        .then(data => {
        data;
        // Baneo en las sombras
    })
        .catch(err => {
        err;
        // Baneo en las sombras
    });
};
exports.SendMail = SendMail;
