let count = 0;
const btn = document.getElementById('btn');
const out = document.getElementById('out');
btn.addEventListener('click', () => {
  count++;
  out.textContent = 'Tapped ' + count + ' time' + (count === 1 ? '' : 's');
});