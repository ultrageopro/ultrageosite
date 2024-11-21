---
title: Speech2Note bot
description: README of the repository with the code of the Speech2Note telegram bot, which allows you to create .md notes from an audio file
pubDate: 2024-11-22
postType: repo
---
# Speech2Note

![опля](https://i.ibb.co/pWB6G4S/Untitled.jpg)

## Репозиторий
---
**ССЫЛКА** https://github.com/ultrageopro/Speech2Note
## Описание бота
---

Бот *Speech2Note* позволяет создать конспект из аудиофайла.

При отправке голосового сообщения/аудиофайла, которое содержит человеческую речь бот:
1. Сохранит файл на сервере
2. Преобразует аудиофайл в текст с помощью GigaChat
3. Сохранит текст на сервере
4. Создаст конспект с помощью GigaChat
5. Отправит конспект пользователю, спишет токены

Если же пользователь не зарегистрирован в боте, бот предложит ему это сделать.
После регистрации данные будут внесены в таблицу Supabase.

В процессе обработки запроса все файлы удаляются с сервера.
Никакие данные о пользователех не хранятся на сервере.

## База данных
---
База данных хранится в **Supabase**.

В таблице сохраняются только:
- ID пользователя
- Дата создания пользователя
- Количество токенов пользователя
- Имя пользователя

## Очередь
---
Все запросы обрабатытся в **очереди**.

Запросы из очереди выполняются последовательно, с определенным в `.env` файле временем ожидания. Также очередь имеет ограничение на максимальное число запросов.

## Как использовать
---
Для начала создайте `.env` файл, в котором будут хранится все необходимательные переменные.

Пример `.env` файла:
```
TELEGRAM_TOKEN=<your_telegram_bot_token>
SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
S2T_AUTH_DATA=<your_s2t_auth_data>
T2N_AUTH_DATA=<your_t2n_auth_data>

SPLIT_TIMEOUT=45
QUEUE_TIMEOUT=10
QUEUE_MAX_LEN=20
```

- Для получения токена бота воспользуйтесь [Telegram BotFather](https://telegram.me/BotFather)
- Для получения API ключа для Supabase воспользуйтесь [Supabase](https://supabase.com/docs)
- Для получения API ключа для GigaChat воспользуйтесь [GigaChat](https://developers.sber.ru/)

Далее запустите бота с помощю команды
```bash
docker compose up -d
```

## Поддержка
---
Почта для связи: dev@ultrageopro.ru

Телеграм: [@UltraGeoDev](https://t.me/UlraGeoDev)