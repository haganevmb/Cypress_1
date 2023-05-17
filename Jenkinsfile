pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "agente"
                    }
                    steps {
                        git url: 'https://github.com/haganevmb/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "agente1"
                    }
                    steps {
                        git url: 'https://github.com/haganevmb/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "agente2"
                    }
                    steps {
                        git url: 'https://github.com/haganevmb/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}