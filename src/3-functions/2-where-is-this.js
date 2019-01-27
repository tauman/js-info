'use strict';

const logger = require('../utils/logger');

class Collector {
    constructor(name) {
        logger.verbose(`where-is-this.constructor() name: ${name}`);
        this.name = name;
        this.collection = [];
    }

    addItem(item) {
        logger.verbose(`where-is-this.addItem() item: ${item}`);
        this.collection.push(item);
    }

    formatItem(item) {
        logger.verbose(`where-is-this.formatItem() item: ${item}`);
        return `${this.name} =>  ${item}`;
    }

    printItems() {
        logger.verbose(`where-is-this.printItems()`);

        // Why does this break?
        // this.collection.forEach(function(item) {
        //     console.log(this.formatItem(item));
        // });

        // A solution (the pre-ES6 way)
        // const self = this;
        // this.collection.forEach(function(item) {
        //     console.log(self.formatItem(item));
        // });

        // A better solution
        // this.collection.forEach(item => {
        //     console.log(this.formatItem(item));
        // });

        // The best solution
        // this.collection.forEach(item => console.log(this.formatItem(item)));
    }
}


const collector = new Collector('John Q Public');

collector.addItem('Item 1');
collector.addItem('Item 2');
collector.addItem('Item 3');

collector.printItems();
