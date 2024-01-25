function createInvoice(services={}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(args) {
      args.forEach((pay) => this.addPayment(pay));
    },

    paymentTotal() {
      let totalPaid = 0;
      let i;
    
      for (i = 0; i < this.payments.length; i += 1) {
        totalPaid += this.payments[i].total();
      }
    
      return totalPaid;
    },    

    amountDue() {
      return this.total() - this.paymentTotal();
    }
  };
}

function createPayment(services={}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return services.amount || (this.phone + this.internet);
    },

  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0