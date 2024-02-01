## Lesson
    -> Create app as FrontEnd

1.remove git form front end and create git from source folder.
    command like - rm -r .git

2.List foods
    1.Create Food model
    2.Create data.ts
        1.Add Sample food
    3.Add images to assets
    4.Create Food service
    5.Create Home component
        1.Add ts,html,css

3.Search
    1.Add method to food service
    2.Add search route
    3.Show search result in home component
    4.Generate search component
        1.Add to home component
        2.Add ts,html,css

4.Food Page
    1.Add method to food service
    2.Generate food page component
    3.Add route
    4.Add ts,html,css

5.Tags Bar
    1.Create tag model
    2.Add simple tag to data.ts
    3.Food Service
        1.Add get all tags method
        2.Add get all foods by tag method
    4.Add tags route
    5.Show tag result in home component
    6.Generate tags component
        1.Add to home component
        2.Add ts,html,css

6.Cart Page
    1.Create CartItem Model
    2.Create Cart Model
    3.Generate Cart Service
    4.Add to Cart button in Food Page
    5.Generate Cart page Component
        1.Add route
        2.Add ts,html,css

7.Not Found
    1.Generate Component
        1.Add ts,html,css
    2.Add to pages
        1.Home,Food,Cart page

8.Connect to backend
    1.Create backend folder
    2.npm init
    3.npm install typescript
    4.Create tsconfig.json
    5.Create .gitignore
    6.Copy data.ts to backend/src
    7.npm install express cors
    8.Create server.ts
        1.install @types
        2.Add apis
    9.npm install nodemon
    10.Add url.ts to frontend
    11.Add http client module
    12.Update food service
    
9.Login Page
    1.Generate Component
        1.Add to routes
        2.Add ts
        3.Add html
            1.Import Reactive Forms
        4.Add css
    2.Add Login Api
        1.Use json
        2.Add jsonwebtoken
        3.Test Using Postman
    3.Generate User Service
        1.Generate user model
        2.Add User Subject
        3.Add Logiin Method
            1.Add user urls
            2.Generate IUserLogin interface
            3.Add ngx-toastr
                1.Import Module
                2.Import BrowserAnimationsModule
                3.Add styles in angular.json
            4.Add to Header
                1.Add local storage methods
                2.Add logout method
10.Make Components For Login Page
    1.Input Container
    2.Input Validation
    3.Text Input
    4.Default Button
11.Connect Login API To MongoDB Atlas
    1.Moving Apis into routers
    2.Create MongoDB Atlas
    3.Create .env file
    4.Install
        1.mongoose
        2.dotenv
        3.bcryptjs
        4.jsonwebtoken
        5.express-async-handler
    5.Connect to MongoDb Atlas
    6.user MongoDB instead of data.ts iin apis
12.Register User
    1.Add register Api
    2.Add register service method
    3.Add register link
    4.Add register component

13.Loading!
    1.Add Image
    2.Add Component
    3.Add Service
    4.Add Intercepter

14.Checkout Page
    1.Create Order Model
    2.Create Checkout Page Component
        1.Add to Router
    3.Add User to User Service
    4.Add cart to cart Serice
    5.Create Order Items List Component
    6.Adding Map to the checkout page
        1.Add Leaflet npm package
            1.Add @types/leaflet
            2.Add Css to angular.json
        2.Add AddressLatlng to Ordder Model
        3.Create Map component
            1.Add to checkout page
            2.Add TS
                1.Change app-map selector to map
            3.Add Html, css
        4.Add Auth Guard
    7. Save Order
        1.Add Ordder Model
        2.Add Order Status Enum
        3.Add Auth Middleware
        4.Add Order Router
            1.Add create API
        5.Add Order Urls to urls.ts
        6.Add Order Service
            1.Add create Method
        7.Add Auth Interceptor

    8.Payment Page
        1.Generate Component
        2.Add 'getOrderForCurrentUser' api
        3.Add Order Service method
        4.Connect Component to Service
        5.Make the map component readonly
15. Adding Paypal
    1.Generate Component
        1.Add to payment page
    1.Get Paypal client Id
    3.Add paypal js to index.html
    4.Set up Paypal button
    5.Add Pay api to order router
    6.Get Paypal sandbox account               