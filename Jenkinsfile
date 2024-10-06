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
          sh 'docker build -t lehuudouit/jekin-demo:v1.0 .'
          sh 'docker push lehuudouit/jekin-demo:v1.0'
        }
      }
    }

  // post {
  //   always {
  //     echo 'Cleaning up Docker containers...'
  //     sh 'docker container prune -f'
  //   }
  // }
  }
}