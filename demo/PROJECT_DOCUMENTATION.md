# Website Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture Overview](#architecture-overview)
3. [Key Components](#key-components)
4. [State Management](#state-management)
5. [Theming System](#theming-system)
6. [Cart Functionality](#cart-functionality)
7. [Performance Optimizations](#performance-optimizations)
8. [Security Considerations](#security-considerations)
9. [Accessibility](#accessibility)
10. [Testing](#testing)
11. [Debugging Guide](#debugging-guide)
12. [Common Issues & Solutions](#common-issues--solutions)
13. [Payment Processing](#payment-processing)

## Introduction

This document provides comprehensive documentation for our React-based frontend website. The site is built using modern web technologies including React, Vite for bundling, and Tailwind CSS for styling, with a focus on performance, accessibility, and user experience.

### Project Purpose

This website serves as a professional web presence with e-commerce capabilities. The application provides users with information about services, portfolio items, pricing, and allows them to add items to a cart for checkout.

### Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS
- **State Management**: React Context API
- **UI Components**: Custom components with Shadcn/UI principles
- **Deployment**: Progressive Web App (PWA) capabilities

## Architecture Overview

The application follows a component-based architecture with a clear separation of concerns:

- **components/**: Reusable UI components
- **contexts/**: Global state management using React Context
- **hooks/**: Custom React hooks for shared behavior
- **pages/**: Page components that combine smaller components
- **utils/**: Helper functions and utilities
- **lib/**: Core utility functions and constants
- **assets/**: Static assets like images and icons
- **polyfills/**: Browser compatibility polyfills

### Data Flow

The application uses a top-down data flow pattern where:

1. Data is maintained in context providers (ThemeContext, CartContext)
2. Components consume context via hooks (useTheme, useCart)
3. User interactions trigger context updates
4. Components re-render in response to context changes

## Key Components

### Layout Components

#### `Navbar.jsx` and `TopNavbar.jsx`

The navigation components provide site-wide navigation and user controls. The TopNavbar contains primary navigation links, while the Navbar may contain secondary navigation or contextual controls depending on the page.

#### `Footer.jsx`

The site footer contains secondary navigation, legal information, and additional links. It appears across all pages for consistent navigation.

#### `app-sidebar.tsx`

A collapsible sidebar that provides alternative navigation options, especially useful on mobile devices.

### Functionality Components

#### `CartProvider.jsx` and `CartSidebar.jsx`

These components handle shopping cart functionality, managing cart state and displaying cart contents respectively.

#### `theme-provider.jsx` and `dark-mode-toggle.tsx`

These components manage theme state (light/dark/system) and provide users with controls to change their preferred theme.

### Performance Components

#### `PerformanceMonitor.jsx`

Tracks key performance metrics during user sessions, helping to identify bottlenecks and issues.

#### `OptimizedImage.jsx`

Enhances image loading performance through lazy loading, proper sizing, and format optimization.

#### `LazyMotion.jsx`

Provides animation capabilities with minimal performance impact by loading animation libraries only when needed.

### UI Components

Located in `components/ui/`, these are low-level UI components that follow a consistent design system:

- `button.tsx`: Button variations
- `card.tsx`: Container components for grouped content
- `input.tsx`: Text input fields
- `sheet.tsx`: Slide-out panel components
- And more foundational elements

## State Management

### Context API Usage

The application uses React Context API for global state management:

#### ThemeContext

Manages application theme (light/dark/system) and persists preference in localStorage.

```jsx
// Usage example:
const { theme, setTheme } = useTheme();
```

#### CartContext

Manages shopping cart state including items, quantities, and totals.

```jsx
// Usage example:
const { items, addItem, removeItem, updateQuantity } = useCart();
```

### Local Component State

Component-specific state is managed using React's useState hook. For complex local state, useReducer is sometimes employed.

## Theming System

The theming system supports light mode, dark mode, and system preference-based theming.

### How It Works

1. The `theme-provider.jsx` component initializes theme from localStorage or defaults to "light"
2. Theme changes are persisted to localStorage
3. CSS classes are applied to the root HTML element to enable theme-specific styles
4. Components use CSS variables defined in `index.css` that change based on the applied theme class

### Adding Theme Support to Components

When creating new components, use Tailwind's dark mode classes:

```jsx
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  Themed content
</div>
```

## Cart Functionality

The shopping cart system provides e-commerce functionality:

### Features

- Add/remove items
- Update quantities
- Calculate totals
- Persist cart between sessions
- Checkout flow

### Implementation

Cart state is managed in `CartProvider.jsx` using the Context API and exposed through the `useCart` hook. The cart UI is rendered through `CartSidebar.jsx` which appears when triggered.

### Cart Data Structure

```javascript
{
  items: [
    {
      id: "product-1",
      name: "Product Name",
      price: 29.99,
      quantity: 2,
      // Additional product metadata
    }
  ],
  totalItems: 2,
  totalPrice: 59.98
}
```

## Performance Optimizations

The website implements several performance optimization strategies:

### Code Splitting

Pages and large components are code-split using React's lazy loading:

```jsx
const HomePage = lazy(() => import("./pages/HomePage"));
```

### Image Optimization

The `OptimizedImage` component:

- Lazy loads images as they enter the viewport
- Provides responsive sizes based on viewport
- Uses modern image formats with fallbacks

### Resource Hints

The `ResourceHints` component:

- Preconnects to critical domains
- Preloads critical resources
- Uses DNS prefetching for performance

### Monitoring

The `usePerformance` hook and `PerformanceMonitor` component track real user metrics:

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Security Considerations

### XSS Protection

- React's built-in HTML escaping helps protect against XSS
- User input is sanitized before rendering or storage
- Content Security Policy (CSP) is configured in the HTML meta tags

### Data Storage

- Sensitive data is never stored in localStorage
- Cart data in localStorage contains only product IDs and quantities, not payment information

### Form Validation

The `validation.js` utility provides input validation helpers:

- Email format validation
- Password strength requirements
- Input sanitization functions

## Accessibility

### Implemented Standards

- WCAG 2.1 AA compliance is targeted
- Semantic HTML elements are used throughout
- ARIA attributes supplement HTML semantics where needed
- Keyboard navigation is fully supported

### Color Contrast

Both light and dark themes maintain sufficient contrast ratios for text readability.

### Screen Reader Support

Components include appropriate ARIA roles, labels, and descriptions for screen reader users.

## Testing

### Manual Testing

For manual testing of the website:

1. Start the development server:
   ```
   npm run dev
   ```
2. Navigate to http://localhost:5173
3. Test functionality across different pages
4. Verify responsive behavior by resizing browser window

### Browser Testing

The site should be tested across:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

### Testing Cart Functionality

1. Add products to cart from different pages
2. Adjust quantities in the cart sidebar
3. Remove items from cart
4. Verify totals update correctly
5. Test checkout flow

## Debugging Guide

### React Developer Tools

Install the React Developer Tools browser extension to inspect:

- Component hierarchy
- Props and state
- Context values
- Performance issues

### Console Logging

The `errorHandler.js` utility provides structured logging:

```javascript
import { logError, logWarning, logInfo } from "@/utils/errorHandler";

try {
  // code that might fail
} catch (error) {
  logError("Cart operation failed", error, { itemId, action: "add" });
}
```

### Common Error Points

- Theme switching issues typically relate to localStorage or CSS class application
- Cart update failures often relate to item structure or serialization
- Performance issues commonly stem from unnecessary re-renders or unoptimized images

## Common Issues & Solutions

### Theme Not Persisting

**Problem**: Theme reverts to default after reload
**Solution**: Check if localStorage is available/enabled in the browser

### Cart Items Disappearing

**Problem**: Cart items vanish unexpectedly
**Solution**: Verify localStorage quota isn't exceeded, check cart serialization/deserialization

### Slow Initial Load

**Problem**: First page load is slow
**Solution**: Review bundle size, implement code splitting, optimize images, add resource hints

### Mobile Navigation Issues

**Problem**: Navigation is difficult on small screens
**Solution**: Test and adjust the responsive behavior of the app-sidebar component

## Payment Processing

### 50% Deposit Payment Model

The website implements a 50% deposit payment model where clients:

1. Pay 50% of the total project cost upfront when placing an order
2. Pay the remaining 50% upon project completion

#### Initial Payment Setup

- All prices in Stripe should be set to 50% of the actual service cost
- For example: If a website package costs $1000 total, create a price in Stripe for $500
- The checkout page and success page clearly communicate that this is a deposit

### Stripe Integration

The website uses Stripe for payment processing with a client-side checkout flow:

1. Enable client-only integration in your Stripe Dashboard:

   - Go to: https://dashboard.stripe.com/account/checkout/settings
   - Enable "Client-only integration"

2. Create products and prices in Stripe:

   - Each plan (Starter, Premium, Platinum) should have a corresponding price
   - Add-on services should each have their own price
   - Set all prices to 50% of the total service cost

3. Update price IDs in the code:
   - Edit `/src/services/stripeService.js`
   - Replace placeholder IDs in `PLAN_PRICE_MAP` and `ADDON_PRICE_MAP` with your actual Stripe price IDs

### Final Payment Process

When a project is complete, you'll need to collect the remaining 50% payment from the client. A special final payment page has been created for this purpose.

#### Generating Final Payment Links (Manual Process)

When your client's project is complete and ready for final payment:

1. Open your browser's developer console on any page of your website (press F12 or right-click > Inspect)
2. Run the following JavaScript code in the console:

```javascript
// Import the function from your service
import { generateFinalPaymentLink } from "/src/services/stripeService.js";

// Generate a payment link for the completed project
const paymentLink = generateFinalPaymentLink({
  id: "client-unique-id", // Create a unique ID for this project
  name: "Client Website", // Project name
  description: "Custom website with booking functionality", // Brief description
  totalAmount: 1000, // Total project cost in dollars
  remainingAmount: 500, // Remaining payment (50% of total)
  completionDate: new Date().toISOString(), // Current date
});

// Copy the link to clipboard
navigator.clipboard.writeText(paymentLink).then(() => {
  console.log("Payment link copied to clipboard:", paymentLink);
});
```

3. The final payment URL will be copied to your clipboard
4. Send this link to your client via email with a message like:

> Subject: Your website project is complete - Final payment
>
> Hi [Client Name],
>
> Great news! Your website project is now complete and ready for your review.
>
> To view the completed project and process the final 50% payment, please click the link below:
>
> [PAYMENT_LINK]
>
> After your payment is processed, we'll deliver all final files and launch your website.
>
> Please let me know if you have any questions!
>
> Best regards,
> [Your Name]

#### How the Final Payment Link Works

When your client clicks the payment link:

1. They'll see the FinalPaymentPage with their project details
2. The remaining amount due (50%) will be clearly displayed
3. When they click "Complete Final Payment", they'll be redirected to Stripe checkout
4. After payment is successful, they'll receive access to their completed project

### Testing Payments

For testing Stripe payments:

- Use Stripe's test mode with test cards
- Test card number: 4242 4242 4242 4242
- Any future expiration date and any 3-digit CVC

### Troubleshooting Payment Issues

If payments aren't working correctly:

- Check browser console for errors
- Verify Stripe publishable key is correct in your .env file
- Confirm client-only integration is enabled in Stripe dashboard
- Verify price IDs match those in your Stripe account

---

This documentation is a living document. As the application evolves, please update this documentation to reflect current functionality and best practices.
