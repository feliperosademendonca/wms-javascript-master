const { End } = require("./end");


function rmv(btnRmv) {
    // Índice específico que você deseja modificar
    let index = btnRmv;
    
    // Nome da propriedade que você deseja remover
    let propriedadeARemover = "produtoNoEndereco";
    
    // Remover a propriedade do objeto na posição específica
    if (index >= 0 && index < End.length) {
      // Verifica se o índice está dentro dos limites do array
      delete End[index][propriedadeARemover];
    } else {
      console.error("Índice fora dos limites do array.");
    }
    
    // Exibindo o array modificado
    console.log(End[index]);


    }
  




// Exporta a função
module.exports = rmv;