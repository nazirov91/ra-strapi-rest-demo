'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', {

    async create(ctx) {
        const user = ctx.state.user;

        const message = await super.create(ctx);

        const updated = await strapi.entityService.update("api::message.message", message.data.id, {
            data: {
                owner: user.id,
            }
        });
        const response = {
            data: updated
        }
        return response;
    },

    async find(ctx) {
        const user = ctx.state.user;

        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };

        return await super.find(ctx);
    },

    async findOne(ctx) {
        const user = ctx.state.user;
        
        const response = await super.findOne(ctx)
        if(user.id != response.data.attributes.owner.data.id){
            //return ctx.notFound(); 
        }

        return response;


    },
    async update(ctx) {
        const user = ctx.state.user;
        const response = await super.findOne(ctx)
        if(user.id != response.data.attributes.owner.data.id){
            return ctx.notFound();
        }

        return await super.update(ctx);
    },
    async delete(ctx) {

        const user = ctx.state.user;
        const response = await super.findOne(ctx)
        if(user.id != response.data.attributes.owner.data.id){
            return ctx.notFound();
        }

        return await super.delete(ctx);
    }



});