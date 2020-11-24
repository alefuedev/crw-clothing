import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubishableKey =
    "pk_test_51Hr9jRDbH0xYma4LdQb2b04RScDmvEPpeQJ2kkbiDZ1nqD8CUT8xmVVAkLbBPIbieb5Aw5MSw7PSlfjX6na2ao0m00afNqiC9c";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubishableKey}
    />
  );
};

export default StripeCheckoutButton;
