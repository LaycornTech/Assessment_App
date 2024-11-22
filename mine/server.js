"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route_1 = require("./src/routes/route");
var PORT = 3000;
var app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
// Parse incoming JSON payloads
app.use(express_1.default.json());
app.use("/api", route_1.default);
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
