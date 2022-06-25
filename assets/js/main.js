function criaCalc () {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    eraseDisplay() {
      this.display.value = ' ';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = conta;
      } catch(e){
        alert('Conta inválida');
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-erase')) {
          this.eraseDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

      });
    },

    btnParaDisplay(v) {
      this.display.value += v;
    }

  };
}

const calculadora = criaCalc();
calculadora.inicia();
