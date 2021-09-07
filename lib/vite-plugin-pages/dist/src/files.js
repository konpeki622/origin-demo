"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortFilePaths = exports.getFiles = void 0;
const globby = __importStar(require("globby"));
const utils_1 = require("./utils");
function getExcludes(excludes) {
    return ['node_modules', '.git', '**/__*__/**', ...excludes];
}
function getFiles(directory, extensions, excludes) {
    // setup excludes
    excludes = getExcludes((excludes || []).map(ex => utils_1.replaceWithSlash(ex)));
    // return read files by extensions
    const pattern = extensions.length > 1
        ? `**/*.{${extensions.join(',')}}`
        : `**/*.${extensions[0]}`;
    return globby.sync(pattern, {
        gitignore: true,
        ignore: excludes,
        cwd: utils_1.replaceWithSlash(directory),
        onlyFiles: true,
    });
}
exports.getFiles = getFiles;
/**
 * sort files, make sure that index.vue is the first element of each directory
 * @param filePaths
 */
function sortFilePaths(filePaths) {
    filePaths.sort((a, b) => {
        a = a.endsWith('index.vue') ? a.slice(0, a.length - 9) : a;
        b = b.endsWith('index.vue') ? b.slice(0, b.length - 9) : b;
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    return filePaths;
}
exports.sortFilePaths = sortFilePaths;
//# sourceMappingURL=files.js.map