"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const generates_1 = require("./generates");
const pages_1 = require("./pages");
exports.default = (userOptions = {
    root: process.cwd(),
    pagesDir: 'src/pages',
    layoutsDir: 'src/layouts',
    extensions: ['vue'],
}) => {
    const options = Object.assign({}, userOptions);
    return {
        name: 'vite:pages',
        enforce: 'pre',
        resolveId(id) {
            if (id === constants_1.MODULE_NAME) {
                return id;
            }
            return null;
        },
        load(id) {
            return __awaiter(this, void 0, void 0, function* () {
                if (id !== constants_1.MODULE_NAME) {
                    return;
                }
                const pages = pages_1.getPages(options.pagesDir, options.extensions);
                const routes = generates_1.generateRoutes(pages, options);
                return JSON.stringify(routes);
            });
        },
    };
};
//# sourceMappingURL=index.js.map