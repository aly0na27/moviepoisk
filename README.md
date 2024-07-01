# ДЗ React

1. Клонируем репозиторий

2. Устанавливаем зависимости
```
    npm install
```

3. Запускаем проект
```
    npm run dev
```

# Self revies

## Шапка - позиционируется липко!!

## Авторизация

Для реализации логинизации использую портал. Пользователь вводит логин и пароль, нажимает на кнопку, идет логинизация. Если происходит ошибка, данные перезапрашиваются, так как сервак в любом случае нам должен вернуть положительный ответ (пустые данные не отпарвляю(предусмотрена валидации форм), то есть, если пользователь нажимает на кнопку войти, запрос на бек не идет и пустое(-ые) поле(-я) подсвечиваются красным) Повторный запрос все-таки лучше не делать, но раз наш сервак так работает, то ладно. 
После успешный авторизации сохраняю токен в localStorage в объект user. Реализовала через thunk.

По клику на кнопку выйти удаляю из localStorage объект user с токеном.

При инициализации приложения проверяю, лежит ли токен в localStorage, если да, то мы получается авторизованы) Логика проверки токена лежит в useEffect, скорее всего можно было бы сделать это в другом месте, например в thunk.

## Страница списков фильма

Фильтры и поисковая строка реализованы вместе с пагинацией. Данные с инпута и фильтров синхронизируются с поисковой строкой в качетсве query параметров. Можно


[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (- [@vitejs/plugin-react]&#40;https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md&#41; uses [Babel]&#40;https://babeljs.io/&#41; for Fast Refresh)

[//]: # (- [@vitejs/plugin-react-swc]&#40;https://github.com/vitejs/vite-plugin-react-swc&#41; uses [SWC]&#40;https://swc.rs/&#41; for Fast Refresh)

[//]: # ()
[//]: # (## Expanding the ESLint configuration)

[//]: # ()
[//]: # (If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:)

[//]: # ()
[//]: # (- Configure the top-level `parserOptions` property like this:)

[//]: # ()
[//]: # (```js)

[//]: # (export default {)

[//]: # (  // other rules...)

[//]: # (  parserOptions: {)

[//]: # (    ecmaVersion: 'latest',)

[//]: # (    sourceType: 'module',)

[//]: # (    project: ['./tsconfig.json', './tsconfig.node.json'],)

[//]: # (    tsconfigRootDir: __dirname,)

[//]: # (  },)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`)

[//]: # (- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`)

[//]: # (- Install [eslint-plugin-react]&#40;https://github.com/jsx-eslint/eslint-plugin-react&#41; and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list)
