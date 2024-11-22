---
title: Speech2Note bot
description: README of the repository with the code of the Speech2Note telegram bot, which allows you to create .md notes from an audio file
pubDate: 2024-11-22
postType: repo
---
# Speech2Note

![](https://i.ibb.co/pWB6G4S/Untitled.jpg)
## Repository
---

**[REPO](https://github.com/ultrageopro/Speech2Note)** BY [ULTRAGEOPRO](https://github.com/ultrageopro)
## Bot Description
---
The _Speech2Note_ bot enables creating 
summaries from audio files.

When a user sends a voice message or an audio file containing human speech, the bot:

1. Saves the file on the server.
2. Converts the audio file to text using GigaChat.
3. Saves the text on the server.
4. Creates a summary using GigaChat.
5. Sends the summary back to the user.

If the user is not registered, the bot will prompt them 
to do so. After registration, their data will be 
saved in a Supabase table.

During the request processing, all files are deleted from the server.  
No user data is stored permanently on the server.

## Database
---
The database is hosted in **Supabase**.

The table stores only:

- User ID
- User creation date
- User token balance
- User name

## Queue
---
All requests are processed in a **queue**.

Requests in the queue are executed sequentially, with a delay specified in the `.env` file.  The queue also has a maximum request limit.

## How to Use
---
First, create a `.env` file to store all required environment variables.

Example `.env` file:

```
TELEGRAM_TOKEN=<bot_token>  
SUPABASE_URL=<supabase_url>  
SUPABASE_KEY=<supabase_key>  
S2T_AUTH_DATA=<s2t_auth_data>  
T2N_AUTH_DATA=<t2n_auth_data>  

SPLIT_TIMEOUT=45  
QUEUE_TIMEOUT=10  
QUEUE_MAX_LEN=20  
```

- To get the bot token, use [Telegram BotFather](https://telegram.me/BotFather).
- To obtain an API key for Supabase, refer to [Supabase](https://supabase.com/docs).
- To get an API key for GigaChat, visit [GigaChat](https://developers.sber.ru/).

Next, run the bot with the command:

```bash
docker compose up -d  
```

## Support
---
Contact email: [dev@ultrageopro.ru](mailto:dev@ultrageopro.ru)

Telegram: [@UltraGeoDev](https://t.me/UltraGeoDev)