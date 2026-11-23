// Tabs in "How I think"
const tabs = [...document.querySelectorAll('[role=tab]')];
const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

function select(i) {
  tabs.forEach((t, n) => {
    t.setAttribute('aria-selected', n === i);
    t.tabIndex = n === i ? 0 : -1;
    panels[n].hidden = n !== i;
  });
  tabs[i].focus();
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(i));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') select((i + 1) % tabs.length);
    if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
