function contentGenerator(){
  var cHTML='<br><h1>Thunder Grove</h1><br><table><tr><td>';
  
  cHTML+='Rigtig navn: Skjult p&#229; grund af GDPR. <br>';
  cHTML+='Beskrivelse: Skjult p&#229; grund af GDPR. <br>';
  cHTML+='cv: Skjult p&#229; grund af GDPR. <br>';
  cHTML+='Sociale medier: <br><a href="https://www.twitch.tv/thundergrove">Twitch</a><br><a href="https://www.youtube.com/channel/UCoXQKaLrzBe7ccs89RDsIIA">Yuotube</a><br>';
  cHTML+='</td><td>';
  cHTML+='<div id="fakeIMG"><br><br><br><br><p>Skjult p&#229; grund af GDPR. </p></div>';
  cHTML+='</td></tr></table>';

  return cHTML;
}

module.exports.contentGenerator=contentGenerator;
