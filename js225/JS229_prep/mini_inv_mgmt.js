/* The system is composed of an item creator, an item manager, and a reports manager. The item creator makes sure that all necessary information are present and valid. The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items. Finally, the report manager generates reports for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.

*/

let ItemCreator = {
  init(sku, name, category, quantity) {
    this.sku = sku;
    this.name = this.validateName(name);
    this.category = this.validateCategory(category);
    this.quantity = quantity;

    if (this.name && this.category && this.quantity >= 0) {
      return this;
    } else {
      return { invalid: true };
    }
  },

  validateName(name) {
    let nameChars = name.replace(/[^a-z]/gi, '');
    if (nameChars.length <= 5) {
      return false;
    } else {
      return name;
    }
  },

  validateCategory(category) {
    if (category.includes(' ') || category.length <= 5) {
      return false;
    } else {
      return category;
    }
  },

}

let ItemManager = {
  inventory: [],

  items() {
    this.inventory.forEach((item) => console.log(item));
  },

  create(name, category, quantity) {
    let sku = this.newSku(name, category);
    let newItem = Object.create(ItemCreator).init(sku, name, category, quantity);

    if (newItem.invalid) {
      return;
    } else {
      this.inventory.push(newItem);
      console.log(`Adding ${newItem.sku}`);
      return newItem;
    }
  },

  newSku(name, category) {
    let nameTwo = name.replace(/[^a-z]/gi, '').slice(0, 2).toUpperCase();
    let catThree = category.replace(/[^a-z]/gi, '').slice(0, 3).toUpperCase();
    return nameTwo + catThree;
  },
}

let ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  reportInStock() {
    let stock = [];

    this.items.forEach((item) => {
      if (item.quantity > 0) stock.push(item.name);
    })
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item


ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

/*
ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

*/