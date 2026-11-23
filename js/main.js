/* ===== Configuração — edite aqui ===== */
const CONFIG = {
  whatsappNumber: '5521985126130', // DDI + DDD + número, só dígitos
  whatsappMessage: 'Olá, Dr. Bruno! Encontrei seu contato pelo site e gostaria de obter mais informações sobre o atendimento e a possibilidade de agendar uma consulta.',
  mapsEmbedUrl: ''                  // cole aqui o "src" do iframe do Google Maps
};

document.addEventListener('DOMContentLoaded', () => {
  // Todos os botões/links com a classe .js-whatsapp apontam para o WhatsApp
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  document.querySelectorAll('.js-whatsapp').forEach(el => { el.href = waUrl; });

  // Mapa
  const frame = document.querySelector('.map-box iframe');
  if (frame && CONFIG.mapsEmbedUrl) frame.src = CONFIG.mapsEmbedUrl;

  // Ano do copyright
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Fecha o menu mobile ao clicar em um link
  const menu = document.getElementById('menu');
  document.querySelectorAll('#menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  // Destaca o item do menu da seção visível
  const links = [...document.querySelectorAll('#menu .nav-link')];
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id], footer[id]').forEach(s => obs.observe(s));
});
