// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendslist data
// ===============================================================================

var friendsListData = require("../data/friendslistData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

app.get("/api/friendslist", function(req, res) {
    res.json(friendsListData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a friend survey... this data is then sent to the server...
  // Then the server saves the data to the friendlistData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friendslist", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know about a friend match.
    // It will do this by sending out the value "true" have a friend
    // req.body is available since we're using the body parsing middleware
   res.json(friendsListData);

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendListData.length = [];

    res.json({ ok: true });
  });
};
