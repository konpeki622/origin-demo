"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLayout = exports.getLayoutProperties = void 0;
const compiler_sfc_1 = require("@vue/compiler-sfc");
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const files_1 = require("./files");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
/**
 * get the layout property from pages
 *
 * @param path file path in pages directory
 */
function getLayoutProperties(path) {
    let layout = '';
    const source = fs_1.default.readFileSync(path, 'utf8');
    const customBlocks = compiler_sfc_1.parse(source).descriptor.customBlocks;
    const layoutBlock = customBlocks.find((node) => node.type === 'layout');
    if (!layoutBlock) {
        return layout;
    }
    const content = layoutBlock.content.trim();
    const pairs = content.split(':');
    if (pairs.length == 2 && pairs[0].trim() === 'layout') {
        layout = pairs[1].trim();
    }
    else {
        console.error('layout property was set in wrong way!');
    }
    return layout;
}
exports.getLayoutProperties = getLayoutProperties;
function setLayoutChildren(route, options, layouts) {
    var _a, _b, _c, _d;
    const hasDefault = hasDefaultLayout(options.layoutsDir);
    const outRoute = route;
    if (route.children && route.children.length > 0) {
        outRoute.children = setLayout(route.children, options);
    }
    // When there is no layout property and no default layout, don't transform route
    if ((!((_a = route.meta) === null || _a === void 0 ? void 0 : _a.layout) && !hasDefault) ||
        route.path === constants_1.CATCH_ALL_ROUTE_PATH) {
        return outRoute;
    }
    if (((_b = outRoute.meta) === null || _b === void 0 ? void 0 : _b.layout) && layouts.get((_c = outRoute.meta) === null || _c === void 0 ? void 0 : _c.layout)) {
        return {
            path: outRoute.path,
            component: layouts.get((_d = outRoute.meta) === null || _d === void 0 ? void 0 : _d.layout),
            children: [outRoute],
        };
    }
    else {
        return {
            path: outRoute.path,
            component: layouts.get('default'),
            children: [outRoute],
        };
    }
}
function setLayout(routes, options) {
    const layouts = getLayoutMap(options.layoutsDir, options.extensions, options.excludes);
    return routes.map(route => setLayoutChildren(route, options, layouts));
}
exports.setLayout = setLayout;
function hasDefaultLayout(layoutDir) {
    const layoutFiles = files_1.getFiles(layoutDir, ['vue']);
    for (const file of layoutFiles) {
        if (file === 'default.vue') {
            return true;
        }
    }
    return false;
}
function getLayoutMap(directory, extensions, excludes) {
    const layoutMap = new Map();
    if (!directory || !extensions) {
        return layoutMap;
    }
    const layoutFiles = files_1.getFiles(directory, extensions, excludes);
    for (const file of layoutFiles) {
        const parsedFile = path_1.parse(file);
        const layoutPath = utils_1.replaceWithSlash(path_1.join(directory, file));
        layoutMap.set(parsedFile.name, `() => import('/${layoutPath}')`);
    }
    return layoutMap;
}
//# sourceMappingURL=parser.js.map