# HEIOT
HEIOT is an IoT platform to manage IoT devices and their delivered data.
The user can overlook all devices in lists grouped by the actual condition distinguishing between the need of the platform's manager to take further actions. The user is enabled to create tags and masterdata by her-/himself in order to group the devices semantically.
Moreover, there is a detailed view of each device where all data is displayed and visualized by interactive charts and tables.
The platform also includes an analytical service to detect anomalies in the device's data.

HEIOT was a project ("ISE project") implemented by a group of students from the University of Heidelberg.

## Setting up HEIOT

### Deploying the platform

To deploy HEIOT please follow instructions from <https://github.com/HEIOT/ise_2019_deployment>

### Starting the platform locally

1. [Set up docker based development environment] (https://github.com/HEIOT/ise_2019_dev_infra)
2. Start application

    ```bash
    npm run docker-up
    ```
3. In your browser go to http://ise.local/

## Tooling

For a smooth developing experience, it is recommended to use VS Code. Install the following VS Code plugins for code formatting and linting:

-   Prettier (by Esben Petersen)
-   TSLint (by Microsoft)
-   Vetur (by Pine Wu)

## Airquality Data

For the first release the use case of airquality data was implemented. This repository is an example of how to build a crawler and feed the application data.
The airquality data is drawn from <https://waqi.info/#/c/48.827/8.978/8.3z>
It is necessary to get API credentials and respect the usage restrictions.

An API Token and a URL to send the data to, are necessary.
These values must be supplied via environment Variables.

- ```BASEURL``` URL the baseurl the data will be send to. Protocoll (https://) and Endpoint (/api/publisher/addDataDirectly) must be ommitted.
- ```APITOKEN``` Valid token for https://api.waqi.info/feed