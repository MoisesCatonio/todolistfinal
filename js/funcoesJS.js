function mudar_afazer(nome){
  var nodeAfazer = document.getElementsByName("afazer")
  var nodeMudar = document.getElementsByName(nome)
  var parente = nodeMudar[0].parentElement;
  if(nodeAfazer[0] != parente){
    nodeAfazer[0].append(nodeMudar[0])
    parente.removeChild(nodeMudar[0])
  }
}

function mudar_fazendo(nome){
  var nodeFazendo = document.getElementsByName("fazendo")
  var nodeMudar = document.getElementsByName(nome)
  var parente = nodeMudar[0].parentElement;
  if(nodeFazendo[0] != parente){
  nodeFazendo[0].append(nodeMudar[0])
  parente.removeChild(nodeMudar[0])
  }
}

function mudar_feito(nome){
  var nodeFeito = document.getElementsByName("realizado")
  var nodeMudar = document.getElementsByName(nome)
  var parente = nodeMudar[0].parentElement;
  if(nodeFeito[0] != parente){
    nodeFeito[0].append(nodeMudar[0])
    parente.removeChild(nodeMudar[0])
  }
}
