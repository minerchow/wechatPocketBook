function ajaxUrl(){
    var url = "http://m.api.huizuche.com:12309/";
    return url; 
}

function cdnUrl(){
  var cdnUrl = "http://cdn.qiniu.app.huizuche.com/";
  return cdnUrl;
}

module.exports = {
  ajaxUrl: ajaxUrl,
  cdnUrl:cdnUrl
}