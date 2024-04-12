"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogos = void 0;
const extractDomain_1 = require("./extractDomain");
const ENDPOINT = 'https://api.faviconscraper.mc.hzuccon.com/icon';
const validateImageInfo = (imageInfo) => {
    if (typeof imageInfo.size.width !== 'number') {
        throw new Error('Invalid image info, width is not a number');
    }
    if (typeof imageInfo.size.height !== 'number') {
        throw new Error('Invalid image info, height is not a number');
    }
    if (typeof imageInfo.type !== 'string') {
        throw new Error('Invalid image info, type is not a string');
    }
    if (typeof imageInfo.mime !== 'string') {
        throw new Error('Invalid image info, mime is not a string');
    }
    if (typeof imageInfo.src !== 'string') {
        throw new Error('Invalid image info, src is not a string');
    }
};
const validateResponse = (response) => {
    if (!Array.isArray(response)) {
        throw new Error('Invalid response, not an array');
    }
    response.forEach(validateImageInfo);
};
const getLogos = async (url) => {
    const domain = (0, extractDomain_1.extractDomain)(url);
    const response = await fetch(`${ENDPOINT}?url=${domain}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    validateResponse(data);
    return data;
};
exports.getLogos = getLogos;
