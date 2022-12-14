# E-Heza-FHIR Project

## Introduction
This project demonstrates how a web application can make use of the FHIR standard.  
FHIR (Fast Healthcare Interoperabilty Resources) is a stand for the storing and sharing  
data in the health sector. This project aims to show how this can be done in an application.  
The Application will be using the [Hapi FHIR Server](https://hapifhir.io/) which is an  
opensource FHIR server that can be used to test FHIR resources.

## Technical Stack
* [React](https://reactjs.org/)
* [FHIR](https://www.hl7.org/fhir/overview.html)
* [Docker](https://www.docker.com/)
* [Node](https://https://nodejs.org/en/)

### Installation
Install [Docker](https://www.docker.com/) and [Node](https://https://nodejs.org/en/)  

### Getting Started
1. Clone the repository
2. In the project directory, run `npm install` to download the node modules
3. There is a yml file that contains the files to run an instance of hapifhir and  
a postgres database. Run `docker-compose up` to get server hapifhir and postgres 
up and running.
4. Check Docker to see the address at which the hapifhir server is running. Update the address in the code.
5. Run `npm run start` to start the React Application.
