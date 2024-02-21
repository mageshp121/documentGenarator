"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoicesRoute_1 = __importDefault(require("./routes/invoicesRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4002;
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, 'views/templates'));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use('/invoice', invoicesRoute_1.default);
app.all('*', (req, res) => {
    console.log("Not found route");
});
app.listen(4001, () => {
    console.log(`server running @ port ${PORT}`);
});
