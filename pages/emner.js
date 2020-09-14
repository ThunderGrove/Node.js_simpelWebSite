function contentGenerator(){
  var cHTML='<br><h1>Intersante emner</h1><br>';

  cHTML+='<h2>IT sikkerhed</h2><br>';
  cHTML+='<p>P&#229; grund af flere og flere kommer p&#229; internetet bliver IT sikkerhed vigtigere og vigtigere.</p><br>';
  cHTML+='<h2>Kryptering</h2><br>';
  cHTML+='<p>En stor del af IT sikkerhed er Kryptering.<p><br>';
  cHTML+='<h2>Open source</h2><br>';
  cHTML+='<p>En stor del af fremtidens IT er open source.</p>';

  return cHTML;
}

module.exports.contentGenerator=contentGenerator;
