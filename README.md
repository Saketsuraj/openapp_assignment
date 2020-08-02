# Openapp assignment

Magento setup -

Basic requirements-

1. PHP Version >7.0.0 <7.2.0
2. Composer should have been installed
3. Inside the root directory, run this command (LAMP or MAMP user) - “composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.3.0 .”
4. Provide credentials received from Magento marketplace, all the modules will be installed.
5. Create a database on the server, lets say it “openapp”
6. Open http://127.0.0.1/openapp/ on browser to setup Magento, provide all the details including the created database name.
7. Open the provided admin link on browser. Provide the credentials to login.
8. Add dummy categories and dummy products under those categories.

NodeJs Wrapper using ExpressJs Framework -

1. Install NodeJs
2. Install Express globally - npm install -g express
3. Download this repo
4. Open config/config.js
5. Provide the magento configuration in config.js, like magento server base url, admin username, admin password
6. Run “npm start” in the root folder
7. Open this URL in postman or any other client - http://localhost:3000/products/all (Use the port accordingly). - This will provide the list of Products
