
function Renata(qtde) {
    const $renata = ` <p class="renata"> O método repeat() constrói e retorna uma nova string com um determinado número de cópias concatenadas da string original. </p>  `;
    const $renatarepeat = $renata.repeat(qtde)
    const $renataRepeat = `repeat: ${$renata}`.repeat(3);
  
      return `
      ${$renatarepeat}
      ${$renataRepeat}
      `;
  }
  
  export default Renata;