var stripe = require("stripe")("sk_test_A6y8k03vHkuGhVs5wXEVjpjJ");

var token = request.body.stripeToken;
stripe.customers.create({
  email: "paying.user@example.com",
  source: token,
}).then(function(customer) {
    
  return stripe.charges.create({
    amount: 3000,
    currency: "usd",
    customer: customer.id,
  });
}).then(function(charge) {
});
stripe.charges.create({
  amount: 3000, 
  currency: "usd",
  customer: customerId,
});
