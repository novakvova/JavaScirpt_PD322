# Create react app in docker

Create docker hub repository - publish
```
docker build -t pd322-api . 
docker run -it --rm -p 5089:8080 --name pd322_container pd322-api
docker run -d --restart=always --name pd322_container -p 5089:8080 pd322-api
docker ps -a
docker stop pd322_container
docker rm pd322_container

docker images --all
docker rmi pd322-api

docker login
docker tag pd322-api:latest novakvova/pd322-api:latest
docker push novakvova/pd322-api:latest

docker pull novakvova/pd322-api:latest
docker ps -a
docker run -d --restart=always --name pd322_container -p 5089:8080 novakvova/pd322-api


docker pull novakvova/pd322-api:latest
docker images --all
docker ps -a
docker stop pd322_container
docker rm pd322_container
docker run -d --restart=always --name pd322_container -p 5089:8080 novakvova/pd322-api
```

```nginx options /etc/nginx/sites-available/default
server {
    server_name   pd322.itstep.click *.pd322.itstep.click;
    location / {
       proxy_pass         http://localhost:5089;
       proxy_http_version 1.1;
       proxy_set_header   Upgrade $http_upgrade;
       proxy_set_header   Connection keep-alive;
       proxy_set_header   Host $host;
       proxy_cache_bypass $http_upgrade;
       proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header   X-Forwarded-Proto $scheme;
    }
}

sudo systemctl restart nginx
certbot
```



