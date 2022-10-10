FROM python:3.7

RUN apt-get update && apt-get -y install libgl1

RUN mkdir -p /home/app
WORKDIR /home/app

COPY requirements.txt ./
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0"]