# Prototype verification

Verified on 13 September 2026.

- JavaScript syntax checks passed for `app.js` and `model.js`.
- All 9 focused business-rule tests passed with Node's built-in test runner.
- Browser walkthrough: approve ₦270,000 actual batch cost, confirm extra stock's ₦45,000 allocation, issue order #1048's ₦59,000 logistics invoice, record ₦20,000, verify the remaining ₦39,000 blocks dispatch, settle the remainder, and confirm dispatch.
- The browser showed `Dispatched` and disabled repeat dispatch after release.
- Orders, shipments, inventory, billing and connections were opened and inspected. Customer search for Amaka returned one row.
- Business filtering updates the overview's order metrics and active shipment. The fashion view correctly shows no immediate actions and its in-transit shipment.
- Desktop overview and invoice preview visually inspected. Mobile overview visually inspected at 390 × 844; compact navigation and stacked panels rendered correctly.
- Browser error/warning log was empty at the inspected checkpoint.
- Demo reset restores the original scenario and updated seed data.

No live Shopify or payment integration was tested. Production systems need server-side enforcement and end-to-end integration tests with authorized sandbox accounts.
