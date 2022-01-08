pipeline {
  agent {
    docker {
     image 'node:6-alpine'
     args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build and Test') {
      parallel {
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
        stage('Run Tests') {
          steps {
            sh 'npx test'
          }
        }
    }
}
         
