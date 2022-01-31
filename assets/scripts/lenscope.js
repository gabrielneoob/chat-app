/*RODAR EM ALGUM SITE HTML com <script>*/
/*
ode = olho direito esférico
odc = olho direito cilíndrico;
oee = olho esquerdo esférico;
oec = olho esquerdo cilíndrico;
*/
const lentes = function() {
  const ode = prompt('Digite Grau Esférico do olho direito');
  const odc = prompt('Digite Grau Cilíndrico do olho direito');
  const oee = prompt('Digite Grau esférico do olho esquerdo');
  const oec = prompt('Digite Grau esférico do olho esquerdo');
  if(ode > 0 || ode < -15 || odc < -6 || oee > 0 || oee < -15 || oec < -6) {
    return 'Grau Inserido Inválido. Tente novamente.';
  }
  if(ode < -3 && ode > -12 && odc >= -2) {
    console.log('Lente Direita Premium');
  } else if(odc < -2 && ode < -3 && ode > -10) {
    console.log('Lente Direita Premium');
  } else if(ode <= 0 && ode >= -15 && odc >= -5) {
    console.log(`Lente Direita Vision ou Lente esquerda Premium`);
  }
  if(oee < -3 && oee > -12 && oec >= -2) {
    console.log('Lente Esquerda Premium');
  } else if(oec < -2 && oee < -3 && oee > -10) {
    console.log('Lente Esquerda Premium');
  } else if(oee <= 0 && oee >= -15 && oec >= -5) {
    console.log('Lente Esquerda Vision ou Lente Esquerda Premium');
  }
}

