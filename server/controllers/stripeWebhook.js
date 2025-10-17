// import Stripe from "stripe";
// import Booking from "../models/Booking.js";

// // API to handle stripe webhooks

// export const stripeWebhooks = async(req,res)=>{
//    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
//    const sig = req.headers['stripe-signature'];
//    let event;
//    try {
//     event = stripeInstance.webhooks.constructEvent(req.body,sig,process.env.STRIPE_WEBHOOK_SECRET);
//    } catch (error) {
//       res.status(400).send(`Webhook Error: ${error.message}`)
//    }

//    if(event.type === "payment_intent.succeeded"){
//     const paymentIntent = event.data.object;
//     const paymentIntentId  = paymentIntent.id;

//     const session = await stripeInstance.checkout.sessions.list({
//         payment_intent:paymentIntentId,
//     });

//     const {bookingId} = session.data[0].metadata;

//     await Booking.findByIdAndUpdate(bookingId,{isPaid:true,paymentMethod:"Stripe"})

//    }else{
//     console.log("Unhandled event type:", event.type)
//    }
//    res.json({received:true})
// }
import Stripe from "stripe";
import Booking from "../models/Booking.js";

export const stripeWebhooks = async (req, res) => {
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const bookingId = session.metadata.bookingId;

    if (bookingId) {
      await Booking.findByIdAndUpdate(
        bookingId,
        { isPaid: true, paymentMethod: "Stripe" },
        { new: true }
      );
      console.log("Booking updated:", bookingId);
    }
  } else {
    console.log("Unhandled event type:", event.type);
  }

  res.json({ received: true });
};
