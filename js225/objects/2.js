let invoices = {
  unpaid: [],
  paid: [],
  add(client, amount) {
    let invoice = { name: client, amount: amount };
    this.unpaid.push(invoice);
  },

  payInvoice(client) {
    let newUnpaid = [];
    this.unpaid.forEach((invoice) => {
      if (invoice.name === client) {
        console.log(this.paid);
        this.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    });

    this.unpaid = newUnpaid;
  },

  totalDue() {
    let total = this.unpaid.reduce((sum, invoice) => sum + invoice.amount, 0);
    console.log(`Total due: $${total.toFixed(2)}`);
    return total;
  },

  totalPaid() {
    let total = this.paid.reduce((sum, invoice) => sum + invoice.amount, 0);
    console.log(`Total paid: $${total.toFixed(2)}`);
    return total;
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
invoices.totalDue();
invoices.totalPaid();

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
invoices.totalDue();
invoices.totalPaid();

