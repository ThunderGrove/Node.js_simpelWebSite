function contentGenerator(){
  var cHTML="<br><h1>Praktikvirksomheder</h1><br>";

  cHTML+='<h2>CubeIO (I dag fuldt fusioneret med TDC)</h2><br>';
  cHTML+='<p>TDCs softwareudviklings lejeplads.</p><br>';
  cHTML+='<h2>K&#248;benhavns universitet</h2><br>';
  cHTML+='<p>Mulighed for udvikle software til forskere.<p><br>';
  cHTML+='<h2>N&#230;stved kommune</h2><br>';
  cHTML+='<p>Programmering af scripts der importere statestik data ind i Targit.</p>';

  return cHTML;
}

module.exports.contentGenerator=contentGenerator;
