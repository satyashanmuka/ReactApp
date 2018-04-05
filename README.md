Prerequisites:
   Install git tool https://desktop.github.com/
   Install Docker software on your machine https://www.docker.com/community-edition
   
steps to run the project:
1) clone the repository
2) From project root folder,run below docker commands:
   a) Build docker image 
      docker build -t sample-app .
   b) Get a running docker container using docker image built in above step
      docker run -it   -v ${PWD}:/usr/src/app   -v /usr/src/app/node_modules   -p 3000:3000 --rm sample-app
3) Open your browser to http://localhost:3000/ and you should see the app
   
