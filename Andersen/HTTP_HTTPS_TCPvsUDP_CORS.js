// * HTTP
// HTTP - HyperText Transfer Protocol, is an abstract layer protocol, the functions of HTTP are request-response concepts in the client-server structure.
// Methods of requests:
// OPTIONS - using for server's features defenition or connection's options for some source.
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
// TRACE - returns request, that person can watch information, which servers change or add.
// ---
// * HTTPS
// HTTPS - HyperText Transfer Protocol Secure, HTTP protocol extension to support encryption for better security.
// ---
// * HTTP Headers
// There are 4 groups of http header.
// General Headers - can be included in any server's or client's message.
// Request Headers - using only in client's requests.
// Response Headers - using only in server's responses.
// Entity Headers - accompany each message entity.
// ---
// * Status Codes
// 1xx - information
// 2xx - success of transaction
// 3xx - redirection
// 4xx - errors on client side
// 5xx - errors on server side
// Examples:
// 200 - successful request
// 400 - wrong input data of request
// 401 - unauthorized access
// 404 - lack of URI
// 405 - request's method is not supported
// 500 - server error
// 507 - storage overflow
// 527 - timeout exceeded
// ---
// * TCP vs UDP
// TCP - Transport Control Protocol, is a protocol, which needs to start connection between 2 hosts. This protocol has a high secure, because doesn't miss some transfer data, asks for confirmation of receipt from the receiving data and, if necessary, sends the data again. Sending data segments save sending order. The main problem is speed of sending data.
// UDP - User Datagram Protocol, is a more simple protocol. The data transfer does not have to establish a connection between the sender and the recipient. Information is transmitted without first checking the readiness of the receiving side. This makes the protocol less reliable - some data fragments may be lost during transmission. In addition, the ordering of data is not respected - inconsistent reception of data by the recipient is possible. On the other hand, the data transfer speed of this transport protocol will be higher.
// * CORS
// CORS - Cross-Origin Resource Sharing, it is security mechanism, which uses HTTP-Headers for giving user's capability to allow accesses from some sources.   