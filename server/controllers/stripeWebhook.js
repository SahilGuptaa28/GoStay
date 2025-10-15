// import Stripe from "stripe";
// import Booking from "../models/Booking.js";

// // API to handle stripe webhooks

// export const stripeWebhooks = async(request,response)=>{
//    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
//    const sig = req.headers['stripe-signature'];
//    let event;
//    try {
//     event = stripeInstance.webhooks.constructEvent(request.body,sig,process.env.STRIPE_WEBHOOK_SECRET);
//    } catch (error) {
//       response.status(400).send(`Webhook Error: ${error.message}`)
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
//    response.json({received:true})
// }

import Stripe from "stripe";
import Booking from "../models/Booking.js";

export const stripeWebhooks = async (request, response) => {
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = request.headers['stripe-signature'];
    let event;

    try {
        // Construct event using raw body
        event = stripeInstance.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        console.error("Webhook signature verification failed:", error.message);
        return response.status(400).send(`Webhook Error: ${error.message}`);
    }

    // Handle Checkout session completed
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const { bookingId } = session.metadata;

        try {
            await Booking.findByIdAndUpdate(bookingId, {
                isPaid: true,
                paymentMethod: "Stripe"
            });
            console.log("Booking marked as paid:", bookingId);
        } catch (err) {
            console.error("Error updating booking payment status:", err.message);
        }
    } else {
        console.log("Unhandled event type:", event.type);
    }

    // Respond to Stripe
    response.json({ received: true });
};
