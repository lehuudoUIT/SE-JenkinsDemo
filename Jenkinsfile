pipeline {
  agent any

      environment {
        DOCKERHUB_CREDENTIALS = credentials('lehuudouit-dockerhub') // replace with your credentials ID
        IMAGE_NAME = 'lehuudouit/jekin-demo:v1.0' // replace with your image name
        GIT_BRANCH = 'master' // specify your branch
    }


  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/lehuudoUIT/SE-JenkinsDemo.git'
      }
    }

    stage('Build Docker Image') {
      steps {
          script {
              dockerImage = docker.build("${IMAGE_NAME}:${GIT_BRANCH}")
          }
      }
    }


    stage('Push Docker Image') {
      steps {
          script {
              docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                  dockerImage.push("${GIT_BRANCH}")
              }
          }
      }
    }
    // stage('Build and push to dockerhub') {
    //   steps {
    //     withDockerRegistry(credentialsId: 'lehuudouit-dockerhub', url: 'https://index.docker.io/v1/') {
    //       sh 'docker build -t lehuudouit/jekin-demo:v1.0 .'
    //       sh 'docker push lehuudouit/jekin-demo:v1.0'
    //     }
    //   }
    // }

  // post {
  //   always {
  //     echo 'Cleaning up Docker containers...'
  //     sh 'docker container prune -f'
  //   }
  // }
  }
}