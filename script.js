// Получаем все элементы фильтра
var filters = document.querySelectorAll('.portfolio-filter li');

// Добавляем обработчик события для каждого элемента фильтра
filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
        // Получаем значение атрибута data-filter для выбранного фильтра
        var filterValue = this.getAttribute('data-filter');

        console.log(filterValue)

        // Получаем все элементы списка портфолио
        var portfolioItems = document.querySelectorAll('.isotope_items.col-lg-4');

        // Проходимся по всем элементам списка портфолио и добавляем или удаляем классы в зависимости от выбранного фильтра
        portfolioItems.forEach(function (item) {
            if (filterValue === '*' || item.classList.contains(filterValue)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });

        // Добавляем класс "active" к выбранному фильтру и удаляем его у остальных
        filters.forEach(function (filter) {
            filter.classList.remove('active');
        });
        this.classList.add('active');
    });
});

