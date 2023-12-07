import Stripe from 'stripe';
import type { RequestHandler } from '@sveltejs/kit';
const stripe = new Stripe(import.meta.env.VITE_SECRET_STRIPE_KEY, {
	apiVersion: '2023-08-16'
});

// localhost:5173/api/stripeCheckout

// POST /stripeCheckout data: items
// return -> url created by Stripe for our user to use

export const POST: RequestHandler = async ({ request }) => {
	// items: [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	const data = await request.json();
	const items = data.items;
	console.log(items);

	// It gives us a URL for the person to check out with
	const priceId = data.PRICE_ID;

	const session = await stripe.checkout.sessions.create({
		mode: 'subscription',
		line_items: [
			{
				price: priceId,
				// For metered billing, do not pass quantity
				quantity: 1
			}
		],
		// {CHECKOUT_SESSION_ID} is a string literal; do not change it!
		// the actual Session ID is returned in the query parameter when your customer
		// is redirected to the success page.
		success_url: 'http://localhost:5173/success',
		cancel_url: 'http://localhost:5173/cancelled'
	});

	return new Response(
		JSON.stringify({ url: session.url }), // frontend will get this url to redirect
		{
			status: 200,
			headers: { 'content-type': 'application/json' }
		}
	);
};
