var router = require('koa-router')()

router.get('/', function(ctx) {
  var res = ctx.res
  res.write('<html><head><meta charset="utf-8">' +
    '<style>body {text-align: center;} h3 {margin: 50px 0;} img {height: 300px;}</style>' +
    '</head><body><h1>Test Bigpipe</h1><div id="list">')
  
  for (var i = 0; i < 999; i++) {
    // res.write('<script>(function(){' +
    //   'var h3 = document.createElement("h3");' +
    //   'h3.innerHTML = "流式渲染示例，hello stream ' + i + '";' +
    //   'document.getElementById("list").appendChild(h3);})();' +
    //   '</script>')

    res.write('<h3>流式渲染示例，hello stream ' + i + '</h3>' +
      '<img src="https://unsplash.it/1000/300/?random&' + (+new Date()) + '">' + 
      '<div>' + new Date().toLocaleString() +  '</div>')
  }
  res.write('</div></body></html>')
  
  res.end()
})

module.exports = router
