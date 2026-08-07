// RK Online Store.lk — shared behaviour

const WA_NUMBER = "94756789046";

// Mobile drawer
function openDrawer(){
  const d = document.getElementById('mobileDrawer');
  if(d) d.classList.add('open');
}
function closeDrawer(){
  const d = document.getElementById('mobileDrawer');
  if(d) d.classList.remove('open');
}

// Contact / quick-order form -> WhatsApp
function sendToWhatsApp(e){
  e.preventDefault();
  const nameEl = document.getElementById('name');
  const msgEl = document.getElementById('msg');
  const name = nameEl ? nameEl.value : '';
  const msg = msgEl ? msgEl.value : '';
  const text = encodeURIComponent(`Hi RK Online Store! My name is ${name}. ${msg}`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  return false;
}

// Product quick-order button -> WhatsApp with product name prefilled
function orderProduct(productName){
  const text = encodeURIComponent(`Hi! I'm interested in "${productName}" from RK Online Store.lk. Is it available?`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
}

// FAQ accordion
function toggleAcc(el){
  const item = el.closest('.acc-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item.open').forEach(i => i.classList.remove('open'));
  if(!wasOpen) item.classList.add('open');
}

// Product category filter (shop page)
function filterProducts(cat, btn){
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    if(cat === 'all' || card.dataset.cat === cat){
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
