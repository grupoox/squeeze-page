/**
 * The Stories — Script Vanilla JS
 * Alternador Claro/Escuro (Sol/Lua), Leitor Modal e Redirecionamento
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

// Abrir o Modal de Leitura da Crônica
function openStoryModal() {
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

// Fechar o modal ao pressionar a tecla ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.keyCode === 27) {
    closeStoryModal();
  }
});
