let inventory;

(() => {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      let date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
    },
    cacheTemplate: function() {
      let iTmpl = document.querySelector("#inventory_item");
      iTmpl.remove();
      this.template = iTmpl.innerHTML;
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    showOrder: function(e) {
      e.preventDefault();
      let orderList = document.querySelector('#order_list');
      this.collection.forEach((item) => {
        if (item.name) {
          let newLI = document.createElement('li');
          newLI.innerText = (item.name + ': ' + item.quantity);
          orderList.append(newLI);
        }
      })
    },
    generateElements: function(html) {
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      return template.content.children;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      let found_item;

      this.collection.forEach(item => {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(itemRow) {
      let id = this.findID(itemRow);
      let item = this.get(id);

      item.name = itemRow.querySelector("[name^=item_name]").value;
      item.stock_number = itemRow.querySelector("[name^=item_stock_number]").value;
      item.quantity = itemRow.querySelector("[name^=item_quantity]").value;
    },
    generateElements: function(html) {
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      let clone = template.content.cloneNode(true);
      return clone;
    },
    newItem: function(e) {
      e.preventDefault();
      let newObj = this.add();
      let html = this.template.replace(/ID/g, newObj.id);
      let newElement = this.generateElements(html);
      let parent = document.querySelector("#inventory");
      parent.append(newElement);
    },
    findParent: function(e) {
      return e.target.closest("tr");
    },
    findID: function(item) {
      return +item.querySelector("input[type='hidden']").value;
    },
    deleteItem: function(e) {
      e.preventDefault();
      if (e.target.classList.contains('delete')) {
        let item = this.findParent(e);
        item.remove();
      }
    },
    updateItem: function(e) {
      if (e.target.tagName == 'INPUT') {
        let item = this.findParent(e);
        this.update(item);
      }
    },
    addEventListener: function(el, eventName, eventHandler, selector) {
      if (selector) {
        const wrappedHandler = (e) => {
          if (!e.target) return;
          const el = e.target.closest(selector);
          if (el) {
            eventHandler.call(el, e);
          }
        };
        el.addEventListener(eventName, wrappedHandler);
        return wrappedHandler;
      } else {
        const wrappedHandler = (e) => {
          eventHandler.call(el, e);
        };
        el.addEventListener(eventName, wrappedHandler);
        return wrappedHandler;
      }
    },
    bindEvents: function() {
      let addItemBtn = document.querySelector('#add_item');
      this.addEventListener(addItemBtn, 'click', this.newItem.bind(this));

      let inventoryTable = document.querySelector('#inventory');
      inventoryTable.addEventListener('click', this.deleteItem.bind(this));
      inventoryTable.addEventListener('focusout', this.updateItem.bind(this));

      let orderBtn = document.querySelector('#show_order');
      this.addEventListener(orderBtn, 'click', this.showOrder.bind(this));

    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };
})();

document.addEventListener('DOMContentLoaded', function(event) {
  inventory.init.bind(inventory)();
});
