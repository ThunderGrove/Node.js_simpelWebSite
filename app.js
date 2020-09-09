var http=require('http');
var url=require('url');
var fs=require('fs');
var page="index";

//create a server object:
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  var pageReq=url.parse(req.url,true).pathname;//Needed to get page accessed
  res.write('<!DOCTYPE html><html><head><title>This is just a simple website made with Node.js</title><style>');

  var style=fs.readFileSync('style/default.css','utf8');
  res.write(style.toString());

  res.write('</style></head><body><div id="pageContainer"><div id=pageHead>This is just a simple website made with Node.js</div><div id="menu">');
  if(pageReq.localeCompare("/emner")==0){
    page="emner";
  }else if(pageReq.localeCompare("/praktikvirksomheder")==0){
    page="praktikvirksomheder";
  }

  var menu=require('./includes/menu.js');
  res.write(menu.menuGenerator(page));

  res.write('</div><div id="page"></div><div></body></html>');
  res.end();//end the response
}).listen(8080); //the server object listens on port 8080
