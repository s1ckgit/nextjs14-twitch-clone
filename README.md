# Fullstack Twitch Clone: Next.js 14, Livestreaming, React, Prisma, Stripe, Tailwind, MySQL

Репозиторий для Fullstack клона Twitch на Next.js 14

![preview](https://i.ibb.co/Sfg0SXF/image-2024-05-10-16-27-46.png)
![preview](https://i.ibb.co/RH75S5R/image-2024-05-10-16-27-59.png)
![preview](https://i.ibb.co/xYLRwxP/image-2024-05-10-16-26-20.png)
![preview](https://i.ibb.co/GtSqFZ5/image-2024-05-10-16-26-02.png)
![preview](https://i.ibb.co/93x7Xd9/image-2024-05-10-16-21-16.png)

**Ключевые особенности:**
- 📡 Трансляции с помощью RTMP / WHIP протоколов
- 🔗 Подключение Next.js приложения к OBS или любому другому приложению для стримов
- 🔐 Аутентификация (Google, Github)
- 📸 Загрузка превью для стримов
- 👀 Счётчик зрителей прямого эфира
- 🚦 Отображение статуса стрма (Live/Offline)
- 💬 Чат в реальном времени с использованием сокетов
- 🎨 Генерация уникального цвета никнейма для каждого зрителя в чате
- 👥 Система подписок
- 🚫 Система банов
- 👢 Возможность кикать зрителей со стрима в реальном времени
- 🎛️ Панель для стримера (Настройка чата, стрима, ключи для подключения к софту, список забаненных зрителей)
- 🐢 Слоумод для чата
- 🔒 Мод чата только для подписчиков
- 📴 Возможность отключать/включать чат
- 🔽 Настраиваемый лэйаут (возможность прятать сайдбар, переключение чата, полноэкранный режим и т.д.)
- 📚 Сайдбар с подписками и рекомендациями
- 🏠 Домашняя страница с рекомендованными стримамы, отсортированными в порядке от Live до Offline (По дате запуска стрима)
- 🔍 Страница с поиском стримов по имени пользователя и названию стрима
- 🔄 Синхронизация информации о пользователе с базой данный с использованием вебхуков
- 📡 Синхронизация Live статуса стрима с базой данный с использованием вебхуков
- 📄 SSR (Server-Side Rendering)
- 🗃️ MySQL

### Минимальные требования для запуска

**Версия Node 18.17 или позднее**

### Инструкция для запуска в dev режиме

#### Скопировать репозиторий

```shell
git clone https://github.com/s1ckgit/nextjs14-twitch-clone.git
```

#### Установить зависимости

```shell
npm i
```

#### Настроить .env файл

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=

DATABASE_URL=

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

#### Настроить призму (Prisma)

Добавить MySQL базу данных (Я использовал локальную)

```shell
npx prisma generate
npx prisma db push

```
#### Запустить приложение

```shell
npm run dev
```

## Доступные команды

Запускайте команда, используя npm `npm run [команда]`

| команда         | команда                                  |
| :-------------- | :--------------------------------------- |
| `dev`           | Запускает приложение в режиме разработки |
| `lint`          | Запускает линтер eslint                  |
| `build`         | Собирает бандл приложения                |
| `start`         | Запускает собранный бандл                |
