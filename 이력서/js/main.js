// ===================== 다크모드 =====================
const rootEl = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

// <head>의 인라인 스크립트가 FOUC 방지를 위해 이미 <html>에 'dark' 클래스를 설정해둔 상태.
// 여기서는 그 결과에 맞춰 아이콘만 동기화하고, 토글 클릭 시 상태를 전환/저장한다.
function applyTheme(theme) {
  rootEl.classList.toggle('dark', theme === 'dark');
  iconSun.classList.toggle('hidden', theme !== 'dark');
  iconMoon.classList.toggle('hidden', theme === 'dark');
}

let currentTheme = rootEl.classList.contains('dark') ? 'dark' : 'light';
applyTheme(currentTheme);

themeToggleBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
});

// ===================== 모바일 메뉴 토글 =====================
const menuToggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenuOpen = document.getElementById('icon-menu-open');
const iconMenuClose = document.getElementById('icon-menu-close');

function setMobileMenuOpen(isOpen) {
  mobileMenu.classList.toggle('hidden', !isOpen);
  iconMenuOpen.classList.toggle('hidden', isOpen);
  iconMenuClose.classList.toggle('hidden', !isOpen);
  menuToggleBtn.setAttribute('aria-expanded', String(isOpen));
}

menuToggleBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  setMobileMenuOpen(!isOpen);
});

// 모바일 메뉴에서 링크 클릭 시 메뉴 자동 닫기
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileMenuOpen(false));
});

// ===================== 스크롤 등장 애니메이션 =====================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ===================== 맨 위로 이동 버튼 =====================
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('hidden', window.scrollY < 400);
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
