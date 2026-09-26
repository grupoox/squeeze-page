/**
 * The Stories — Script Vanilla JS
 * Alternador Claro/Escuro (Sol/Lua), Menu Hambúrguer Mobile e Modal de Leitura
 */

// Inicialização imediata do tema salvo no localStorage ou preferência do sistema
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
  } catch (e) {
    // Ignora restrições de sandbox de iframe/localStorage
  }
})();

// Função para alternar o tema entre Claro e Escuro
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  try {
    localStorage.setItem('thestories_theme', newTheme);
  } catch (e) {}
}

// Menu Hambúrguer Mobile
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

// Abrir o Modal de Leitura da Crônica
function openStoryModal() {
  closeMobileMenu();
  var modal = document.getElementById('storyModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Fechar o Modal de Leitura
function closeStoryModal() {
  var modal = document.getElementById('storyModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Rolar suavemente até o formulário após ler no modal
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

// Fechar modal ou menu mobile ao pressionar a tecla ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.keyCode === 27) {
    closeStoryModal();
    closeMobileMenu();
  }
});

// Fechar o menu mobile caso clique fora do cabeçalho
document.addEventListener('click', function(e) {
  var header = document.querySelector('header');
  if (header && !header.contains(e.target) && document.body.classList.contains('menu-open')) {
    closeMobileMenu();
  }
});
