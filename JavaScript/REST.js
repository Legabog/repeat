// REST Representational State Transfer

// Architecture type between client-server structure
// Abstract layer
// Represents requests throught HTTP - protocol
// Server side returns data with type JSON / XML / HTML
// Client side could be as mobile application / desctop application / web application (browser, site, spa)
// AJAX - Asynchronous JavaScript and XML directly requests to server

// Data format of response must be standarted in your project
// Important to find сompromise between requests and responses
// Best case is less requests and more responses

// Basic mistakes of creating REST API
// Creating API without actual documentation
// Lack of tests
// Defining the data format in your project

// Simple rules of making corrections in API
// You couldn't edit endpoint - route, when your endpoint in production version of application
// If you truly need to do it, you can have different versions of api with different actions
// OLD API: /api/some-route/
// NEW API: /api/v2/some-route/

// What does REST give to us
// Scalability of system interactions
// Genereal interface of application
// Independent components

// Methods of requests
// GET - geting some object or objects
// GET /api/users/55
// POST - creating new object
// POST /api/users/
// PUT - full changing some object
// PUT /api/users/55
// PATCH - part changing some object
// PATCH /api/users/55
// DELETE - deleting current object
// DELETE /api/users/55
// HEAD - complete some other action
// HEAD /api/logout

// CODES OF RESPONSES
// 1xx - information
// 2xx - success of transaction
// 3xx - redirection
// 4xx - errors on client side
// 5xx - errors on server side
// 
// Examples:
// 200 - successful request
// 400 - wrong input data of request
// 401 - unauthorized access
// 404 - lack of URI
// 405 - request's method is not supported
// 500 - server error
// 507 - storage overflow
// 527 - timeout exceeded

// RESTful system conditions:
// Client-Server structure
// Stateless 
// Cashe
// Uniform Inteface
// Layered System
// Code - On - Demand

// Idempotency