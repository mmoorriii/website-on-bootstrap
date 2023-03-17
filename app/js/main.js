//----------------------------------------------------------------------------------
var article_1 = {
   'foto': 'https://itproger.com/img/news/1517501131.jpg',
   'title': 'Устаревшие языки, которые уже не стоит изучать',
   'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};

var article_2 = {
   'foto': 'https://itproger.com/img/news/1676358365.jpg',
   'title': 'Chrome стал наиболее уязвимым браузером 2022 года',
   'intro': 'Chrome в 2022 году отличился. В нем было выявлено 303 “дыры”. Это почти в 3 раза больше, чем в Firefox и Microsoft Edge. Ну а в Safari насчитали за весь период всего 2 уязвимостей.'
};

var article_3 = {
   'foto': 'https://itproger.com/img/news/1675712176.jpg',
   'title': 'Chat GPT: что это, что умеет и как использовать',
   'intro': 'Искусственный интеллект становится все умнее и Chat GPT прямое тому доказательство. Этот универсальный чат-бот уже может потягаться с человеком в плане сообразительности и умения общения.'
};

var article_4 = {
   'foto': 'https://itproger.com/img/news/1675712019.jpg',
   'title': 'Выставка в Лас-Вегасе: какие роботы были представлены',
   'intro': 'В начале января прошло одно из самых крупных и важных событий в мире технологий – CES 2023. Мероприятие проводят уже порядка 50 лет. Каждый год на нем представляются самые крутые технологии будущего.'
};

var article_5 = {
   'foto': 'https://itproger.com/img/news/1676358365.jpg',
   'title': 'Chrome стал наиболее уязвимым браузером 2022 года',
   'intro': 'Chrome в 2022 году отличился. В нем было выявлено 303 “дыры”. Это почти в 3 раза больше, чем в Firefox и Microsoft Edge. Ну а в Safari насчитали за весь период всего 26 уязвимостей.'
};

var article_6 = {
   'foto': 'https://itproger.com/img/news/1674978966.jpg',
   'title': 'Необходимые навыки и технологии в разработке игр на Unity',
   'intro': 'Сегодня игровая индустрия развилась настолько, что некоторый визуал игр кажется реалистичнее, тем сама жизнь. Специалисты, работающие на Unity занимают отдельную ветку в мире разработки игр.'
};

var article_7 = {
   'foto': 'https://itproger.com/img/tasks/1674323461.jpg',
   'title': 'Как угадать число от 0 до 100 или математический фокус',
   'intro': 'Chrome в 2022 году отличился. В нем было выявлено 303 “дыры”. Это почти в 3 раза больше, чем в Firefox и Microsoft Edge. Ну а в Safari насчитали за весь период всего 26 уязвимостей.'
};

var article_8 = {
   'foto': 'https://itproger.com/img/news/1516366532.jpg',
   'title': '10 самых популярных сайтов написанных на Django',
   'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};

var articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];

let start = 0;

$('.btnClick').on('click', function () {
   let htmlToInsert = '';

   for (let i = start; i < articles.length; i++) {
      if (i > 3 + start)
         break;

      htmlToInsert += '<div class="card"><img src="' + articles[i].foto + '" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">' + articles[i].title + '</h5><p class="card-text">' + articles[i].intro + '</p><a href="#" class="btn btn-warning">Читать далее</a></div></div>';

      if (i == articles.length - 1) {
         $('.btnClick').hide();
         break;
      }
   }

   $('.cards').append(htmlToInsert);

   start += 4;
});