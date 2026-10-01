// Сюда потом вставь username своего Telegram-бота без @
// Например: const BOT_USERNAME = "random_ivents_bot";
const BOT_USERNAME = "YOUR_BOT_USERNAME";

const events = [
  {title:"Garden Art Night",category:"art",date:"Пятница • 19:00",place:"Antalya Garden",price:"от 750₺",description:"Камерный арт-вечер: рисование, музыка, общение и лёгкая атмосфера для новых знакомств.",slug:"garden_art_night"},
  {title:"Flower Garden Day",category:"nature",date:"Суббота • 12:00",place:"Kemer",price:"от 1500₺",description:"Дневной выезд с красивой локацией, фото, прогулкой, пикником и лёгкой программой.",slug:"flower_garden_day"},
  {title:"Men's Fishing Day",category:"active",date:"Воскресенье • 08:00",place:"Antalya coast",price:"от 2000₺",description:"Мужской тематический день: рыбалка, море, отдых, общение и небольшой тур.",slug:"mens_fishing_day"},
  {title:"Open Mic Evening",category:"music",date:"Четверг • 20:00",place:"Coffee House",price:"от 500₺",description:"Вечер музыки, голоса, историй и открытого микрофона для тех, кто хочет выступить или послушать.",slug:"open_mic_evening"},
  {title:"Random Coffee Meet",category:"music",date:"Среда • 18:30",place:"Antalya cafe",price:"free / donation",description:"Неформальная встреча для новых знакомств, разговоров, идей и планов на будущие ивенты.",slug:"random_coffee_meet"},
  {title:"Sunset Walk & Photos",category:"nature",date:"Суббота • 17:30",place:"Konyaaltı",price:"от 400₺",description:"Прогулка на закате, красивые фото, лёгкое общение и маршрут по атмосферным местам.",slug:"sunset_walk_photos"}
];
const categoryLabels={art:"Арт",nature:"Природа",music:"Музыка",active:"Актив"};
const grid=document.getElementById("eventsGrid");const filters=document.querySelectorAll(".filter");const suggestBtn=document.getElementById("suggestBtn");const botContact=document.getElementById("botContact");
function botLink(slug){if(!BOT_USERNAME||BOT_USERNAME==="YOUR_BOT_USERNAME"){return "#contact";}return `https://t.me/${BOT_USERNAME}?start=${slug}`;}
function renderEvents(category="all"){const visible=category==="all"?events:events.filter(e=>e.category===category);grid.innerHTML=visible.map(e=>`<article class="event-card"><div class="event-cover ${e.category}"><span class="event-date">${e.date}</span></div><div class="event-body"><h3>${e.title}</h3><p>${e.description}</p><div class="event-meta"><span>📍 ${e.place}</span><span>💰 ${e.price}</span><span>🏷 ${categoryLabels[e.category]}</span></div><a class="btn" href="${botLink(e.slug)}" target="_blank" rel="noopener">Оставить заявку</a></div></article>`).join("");}
filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderEvents(btn.dataset.filter);}));
suggestBtn.href=botLink("suggest_event");
if(BOT_USERNAME&&BOT_USERNAME!=="YOUR_BOT_USERNAME"){botContact.href=`https://t.me/${BOT_USERNAME}`;botContact.textContent=`Telegram bot: @${BOT_USERNAME}`;}else{botContact.href="#contact";botContact.textContent="Демо: запись пока недоступна";}
renderEvents();
