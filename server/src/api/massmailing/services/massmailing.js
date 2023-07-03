'use strict';

/**
 * massmailing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::massmailing.massmailing');
