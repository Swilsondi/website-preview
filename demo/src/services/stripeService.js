import { loadStripe } from "@stripe/stripe-js";

// Use the actual publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

// Log whether we're using test or live mode based on the key
console.log(
  "Stripe mode:",
  PUBLISHABLE_KEY?.startsWith("pk_test_") ? "TEST MODE" : "LIVE MODE"
);

// Load the Stripe.js library with publishable key
const stripePromise = loadStripe(PUBLISHABLE_KEY);

/*
 * IMPORTANT: For client-only integration to work, you must:
 * 1. Go to https://dashboard.stripe.com/account/checkout/settings
 * 2. Enable "Client-only integration"
 * 3. Add your domains to the allowed list:
 *    - For production: Add your actual domain (e.g., yourdomain.com)
 *    - For development: Add 'http://localhost:3000' and 'http://localhost:5173'
 *      (and any other ports you use for local development)
 *
 * FIXING DOMAIN ERROR:
 * If you see an error like: "The domain that redirected to Checkout is not enabled..."
 * 1. Go to: https://dashboard.stripe.com/account/checkout/settings
 * 2. Find "Domains for client-side integration"
 * 3. Add your localhost domain and port: http://localhost:3000
 * 4. Add any other development domains you use: http://localhost:5173, etc.
 * 5. Click Save
 *
 * For 50% deposit model:
 * When creating prices in Stripe Dashboard, set the price to 50% of the full amount.
 * For example, if a service costs $1000 in total, create a price of $500.
 * Then in your frontend UI, explain that this is a 50% deposit with the remaining
 * amount to be paid upon completion.
 */

// Map your plan names to their respective Stripe PRICE IDs (not product IDs)
// Price IDs start with "price_" not "prod_"
// These prices should be set as 50% of the total cost in your Stripe dashboard
const PLAN_PRICE_MAP = {
  "Starter Site": "price_1RkxbEHTxbvTdUoxm96I4F1H", // TEST price ID for Starter Site
  "Premium Site": "price_1RkWcZHTxbvTdUoxigEKHuB9", // Replace with actual price ID (starts with price_)
  "Platinum Site": "price_1RkWbdHTxbvTdUoxxX4EF0UE", // Replace with actual price ID (starts with price_)
};

// Map add-on IDs to their respective Stripe PRICE IDs (not product IDs)
// Price IDs start with "price_" not "prod_"
const ADDON_PRICE_MAP = {
  "extra-page": "price_1RkWicHTxbvTdUox5HxOYbw5",
  copywriting: "price_1RkWjEHTxbvTdUoxxOoyFwac",
  "advanced-seo-setup": "price_1RkWjpHTxbvTdUoxXx6amMiD",
  booking: "price_1RkWkTHTxbvTdUoxbFW2wBG7",
  "social-media-setup": "price_1RkWl1HTxbvTdUoxKJLZJR2i",
  hosting: "price_1RkWljHTxbvTdUoxJug5KRRM",
  rush: "price_1RkXVMHTxbvTdUox3AP1pKun",
  "extra-revision": "price_1RkWmrHTxbvTdUoxwcLShjH1",
  "domain-dns-setup": "price_1RkWmIHTxbvTdUoxzaYLc2yn",
  "monthly-maintenance-starter-plan": "price_1RkWfTHTxbvTdUoxhxFIQo8e",
  "monthly-maintenance-platinum-plan": "price_1RkWgfHTxbvTdUoxmvBkijyR",
  "monthly-maintenance-premium-plan": "price_1RkWcZHTxbvTdUoxigEKHuB9",
};

/**
 * Creates a Stripe checkout session and redirects the user
 * For a frontend-only application, we use pre-created Stripe price IDs
 *
 * @param {Object} selectedPlan - The selected plan
 * @param {Array} cartItems - Additional cart items
 * @param {Object} customerInfo - Customer information
 * @returns {Promise} - Promise that resolves when checkout is complete
 */
