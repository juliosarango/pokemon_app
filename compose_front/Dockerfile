FROM node:20
COPY /app/front/ /app
WORKDIR /app
RUN ls -al
RUN npm install && \
    mv .env.local.example .env.local && \
    chmod +x start_front.sh    
CMD ["./start_front.sh"]
EXPOSE 3000

