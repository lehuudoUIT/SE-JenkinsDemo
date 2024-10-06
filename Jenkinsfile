pipeline {
  agent any

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/lehuudoUIT/SE-JenkinsDemo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Unit Tests') {
      steps {
        sh 'npm test'
      }
    }

    // stage('Build Docker Image') {
    //   steps {
    //     sh 'docker build -t sum-app .'
    //   }
    // }

    // stage('Run Docker Container') {
    //   steps {
    //     sh 'docker run -d -p 3000:3000 sum-app'
    //   }
    // }
  }

  // post {
  //   always {
  //     echo 'Cleaning up Docker containers...'
  //     sh 'docker container prune -f'
  //   }
  // }
}
