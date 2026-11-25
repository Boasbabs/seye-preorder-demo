# Testing the import scenario in the prototype

The scenario from section 23 of the tech proposal: 40 orders for products from five suppliers, three paid direct in yuan and two through an agent, two shipments with one cookware order split across them, and one shipment arriving 2 dispensers short.

Everything happens "today" in the prototype, so dates won't match the proposal's. The numbers will. Nothing is sent, and no money moves.

## Before you start

1. Open the prototype at https://preorderdesk.getmayloo.com/app/, or run it on your own computer with the command at the end of this file.
2. At the bottom of the sidebar, click **Load scenario**, then **Load scenario** again. This replaces the demo data in this browser. **Reset** brings the usual sample back afterwards.

You land on the **Buy list**: "60 units for 40 orders, from 5 suppliers". The batch shows as **Orders closed**.

## 1. Buy from five suppliers

Raise the purchase orders in this order, so their numbers match the proposal. For each supplier section, click **Raise purchase order**, check the modal, then click **Mark as ordered**. Spare units and prices are filled in for you.

| Supplier section | Becomes | Expect in the modal |
|---|---|---|
| Yongkang cookware factory | PO-1001 | 10 for customers, 2 spare, ¥340 each. Total ¥4,080 |
| Yiwu glassware shop | PO-1002 | 16 + 4 spare, ¥98. Total ¥1,960 |
| Foshan appliance factory | PO-1003 | 7 + 1 spare, ¥175. Total ¥1,400 |
| Guangzhou saucepan factory | PO-1004 | 18 + 12 spare, ¥165. Total ¥4,950 |
| Chaozhou steelware factory | PO-1005 | 9 + 1 spare, ¥68. Total ¥680 |

**Check:** the Buy list says "Nothing to buy". **Purchase orders** shows "To pay suppliers ¥13,070" and five orders marked Ordered and Unpaid. On PO-1001, **Customers** lists the 10 cookware orders, each "PO-1001, with the supplier".

## 2. Pay three suppliers direct and two through the agent

On **Purchase orders**, click **Record payment** five times:

| # | How was it paid? | Tick, and the ¥ amount | You paid | Expect |
|---|---|---|---|---|
| a | Direct | PO-1001, change the amount to **1224** | 263160 | Rate ₦215.00 per ¥1 |
| b | Direct | PO-1002, ¥1,960 | **421400** | Rate ₦215.00 |
| c | Through an agent | PO-1004 (¥4,950) and PO-1005 (¥680) | **1254860**, agent's fee **5000** | Suppliers received ¥5,630. Rate ₦222.89, "including the ₦5,000 fee" |
| d | Direct | PO-1001, ¥2,856 (filled in) | **622608** | Rate ₦218.00 |
| e | Direct | PO-1003, ¥1,400 | **302400** | Rate ₦216.00 |

**Check:**
- "To pay suppliers ¥0" and "Paid so far ₦2,864,428". The **Supplier payments** table lists all five.
- PO-1001's cost summary shows the rate as ₦217.10 "From what you paid", and its two payments.
- PO-1004 shows ₦1,103,296 for its part of the agent payment, and PO-1005 shows ₦151,564.

## 3. The forwarder combines everything into two shipments

