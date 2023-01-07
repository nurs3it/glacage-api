'use strict';

/**
 * zakazy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zakazy.zakazy');
