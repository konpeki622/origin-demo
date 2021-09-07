"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_OPTIONS = {
    xml: {
        enabled: true,
    },
    yaml: {
        enabled: true,
        loadMultiDocument: false,
    },
    csv: {
        enabled: true,
    },
    ini: {
        enabled: true,
    },
    properties: {
        enabled: true,
    },
    toml: {
        enabled: true,
    },
    plist: {
        enabled: true,
    },
    markdown: {
        enabled: true,
    },
};
const XML_EXTENSION = /\.xml$/;
const YAML_EXTENSION = /\.ya?ml$/;
const CSV_EXTENSION = /\.csv$/;
const INI_EXTENSION = /\.ini$/;
const PROPERTIES_EXTENSION = /\.properties$/;
const TOML_EXTENSION = /\.toml$/;
const PLIST_EXTENSION = /\.plist$/;
exports.default = (options = {}) => {
    const opts = Object.assign({}, DEFAULT_OPTIONS, options);
    const transforms = {};
    const loadTransform = function (key) {
        if (!!transforms[key]) {
            return transforms[key].default;
        }
        switch (key) {
            case 'xml':
                transforms[key] = require('./xmlTransformation');
                break;
            case 'yaml':
                transforms[key] = require('./yamlTransformation');
                break;
            case 'csv':
                transforms[key] = require('./csvTransformation');
                break;
            case 'ini':
                transforms[key] = require('./iniTransformation');
                break;
            case 'properties':
                transforms[key] = require('./propertiesTransformation');
                break;
            case 'toml':
                transforms[key] = require('./tomlTransformation');
                break;
            case 'plist':
                transforms[key] = require('./plistTransformation');
                break;
            default:
        }
        return transforms[key].default;
    };
    return {
        name: 'vite:content',
        async transform(code, id) {
            if (opts.xml.enabled && XML_EXTENSION.test(id)) {
                return loadTransform('xml')(opts, code, id);
            }
            if (opts.yaml.enabled && YAML_EXTENSION.test(id)) {
                return loadTransform('yaml')(opts, code, id);
            }
            if (opts.csv.enabled && CSV_EXTENSION.test(id)) {
                return loadTransform('csv')(opts, code, id);
            }
            if (opts.ini.enabled && INI_EXTENSION.test(id)) {
                return loadTransform('ini')(opts, code, id);
            }
            if (opts.properties.enabled && PROPERTIES_EXTENSION.test(id)) {
                return loadTransform('properties')(opts, code, id);
            }
            if (opts.toml.enabled && TOML_EXTENSION.test(id)) {
                return loadTransform('toml')(opts, code, id);
            }
            if (opts.toml.enabled && PLIST_EXTENSION.test(id)) {
                return loadTransform('plist')(opts, code, id);
            }
            return null;
        },
    };
};
//# sourceMappingURL=index.js.map