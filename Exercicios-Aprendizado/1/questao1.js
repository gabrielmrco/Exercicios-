
let menu = []

for (let index = ""; index!= "0" ; index=prompt("Monte um Sorvete" + "\n" + "1- Adicionar sabor" + "\n" + "2- Remover sabor" + "\n" + "3- Visualizar sorvete" + "\n" + "4- Finalizar pedido" + "\n" + "digite 0 para cancelar seu pedido"  )) {
  
    let resultado="";
switch (index) {
    case '1':
       let nomeUsuario=prompt("Qual Sabor voce deseja?")
        
        if (menu.length<3) {menu.push(nomeUsuario); alert("sabor adicionado");
            
        }else{alert("Limite de sabores atingido, remova um sabor!")}

     {
        
    }
        break;
    case '2':
        alert(menu)
        let saborexcluir = prompt("qual sabor voce quer excluir?")
        if (menu.includes(saborexcluir)) {
            let posição = menu.indexOf(saborexcluir)
            menu.splice(posição)
        }
        break;
    case '3':
        menu.sort()
       if (menu.length>0) {alert("Camada 1: " + menu[0] + " Camada 2: " + menu[1] + " camada 3: " + menu[2] )
        
       }else{alert("Seu sorvete não possui sabores!")}
       break;
    case '4':
        if (menu.length > 0) {alert("pedido realizado" )
        
   
    }else{alert("adicione pelo menos um valor")}
       
        break;
    
    
       
}

}
