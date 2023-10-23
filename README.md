# BunViteGallery

## Code style

1. Названия папок с маленькой буквы и через kebab-case shared/components/my-component
2. Пишем компоненты таким образом:
```js
const Component = ({ props } : ComponentProps) => {};
```
Деструктуризацию пропсов делаем в параметрах функции компонента.  
3. Тип для пропсов именуем как ComponentName+Props, например, MyComponentProps.  
4. Не используем дефолтные экспорты. (Допускается в svg при автоматической генерации и если обойтись без default никак нельзя).  
5. Не создаем лишние index.ts файлы рядом с файлами-листьями, ветвь которых является модулем и имеет свой index.ts  


## Описание

Структура проекта вдохновлена [Feature-Sliced Design](https://feature-sliced.design/ru/docs) (Архитектурная методология для фронтенд проектов).
Основные идеи:  
— нижележащие слои не могут импортировать компоненты вышележащих  
— компоненты, находящиеся на одном слое, не должны импортировать что-либо друг из друга  
— любые компоненты могут использовать компоненты из 'shared' слоя  

Для более полного понимания читайте официальную документацию и изучите структуру проекта.


## Слои

`0_app` — настройки, стили и провайдеры для всего приложения.

`1_processes` — сложные сценарии, покрывающие несколько страниц (например, авторизация, роутинг).

`2_pages` (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.

`3_app-modules` (модули приложения) — слой, хранящий переключаемые модули, которые могут содержать классические слои из FSD, использующиеся только внутри данных модулей.
Нужен для того, чтобы разгрузить остальные слои, предотвращая путаницу при масштабировании приложения.

`4_widgets` — готовые блоки для страниц ( хедер, футер, форма, таблица ).

`5_features` — компоненты, реализующие конкретные пользовательские сценарии, которые несут бизнес ценность (конкретные действия).
Например, кнопка, позволяющая авторизоваться пользователю является фичой.
Внутри каждой сущности находится папка 'model', которая содержит хуки с запросами и другой логикой.
Здесь может находиться папка 'ui' c компонентом, использующим хуки из 'model'.

**Пример**:

```
├── features/sign-in/ui
|        ├── sign-in.tsx        #  Компонент
├── features/sign-in/model
|        ├── use-sign-in.ts     #  Хук с логикой
```

`6_entities` —  Инициализация глобального стейт-менеджера и его слои хранятся здесь.
А также компоненты, относящиеся к конкретной бизнес-сущности. Например плашка профиля с запросом.
Внутри каждой сущности находится папка 'model', которая содержит хуки с запросами и другой логикой.
Здесь может находиться папка 'ui' c компонентом, использующим хуки из 'model'.


`shared` — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса (например, UIKit, hocs, libs, API).
Сейчас на этом слое создана папка **_components_** (данные компоненты переиспользуются между страницами), компоненты которой в будущем могут быть перемещены в другие слои (**_entities_**, **_features_**, **_widgets_** ).
Если не знаете, к какому слою относится компонент - поместите его в shared/components, чтобы разобраться с ним позднее.

## Список модулей и библиотек

`bun commit` - фиксация изменений с помощью [Commitizen CLI](https://github.com/commitizen/cz-cli)


## Установка

# установка зависимостей
```bash
bun
```


## Разработка

# запустить проект
```bash
bun dev
```


## Именование веток/коммитов

Ветки:

```
feat/navigation
fix/build-type-error
```

Коммиты:

```
feat: page created
```

[//]: # (## Документация)

[//]: # ()

## Список разработчиков

- [Andrei Boldyrev](https://gitlab.com/bldyrevand)

## Примечания

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
