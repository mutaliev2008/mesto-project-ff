# Проектная работа Mesto
[Посмотреть проект mesto](https://mutaliev2008.github.io/mesto-project-ff/)  
Проект представляет собой веб-приложение, которое позволяет пользователям обмениваться фотографиями мест.
В приложении можно редактировать свой профиль, добавлять новые места, ставить лайки другим местам и удалять их.
Создан с использованием HTML, CSS, Webpack и JavaScript.
#### Технологий
  * HTML
  * CSS
  * JavaScript
  * API
#### С применением
  * Npm
  * Webpack
  * API (POST, GET, PUT, DELETE)
  * БЭМ;
### Макеты
  * [Макет №1](https://www.figma.com/design/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0-1&t=F0XdagbJR9fA6sAc-0)
  * [Макет №2](https://www.figma.com/design/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9?node-id=0-1&t=auP8v3PBSwR3p0wM-0)

## Локальная установка:

В командной строке перейдите в папку, где будет развернут проект. После чего скопируйте его с GitHub: 
```sh
$ git clone https://mutaliev2008.github.io/mesto-project-ff.git
```

Далее переходим в папку с проектом и устанавливаем npm зависимости:
```sh
$ npm install
```

---
**В файле package.json настроены три варианта запуска сборки проекта:**
Проект собирается локально, продукты сборки сохряняются в указанной директории.
```sh
$ npm run build 
```

Помимо сборки, запускает на локальном сервере с автоматической перезагрузкой при изменении кода.
```sh
$ npm run dev 
```

Выкладывает релизную версию в ветку gh-pages указанного репозитория.
```sh
$ npm run deploy 
```
