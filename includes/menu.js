function menuGenerator(pageName){
  var menuHTML="<ul>";

  if(pageName=="index"){
    menuHTML+='<li id="activePage"><a href="/">Forside</a></li>';
  }else{
    menuHTML+='<li><a href="/">Forside</a></li>';
  }

  if(pageName=="emner"){
    menuHTML+='<li id="activePage"><a href="/emner">Emner</a></li>';
  }else{
    menuHTML+='<li><a href="/emner">Emner</a></li>';
  }

  if(pageName=="praktikvirksomheder"){
    menuHTML+='<li id="activePage" class="last"><a href="/praktikvirksomheder">Praktikvirksomheder</a></li>';
  }else{
    menuHTML+='<li class="last"><a href="/praktikvirksomheder">Praktikvirksomheder</a></li>';
  }

  menuHTML+='</ul>';
  return menuHTML;
}

module.exports.menuGenerator=menuGenerator;
