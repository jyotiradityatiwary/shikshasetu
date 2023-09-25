# Frontend

- [x] "/" choose : volunteer or school
- [x] "/volunteer" - registration/login for organisation
    - [x] information collected at registration : email, password, contact info (visible to schools)
    - [x] topics
    - [x] select preffered location / cities
    - [x] select specific schools to apply (optional)
- [x] "/school" - register/login for schools
    - [x] info collected during registration: email, password, name, location
    - [x] volunteer org applications
    - [x] view topics available in that location
    - [x] contact volunteer org

### Pages

- [x] **Select** volunteer org / school
- [x] **Login** page template for vol org / school. should ask for username, password + logim button
- [x] **Registration** page : ask for email, password, name + submit button
    - [x] for volunteer org - ask for phone number. display that contact info will be visible to schools
    - [x] for school - enter location *(how?)*
 - [x] **Volunteer Org Default Page** - shows the following sections, each section should button to add topics. each entry in these section should have a delete button/icon :
    - [x]  teaching topics
    - [x]  preffered locations / cities
- [x] **School : Default Page** - shows one section - list of topics & volunteer. each entry should have a select button
- [x] **School : Get Contact Info Page** - one section. shows volunteer org name, email, phone number

# Backend

### Server

- [x] endpoints
    - [x] "/"
    - [x] "/volunteer"
        - check if user is logged in. if not, serve login page, which also links to register page. on clicking login button, refresh the page
        - if logged in, serve default view for volunteers
    - [x] "/school"
        - check if user is logged in. if not, serve login page, which also links to register page. on clicking login button, refresh the page
        - if logged in, serve default view for volunteers

### Database setup

- [x] Table for volunteer orgs with columns
    - index/id
    - email
    - password (hashed)
    - phone
    - Name
    - Desxriptiion
    - teaching topics
    - preferred locatioms
- [x] Table for schools
    - index/id
    - email
    - password (hashed)
    - name
    - location
