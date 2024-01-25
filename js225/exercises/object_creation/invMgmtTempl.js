// bare bones look at the inventory management build
// object factory 

const ItemCreator = (() => {
  //private functions (nested);

  return function(val) {
    this.property = val;
  };
})();

const ItemManager = {
  // data as properties,
  // functions as properties,

  itemCollection: [],
  
  create(item creator args) {
    let newItem = new ItemCreator(item creator args);
    itemCollection.push(newItem);
  },
};

const ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
    return this;
  },
  // more functions as properties

};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ReportManager.init(ItemManager);
ReportManager.reportInStock();
ItemManager.delete('SOCSP');
ReportManager.reportInStock();
