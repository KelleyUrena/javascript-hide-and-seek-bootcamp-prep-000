function getFirstSelector(selector){
  return document.querySelector(selector)
  
}

function nestedTarget(element) {
  return document.querySelector('#nested').querySelector('div.target')
}

function increaseRankBy(n) {
 const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = (n + parseInt(lis[i].innerHTML)).toString();
  }
}

function deepestChild(){
  const lis = document.querySelector('div.grand-node.innerHTML')
  var arrayToSearch = [{depth:0, element:lis}]
  while(arrayToSearch.length > 0){
    var itemToSearch = arrayToSearch.pop()
    var newDepth = itemToSearch.depth + 1;
    arrayToSearch.concat(itemToSearch.children)
  }
}