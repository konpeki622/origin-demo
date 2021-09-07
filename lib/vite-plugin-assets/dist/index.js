"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const DEFAULT_OPTIONS = {
    sourcePath: 'src/assets',
    cssEnabled: true,
    sassEnabled: true,
    lessEnabled: true,
    recursive: true,
};
const GLOBALCSS = /^global-.*\.css$/;
const GLOBALSASS = /^global-.*\.scss$/;
const GLOBALLESS = /^global-.*\.less$/;
//Get the path of the desired style sheet whose name starts with 'global-'
function searchGlobalCss(rootDir, options) {
    let globalCssPaths = [];
    fs_1.default.readdirSync(rootDir).forEach(item => {
        const targetPath = path_1.default.resolve(rootDir, item);
        if (fs_1.default.statSync(targetPath).isDirectory() && options.recursive) {
            globalCssPaths = globalCssPaths.concat(searchGlobalCss(targetPath, options));
        }
        else {
            if (options.cssEnabled && GLOBALCSS.test(item)) {
                globalCssPaths.push(targetPath);
            }
            if (options.sassEnabled && GLOBALSASS.test(item)) {
                globalCssPaths.push(targetPath);
            }
            if (options.lessEnabled && GLOBALLESS.test(item)) {
                globalCssPaths.push(targetPath);
            }
        }
    });
    return globalCssPaths;
}
exports.default = (options = {}) => {
    const opts = Object.assign({}, DEFAULT_OPTIONS, options);
    return {
        name: 'vite:assets',
        transformIndexHtml: {
            enforce: 'pre',
            transform(_, { filename }) {
                const HtmlTagDescriptors = [];
                const assetsPath = path_1.default.resolve(filename, '..', opts.sourcePath);
                const filePaths = searchGlobalCss(assetsPath, opts);
                filePaths.forEach(filePath => {
                    filePath = filePath
                    .replace(assetsPath, '/' + opts.sourcePath)
                        .replace(/\\/g, '/');
                    HtmlTagDescriptors.push({
                        tag: 'link',
                        attrs: {
                            rel: 'stylesheet',
                            href: filePath,
                        },
                        injectTo: 'head',
                    });
                });
                return HtmlTagDescriptors;
            },
        },
    };
};
//# sourceMappingURL=index.js.map