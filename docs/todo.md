# Frontend

- [ ] "/" choose : volunteer or school
- [ ] "/volunteer" - registration/login for organisation
    - [ ] information collected at registration : email, password, contact info (visible to schools)
    - [ ] topics
    - [ ] select preffered location / cities
    - [ ] select specific schools to apply (optional)
- [ ] "/school" - register/login for schools
    - [ ] info collected during registration: email, password, name, location
    - [ ] volunteer org applications
    - [ ] view topics available in that location
    - [ ] contact volunteer org

### Pages

- [ ] **Select** volunteer org / school
- [ ] **Login** page template for vol org / school. should ask for username, password + logim button
- [ ] **Registration** page : ask for email, password, name + submit button
    - [ ] for volunteer org - ask for phone number. display that contact info will be visible to schools
    - [ ] for school - enter location *(how?)*
 - [ ] **Volunteer Org Default Page** - shows the following sections, each section should button to add topics. each entry in these section should have a delete button/icon :
    - [ ]  teaching topics
    - [ ]  preffered locations / cities
- [ ] **School : Default Page** - shows one section - list of topics & volunteer. each entry should have a select button
- [ ] **School : Get Contact Info Page** - one section. shows volunteer org name, email, phone number

# Backend

### Server

- [ ] endpoints
    - [ ] "/"
    - [ ] "/volunteer"
        - check if user is logged in. if not, serve login page, which also links to register page. on clicking login button, refresh the page
        - if logged in, serve default view for volunteers
    - [ ] "/school"
        - check if user is logged in. if not, serve login page, which also links to register page. on clicking login button, refresh the page
        - if logged in, serve default view for volunteers

### Database setup

- [ ] Table for volunteer orgs with columns
    - index/id
    - email
    - password (hashed)
    - phone
    - Name
    - Desxriptiion
    - teaching topics
    - preferred locatioms
- [ ] Table for schools
    - index/id
    - email
    - password (hashed)
    - name
    - location
