# Despliegue de Airflow-Mongodb-MongoExpress-Jupyter
Despliegue en docker para trabajar flujos de trabajos con airflow como creador de flujos, mongodb como almacenamiento y jupyter como notebooks de procesos.

0) actualizamos el sistema.

command:
sudo apt update && sudo apt upgrade -y

1) creamos un directorio o carpeta que se llame "proyecto_ra"

command:
mkdir -p proyecto_ra && cd proyecto_ra
----------------------------------------------------------------

2) dentro de la carpeta creada, creamos las carpetas dags, logs, plugins config notebooks  y notebooks/output
tambien le damos permisos de acceso

command:
mkdir -p dags logs plugins config notebooks notebooks/output
chmod 777 dags logs plugins config notebooks notebooks/output
----------------------------------------------------------------

3) crear los archivos docker-compose .env y init-mongo.js dentro de la carpeta

command:
touch docker-compose.yml .env init-mongo.js
----------------------------------------------------------------

4) copiamos y pegamos los datos del docker-compose que se hizo y lo mismo del .env y del init-mongo.js

command:
sudo nano docker-compose.yml
sudo nano .env
sudo nano init-mongo.js

guardamos con ctrl+O, damos enter y luego salimos con ctrl+x, esto mismo repetimos para .env
----------------------------------------------------------------

5)desplegamos:

command:
(Op1 mas recomendable) sudo docker-compose up -d --build

(Op2 se puede usar solo que es en serie) sudo docker-compose build && sudo docker-compose up -d

6) añadir la conexion de mongodb a airflow despues de haber instalado

command:
sudo docker exec proyecto_ra_airflow-webserver_1 airflow connections add 'mongodb' \
  --conn-type 'mongodb' \
  --conn-host 'mongodb' \
  --conn-port 27017 \
  --conn-login 'root' \
  --conn-password 'Llakcolnu1989' \
  --conn-extra '{"authSource": "admin"}'

