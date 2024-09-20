## Despliegue de Airflow, Mongodb, Mongo-Express y Jupyter
Despliegue en docker para trabajar flujos de trabajos con airflow como creador de flujos, mongodb como almacenamiento y jupyter como notebooks de procesos.

## <h3>Requerimientos minimos del sistema.</h3> 
- 2 nucleos.
- 4 GB Ram.
- 30 GB de Almacenamiento.
- OS Linux Ubuntu LTS 20.4
- Ultima version de docker y docker-compose

## Proceso de despliegue
<h4>Clonamos repositorio en la carpeta de despliegue.</h4> 

Nota: hacer ajuste si se cambia el nombre del directorio "proyecto_ra" por otro nombre

```bash

sudo apt update && sudo apt upgrade -y && \
mkdir -p proyecto_ra && cd proyecto_ra && \
git clone https://github.com/albinstein/docker_airflow_mongo_jupyter.git
```
<h4>Creamos las carpetas de las dependencias con sus respectivos permisos.</h4>

```bash
mkdir -p dags logs plugins config notebooks notebooks/output
chmod 777 dags logs plugins config notebooks notebooks/output
```
<h4>(Opcional) Si deseamos ajustar alguna variable de entorno.</h4>

```bash
sudo nano docker-compose.yml
sudo nano .env
sudo nano init-mongo.js
# guardamos con ctrl+O, damos enter y luego salimos con ctrl+x, esto mismo repetimos para los demas
```

<h4>Despliegue</h4>

```bash
#(Op1 mas recomendable) 
sudo docker-compose up -d --build

#(Op2 se puede usar solo que es en serie) 
sudo docker-compose build && sudo docker-compose up -d
```

<h4>(Opcional) Si deseamos agregar el acceso de MongoDB a airflow.</h4>

```bash
sudo docker exec proyecto_ra_airflow-webserver_1 airflow connections add 'mongodb' \
  --conn-type 'mongodb' \
  --conn-host '192.168.1.73' \
  --conn-port 27017 \
  --conn-login 'root' \
  --conn-password 'Llakcolnu1989'
```

<h4>Eliminacion de todos los contenedores del sistema en docker.</h4>

Si el sistema esta corriendo y no tienes otros contenedores diferentes al despliegue, haz uso de este codigo, sino utilizalo para las secciones que creas convenientes. Requiere mas destresa en docker.

```bash
sudo docker stop $(sudo docker ps -aq) && \
sudo docker rm $(sudo docker ps -aq) && \
sudo docker rmi $(sudo docker images -aq) && \
sudo docker network prune -f && \
sudo docker volume prune -f && \
sudo docker system prune -a -f && \
sudo docker volume rm $(sudo docker volume ls -q)
```