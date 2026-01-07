const Books = [
 {
    id: 1,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    genre: "Роман",
    price: 450,
    country: "Россия",
    img: "https://example.com/books/master-i-margarita.jpg"
  },
  {
    id: 2,
    title: "1984",
    author: "Джордж Оруэлл",
    genre: "Антиутопия",
    price: 380,
    country: "Великобритания",
    img: "https://example.com/books/1984.jpg"
  },
  {
    id: 3,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    genre: "Классика",
    price: 520,
    country: "Россия",
    img: "https://example.com/books/prestuplenie-i-nakazanie.jpg"
  },
  {
    id: 4,
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    genre: "Фэнтези",
    price: 700,
    country: "Великобритания",
    img: "https://example.com/books/harry-potter-1.jpg"
  },
  {
    id: 5,
    title: "Сто лет одиночества",
    author: "Габриэль Гарсиа Маркес",
    genre: "Магический реализм",
    price: 560,
    country: "Колумбия",
    img: "https://example.com/books/sto-let-odinochestva.jpg"
  },
  {
    id: 6,
    title: "Война и мир",
    author: "Лев Толстой",
    genre: "Исторический роман",
    price: 890,
    country: "Россия",
    img: "https://example.com/books/voina-i-mir.jpg"
  },
  {
    id: 7,
    title: "Унесенные ветром",
    author: "Маргарет Митчелл",
    genre: "Исторический роман",
    price: 610,
    country: "США",
    img: "https://example.com/books/gone-with-the-wind.jpg"
  },
  {
    id: 8,
    title: "Три товарища",
    author: "Эрих Мария Ремарк",
    genre: "Роман",
    price: 430,
    country: "Германия",
    img: "https://example.com/books/three-comrades.jpg"
  },
  {
    id: 9,
    title: "Анна Каренина",
    author: "Лев Толстой",
    genre: "Классика",
    price: 580,
    country: "Россия",
    img: "https://example.com/books/anna-karenina.jpg"
  },
  {
    id: 10,
    title: "Властелин колец",
    author: "Джон Р.Р. Толкин",
    genre: "Фэнтези",
    price: 950,
    country: "Великобритания",
    img: "https://example.com/books/lord-of-the-rings.jpg"
  },
  {
    id: 11,
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    genre: "Роман",
    price: 510,
    country: "Великобритания",
    img: "https://example.com/books/pride-and-prejudice.jpg"
  },
  {
    id: 12,
    title: "Великий Гэтсби",
    author: "Фрэнсис Скотт Фицджеральд",
    genre: "Роман",
    price: 530,
    country: "США",
    img: "https://example.com/books/great-gatsby.jpg"
  },
  {
    id: 13,
    title: "Лолита",
    author: "Владимир Набоков",
    genre: "Роман",
    price: 620,
    country: "Россия",
    img: "https://example.com/books/lolita.jpg"
  },
  {
    id: 14,
    title: "Игра престолов",
    author: "Джордж Мартин",
    genre: "Фэнтези",
    price: 850,
    country: "США",
    img: "https://example.com/books/game-of-thrones.jpg"
  },
  {
    id: 15,
    title: "451° по Фаренгейту",
    author: "Рэй Брэдбери",
    genre: "Научная фантастика",
    price: 400,
    country: "США",
    img: "https://example.com/books/fahrenheit-451.jpg"
  },
  {
    id: 16,
    title: "Повелитель мух",
    author: "Уильям Голдинг",
    genre: "Аллегория",
    price: 410,
    country: "Великобритания",
    img: "https://example.com/books/lord-of-the-flies.jpg"
  },
  {
    id: 17,
    title: "Граф Монте-Кристо",
    author: "Александр Дюма",
    genre: "Приключения",
    price: 710,
    country: "Франция",
    img: "https://example.com/books/count-of-monte-cristo.jpg"
  },
  {
    id: 18,
    title: "Божественная комедия",
    author: "Данте Алигьери",
    genre: "Поэма",
    price: 750,
    country: "Италия",
    img: "https://example.com/books/divine-comedy.jpg"
  },
  {
    id: 19,
    title: "Гамлет",
    author: "Уильям Шекспир",
    genre: "Трагедия",
    price: 380,
    country: "Великобритания",
    img: "https://example.com/books/hamlet.jpg"
  },
  {
    id: 20,
    title: "Одиссея",
    author: "Гомер",
    genre: "Эпос",
    price: 820,
    country: "Древняя Греция",
    img: "https://example.com/books/odyssey.jpg"
  },
  {
    id: 21,
    title: "Процесс",
    author: "Франц Кафка",
    genre: "Абсурдизм",
    price: 490,
    country: "Чехия",
    img: "https://example.com/books/the-trial.jpg"
  },
  {
    id: 22,
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    genre: "Философская сказка",
    price: 320,
    country: "Франция",
    img: "https://example.com/books/little-prince.jpg"
  },
  {
    id: 23,
    title: "Дон Кихот",
    author: "Мигель де Сервантес",
    genre: "Роман",
    price: 720,
    country: "Испания",
    img: "https://example.com/books/don-quixote.jpg"
  },
  {
    id: 24,
    title: "Мертвые души",
    author: "Николай Гоголь",
    genre: "Сатира",
    price: 480,
    country: "Россия",
    img: "https://example.com/books/dead-souls.jpg"
  },
  {
    id: 25,
    title: "Франкенштейн",
    author: "Мэри Шелли",
    genre: "Готический роман",
    price: 390,
    country: "Великобритания",
    img: "https://example.com/books/frankenstein.jpg"
  },
  {
    id: 26,
    title: "Улисс",
    author: "Джеймс Джойс",
    genre: "Модернизм",
    price: 880,
    country: "Ирландия",
    img: "https://example.com/books/ulysses.jpg"
  },
  {
    id: 27,
    title: "Братья Карамазовы",
    author: "Фёдор Достоевский",
    genre: "Философский роман",
    price: 770,
    country: "Россия",
    img: "https://example.com/books/karamazov.jpg"
  },
  {
    id: 28,
    title: "Хоббит",
    author: "Джон Р.Р. Толкин",
    genre: "Фэнтези",
    price: 690,
    country: "Великобритания",
    img: "https://example.com/books/the-hobbit.jpg"
  },
  {
    id: 29,
    title: "Скотный двор",
    author: "Джордж Оруэлл",
    genre: "Сатира",
    price: 360,
    country: "Великобритания",
    img: "https://example.com/books/animal-farm.jpg"
  },
  {
    id: 30,
    title: "Портрет Дориана Грея",
    author: "Оскар Уайльд",
    genre: "Философский роман",
    price: 410,
    country: "Ирландия",
    img: "https://example.com/books/dorian-gray.jpg"
  }
];

export  { Books };