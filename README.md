<h3 align='center'>CloudSafeKeep</h3>
____

Это пет-проект для портфолио, который был написан с MERN stack

Данный проект представляет удобный веб-сервис для взаимодествия с файлами

Автор: Nielsen J. abcen7

#### Stack:
- React
- TypeScript
- Vite
- SCSS
- --------
- NestJS
- TypeScript
- Amazon Web Service: S3 Bucket

Настройка CI & CD для проекта
1. Проверь конфигурационный файл .env
   1. GENERATE_SOURCEMAP=...
      1. Описание >>  Нужно ли генерировать sourcemap кода 
      2. Формат >>  Boolean: [true | false]
   2. PRODUCTION_API_URL=...
       1. Описание >> Ссылка на API
       2. Формат >> String: https://yourlink.com
   3. DOMAIN=[string]
      1. Описание >> Ссылка на домен проекта 
      2. Формат >> google.com
   4. EMAIL=[string]
      1. Описание >> Ссылка на почту для генерации SSL
      2. Формат >> example@gmail.com
2. Настройка secrets в github репозитории
    1. SSH_SERVER_IP
        1. Описание >> IP сервера
        2. Формат >> 54.90.60.192
    2. SSH_SERVER_USERNAME
        1. Описание >> Username
        2. Формат >> root
    3. SSH_PRIVATE_KEY
       1. Описание >> Приватный SSH ключ
       2. Формат >> root
       3. Создание >> ```ssh-keygen -t rsa -b 4096 -C "SERVER_NAME" -f ~/.ssh/FOLDER_NAME```
    4. DEPLOY_PATH
       1. Описание >> Путь, где лежит проект (source code)
       2. Формат >> /home/app