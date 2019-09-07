## Instructions

-To run this web application, please enable accessing of location.

-For mobile devices, please enable GPS to access location

## Environment Variables

This web application project uses environment variables for it to run properly. 
The project uses two variables namely: REACT_APP_DARK_SKY_SECRET_KEY and REACT_APP_GOOGLE_MAP_KEY

Create a '.env' file in the root directory of the project after cloning. Then use copy-paste the following inside the newly created file

REACT_APP_DARK_SKY_SECRET_KEY = XXXXXXXXXXXXXXXXXXXXXX
REACT_APP_GOOGLE_MAP_KEY = XXXXXXXXXXXXXXXXXXXXXX

Replace the XXXXXXXXXXXXXXXXXXXXXX with the corresponding keys from Dark Sky API and Google Maps API

### Dark Sky API Secret Key

Go to https://darksky.net/dev then sign up. After confirmation, you will be given a secret key then paste it on the .env file

### Google Map Key

Go to http://console.cloud.google.com/ then log-in with your Google account. On the dashboard, click the dropdown menu next to the Google Cloud Platform text in the header and choose New Project. After creating one, navigate to the project dashboard. Click the Library nav on the left then search and enable the following

 - Maps Javascript API
 
 - Places API
 
 - Directions API
 
 - Geocoding API
 
 - Geolocation API
 
 After adding the APIs, navgiate to the credentials link on the left navbar then click the "create credentials" button. Copy the generated key and paste it on the .env file created in the root directory
 
 ## NPM Scripts
 
 The following are used to run scripts for the project 
 
 ### npm start
 
 To run the project, type this command on the terminal
 
 ### npm run build
 
 To build the project for production, type this command on the terminal
 
 
