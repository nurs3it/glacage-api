'use strict';

/**
 * time-for-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::time-for-order.time-for-order');
