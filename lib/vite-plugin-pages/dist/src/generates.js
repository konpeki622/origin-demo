"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = exports.generateRoutes = void 0;
const parser_1 = require("./parser");
const constants_1 = require("./constants");
/**
 * Return whether the current route node name represents a dynamic route
 * @param routeNodeName: route node name
 */
function isDynamicNodeName(routeNodeName) {
    return routeNodeName.startsWith('_');
}
/**
 * Return whether the current route node name represents a catch all route
 * @param routeNodeName: route node name
 */
function isCatchAllNodeName(routeNodeName) {
    return routeNodeName === '_';
}
function generateRoutes(pages, options) {
    let routes = [];
    pages.forEach(page => {
        const { pathFromPagesDir, pathFromRootDir } = page;
        // remove file extension, split with '/' to get route nodes
        const routeNodeNames = pathFromPagesDir.split('.')[0].split('/');
        const route = {
            name: '',
            path: '',
            component: `() => import('/${page.pathFromRootDir}')`,
            meta: { layout: parser_1.getLayoutProperties(pathFromRootDir) },
        };
        let parentRoutes = routes;
        for (const routeNodeName of routeNodeNames) {
            const isDynamic = isDynamicNodeName(routeNodeName);
            const isCatchAll = isCatchAllNodeName(routeNodeName);
            if (route.name) {
                if (routeNodeName !== 'index') {
                    route.name += `-${routeNodeName}`;
                }
            }
            else {
                route.name = routeNodeName;
            }
            const parentRoute = parentRoutes.find(pRoute => pRoute.name == route.name);
            if (parentRoute) {
                // init parentRoute.children, update parentRoutes
                parentRoute.children = parentRoute.children || [];
                parentRoutes = parentRoute.children;
            }
            if (isDynamic) {
                if (isCatchAll) {
                    route.path = constants_1.CATCH_ALL_ROUTE_PATH;
                }
                else {
                    route.path += `/:${routeNodeName.slice(1)}`;
                }
            }
            else {
                if (routeNodeName !== 'index') {
                    route.path += `/${routeNodeName}`;
                }
                else if (route.path === '') {
                    route.path += `/`;
                }
            }
        }
        parentRoutes.push(route);
    });
    // find and only keep first catch all route, move it to last
    const catchAllRoute = routes.find(route => route.path === constants_1.CATCH_ALL_ROUTE_PATH);
    if (catchAllRoute) {
        routes = routes.filter(route => route.path !== constants_1.CATCH_ALL_ROUTE_PATH);
        routes.push(catchAllRoute);
    }
    // set layouts to routes
    routes = parser_1.setLayout(routes, options);
    return routes;
}
exports.generateRoutes = generateRoutes;
function generateCode(routes) {
    // to string, and make sure component is a function
    const str = JSON.stringify(routes).replace(/"component":("(.*?)")/g, (str, replaceFrom, replaceTo) => {
        return str.replace(replaceFrom, replaceTo);
    });
    // return generated code
    return `const routes = ${str};\n export default routes;`;
}
exports.generateCode = generateCode;
//# sourceMappingURL=generates.js.map