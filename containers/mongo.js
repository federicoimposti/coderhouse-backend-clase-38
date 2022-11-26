const logger = require('../logs/logger');

require('../db/connection');

module.exports = class MongoContainer {
    constructor(schema) {
      this.schema = schema;    
    }

    async getAll() {
        try {
            const allItems = await this.schema.find();
            return allItems;
        } catch(err) {
            logger.error(`Error: ${err}`);
            throw new Error('Ocurrió un error obteniendo los registros.', err);
        }
    }

    async save(element) {
        try {
            const elementNew = new this.schema(element); 
            const data = await elementNew.save();
            return data; 
        } catch (err) {
            logger.error(`Error: ${err}`);
            throw new Error('Ocurrió un error al guardar el elemento.', err);
        }
    }
}