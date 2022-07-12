/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './style.css';
import './CodeSmell/02-highTightCoupling';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
