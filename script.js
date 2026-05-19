// Данные об автомобилях
const cars = [
    {
        id: 1,
        model: "Toyota Corolla",
        type: "economy",
        price: 1500,
        image: "images/toyota-corolla.jpg" //
    },
    {
        id: 2,
        model: "Hyundai Solaris",
        type: "comfort",
        price: 2000,
        image: "images/hyundai-solarix.jpg" //
    },
    {
        id: 3,
        model: "BMW 5 Series",
        type: "premium",
        price: 5000,
        image: "images/bmw-5series.jpg" //
    }
];

// Функция отображения автомобилей
function displayCars(filteredCars = cars) {
    const container = document.getElementById('cars-container');
    container.innerHTML = '';

    filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <a href="https://gocar.rf/car-details.html?id=${car.id}" class="car-link">
                <img src="${car.image}" alt="${car.model}" class="car-image">
                <h3>${car.model}</h3>
                <p>Класс: ${car.type}</p>
                <p>Цена: ${car.price} руб/сутки</p>
            </a>
            <button class="book-btn" onclick="bookCar(${car.id})">Забронировать</button>
        `;
        container.appendChild(carCard);
    });
}

// Функция бронирования
function bookCar(carId) {
    alert(`Вы забронировали автомобиль с ID ${carId}! С вами свяжутся для подтверждения.`);
}

// Поиск автомобилей
document.getElementById('car-search').addEventListener('submit', function(e) {
    e.preventDefault();

    const type = document.getElementById('car-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    let filteredCars = cars;
    if (type) {
        filteredCars = cars.filter(car => car.type === type);
    }

    displayCars(filteredCars);
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayCars();
});
