//Modal Data
function langModal() {
  //const region = localStorage.getItem("reg") ?? 'NA';

  const container = document.getElementById('languageModalContent');
  container.innerHTML = '';

  const languages = [
    { code: 'en', label: 'English (EN)' },
    { code: 'es', label: 'Spanish (ES)' },
    { code: 'pt', label: 'Portugese (PT)' }
  ];

  const modal = document.createElement('div');
  modal.className = 'modal fade show';
  modal.setAttribute('tabindex', '-1');
  modal.id = 'myLang';
  modal.setAttribute('role', 'dialog');

  const dialog = document.createElement('div');
  dialog.className = 'modal-dialog';

  const content = document.createElement('div');
  content.className = 'modal-content lang-mdpop';

  languages.forEach(function(lang) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-default lng-button';
    btn.setAttribute('data-dismiss', 'modal');
    btn.addEventListener('click', function() { setLanguage(lang.code); });
    const span = document.createElement('span');
    span.className = 'lglg';
    span.textContent = lang.label;
    btn.appendChild(span);
    content.appendChild(btn);
  });

  dialog.appendChild(content);
  modal.appendChild(dialog);
  container.appendChild(modal);
/*
 console.log(document.getElementById('country_btn'));  // Check if null
 console.log(document.getElementById('languageModalContent'));  // Check if null
 console.log(document.getElementById('lang-mdpop'));  // Check if null
 */
 // New logic for applying styles based on screen size
  if (window.innerWidth <= 992) {
    // Set the height to 200px every time the dropdown is opened on mobile
    document.getElementById('languageModalContent').style.height = '200px';

    // Add the styles for each element
    document.getElementById('languageModalContent').classList.add('active');
    document.querySelectorAll('.lang-mdpop').forEach(el => el.classList.add('active'));
    document.querySelectorAll('.modal-dialog').forEach(el => el.classList.add('active'));
    document.querySelectorAll('.modal').forEach(el => el.classList.add('active'));
  } else {
    // Remove the styles if the screen is larger than 992px
    document.getElementById('languageModalContent').classList.remove('active');
    document.querySelectorAll('.lang-mdpop').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.modal-dialog').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.modal').forEach(el => el.classList.remove('active'));
  }

  // console.log(localStorage.getItem('language'));
 }
