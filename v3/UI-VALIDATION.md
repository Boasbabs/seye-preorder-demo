# PreorderDesk UI validation against Mobbin

Updated 4 November 2026 for v3, on 6 November 2026 for the Shopify sales channel, and on 8 November 2026 for batches that arrive in parts. `index.html` is v3. It has the same flows as v2 and a clean dashboard look modelled on Mercury and Stripe. It also adds three flows: adding products, creating a batch, and adding a customer to an order. v1 and v2 are kept locally in `archive/` and are not published. v1 was invented and rejected; v2 was a Shopify admin look-alike.

The v3 look was checked with 10 more Mobbin searches. The v2 sections further down still back the flows, which v3 keeps.

## v3: the visual system

| v2 (Shopify look) | v3 | References |
|---|---|---|
| Gray canvas with every section in a shadowed box | White canvas. Sections are a heading, a thin line, then content. Only the summary panel is boxed | [Mercury home](https://mobbin.com/screens/d575358b-679b-4d52-aa98-5026970291b3), [Stripe payment page](https://mobbin.com/screens/ed14dee7-09db-427b-a91e-21ddfa938d93) |
| Square dark primary buttons on every card | One blue pill per screen for the main action; everything else is a gray pill | [Mercury](https://mobbin.com/screens/d575358b-679b-4d52-aa98-5026970291b3): blue "Send", gray "Transfer", "Deposit", "Request" |
| Strong badges in many tones | Soft pills. Color only where it means something | [Stripe "Succeeded"](https://mobbin.com/screens/ed14dee7-09db-427b-a91e-21ddfa938d93), [Stripe invoice statuses](https://mobbin.com/screens/f8db8469-2830-4c6b-98ca-53bf4c1e3caf), [Mercury transactions](https://mobbin.com/screens/868560a8-9acb-41d7-9708-82730b1257ad) (green money in, red "Failed") |
| Metrics strip of four equal cells | One big number (Balance due) with small stats beside it | [Mercury balance card](https://mobbin.com/screens/d575358b-679b-4d52-aa98-5026970291b3) |
| Order page built from Shopify cards | Amount as the headline with status pills, "For Amaka Okafor", Timeline with "Add note", Details column | [Stripe payment](https://mobbin.com/screens/ed14dee7-09db-427b-a91e-21ddfa938d93), [Stripe payment with timeline](https://mobbin.com/screens/ebf7e9fe-326a-4459-ae16-f94aea16f56b) |
| Shopify top bar | Store name top left in the sidebar, "Search for anything" bar, "+ New" menu | [Mercury](https://mobbin.com/screens/a0539f69-cca9-4645-8f3d-aa59048efdd1) ("Move money" menu) |
| Phone: Shopify rows and tab bar | Phone: a big number, four action tiles, floating tab bar | [X Money](https://mobbin.com/screens/808bd1da-961f-456c-bfd1-302558525e70), [Cash App](https://mobbin.com/screens/1b843341-6df9-4191-87d9-e28b4fc9577a), [Neo Financial](https://mobbin.com/screens/a844a983-e60a-4d67-8a77-9bcd25b331c5) |

**Color roles.** Blue is for what you can tap, and for batches that are still moving (Taking orders, In transit). Green is money in and things done (Paid, Fulfilled, Received). Amber is your move (Payment pending, Ready to fulfill). Red is money missing (Unpaid, an overdue balance). Gray is waiting on someone else (Partially paid, On hold). Because most preorders sit at "Partially paid", the orders table stays mostly gray, and color only appears where something needs attention.

## v3: the desktop sidebar

Reworked on 4 November 2026 after the first v3 review, with 2 more Mobbin searches.

| Before | Now | References |
|---|---|---|
| 236px wide, 14px labels in 34px rows, an amber count pill on Orders | 224px wide, 13px labels in 30px rows, gray icons, a gray fill on the current page, and a plain number beside Orders | [Mercury home](https://mobbin.com/screens/bb15ae0e-0445-4c13-ba4f-3ccb1a930fb5) ("Tasks 2"), [Mercury with bookmarks](https://mobbin.com/screens/57aecdab-db4f-4459-8280-68c1aeb2fa07) |
| Nothing below the five pages, then a large empty area | "Active batches": each batch that still needs work, with one status line ("Closes in 6 days", "Expected in 9 days", "Freight cost needed", "4 units to fulfill"). A new batch appears here as soon as it is created, and its row is highlighted on its page | [Mercury Bookmarks](https://mobbin.com/screens/57aecdab-db4f-4459-8280-68c1aeb2fa07) ("Checking ••2502" with the balance under it), [Stripe section label](https://mobbin.com/screens/4f376599-af15-4da8-83e6-05c2d6067e49) ("Products") |
| The sample-data note as loose text | A row pinned to the bottom behind a thin line: "Sample data" with a Reset button | [Stripe Developers row](https://mobbin.com/screens/4f376599-af15-4da8-83e6-05c2d6067e49) |

Not added: Stripe's collapse-to-icons rail ([Stripe](https://mobbin.com/screens/4026897c-0c1d-4c98-9e95-1888310ad6ec)). Between 821px and 1100px the Home and Batches summary panels now stack, as they do on phones, so the stats no longer overflow on a small laptop window.

## v3: the new flows

**Adding a customer to an order.** v2 hid this inside a search field.
- New order is a full-screen editor. The first field is "Find or add a customer", and its dropdown starts with "+ Add “name” as a new customer". References: [Stripe create invoice](https://mobbin.com/screens/a4a08b86-e3b5-44c9-833d-e87a7243db8d) ("+ Add Leonard Kim"), [Mercury](https://mobbin.com/screens/853f4fa7-0379-4c85-b070-536e29200f91) ("+ Add new customer"), [Acctual](https://mobbin.com/screens/4c86c936-5bb5-4c44-b9b5-4e7ebd6ec707), [PayPal](https://mobbin.com/screens/aec094ed-d58d-41ad-8d1d-b7271cb7b019), [Jobber](https://mobbin.com/screens/715ef5a4-0008-4d13-b6fb-1632d964d539).
- Once picked, the customer shows as a card with "Change". A live preview of the customer's order page sits beside the form. References: Stripe's Hosted Invoice Page preview tab and Mercury's invoice preview (both linked above).
- Add customer form: avatar initials, name, WhatsApp number with +234, location (it shows the delivery fee), optional Instagram. References: [Telegram Add Contact](https://mobbin.com/screens/0702442c-b12c-4814-ae54-70329d839f8c), [Plane customer record](https://mobbin.com/screens/449958ec-ca35-49ac-befa-96a887b151af).
- Changing an existing order's customer uses a search list with a "New customer" button. Reference: [Square Add customer](https://mobbin.com/screens/8a8663a6-3ff0-4f5f-a5d6-8f60a3802df6).
- Customer page: balance, orders, payments and details, with "New order" pre-filled for that customer. Reference: [Stripe customer page](https://mobbin.com/screens/f8db8469-2830-4c6b-98ca-53bf4c1e3caf).

**Adding products.**
- Products list: photo, name and variant, price, supplier cost with margin, weight, open batches, units preordered. Reference: [Stripe Product catalogue](https://mobbin.com/screens/fb3840bf-2afd-49bb-a4ac-9f44a1d38654).
- Add a product opens a side panel: photo upload, name, variant, price, supplier cost, weight and "Add to batch". References: [Stripe Add a product](https://mobbin.com/screens/89eec555-5039-4d61-b011-ec0222d65fae), [Stripe with preview](https://mobbin.com/screens/f0721d55-7d3c-4827-ba9e-e6bcbdfe9c2d).
- The margin is worked out from cost and price. Reference: [HubSpot Create Product](https://mobbin.com/screens/189a66be-01de-496e-be76-1eabe8ab5ab1).
- "What customers see" previews the product card. Reference: [Discord](https://mobbin.com/screens/e40f4376-e8d4-402b-b385-74b584fe539a).
- You can add a product without leaving New order or New batch.

**Creating a batch.**
- A full-screen page with close on the left and "Create batch" on the right.
- Left: "Products in this batch", a table with a spare-units stepper and a wide dashed "+ Add products" button.
- Right: batch name, ships from, delivers to, orders-close date, expected date, and a spare-stock summary.
- References: [Fresha Manage products for order](https://mobbin.com/screens/753774f5-d12f-4f44-bc19-5d3cb0887bbf), [Programa purchase order](https://mobbin.com/screens/79754028-c477-48e7-b290-eceda8b49499), [Shopify create purchase order](https://mobbin.com/screens/2d749fed-77f8-4378-af70-5d636fd6025d).
- An open batch's page has "Add products" and "+ New order", which starts an order in that batch.

**Details handled.**
- A duplicate WhatsApp number is caught, with an offer to use the existing customer.
- Numbers are stored as +234 regardless of how they're typed.
- Changing an order's customer updates the delivery fee for their area.
- Orders keep the price they were placed at when a product's price changes.
- Batch names must be unique.
- The expected date must come after orders close.
- Photos are shrunk before saving.
- The new-order button stays disabled until a customer, a batch, products and a deposit of at least 70% are in, and it says what's missing.

## v3: the Shopify sales channel

Added 6 November 2026, after Seye decided to keep taking orders on her Shopify store and use PreorderDesk for everything after the sale. Checked with 11 more Mobbin searches.

The page is a simulation. Test orders use Seye's real products and prices, taken from her public storefront, with made-up customers. "Import a Shopify export" reads a real orders CSV inside the browser. Nothing is uploaded, so customer details never reach this repository or the hosted copy.

| Screen or part | What it does | References |
|---|---|---|
| Sidebar "Sales channels" with a Shopify row | One status line: "2 waiting for you" or "Last order 25 min ago" | Shopify admin's "Sales channels" group ([Shopify Bill Pay](https://mobbin.com/screens/ad5b3c25-50ab-41d0-ae02-0d32b898329d), [Shopify Agentic](https://mobbin.com/screens/b92eb990-7f4e-4bac-9390-d649bb2bf470)); the status line follows Mercury's Bookmarks, as for Active batches |
| Page header: "Shopify", a green "Connected" pill, the store address | Says where orders come from and that the link is live | [Shopify Domains](https://mobbin.com/screens/30c2de43-541c-4658-b974-8246e80c67e6) ("Connected"), [Shopify Manage Bill Pay](https://mobbin.com/screens/22ceaba3-2208-48c1-9feb-afc59fac187c) ("Sync happens in real-time automatically from…") |
| "Send a test order", the page's one blue button | Fires a pretend checkout so Seye can watch an order arrive | [Stripe Event destinations](https://mobbin.com/screens/ef9361b6-b201-4fb7-9a7e-3beaed27117b) ("simulate Stripe events") |
| "To review" list, one button per row | Waiting orders (needs a batch, same customer?), weights, missing WhatsApp numbers, payment mismatches | [QuickBooks Bank transactions](https://mobbin.com/screens/57f6fcb6-ee5e-4598-b0be-603e31ff9b6d) ("Pending", Match and Categorise per row), [YNAB](https://mobbin.com/screens/3a34e509-965a-44cc-97cf-12ebd76adf78) ("30 new transactions to approve or categorize"), [Deel Action required](https://mobbin.com/screens/b6d82ee0-8694-4f55-a1d5-9f0964c8b13c) |
| "Orders from Shopify" table with "Matched by phone", "New customer" | Shows how each order was matched | [Mercury Transactions](https://mobbin.com/screens/b5b9a184-bd88-48e7-ba5a-f3f151278cc2) ("Each transaction shows if it was set automatically, by a rule, or by you") |
| Order drawer, "What PreorderDesk did" | Received, customer, products, batch, payment, added, each with a check or an amber alert | [incident.io workflow run](https://mobbin.com/screens/30db1df5-f778-44ad-8d87-8419e07c262d) ("Steps", "Succeeded"), [Gumloop Flow Run](https://mobbin.com/screens/1ddd873b-8113-4da3-9f53-2373318e9dd5) |
| "Same customer?" | Shopify's details beside PreorderDesk's; "Same person" or "Different people" | [Calendly Merge contacts](https://mobbin.com/screens/9b1906d3-3035-4a74-a7ff-c72606a8bde5) (two records side by side), [Klaviyo Merge profile](https://mobbin.com/screens/c140e960-f3d9-4a5a-a747-c9c0719a522d) ("if they represent the same person") |
| "Choose a batch" | Radio list of open batches | The delivery-method choice already in v3 (Zara, Fresha) |
| "Add weights" | One weight box per product, in a table | [Shopify variant table](https://mobbin.com/screens/f55bb8ee-e905-422d-aa3b-92f0492e0121) (editable cells), [Shopify bulk editor](https://mobbin.com/screens/dd9d269b-51c0-4c4a-a015-64f8be20c273) |
| "Import a Shopify export" | Numbered steps, a drop area, then a summary before anything is added | [Quo Upload a CSV file](https://mobbin.com/screens/a612f7f1-5229-4f1d-a2d2-625f5bee3636), [Sprig Upload CSV](https://mobbin.com/screens/1bad4df1-4b3a-4c2a-9423-9f1559a5891f), [Square Import customers](https://mobbin.com/screens/53f8ac0c-b1d5-46dc-b9c7-050dcb6a18cb), [Unify Review](https://mobbin.com/screens/1cf37020-4be4-47c3-a469-d1d32bdd202d) ("Up to 24 companies will be uploaded"), [Square import summary](https://mobbin.com/screens/a13e0b6c-1806-4f5c-a390-956c0fe93ad5) |
| A file that isn't a Shopify orders export | "Missing columns: …" under the drop area | [Buffer Import Your Posts](https://mobbin.com/screens/32d4f39d-b5cd-438a-96a7-cff322196c12) ("Invalid CSV file. Missing columns") |
| Phone: "Sales channels" row at the bottom of Home | The sidebar is hidden on phones, so Home links to the page | [Shopify iOS home](https://mobbin.com/screens/fc78e9ee-0629-4e84-a80d-89090a648363) (list rows with chevrons) |
| Activity list, side details | Timeline and facts columns already in v3 | Stripe payment page (linked above) |

**What changed elsewhere.**
- Orders from Shopify keep Shopify's order number, show ", Shopify" under the date, and have a Shopify section in Details with "How it came in".
- Shopify's order discount shows as its own line, so a 1% website discount doesn't leave a fake balance.
- Payments from Shopify are labelled "Paid at checkout" or "Marked as paid in Shopify" instead of "Deposit".
- Products from Shopify show "From Shopify". Their name, variant and price can't be edited here, and a missing weight shows as "Weight needed".
- The freight cost can't be added while any product in the batch has no weight.
- Handing over a Shopify order logs that it was marked fulfilled in Shopify without Shopify emailing the customer.
- Customers can have no WhatsApp number and no location ("Not added", "Location not given"), because staff-created Shopify orders sometimes have neither.

## v3: batches that arrive in parts

Added 8 November 2026, after Seye explained that a batch doesn't reach Lagos all at once: some items come earlier and some later. Checked with 7 more Mobbin searches. Receiving is now recorded one delivery at a time, each with its own date, and everything that depended on "the batch is received" now follows the items that actually arrived.

| Screen or part | What it does | References |
|---|---|---|
| "Receive items" modal | One delivery: "Received on" date, then each product with a checkbox for the whole line and one row per customer's item. Items from earlier deliveries show a check, their date and shelf. "Total received: 11 of 13 units" with a bar, and "Select everything still to come". The button names the count: "Receive 3 units" | [Shopify Receive items](https://mobbin.com/screens/df6cdd24-2698-4c65-969c-48ca3ce84d6b) ("Total received: 0 of 3", a bar and "0 of 1" per line, "Accept all unreceived"), [Shopify Receive items, filled](https://mobbin.com/screens/b915690a-ee46-428e-ad13-35ef4e5e0614), [Shopify split fulfillment](https://mobbin.com/screens/3c4c94c7-f7c3-45e1-b71d-f4a435fa1876) (a checkbox per line, "10 items selected"), [Fresha Receive order](https://mobbin.com/screens/a105efa0-23b4-45ec-88ce-13f550f7d8a7) (Ordered and Received columns) |
| Spare stock in that modal | A number field, "of 2" | [Shopify Scan to pick](https://mobbin.com/screens/1a4a7eea-9799-48c4-a4eb-9163a303a7ad) (number field, "of 1"), Fresha Receive order (linked above) |
| "The rest expected" date | Shown only while something is still to come. It becomes the batch's expected date | [Shopify purchase order](https://mobbin.com/screens/780af3a7-0da7-4068-b1ef-c15eabc68cda) ("Estimated arrival" under Shipment details), Fresha Receive order ("Expected by") |
| "Partially received" status | A blue pill, because the batch is still moving. Batches list "Received 10 of 13" with "2 deliveries so far"; the sidebar line reads "10 of 13 received" | [Fresha Stock orders](https://mobbin.com/screens/5bece7f0-e162-409f-807f-23e6bd864177) ("Partial" status), [Fresha Stock order partially received](https://mobbin.com/screens/6a574229-5489-4acb-a218-4c1767824222) ("You have received part of the stock order"), [Shopify Transfers](https://mobbin.com/screens/79d41cc7-0344-471a-be0b-016cffecb047) ("Received 0 of 14") |
| Batch page progress | "Total received: 10 of 13 units" with a bar above the products table, and a bar with "1 of 2" in each product's Received column | [Shopify purchase order, ordered](https://mobbin.com/screens/780af3a7-0da7-4068-b1ef-c15eabc68cda) and [received](https://mobbin.com/screens/44aa57ce-d57f-495e-aaef-f62748691266) ("Total received: 3 of 3", a bar per product) |
| Batch page "Deliveries" | "Still to come (3), expected 14 Nov" first, then one group per delivery, newest first: "Received (4), Delivery 2, 6 Nov 2026", listing each item with its customer and shelf, plus spare stock | [Shopify iOS order](https://mobbin.com/screens/991b6801-791b-4f43-b0e1-ce5e79fddb30) ("Fulfilled (2)" card with its own date and items), [Shopify order split into separate item groups](https://mobbin.com/screens/eafc89b4-30e4-4691-83ee-7da7150a2ac0), [H&M Package 1](https://mobbin.com/screens/937562b2-1901-483a-96f4-653b7d340aad) |
| Customer's order page | Each item says "In Lagos since 6 Nov" or "Expected 17 Nov" when an order is split. Updates name what arrived on each date. An order still waiting in a partly received batch reads "Part of this shipment has already reached Lagos. Your order is coming in a later delivery" | [H&M Package 1](https://mobbin.com/screens/937562b2-1901-483a-96f4-653b7d340aad) (each package with its own estimated delivery); the headline and Updates list already in v3 (lululemon, Shop app, linked below) |
| Messages after a delivery | The existing "Review messages" pager, sent to customers whose items arrived. Each message says what arrived and what's still to come, or gives the balance when everything is in | [Calendly Review bulk email](https://mobbin.com/screens/c4bd319b-6a11-40d1-b226-e58e5f7b8b1f), as for freight |

**What changed elsewhere.**
- An order's stage follows its own items, not its batch. An order whose items all arrived can get its final balance, a delivery method and be fulfilled while the rest of its batch is at sea. In the sample data, Ada's glass bowls came in delivery 1 of the June batch, and Funmi's cookware in delivery 2. Amaka's cookware is still to come.
- The freight cost can be added once the first delivery is in. It is still split across the whole batch by weight. The balance messages go only to customers whose items have arrived; the others hear when theirs arrive.
- Home and Batches count units still to come as "In transit", including spare stock. "Spare stock" counts only spare units that have arrived.
- To do: "Add freight cost for the June batch: 10 of 13 units arrived", and "Receive the rest of the June batch" a day before the rest is due.
- Order page: an item that has arrived reads "Arrived 6 Nov. Shelf B4"; one still to come reads "June batch, in a later delivery, expected 14 Nov".
- On phones, the batch products table drops Price and Weight so the Received bars stay on screen.
- Saved data from before this change is upgraded in place: a received batch becomes one delivery that brought everything. Reset shows the new June batch.

**Not covered:** an order line with a quantity above 1 is received whole. Receiving 1 of a customer's 2 units would need the line split in two, as Shopify splits a line when it fulfils part of it. None of the sample batches at sea has such a line.

## v3: still not backed by a direct reference

1. The duplicate-number warning with "Use Amaka". It's a common pattern, but I didn't find it on Mobbin.
2. The spare-units stepper in the batch editor. Fresha uses a quantity field; the stepper is my substitution.
3. Apple's system font and its blue (#0071E3). This is a look chosen for the Steve Jobs brief. Mercury's primary blue plays the same role.
4. In "Add weights", typing a weight copies it to the other variants of the same product. It saves typing for colour variants; I didn't find this exact behaviour.
5. Product fields that come from Shopify shown as disabled inputs with "Change it in Shopify". The idea of fields owned by another system is common; I didn't search for a screen of it.
6. In "Receive items", the customer rows nested under each product. Shopify receives per product and fulfils per order; the receive modal puts the two together because a preorder item belongs to a customer from the start. Each half has its reference above.
7. Hiding the Price and Weight columns of the batch products table on phones. It's a common responsive choice; I didn't search for a screen of it.

---

# v2 references (flows unchanged in v3)

## What happened to the v1 decisions

| v1 decision | Verdict | Evidence |
|---|---|---|
| Keynote-style intro ("Three things.") | Cut | No admin tool in the results opens with a splash. Uvodo and Salesforce use a setup checklist instead, which a demo with sample data doesn't need. |
| Top pill tabs (Today, Batches, Customers) | Changed to a left sidebar | [Shopify](https://mobbin.com/screens/168c2cfe-2399-4b47-ae3a-6a3df57970bd), [Etsy](https://mobbin.com/screens/d5e7a4c9-48fa-48e9-a6bd-4f34e48673ac), [Jobber](https://mobbin.com/screens/d02322ff-f5df-48c5-9455-bd730ad2c9ec), [Wix](https://mobbin.com/screens/859745d3-e88d-443d-a4cc-9829a0cc190f) and [Uvodo](https://mobbin.com/screens/3fbae25d-7998-4b9f-a6e5-f49f5e68170c) all use a sidebar. |
| Three giant sentences as the home headline | Changed to a greeting, metrics strip and To-do list | [Jobber](https://mobbin.com/screens/d02322ff-f5df-48c5-9455-bd730ad2c9ec) ("Good afternoon, Sam" + "To do"), [Etsy](https://mobbin.com/screens/d5e7a4c9-48fa-48e9-a6bd-4f34e48673ac) ("Top tasks" + Stats), [Shopify home](https://mobbin.com/screens/6d8dfdf6-e1ab-42be-bf96-491d3ecaf0be) (task chips "Fulfill orders 4") |
| Inline "It's in / Not yet" buttons on home tasks | Changed: rows link to the place where the work happens | Jobber and Etsy task rows are links, not inline forms. |
| Ship icon gliding along a line | Cut | Not found in any admin or tracking reference. Admin uses status badges and an "Expected arrival" column ([Shopify Transfers](https://mobbin.com/screens/79d41cc7-0344-471a-be0b-016cffecb047)). Customers get a labelled stepper (below). |
| Customer list with coloured sentence status ("Owes ₦12,900") | Changed to an orders table with Payment status and Fulfillment status badges | [Shopify orders](https://mobbin.com/screens/168c2cfe-2399-4b47-ae3a-6a3df57970bd), [Wix orders](https://mobbin.com/screens/859745d3-e88d-443d-a4cc-9829a0cc190f) |
| Order detail in a modal sheet | Changed to a full page with two columns and a timeline | [Shopify order](https://mobbin.com/screens/e7cd8f5e-1ffb-465d-a147-17ceea8c867f), [Shopify timeline](https://mobbin.com/screens/ff2a3672-d8ec-48fd-9453-c520ed701c6d), [Uvodo order](https://mobbin.com/screens/904a8367-18a9-4f2c-bb64-07b2f1e5a915) |
| 44px "big number" amount input | Changed to a standard field with a ₦ prefix | [HoneyBook Mark as paid](https://mobbin.com/screens/4a1b5a54-7cf4-4c16-88ae-ae508ade10c3), [Meetup payment form](https://mobbin.com/screens/efe5dd96-28f5-4367-afae-891119d94738) |
| Phone mock-up frame for the customer page | Cut | Shopify opens "View order status page" in a new tab. The preview bar copies [HoneyBook's client preview](https://mobbin.com/screens/7f56886f-9b0b-4e83-9c49-e095c810975d). |
| "Why it looks like this" sheet, Lately activity feed | Cut | No admin reference has either. History lives in each order's timeline (Shopify). |
| Status words like "Holding for the steam pot" | Changed to Shopify's vocabulary: Unpaid, Partially paid, Payment pending, Paid, Unfulfilled, On hold, Partially fulfilled, Fulfilled | [Shopify payment status filter](https://mobbin.com/screens/eb541396-80b3-4bf4-afd1-9bbf9f16d0e3); "On hold" and "released a manual hold" in the [Shopify timeline](https://mobbin.com/screens/ff2a3672-d8ec-48fd-9453-c520ed701c6d) |
| Dark mode | Cut | The admin references are light only. |

## Screen by screen

### Shell
- Left sidebar (Home, Orders with a count, Batches, Customers), a top search bar with ⌘K, and the store name with an avatar top right. References: [Shopify](https://mobbin.com/screens/168c2cfe-2399-4b47-ae3a-6a3df57970bd), [Jobber](https://mobbin.com/screens/d02322ff-f5df-48c5-9455-bd730ad2c9ec).
- Phone: floating bottom tab bar and orders as stacked rows ("#1002, Sam Lee • 5 items • 12:31 PM", total and badges). Reference: [Shopify iOS orders](https://mobbin.com/screens/ff016813-d7d7-4e02-b27d-4170390b6225).
- Toasts: dark, bottom centre, with a close button ("Marked as ordered"). Reference: [Shopify purchase order](https://mobbin.com/screens/4d6a46fc-c238-457d-ad79-58d4ee90282d).

### Home
- A date line plus "Good morning, Seye", then a metrics strip (Balance due, Ready to fulfill, On hold, In transit). Each metric links to the filtered list. References: [Jobber](https://mobbin.com/screens/d02322ff-f5df-48c5-9455-bd730ad2c9ec), [Etsy Stats](https://mobbin.com/screens/d5e7a4c9-48fa-48e9-a6bd-4f34e48673ac), [Shopify orders metrics bar](https://mobbin.com/screens/168c2cfe-2399-4b47-ae3a-6a3df57970bd).
- "To do" card: icon, title, one line of detail, chevron. Reference: [Jobber](https://mobbin.com/screens/d02322ff-f5df-48c5-9455-bd730ad2c9ec).
- Empty state: "Nice! There's nothing you need to do right now." Reference: [Etsy Shop advisor](https://mobbin.com/screens/d5e7a4c9-48fa-48e9-a6bd-4f34e48673ac).

### Orders
- Status tabs with counts, then a search field, then a table with Payment status and Fulfillment status badges, Items, Delivery method and Batch. References: [Shopify orders](https://mobbin.com/screens/ed22dc70-0f9f-468f-9aa9-3e3dc43cc7c0), [Xero tabs with counts](https://mobbin.com/screens/faf352c0-6e0c-4bcd-8d48-afd5393107b1).
- Not copied: bulk-select checkboxes, because the prototype has no bulk actions.

### Order page
- Header: back arrow, "#1043" with both badges, date and channel, "More actions" menu (View order status page, Copy order status link). Reference: [Shopify order](https://mobbin.com/screens/e7cd8f5e-1ffb-465d-a147-17ceea8c867f).
- Items grouped into cards by fulfillment state: Unfulfilled (with "Mark as fulfilled" or "Mark as picked up"), On hold (with the reasons), Fulfilled. Same reference.
- Payment card: Subtotal, Shipping, Delivery, Total, Paid by customer, Balance. Then a payments table with deposit and balance rows. References: [Shopify payment card](https://mobbin.com/screens/f75c183f-66e8-4fd2-b692-a3411e95b4f1), [HoneyBook payment schedule](https://mobbin.com/screens/4a1b5a54-7cf4-4c16-88ae-ae508ade10c3) ("1 of 2 payments made").
- Side cards: Customer, Delivery method, Batch, Sales channel. Reference: [Shopify order](https://mobbin.com/screens/f75c183f-66e8-4fd2-b692-a3411e95b4f1).
- Timeline with a staff comment box ("Only you and other staff can see comments"). Reference: [Shopify timeline](https://mobbin.com/screens/ff2a3672-d8ec-48fd-9453-c520ed701c6d).
- A banner for transfers a customer says they've sent, with "Confirm payment" and "Not received". The callout format follows [Salesforce Commerce](https://mobbin.com/screens/71cb4514-c0f0-4030-94c8-0a4d49d7cbdb) and [Wix](https://mobbin.com/screens/859745d3-e88d-443d-a4cc-9829a0cc190f). Confirming opens Mark as paid prefilled with the transfer, like [Mercury's transaction match](https://mobbin.com/screens/7c32cb29-6f28-4d47-8ee8-9bdd84a26beb).

### Modals
All modals use one format: title bar with close, body, then Cancel and a primary button that names the action. Reference: [Shopify void label](https://mobbin.com/screens/f1d0e0ac-666a-4f11-8575-deff6c2e42a6).
- Mark as paid: payment method as a segmented choice, amount, date, reference, and a "Mark as paid: ₦X" button. References: [HoneyBook](https://mobbin.com/screens/4a1b5a54-7cf4-4c16-88ae-ae508ade10c3), [Mercury](https://mobbin.com/screens/7c32cb29-6f28-4d47-8ee8-9bdd84a26beb).
- Mark as fulfilled: items with "1 of 1", tracking number, carrier, "Send a notification to the customer". References: [Shopify web](https://mobbin.com/screens/f75c183f-66e8-4fd2-b692-a3411e95b4f1), [Shopify iOS](https://mobbin.com/screens/ea6cee27-c7c6-4d15-8b65-a67b801989e1).
- Payment reminder: To, editable message, Send. Reference: [incident.io Send reminders](https://mobbin.com/screens/b65e5720-c0ce-4c67-ad61-e5f507e72d35).
- Review messages after adding a freight cost: one message at a time with "1 of 5" paging and "Send 5 messages". Reference: [Calendly Review bulk email](https://mobbin.com/screens/c4bd319b-6a11-40d1-b226-e58e5f7b8b1f).
- Release hold: a confirmation with a required checkbox. Holds and releases exist in the [Shopify timeline](https://mobbin.com/screens/ff2a3672-d8ec-48fd-9453-c520ed701c6d); the modal layout follows Shopify's confirmation modals.
- Delivery method: selectable option cards with prices, then Save. References: [Zara](https://mobbin.com/screens/81419565-80cd-4916-b792-cc49e708e9d7), [Fresha](https://mobbin.com/screens/651040bc-4d00-42b3-87db-0f98f5e42129).

### Batches
- List: Batch, Origin, Destination, Status, Orders, "Received 0 of 14", Expected arrival, Freight cost, with a metrics strip above. References: [Shopify Transfers](https://mobbin.com/screens/79d41cc7-0344-471a-be0b-016cffecb047), [Xero purchase orders](https://mobbin.com/screens/faf352c0-6e0c-4bcd-8d48-afd5393107b1).
- Batch page: name with a status badge (Open, In transit, Received, Closed), an "origin → destination" products table, Cost summary and details cards, and a timeline. One primary action for the current step: Mark as in transit, Receive items, Add freight cost or Fulfill orders. Reference: [Shopify purchase order](https://mobbin.com/screens/4d6a46fc-c238-457d-ad79-58d4ee90282d) (with its "Marked as ordered" toast).

### Create order
- Products card with Browse (a product picker with checkboxes and "Add to order"), quantity fields and remove buttons. Payment card with "Send payment link" and "Mark deposit as paid". Side cards: Customer ("Search or create a customer"), Sales channel, Batch. References: [Shopify create order](https://mobbin.com/screens/e5109465-9d39-4fb9-9455-ad720dad78a1), [Shopify Add products](https://mobbin.com/screens/e51e53fc-48f4-4098-9854-17be91bb2a91).

### Customers
- Table: name, location, phone, orders, amount paid, balance due. The rows follow the orders table pattern above. I didn't search for a Shopify Customers screen separately.

### Customer order status page (opens in a new tab)
- Preview bar: "You're previewing this as the customer. Nothing is sent. Exit preview". Reference: [HoneyBook client preview](https://mobbin.com/screens/7f56886f-9b0b-4e83-9c49-e095c810975d).
- Order number, a status headline and a one-line explanation. References: [lululemon](https://mobbin.com/screens/85c6204e-9c9e-433c-bcf8-281e6c11ccff) ("We're processing your order"), [talabat](https://mobbin.com/screens/16d8feef-1ce6-41cd-8e5e-5b3f7e1650fa).
- Five-step stepper with dates: Ordered, Shipped, Arrived in Lagos, Ready, Delivered. References: [Blue Apron](https://mobbin.com/screens/27b81a1c-c5ff-4ec1-ac5b-b6770c87c3dc), [Zara web](https://mobbin.com/screens/63466732-a1d1-44ce-ae1a-e8e073cfbc43), [Zara iOS](https://mobbin.com/screens/1ed84f7e-cd52-4e20-9e67-a0e8d847b4e7), [H&M](https://mobbin.com/screens/937562b2-1901-483a-96f4-653b7d340aad).
- Delivery method: option cards then Continue. Once chosen, a summary with a Change link. References: [Zara](https://mobbin.com/screens/81419565-80cd-4916-b792-cc49e708e9d7), [Fresha](https://mobbin.com/screens/651040bc-4d00-42b3-87db-0f98f5e42129), [talabat](https://mobbin.com/screens/16d8feef-1ce6-41cd-8e5e-5b3f7e1650fa) ("Delivering to … Change").
- Balance due: amount, when it's due, a full-width Pay button. References: [Square payment request](https://mobbin.com/screens/830087fe-1ffe-40bf-b406-f277e8c12e0e) ("has requested a payment of $145.00. Deposit due"), [Midday Pay invoice](https://mobbin.com/screens/328c47b5-51d9-4e71-ac3a-ee46f4c65304).
- Payment success: green check circle, "Payment successful", amount, Done. References: [Starling](https://mobbin.com/screens/e217cef6-f238-438b-af3c-f2547ef55fb4), [Cash App](https://mobbin.com/screens/e72c939a-8ea6-43b8-bcc2-abef1e0af3aa).
- Order summary card, then an Updates timeline. References: [Shop app Delivery progress](https://mobbin.com/screens/589ece7d-b2d6-4ce5-8cd4-3c0766abbd51), [Fiverr](https://mobbin.com/screens/72155a0d-9755-4ca3-b94c-9765fd88b4e0).

## Still not backed by a direct reference

These follow the closest references, but I didn't find a Mobbin screen of the exact thing:

1. **Freight cost split by weight with a per-customer preview table.** It's a standard Shopify-style form modal, but the preview table is specific to preorder businesses. Shopify purchase orders have cost adjustments; I didn't see that screen.
2. **Hold reason wording** ("Waiting for items", "Freight cost not added", "Delivery method not chosen", "Awaiting payment"). Shopify has fulfillment holds with reasons, but no Mobbin screen showed the reason list.
3. **Paystack checkout.** It's simulated inside a modal. The real thing would hand over to Paystack's hosted page.
4. **Product thumbnails** are placeholder line icons because the demo has no product photos. Shopify shows real images.
5. **"Received 0 of 14" on purchase orders.** Seen on Shopify Transfers, not on a purchase order screen.
