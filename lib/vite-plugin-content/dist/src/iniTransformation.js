"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluginutils_1 = require("@rollup/pluginutils");
const ini_1 = __importDefault(require("ini"));
const tosource_1 = __importDefault(require("tosource"));
async function iniTransform(options = {}, code, id) {
    const filter = pluginutils_1.createFilter(options.ini.include, options.ini.exclude);
    if (!filter(id)) {
        return null;
    }
    const iniData = ini_1.default.parse(code);
    const generatedCode = `var data = ${tosource_1.default(iniData)};\nexport default data;`;
    return generatedCode;
}
exports.default = iniTransform;
//# sourceMappingURL=iniTransformation.js.map