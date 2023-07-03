'use strict';

/**
 * status-device service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::status-device.status-device');
