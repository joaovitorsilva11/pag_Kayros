let lastScrollTop = 0;


window.addEventListener("scroll", function() {
let currentScroll = window.pageYOffset || document.documentElement.scrollTop;


if (currentScroll > lastScrollTop) {
    // Scroll para baixo
    document.querySelector('.navbar').style.top = "-80px"; // Esconde a navbar
} else {
    // Scroll para cima
    document.querySelector('.navbar').style.top = "0"; // Mostra a navbar
}


lastScrollTop = currentScroll;
});


function copiarTexto(botao, numeroTexto) {
    // Encontrar o elemento de texto específico relacionado ao botão clicado
    var texto = botao.closest("tr").querySelector(".textoParaCopiar");


    // Criar uma área de transferência temporária
    var areaTransferencia = document.createElement("textarea");
    areaTransferencia.value = texto.textContent;


    // Adicionar a área de transferência à página
    document.body.appendChild(areaTransferencia);


    // Selecionar e copiar o texto na área de transferência temporária
    areaTransferencia.select();
    document.execCommand("copy");


    // Remover a área de transferência temporária
    document.body.removeChild(areaTransferencia);
  }


  function copiarInputTexto(botao, numeroTexto) {
    // Encontrar o elemento de input específico relacionado ao botão clicado
    var inputTexto = botao.closest("tr").querySelector("input");


    // Criar uma área de transferência temporária
    var areaTransferencia = document.createElement("textarea");
   
    // Adicionar texto padrão antes e depois do valor do input
    var textoAntes = "Caro cliente, foram realizadas três tentativas de contato telefônico no número 61 9";
    var textoDepois = " todas sem sucesso. Para que possamos oferecer o suporte necessário, precisamos de sua colaboração junto ao setor responsável. Entendemos que pode não ser possível fazer isso agora e estamos disponíveis para ajudá-lo em um momento mais conveniente. Fique a vontade para entrar em contato novamente!";
    var textoCompleto = textoAntes + inputTexto.value + textoDepois;


    areaTransferencia.value = textoCompleto;


    // Adicionar a área de transferência à página
    document.body.appendChild(areaTransferencia);


    // Selecionar e copiar o texto na área de transferência temporária
    areaTransferencia.select();
    document.execCommand("copy");


    // Remover a área de transferência temporária e limpar o input
    document.body.removeChild(areaTransferencia);
    inputTexto.value = '';
  }


  function copiarSelect(botao, numeroTexto) {
    // Encontrar o elemento de seleção específico relacionado ao botão clicado
    var select = botao.closest("tr").querySelector("select");


    // Obter o valor selecionado
    var valorSelecionado = select.options[select.selectedIndex].text;


    // Texto padrão antes e depois do valor selecionado
    var textoAntes = "Certo! Estou transferindo seu caso para o setor especializado responsável, ";
    var textoDepois = " (Segunda a Sábado das 8:00 as 18:00, Domingo até 12:00), para que seu problema seja resolvido.";


    // Criar uma área de transferência temporária
    var areaTransferencia = document.createElement("textarea");
    areaTransferencia.value = textoAntes + valorSelecionado + textoDepois;


    // Adicionar a área de transferência à página
    document.body.appendChild(areaTransferencia);


    // Selecionar e copiar o texto na área de transferência temporária
    areaTransferencia.select();
    document.execCommand("copy");


    // Remover a área de transferência temporária e redefinir a seleção
    document.body.removeChild(areaTransferencia);
    select.selectedIndex = 0; // Define o primeiro item como selecionado
  }
