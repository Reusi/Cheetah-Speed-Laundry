// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_ANNOfDQOVANuROwt9Um0VSS5");

// Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
var token = request.body.stripeToken; // Using Express

// Charge the user's card:
var charge = stripe.charges.create({
  amount: 3000,
  currency: "usd",
  description: "Example charge",
  source: token,
}, function(err, charge) {
  // asynchronously called
});
