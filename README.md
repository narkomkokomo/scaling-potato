<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Аренда авто — GoCar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Аренда авто — GoCar</h1>
        <nav>
            <ul>
                <li><a href="https://gocar.rf">Главная</a></li>
                <li><a href="https://gocar.rf/cars">Автопарк</a></li>
                <li><a href="https://gocar.rf/contacts">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="search">
            <h2>Найдите свой автомобиль</h2>
            <form id="car-search">
                <select id="car-type">
                    <option value="">Любой класс</option>
            <option value="economy">Эконом</option>
            <option value="comfort">Комфорт</option>
            <option value="premium">Премиум</option>
                </select>
                <input type="date" id="start-date" placeholder="Дата начала">
                <input type="date" id="end-date" placeholder="Дата окончания">
                <button type="submit">Найти</button>
            </form>
        </section>

        <section id="cars-list">
            <h2>Наш автопарк</h2>
            <div id="cars-container"></div>
        </section>
    </main>

    <footer>
        <p>© 2025 GoCar. Все права защищены.</p>
        <div class="social-links">
            <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://t.me/gocar_rental" target="_blank" rel="noopener noreferrer">Telegram‑бот</a>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
