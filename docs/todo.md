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
# Backend

### Server

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
