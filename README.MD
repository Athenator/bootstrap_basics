![bootstrap](https://www.tutorialrepublic.com/lib/images/bootstrap-5.0-illustration.png)

# Практика вёрстки на Bootstrap

Для вёрстки страниц использовался Bootstrap, чтобы быстро и удобно создать сетку и стилизацию элементов. Flask использовался для реализации логики обработки запросов и рендеринга страниц.

В данном проекте присутствует:
1. Файлы и код для установки Bootstrap в проект, созданный на основе Flask:
```
<link rel="stylesheet" href="{{ url_for('static',filename='css/bootstrap.min.css') }}">
    <link rel="shortcut icon" href="{{ url_for('static',filename='img/icon_athena.ico') }}" type="image/x-icon">
    <link rel="stylesheet" href="{{ url_for('static',filename='css/fontello.css') }}">
    <link rel="stylesheet" href="{{ url_for('static',filename='css/style.css') }}">

    <script src="{{ url_for('static', filename='js/bootstrap.bundle.min.js') }}"></script>
```
2. Так же присутствуют примеры интеграции в страницы различного контента и подключение различных стилей на каждую HTML страницу по отдельности: 
```
{% block link %}
    <link rel="stylesheet" href="/static/css/index_style.css"> 
{% endblock %}
```

3. Код создания шапки и модального окна, который можно найти на официальном сайте с документацией.
4. Примеры упрощенного создания сетки  3х3 а так же добавление иконок.
5. Создание аккордеона. 
6. Работа с адаптивными изображениями
7. Работа с формой сбора средств на основе кошелька: Ю - money
8. Создание футера сайта и стилизация иконок. 
---
## Установка зависимостей, для работы с Flask в pycharm
```
pip install -r requirements.txt
```