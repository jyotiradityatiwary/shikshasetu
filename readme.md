# Shikshasetu

HackX2.0 Project

## Overview

Platform for connecting NGOs and other volunteer organisations with schools.

Volunteer organisations can:
    - create a profile
    - upload the topics the want to teach alongwith a detailed description
    - specify locations where they would like to teach

Schools can:
    - create a profile
    - set their locations
    - based on their location, get a dynamically generated list of volunteer orgnaisations willing to teach there, alongwith topics they are offering
    - clicking on an offerred topic, they get it's detailed description and contact information of the volunteer

#### Dependencies

- Node JS
- My SQL
- Any web browser

## Development Setup

After installing the basic dependencies, clone this repo and run the following command to install all node dependencies

```sh
npm install
```

You will also need to set up a MySQL databse with the following specification :

    host: 'localhost',
    user: 'root',
    password: 'tiger',
    database: 'ShikshaSetu'


## Running

At root folder of repo, run:

```sh
export SESSION_SECRET='your_secret_string'
node index.js
```
