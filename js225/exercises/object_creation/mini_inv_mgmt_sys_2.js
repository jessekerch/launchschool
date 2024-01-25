const ItemCreator = (() => {
  function generateSku(itemName, category) {
    let nameChars = itemName.replace(/[^a-z]/gi, '').slice(0, 3);
    let catChars = category.replace(/[^a-z]/gi, '').slice(0, 2);
    return (nameChars + catChars).toUpperCase();
  };

  function validName(itemName) {
    let nameNoSpaces = itemName.replace(' ', '');
    if (nameNoSpaces.length < 5) return false;
    return itemName;
  };

  function validCat(category) {
    if (category.length < 5) return false;
    if (category.includes(' ')) return false;
    return category;
  };

  return function(itemName, category, quantity) {
    this.skuCode = generateSku(itemName, category);
    this.itemName = validName(itemName);
    this.category = validCat(category);
    this.quantity = (quantity >= 0) ? quantity : false;
  };
})(); // end of ItemCreator

const ItemManager = {
  items: [],

  listItems() {
    let itemNames = items.map((item) => item.itemName);
    console.log(itemNames.join(', '));
  },

  create(itemName, category, quantity) {
    let newItemObj = new ItemCreator(itemName, category, quantity);

    if (Object.values(newItemObj).some((val) => val === false )) {
      let falseObj = { notValid: true };
      return falseObj;
    } else {
      this.items.push(newItemObj);
      return newItemObj;
    }
  },

  update(updateSku, newObj) {
    let updateObj = this.items.find((obj) => obj.skuCode === updateSku);
    for (const [key, value] of Object.entries(newObj)) {
      updateObj[key] = value;
    }
  },

  delete(deleteSku) {
    let delObjIdx = this.items.findIndex((obj) => obj.skuCode === deleteSku);
    console.log(delObjIdx);
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

}; // end of ItemManager object

// start of ReportManager object
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
