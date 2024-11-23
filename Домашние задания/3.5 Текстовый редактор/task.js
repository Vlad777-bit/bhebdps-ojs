const txtAreaEl = document.querySelector('#editor');
const clearBtn = document.querySelector('#clear');

if (localStorage.getItem('text')) {
  txtAreaEl.value = localStorage.getItem('text');
}

txtAreaEl.addEventListener('input', () => {
  const txtAreaValue = txtAreaEl.value;
  localStorage.setItem('text', txtAreaValue);
});

clearBtn.addEventListener('click', () => {
  localStorage.removeItem('text');
  txtAreaEl.value = '';
});
