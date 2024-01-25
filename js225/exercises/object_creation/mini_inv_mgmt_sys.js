const ItemManager = {
  items: [],

  create(nameInput, catInput, qtyInput) {
    function generateSku() {
      let nameChars = nameInput.replace(/[^a-z]/gi, '').slice(0, 3);
      let catChars = catInput.replace(/[^a-z]/gi, '').slice(0, 2);
      return (nameChars + catChars).toUpperCase();
    };

    function validName() {
      let nameNoSpaces = nameInput.replace(' ', '');
      if (nameNoSpaces.length < 5) return false;
      return nameInput;
    };

    function validCat() {
      if (catInput.length < 5) return false;
      if (catInput.includes(' ')) return false;
      return catInput;
    };

    function listItems(items) {
      let itemNames = items.map((item) => item.itemName);
      console.log(itemNames.join(', '));
    };

    let newItemObj = {
      skuCode: generateSku(),
      itemName: validName(),
      category: validCat(),
      quantity: (qtyInput >= 0) ? qtyInput : false,
    };

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