1. Go to **Shipments**, then **New shipment**. Forwarder: Lagos cargo agent. By: Sea. Enter **8** for PO-1001's cookware (of 12), and click **Add all** for PO-1002 and PO-1004. Leave PO-1003 and PO-1005 at 0. Click **Create shipment**.
   - **Check:** SH-101 is **Collecting**, with 58 units and 322 kg. **Customers on this shipment** has the 8 oldest cookware orders (#1111 to #1132), plus every bowl and saucepan customer.
2. Click **Mark as departed** and keep the dates. A review of 31 messages opens. **Don't send** is fine.
3. Back on **Shipments**, click **New shipment** again. The 4 cookware sets left on PO-1001 are the supplier that took two weeks. Enter **4** for PO-1001, then **Add all** for PO-1003 and PO-1005. Click **Create shipment**, then **Mark as departed**.
   - **Check:** SH-102 has 22 units and 194 kg. Its customers include #1135 Kemi Adewale and #1139 Onyinye Agu for cookware.
4. Open order **#1135** (Kemi Adewale). Under **Bought and shipped**, her bowls are on SH-101 and her cookware is on SH-102, with one order split across two shipments.

## 4. SH-101 arrives whole

1. On **SH-101**, click **Receive**. Every line is filled in. Under each count, a line says who it covers, for example "For #1101 Adaeze Okoro, … and 13 more, plus 4 spare". Click **Receive 58 units**, then **Don't send**.
2. Click **Add shipment cost**. What for: Freight and clearing. You paid: **933800**. The line above the table reads "₦933,800 across 322 kg on board, spare stock included: ₦2,900 per kg". Save.

**Check:**
- Order **#1101**: shipping ₦26,100, which is ₦8,700 for the saucepan (3 kg) plus ₦17,400 for the bowls (6 kg).
- **Inventory**: glass bowls 16 for customers and 4 spare, saucepans 18 and 12, cookware 8 and 0, with 4 on the way.
- Kemi's order page (#1135, **View** under "Customer’s order page") says "Part of your order has arrived".

## 5. SH-102 arrives 2 dispensers short

1. On **SH-102**, click **Receive**. Change the dispenser count from 8 to **6**. Its line reads "For #1120 Uche Madu, #1123 Yetunde Bello, #1127 Chuka Okafor and 3 more". Cookware reads "For #1135 Kemi Adewale, #1139 Onyinye Agu, plus 2 spare". Click **Receive 20 units**, then **Don't send**.
2. Click **Add shipment cost**: Freight and clearing, **562600**, which comes to ₦2,900 per kg again. Save.
3. Open the **•••** menu and choose **Record a shortage**. The dispenser shows 2 of 2. Reason: Lost in transit or at the port. Claim from: Forwarder. Before you save, the modal says:
   - "1 spare unit covers it in part. #1140 Temi Adebayo loses their unit and goes back on the buy list."
   - "The claim is worth about ₦139,400".

   Click **Record 2 units short**.

## 6. What you should see at the end

| Where | What |
|---|---|
| Home, To do | "Temi Adebayo’s hot and cold dispenser didn’t arrive". Home shows 78 units in the warehouse and 0 in transit |
| Buy list | 1 dispenser under Foshan appliance factory, "#1140 didn’t arrive on SH-102" |
| November batch | Partially received, "Total received: 78 of 79 units". Spare stock: cookware 2, bowls 4, saucepans 12, steam pot 1 |
| Inventory | 59 units for customers and 19 spare. Dispensers: 6 for customers, 0 spare |
| SH-102 | Received, 20 of 22, 2 short. Under Shortages: "Claim from the forwarder, worth about ₦139,400. Open" |
| PO-1002, Landed cost and margin | Goods ₦21,070, freight ₦17,400, landed ₦38,470, margin ₦17,930. If shipping were in the price, ₦530 |
| PO-1004, Landed cost and margin | Goods ₦36,777, freight ₦8,700, landed ₦45,477 |
| Order #1140 | On hold: "Waiting for items: Hot and cold dispenser (didn’t arrive on SH-102. Back on the buy list)" |
| #1140's customer page | "Your order has been delayed. We’ll message you on WhatsApp about it." No shipment or supplier names |
| Kemi's page, #1135 | "Your order has arrived in Lagos", shipping ₦58,000 (₦17,400 bowls + ₦40,600 cookware) |

## Optional: the claim and the lost cartons

- On SH-102, click **Update** on the shortage. Choose **Recovered**, enter an amount and save. The shortage shows "Recovered ₦…".
- Or click **Units turned up** instead. Temi's dispenser is expected on SH-102 again. Receive the last 2: one goes to #1140 and one becomes spare, and the batch becomes Received.
- To reorder Temi's dispenser instead, use **Raise purchase order** on the Buy list. The new order holds her unit first.

## Running it on your own computer

From the `v3` folder of the repository, run this, then open http://localhost:4317/app/:

```bash
python3 -m http.server 4317 --bind 127.0.0.1
```

Use **Reset** in the sidebar when you're done, to get the usual sample data back.
