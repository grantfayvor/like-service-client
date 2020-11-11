# Like Service Frontend Client

> Frontend service to implement a reusable like button available to users on various pages.

### __Installation__
* Clone the repository on [Github](https://github.com/grantfayvor/like-service-client)
* Change directory into the project folder
* Run ```npm install``` to install dependencies

### __How to Run__
You can run the app either as a local server or with Docker.
* #### Local Server
> Run the project by typing the command ```npm start``` in terminal and pressing enter.
* #### Docker
> After making sure that docker is properly installed on your system build the image with the command below

>```docker build -t like-service-client:latest .```

>Run the image with the command below

>```docker run --publish 4000:4000 --name like-service-client like-service-client:latest```