pipeline {
  agent any
  
  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/lehuudoUIT/SE-JenkinsDemo.git'
      }
    }

    stage('Build and push to dockerhub') {
      steps {
        withDockerRegistry(credentialsId: 'lehuudouit-dockerhub', url: 'https://index.docker.io/v1/') {
          //* Build image
          sh 'docker build -t lehuudouit/jekin-demo:v1.1 .'
          //* Push image to docker hub
          sh 'docker push lehuudouit/jekin-demo:v1.1'
        }
      }
    }
  }
}