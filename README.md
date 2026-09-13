# Seye operations prototype

A responsive HTML/CSS and vanilla JavaScript prototype for the three-business preorder model: customers pay for products first, and actual importation and delivery charges are invoiced later.

**This is a local prototype, not a live Shopify integration.** Every customer, payment, stock quantity, and connection status is sample data. It does not request credentials, send messages, call Shopify or Paystack, or move money. Demo changes persist in this browser's localStorage and can be reset under Connections. The demonstration is anchored to 13 September 2026.

## Run

Open `index.html` directly in a browser. No build, dependencies, or internet connection is required. For a local HTTP preview, run this from the prototype folder:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173. Local-storage state is specific to the browser and origin, so file and HTTP previews have separate state.

## Suggested walkthrough

1. Overview: review the separate product-payment and logistics-clearance statuses.
2. Click **Review costs** for June home collection (SHP-2606).
3. Change the confirmed freight or clearance amount and watch the allocation preview update. The sample starts at ₦210,000 freight plus ₦60,000 clearance. The 20 kg of extra business stock retains ₦45,000 of the total; customer orders receive ₦225,000. The June sample batch contains six ordered units plus eight extra units.
4. Approve actual costs. These approved allocations are preserved; changing future rates cannot overwrite them.
5. Open Amaka Okafor, **order #1048**. Importation is ₦54,000; delivery is still unquoted and dispatch remains blocked.
6. Create her logistics invoice. Add the current delivery charge, such as ₦5,000, and review the itemized preview. Issue the demo invoice.
7. Simulate a verified **₦20,000 partial payment**. Her remaining ₦39,000 continues to block dispatch.
8. Simulate the remaining payment. Her order moves to **Ready to dispatch**.
9. Confirm dispatch. The order history, activity, queue and relevant stock/reservation counts update.
10. Explore business filters, search, status tabs, sorting, CSV export, shipments, inventory and connections. Reset under Connections to repeat the scenario.

## UI/UX research through Mobbin MCP

Research conducted on 13 September 2026. The returned screen images were inspected; this implementation draws on their interaction patterns and does not embed or reproduce the screenshots.

| Reference | Observed pattern | Application here |
| --- | --- | --- |
| [Shopify order list](https://mobbin.com/screens/b743aa06-5d21-485f-8d69-d5f0052727c5) | A compact sidebar, filterable order table, and separate payment/fulfillment columns | A working order surface with separate product payment and logistics clearance |
| [Shopify payment filter](https://mobbin.com/screens/eb541396-80b3-4bf4-afd1-9bbf9f16d0e3) | Explicit payment states selected within the order list | Status tabs for incomplete charges, unpaid invoices and cleared orders |
| [Shopify fulfillment feedback](https://mobbin.com/screens/b0f99f43-2fe4-4c9c-867a-1da5cedbdfab) | Updated table status and concise confirmation feedback | Dispatch updates the queue and shows a clear confirmation |
| [Mercury invoice creation](https://mobbin.com/flows/ef4623ce-bc68-4006-9c98-f720a4546769) | Form and invoice preview side by side; explicit review and issue stages | Editable current delivery charge alongside a live itemized invoice |
| [Acctual invoice creation](https://mobbin.com/flows/164ea2a9-05d1-44d3-9d7b-61d2afeba6cc) | Invoice state tabs, detail entry and final review before issue | Distinct unassessed, invoiced, partially paid, paid and dispatched states |

## Visual direction and brief review

The design centers on the operator's immediate work: review an arrived shipment, issue logistics invoices, and release paid orders. The memorable visual element is the navy shipment panel with a small container illustration; the rest is restrained working UI.

- Ink / shipment panel: `#233448`
- Canvas: `#f5f6f8`
- Surface: `#ffffff`
- Actions: `#3f60cf`
- Verified / ready: `#26745c`
- Pending / attention: `#96611b`
- Typography: Avenir Next / Avenir, with Segoe UI and Arial fallbacks. All fonts resolve locally. Tabular numerals align monetary values.
- Layout: left-aligned navigation and working content; four linked operational measures, an attention list, a recent-order table, and a contextual shipment/activity rail. On smaller screens, the rail stacks and navigation becomes a toggle.
- Review: generic revenue charts were omitted because unpaid logistics and inventory release are the actual operational priorities. Similar-looking payment badges were replaced with explicit textual states. Unknown charges are never presented as zero.

## Scope and integration handoff

Implemented: seven navigable views, business filters, order search, status filters, sorting, order drawers, actual batch cost approval, allocation preview, invoice preview/issue, partial/full payment simulation, dispatch guards, stock movement on dispatch, event history, sample sync, CSV export and reset. Dialogs have focus containment, Escape close, and background isolation. Reduced-motion preferences are respected.

Historical stock balances and previously assessed shipments provide illustrative context. This prototype does not implement all purchasing/receiving operations, combined-order invoicing, split-shipment allocation, carrier quote APIs, quote-revision workflows, manufacturing, refunds, disputes, authentication or staff roles. Quote validity is displayed; the seed date is fixed and no real-time quote-expiration service runs. These need specification and backend implementation.

For production, use a backend with durable records and enforce these rules server-side. Browser state is neither secure nor authoritative for real payments or dispatch. Connect Shopify via authenticated server-side API calls and permission-scoped installation; request access to orders older than 60 days for the three-month import cycle. Use one authoritative invoice per assessed charge, verify gateway notifications and transaction amount/currency/reference, deduplicate events globally, reconcile failures, preserve other fulfillment holds, and maintain backups and an audit trail. A finalized import bill and a later carrier quote are separate dated records. Any revised invoice must preserve its history and recorded payments.

Relevant implementation documentation:
- [Shopify order editing](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders)
- [Shopify fulfillment hold release](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)
- [Paystack payment verification](https://paystack.com/docs/payments/accept-payments/)
- [Paystack webhook verification](https://paystack.com/docs/payments/webhooks/)

## Files and checks

- `index.html`: app entry point and metadata
- `styles.css`: layout, components and responsive styling
- `model.js`: seed records and independently testable business rules
- `app.js`: rendering and interactions
- `model.test.js`: core workflow and dispatch safeguards

Run the focused business-rule checks:

```sh
node --test model.test.js
```
