const ItemCreator = function(itemName, category, quantity) {
  function generateSku() {
    let nameChars = itemName.replace(/[^a-z]/gi, '').slice(0, 3);
    let catChars = category.replace(/[^a-z]/gi, '').slice(0, 2);
    return (nameChars + catChars).toUpperCase();
  };

  function validName() {
    if (itemName.replace(' ', '').length < 5) return false;
    return itemName;
  };

  function validCat() {
    if (category.length < 5 || category.includes(' ')) return false;
    return category;
  };

  this.skuCode = generateSku();
  this.itemName = validName();
  this.category = validCat();
  this.quantity = (quantity >= 0) ? quantity : false;
};

const ItemManager = {
  items: [],

  listItems() {
    console.log(items.map((item) => item.itemName).join(', '));
  },

  create(itemName, category, quantity) {
    let newItem = new ItemCreator(itemName, category, quantity);

    if (Object.values(newItem).some((val) => val === false )) {
      let falseObj = { notValid: true };
      return falseObj;
    } else {
      this.items.push(newItem);
      return newItem;
    }
  },

  update(sku, newObj) {
    let updateObj = this.getItem(sku);
    for (const [key, value] of Object.entries(newObj)) {
      updateObj[key] = value;
    }
  },

  delete(deleteSku) {
    let delObjIdx = this.items.findIndex((obj) => obj.skuCode === deleteSku);
    this.items.splice(delObjIdx, 1);
  },

  inStock() {
    let stockItems = this.items.filter((item) => item.quantity > 0);
    return stockItems;
  },

  itemsInCategory(cat) {
    let catItems = this.items.filter((item) => item.category === cat);
    return catItems;
  },

  getItem(sku) {
    return this.items.find((obj) => obj.skuCode === sku);
  },

};

const ReportManager = {
  init(itemMgrObj) {
    this.items = itemMgrObj;
    return this;
  },

  createReporter(reportSku) {
    let allItems = this.items.items;

    return {
      itemInfo() {
        let reportObj = allItems.find((obj) => obj.skuCode === reportSku);
        for (const [key, value] of Object.entries(reportObj)) {
          console.log(`${key}: ${value}`);
        }
      },
    };
  },

  reportInStock() {
    let stockItems = this.items.inStock().filter((item) => item.quantity > 0)
      .map((obj) => obj.itemName);
    console.log(stockItems.join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ReportManager.init(ItemManager);
ReportManager.reportInStock();
ItemManager.delete('SOCSP');
ReportManager.reportInStock();
