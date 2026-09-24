// Data array subjek untuk dinamis render
const cardList = [
  { id: 1, title: 'Subjek 1', category: 'workflows', icon: 'PDF', color: 'red' },
  { id: 2, title: 'Subjek 2', category: 'organize', icon: 'PDF', color: 'red' },
  { id: 3, title: 'Subjek 3', category: 'optimize', icon: 'X', color: 'green' },
  { id: 4, title: 'Subjek 4', category: 'convert', icon: 'W', color: 'blue' },
  { id: 5, title: 'Subjek 5', category: 'edit', icon: 'P', color: 'orange' },
  { id: 6, title: 'Subjek 6', category: 'security', icon: 'X', color: 'green' },
  { id: 7, title: 'Subjek 7', category: 'intelligence', icon: 'W', color: 'blue' },
  { id: 8, title: 'Subjek 8', category: 'workflows', icon: 'P', color: 'orange' },
  { id: 9, title: 'Subjek 9', category: 'organize', icon: 'X', color: 'green' },
  { id: 10, title: 'Subjek 10', category: 'optimize', icon: 'EDIT', color: 'purple' },
  { id: 11, title: 'Subjek 11', category: 'convert', icon: 'PDF', color: 'red' },
  { id: 12, title: 'Subjek 12', category: 'edit', icon: 'PDF', color: 'red' },
  { id: 13, title: 'Subjek 13', category: 'security', icon: 'W', color: 'blue' },
  { id: 14, title: 'Subjek 14', category: 'intelligence', icon: 'P', color: 'orange' },
  { id: 15, title: 'Subjek 15', category: 'workflows', icon: 'X', color: 'green' },
  { id: 16, title: 'Subjek 16', category: 'organize', icon: 'PDF', color: 'red' },
  { id: 17, title: 'Subjek 17', category: 'optimize', icon: 'W', color: 'blue' },
  { id: 18, title: 'Subjek 18', category: 'convert', icon: 'P', color: 'orange' },
  { id: 19, title: 'Subjek 19', category: 'edit', icon: 'X', color: 'green' },
  { id: 20, title: 'Subjek 20', category: 'security', icon: 'EDIT', color: 'purple' }
];

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('gridCards');

  // Render card ke DOM
  if (gridContainer) {
    cardList.forEach(item => {
      const cardEl = document.createElement('div');
      cardEl.className = 'card action-btn';
      cardEl.setAttribute('data-category', item.category);

      cardEl.innerHTML = `
        <div class="card-icon ${item.color}">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>Penjelasan singkat mengenai fungsi atau fitur dari subjek ${item.id}.</p>
      `;

      gridContainer.appendChild(cardEl);
    });
  }

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navLinks');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Filter listener
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active')?.classList.remove('active');
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');
      const cards = document.querySelectorAll('.card');

      cards.forEach(c => {
        const cardCat = c.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          c.classList.remove('hide');
          c.classList.add('show');
        } else {
          c.classList.remove('show');
          c.classList.add('hide');
        }
      });
    });
  });

  // Event listener popup universal
  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-btn')) {
      alert('Sorry, nothing here yet!');
    }
  });
});