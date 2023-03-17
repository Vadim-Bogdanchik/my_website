# Используем официальный образ Node.js 16 в качестве базового
FROM node:lts-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем остальные файлы проекта в рабочую директорию
COPY . .

# Собираем продакшн версию Next.js приложения
RUN npm run build

# Открываем порт 3001 для Next.js приложения
EXPOSE 3001

# Запускаем Next.js приложение при старте контейнера
CMD ["npm", "run", "start"]