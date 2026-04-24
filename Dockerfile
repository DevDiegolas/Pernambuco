# Imagem oficial leve do Node.js
FROM node:20-alpine

# Pasta de trabalho dentro do container
WORKDIR /app

# Copia dependências primeiro (cache do Docker)
COPY package*.json ./

# Instala libs
RUN npm install

# Copia o resto do código
COPY . .

# Porta padrão do Vite
EXPOSE 5173

# --host libera o acesso de fora do container
CMD ["npm", "run", "dev", "--", "--host"]
