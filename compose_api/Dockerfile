FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY app/api/ .
RUN python3 -m pip install --upgrade pip && \
    pip install -r requirements.txt && \    
    chmod +x start_api.sh
CMD ["./start_api.sh"]
EXPOSE 8000

