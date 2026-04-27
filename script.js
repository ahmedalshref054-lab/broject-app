const services = [
    { name: "الإسعاف", number: "123" },
    { name: "الشرطة", number: "122" },
    { name: "المطافئ", number: "180" },
    { name: "طوارئ الغاز", number: "129" },
    { name: "طوارئ الكهرباء", number: "121" },
    { name: "نجدة الطفل", number: "16000" }
];

const grid = document.getElementById('services-grid');

services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${service.name}</h2>
        <p>${service.number}</p>
        <a href="tel:${service.number}" class="btn-call">اتصل الآن</a>
    `;
    grid.appendChild(card);
});