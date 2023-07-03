'use strict';

/**
 * mailing-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mailing-status.mailing-status');
