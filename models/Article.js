function Article(options) {
    this.title = options.title;
    this.content = options.content;
    this.id = options.id;
}

Article.prototype.update = function(){
    //Do an AJAX req to https://curs-andreipuscas.c9users.io/curs22/article/add
}