const articles = document.querySelectorAll(".articles");
articles.forEach(article => 
    article.addEventListener('click', function() {
        this.classList.toggle('active_article')
    }));

articles.forEach(article => 
    article.addEventListener('touch', function() {
        this.classList.toggle('active_article')
    }));