export const redirectToCheckout = async (
  selectedPlan,
  cartItems,
  customerInfo = {}
) => {
  try {
    console.log("Starting Stripe checkout process...");
    console.log("Selected plan:", selectedPlan);
    console.log("Cart items:", cartItems);

    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe failed to load");
      throw new Error("Stripe failed to load - check your publishable key");
    }

    // Store order details in localStorage for retrieval after payment
    const orderDetails = {
      plan: selectedPlan,
      items: cartItems,
      customerInfo,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("pendingOrder", JSON.stringify(orderDetails));

    // For demo purposes - if you don't have actual price IDs yet, use a test price
    // You can create a test price in your Stripe dashboard
    const TEST_PRICE_ID = "price_1OyvikFvNtywFs8XskhsTORe"; // Replace with an actual test price ID

    // Prepare line items for checkout based on selected plan and add-ons
    const lineItems = [];

    // Add the selected plan if it exists and has a price ID
    if (selectedPlan && selectedPlan.name) {
      // Look up the Stripe price ID for this plan
      const planPriceId = PLAN_PRICE_MAP[selectedPlan.name];

      if (planPriceId) {
        lineItems.push({
          price: planPriceId,
          quantity: 1,
        });
      } else {
        console.warn(`No Stripe price ID found for plan: ${selectedPlan.name}`);
        // Fallback to test price for demo purposes
        lineItems.push({
          price: TEST_PRICE_ID,
          quantity: 1,
        });
      }
    }

    // Add cart items if they exist and have price IDs
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item) => {
        const addonPriceId = ADDON_PRICE_MAP[item.id];

        if (addonPriceId) {
          lineItems.push({
            price: addonPriceId,
            quantity: item.quantity,
          });
        } else {
          console.warn(`No Stripe price ID found for add-on: ${item.id}`);
        }
      });
    }

    // For testing, if no valid line items are found, use the test price
    if (lineItems.length === 0) {
      lineItems.push({
        price: TEST_PRICE_ID,
        quantity: 1,
      });
    }

    console.log("Checkout with line items:", lineItems);

    // Check if client-only integration is enabled
    console.log(
      "Initiating client-only checkout. Make sure it's enabled in your Stripe dashboard."
    );
    console.log(
      "If you get an error, go to: https://dashboard.stripe.com/account/checkout/settings"
    );

    // Redirect to Stripe checkout with the collected line items
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: `${window.location.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/checkout?canceled=true`,
    });

    if (error) {
      console.error("Stripe checkout error:", error);
      throw error;
    }
  } catch (err) {
    console.error("Checkout error:", err);
    throw err;
  }
};

/**
 * Process a successful checkout
 *
 * @param {string} sessionId - The Stripe session ID
 * @returns {Object} - Order details
 */
export const handleCheckoutSuccess = (sessionId) => {
  // In a production app, you would verify this with your backend
  // For demo purposes, we're using localStorage
  const pendingOrder = JSON.parse(localStorage.getItem("pendingOrder") || "{}");

  // Store the completed order
  const completedOrder = {
    ...pendingOrder,
    sessionId,
    status: "paid",
    completedAt: new Date().toISOString(),
  };

  localStorage.setItem("completedOrder", JSON.stringify(completedOrder));
  localStorage.removeItem("pendingOrder");

  return completedOrder;
};

/**
 * Generate a final payment URL that you can send to clients via email
 * when their project is complete
 *
 * @param {Object} projectDetails - Details about the completed project
 * @returns {string} - URL to the final payment page
 */
export const generateFinalPaymentLink = (projectDetails) => {
  if (!projectDetails || !projectDetails.id) {
    throw new Error("Project details are required to generate a payment link");
  }

  // Store the project details in localStorage for retrieval on the payment page
  // In a real app, this would be handled by your backend
  const completedProjects = JSON.parse(
    localStorage.getItem("completedProjects") || "[]"
  );

  // Check if project already exists in completed projects
  const existingProjectIndex = completedProjects.findIndex(
    (p) => p.id === projectDetails.id
  );

  if (existingProjectIndex >= 0) {
    // Update existing project
    completedProjects[existingProjectIndex] = {
      ...completedProjects[existingProjectIndex],
      ...projectDetails,
    };
  } else {
    // Add new project
    completedProjects.push(projectDetails);
  }

  localStorage.setItem("completedProjects", JSON.stringify(completedProjects));

  // Generate the payment URL
  const baseUrl = window.location.origin;
  return `${baseUrl}/final-payment?project_id=${encodeURIComponent(
    projectDetails.id
  )}`;
};

export { stripePromise };

export default {
  redirectToCheckout,
  handleCheckoutSuccess,
  generateFinalPaymentLink,
};
