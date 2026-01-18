# ---------- Frontend build ----------
FROM node:18 AS frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# ---------- Backend ----------
FROM python:3.11-slim
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Vite build çıktısını Django static'e taşı
COPY --from=frontend-build /frontend/dist /app/frontend/dist

RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "psychologist_site.wsgi:application", "--bind", "0.0.0.0:8000"]
