/**
 * The Stories — Script Vanilla JS
 * Alternador Claro/Escuro (Sol/Lua), Menu Hambúrguer Mobile e Modal de Leitura
 */

(function initTheme() {
  try {
    var savedTheme = localStorage.getItem('thestories_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {}
})();

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  try {
    localStorage.setItem('thestories_theme', newTheme);
  } catch (e) {}
}

function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var btn = document.getElementById('hamburgerBtn');
  var isOpen = document.body.classList.contains('menu-open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var btn = document.getElementById('hamburgerBtn');
  if (menu) menu.classList.add('active');
  if (btn) btn.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

function closeMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var btn = document.getElementById('hamburgerBtn');
  if (menu) menu.classList.remove('active');
  if (btn) btn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function openStoryModal() {
  closeMobileMenu();
  var modal = document.getElementById('storyModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeStoryModal() {
  var modal = document.getElementById('storyModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeModalAndScroll() {
  closeStoryModal();
  var form = document.getElementById('formulario');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth' });
    var emailInput = form.querySelector('input[type="email"]');
    if (emailInput) {
      setTimeout(function() {
        emailInput.focus();
      }, 400);
    }
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.keyCode === 27) {
    closeStoryModal();
    closeMobileMenu();
  }
});

document.addEventListener('click', function(e) {
  var header = document.querySelector('header');
  if (header && !header.contains(e.target) && document.body.classList.contains('menu-open')) {
    closeMobileMenu();
  }
});
