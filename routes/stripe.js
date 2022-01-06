const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51K9luKDHgD7vvY49ds9Y2O1HGaXZQJ5pFQK04p0TfXmerocVtmSbWp8dXSRnbDT9KB69FNaGjHjLa6KJEy4YB4Gb000NJZ1p0O"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
