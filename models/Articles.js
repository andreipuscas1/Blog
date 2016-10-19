/*global $*/
function Articles(){
    this.models = [];
}

Articles.prototype.getArticles = function(){
    var that = this;
    return $.ajax({
            url:" https://curs-andreipuscas.c9users.io/curs22-23-24/articles",
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                       var article = new Article(resp[i]);
                       that.models.push(article);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
    });
}

Articles.prototype.delete = function(articleId){
    //do AJAX request to URL https://curs-andreipuscas.c9users.io/curs22-23-24/articles/delete?id=+articleId"
    //MethodPOST
}
Articles.prototype.add = function(articleData){
    //Do AJAX request to URL: https://curs-andreipuscas.c9users.io/curs22-23-24/articles/add"
    //Method POST
    
}