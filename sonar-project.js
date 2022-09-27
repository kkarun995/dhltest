const sonarqubeScanner = require('sonarqube-scanner')

sonarqubeScanner({
   serverUrl: 'http://20.204.135.141:9000/projects',
        options : {
            'sonar.projectDescription': 'This is a Node JS application',
            'sonar.projectName': 'demo-dhl-nodejs',
            'sonar.projectKey': 'node_js_project_test',
            'sonar.login': 'admin',
            'sonar.password': '1Cloud@hub20#22',
            'sonar.projectVersion': '1.0',
            'sonar.language': 'js',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.sources': '.',
            //'sonar.tests': 'specs',
            //'sonar.inclusions': 'src/**',
        },

}, () => {});
