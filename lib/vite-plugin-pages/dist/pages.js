"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPages = void 0;
const path_1 = require("path");
const files_1 = require("./files");
const utils_1 = require("./utils");
function getPage(pathFromPagesDir, pathFromRootDir) {
    return {
        pathFromPagesDir,
        pathFromRootDir,
    };
}
function getPages(pagesDir, extensions) {
    const files = files_1.sortFilePaths(files_1.getFiles(pagesDir, extensions));
    return files.map(file => getPage(file, utils_1.replaceWithSlash(path_1.join(pagesDir, file))));
}
exports.getPages = getPages;
//# sourceMappingURL=pages.js.map