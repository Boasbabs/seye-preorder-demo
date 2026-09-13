(function (root) {
  'use strict';
  const clone = value => JSON.parse(JSON.stringify(value));
  const businesses = { import: 'Seye Importation', fashion: 'Seye Fashion', kitchen: 'Seye Kitchen' };
  const products = [
    { id: 'CI-07', name: '7-piece cast iron cookware', variant: 'Olive green', business: 'import', shape: 'pot', color: '#93a98f', stock: 18, reserved: 8, incoming: 24 },
    { id: 'GB-12', name: 'Borosilicate glass bowls', variant: '12-piece set', business: 'import', shape: 'bowl', color: '#aabfcc', stock: 36, reserved: 14, incoming: 48 },
    { id: 'FA-21', name: 'Satin slingback heels', variant: 'Champagne · EU 39', business: 'fashion', shape: 'shoe', color: '#c6ab8a', stock: 12, reserved: 5, incoming: 20 },
    { id: 'KB-04', name: 'Seye everyday saucepan', variant: 'Sand · 24 cm', business: 'kitchen', shape: 'pot', color: '#d8c6aa', stock: 24, reserved: 9, incoming: 60 },
    { id: 'FA-08', name: 'Everyday shoulder bag', variant: 'Cocoa', business: 'fashion', shape: 'bag', color: '#946f56', stock: 9, reserved: 3, incoming: 16 },
    { id: 'HD-02', name: 'Hot & cold dispenser', variant: 'White', business: 'import', shape: 'box', color: '#b4c5d5', stock: 8, reserved: 3, incoming: 12 }
  ];
  const batches = [
    { id: 'SHP-2606', name: 'June home collection', origin: 'Guangzhou', destination: 'Lagos', status: 'Arrived', date: '12 Sep 2026', depart: '18 Jun', arrive: '12 Sep', units: 14, extraUnits: 8, totalWeight: 120, extraWeight: 20, freight: 210000, clearance: 60000, finalized: false },
    { id: 'SHP-2607', name: 'July fashion edit', origin: 'Guangzhou', destination: 'Lagos', status: 'In transit', date: '28 Sep 2026', depart: '14 Jul', arrive: '28 Sep', units: 64, extraUnits: 12, totalWeight: 80, extraWeight: 15, freight: null, clearance: null, finalized: false },
    { id: 'SHP-2605', name: 'Kitchen essentials', origin: 'Ningbo', destination: 'Lagos', status: 'Received', date: '06 Sep 2026', depart: '08 Jun', arrive: '06 Sep', units: 92, extraUnits: 16, totalWeight: 200, extraWeight: 30, freight: 650000, clearance: 180000, finalized: true }
  ];
  const raw = [
    ['1048','Amaka Okafor','AO','Lagos · Lekki','CI-07','SHP-2606',130000,24,null,null,0,true],
    ['1047','Tolu Adeyemi','TA','Abuja · Wuse','GB-12','SHP-2606',39000,12,null,null,0,true],
    ['1046','Chinwe Eze','CE','Lagos · Ikeja','FA-21','SHP-2607',45000,5,null,null,0,false],
    ['1045','Damilola Balogun','DB','Lagos · Yaba','KB-04','SHP-2605',68000,16,38000,4500,0,true],
    ['1044','Zainab Bello','ZB','Abuja · Gwarinpa','KB-04','SHP-2605',68000,16,38000,7500,45500,true],
    ['1043','Nneka Obi','NO','Port Harcourt','HD-02','SHP-2606',65000,32,null,null,0,true],
    ['1042','Funmi Akinola','FA','Lagos · Surulere','CI-07','SHP-2606',130000,20,null,null,0,true],
    ['1041','Aisha Ibrahim','AI','Lagos · Victoria Island','FA-08','SHP-2607',52000,4,null,null,0,false],
    ['1040','Bisi Afolabi','BA','Ibadan · Bodija','KB-04','SHP-2605',68000,16,36000,6000,20000,true],
    ['1039','Ada Nwosu','AN','Lagos · Ajah','GB-12','SHP-2606',19500,12,null,null,0,true],
    ['1038','Kemi Salami','KS','Lagos · Gbagada','KB-04','SHP-2605',68000,16,36000,4500,40500,true],
    ['1037','Yewande Bakare','YB','Lagos · Ikoyi','KB-04','SHP-2605',68000,16,36000,5000,41000,true]
  ];
  function seed() {
    return { version: 1, orders: raw.map((a,i) => ({ id:a[0], name:a[1], initials:a[2], city:a[3], sku:a[4], batch:a[5], productPaid:a[6], weight:a[7], importFee:a[8], delivery:a[9], paid:a[10], received:a[11], business:products.find(p=>p.id===a[4]).business, quantity: a[0]==='1047'?2:1, invoiced:a[8]!==null, dispatched:i===11, otherHold:false, quoteExpired:false, quoteValidUntil:'2026-09-20', paymentReferences:[], history:[{text:'Product payment confirmed by Shopify',time:'18 Jun 2026'}] })), batches:clone(batches), products:clone(products), activity:[{text:'June home collection arrived in Lagos',detail:'SHP-2606 · Ready for cost review',time:'09:24',type:'ship'},{text:'Payment received from Zainab Bello',detail:'₦45,500 · Logistics invoice #1044',time:'09:12',type:'check'},{text:'Kitchen essentials received into inventory',detail:'SHP-2605 · Stock allocated to orders',time:'Yesterday',type:'box'}], lastSync:'Today at 09:30', syncs:0 };
  }
  const assessed = o => o.importFee !== null && o.delivery !== null;
  const total = o => (o.importFee||0)+(o.delivery||0);
  const balance = o => Math.max(0,total(o)-o.paid);
  const ready = o => assessed(o)&&o.invoiced&&balance(o)===0&&o.received&&!o.otherHold&&!o.quoteExpired&&!o.dispatched;
  function status(o) { if(o.dispatched)return 'Dispatched';if(ready(o))return 'Ready to dispatch';if(o.otherHold)return 'Review required';if(o.quoteExpired)return 'Quote expired';if(o.importFee===null)return 'Not assessed';if(o.delivery===null)return 'Delivery not quoted';if(!o.invoiced)return 'Draft invoice';if(balance(o)>0)return o.paid>0?'Partially paid':'Awaiting payment';return 'Awaiting stock'; }
  function mutateOrder(state,id,fn){const o=state.orders.find(o=>o.id===id);if(!o)throw Error('Order not found.');fn(o);return o;}
  function addHistory(o,text){o.history.push({text,time:'Just now'});}
  function allocate(state,batchId,freight,clearance) {
    const b=state.batches.find(b=>b.id===batchId);if(!b)throw Error('Shipment not found.');if(b.finalized)throw Error('This batch has already been assessed.');if(!['Arrived','Received'].includes(b.status))throw Error('Receive this shipment before assessing actual costs.');
    if(!Number.isFinite(freight)||!Number.isFinite(clearance)||freight<0||clearance<0)throw Error('Enter valid, non-negative actual costs.');
    const orders=state.orders.filter(o=>o.batch===batchId); const weight=orders.reduce((s,o)=>s+o.weight,0)+b.extraWeight; const sum=freight+clearance;
    orders.forEach(o=>{o.importFee=Math.round(sum*o.weight/weight);addHistory(o,'Actual import charges assessed for '+batchId);});
    b.freight=freight;b.clearance=clearance;b.finalized=true;b.businessAllocation=sum-orders.reduce((s,o)=>s+o.importFee,0);return b;
  }
  function invoice(state,id,delivery){return mutateOrder(state,id,o=>{if(o.importFee===null)throw Error('Assess the batch import costs first.');if(o.invoiced)throw Error('An invoice already exists for this order.');if(!Number.isFinite(delivery)||delivery<0)throw Error('Enter a valid delivery charge.');o.delivery=delivery;o.invoiced=true;addHistory(o,'Logistics invoice issued · '+total(o)+' NGN');});}
  function pay(state,id,amount,reference){return mutateOrder(state,id,o=>{if(!o.invoiced||!assessed(o))throw Error('Issue an invoice before recording a payment.');if(o.quoteExpired)throw Error('Refresh the expired delivery quote before collecting payment.');if(!Number.isFinite(amount)||amount<=0||amount>balance(o))throw Error('Payment must be greater than zero and no more than the balance.');if(!reference||state.orders.some(record=>record.paymentReferences.includes(reference)))throw Error('This payment reference has already been used.');o.paymentReferences.push(reference);o.paid+=amount;addHistory(o,'Demo payment verified · '+amount+' NGN');});}
  function dispatch(state,id){return mutateOrder(state,id,o=>{if(!ready(o))throw Error('Dispatch blocked: confirm stock and settle all assessed charges.');o.dispatched=true;const p=state.products.find(p=>p.id===o.sku);p.stock-=o.quantity;p.reserved-=o.quantity;addHistory(o,'Released and dispatched from Lagos warehouse');});}
  root.SeyeModel={seed,businesses,assessed,total,balance,ready,status,allocate,invoice,pay,dispatch};
  if(typeof module!=='undefined')module.exports=root.SeyeModel;
})(typeof window!=='undefined'?window:globalThis);
