# express_Sequelize_RESTfulAPI_ParameterizedRoute
An express app connecting to mySQL database and implementing RESTful API to return specific id data from a GET request in Postman.

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RESTfulAPI_ParameterizedRoute: 

    express --view=hbs express_Sequelize_RESTfulAPI_ParameterizedRoute

(6) Once the process is complete, navigate into the express_Sequelize_RESTfulAPI_ParameterizedRoute directory: 

    cd express_Sequelize_RESTfulAPI_ParameterizedRoute
    
(7) Now in the express_Sequelize_RESTfulAPI_ParameterizedRoute directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RESTfulAPI_ParameterizedRoute directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and require mysql2 and models in routes/index.js file.: ![Require mysql2 in routes-index js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379820-fe46c780-18ff-11ea-814c-f85084322ee7.JPG)

COMMAND PROMPT

(14) Create necessary sequelize folders and files in project.:

    sequelize init

(15)  Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t film,actor,film_actor
    
VS CODE

(16) Create a new folder in your "models" folder called rel. Create a file in your rel folder called associations.js and define the relationships between the "film" and "actor" models in this file.: ![In the models folder create a rel folder and a associations js file in the rel folder (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379828-2a624880-1900-11ea-94e2-66901444b01a.JPG)

![Update the associations js file in the rel folder (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379856-5da4d780-1900-11ea-90d2-a7f3fc505923.JPG)

(17) In the models/index.js file add associations constant: ![Add associations constant to models-index js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379868-8cbb4900-1900-11ea-98c9-7b75bad153f7.JPG)

(18) At the bottom of the models/index.js file add the call to associations function.: ![Add call to associations function to models-index js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379877-ae1c3500-1900-11ea-9830-4bf67485b816.JPG)

(19) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379882-d310a800-1900-11ea-8817-8e6e03a64854.JPG)

(20) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Require models in app js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379891-2551c900-1901-11ea-869a-4ce3d7feba0a.JPG)

(21) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: ![Add models sequelize sync in app js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379906-62b65680-1901-11ea-9447-729b168b99a3.JPG)

(22) In the routes/index.js file require the models.: ![Require models in routes-index js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379920-92655e80-1901-11ea-9bbf-57412758171c.JPG)

(23) In the routes/index.js file add get() route for /actors that will use the findAll() method.: ![Add get() route for actors in routes-index js file (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379957-fe47c700-1901-11ea-8c4d-82d85ca851c1.JPG)

COMMAND PROMPT

(24) Run nodemon in terminal to see DB sync'd up: 

    nodemon

POSTMAN

(25) Navigate to localhost3000/actors in Postman and perform a GET request to view data.: ![Perform a GET request for localhost3000 - actors in POSTMAN to view data (Sequelize_RESTfulAPI_SpecifyColumnsToReturn)](https://user-images.githubusercontent.com/35668707/70379966-2505fd80-1902-11ea-9b3a-be21cc58ff7d.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
