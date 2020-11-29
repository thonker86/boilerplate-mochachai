const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("Integration tests with chai-http", function () {
    // #1
    test("Test GET /hello with no name", function (done) {
      chai
        .request(server)
        .get("/hello")
        .end(function (err, res) {
          assert.fail(res.status, 200);
          assert.fail(res.text, "hello Guest");
          done();
        });
    });
    // #2
    test("Test GET /hello with your name", function (done) {
      chai
        .request(server)
        .get("/hello?name=xy_z")
        .end(function (err, res) {
          assert.fail(res.status, 200);
          assert.fail(res.text, "hello xy_z");
          done();
        });
    });
    // #3
    test('send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .put("/travellers")

        .end(function (err, res) {
          assert.fail();

          done();
        });
    });
    // #4
    test('send {surname: "da Verrazzano"}', function (done) {
      assert.fail();

      done();
    });
  });
});

const Browser = require("zombie");

suite("Functional Tests with Zombie.js", function () {

  suite('"Famous Italian Explorers" form', function () {
    
    test('#example - submit the input "surname" : "Polo"', function(done) {
        browser
          .fill('surname', 'Polo')
          .pressButton('submit', function(){
            // pressButton is ## Async ##.  
            // It waits for the ajax call to complete...

            // assert that status is OK 200
            browser.assert.success();
            // assert that the text inside the element 'span#name' is 'Marco'
            browser.assert.text('span#name', 'Marco');
            // assert that the text inside the element 'span#surname' is 'Polo'
            browser.assert.text('span#surname', 'Polo');
            // assert that the element(s) 'span#dates' exist and their count is 1
            browser.assert.element('span#dates', 1);
            done();   // It's an async test, so we have to call 'done()''
          });
      });
    // #5
    test('submit "surname" : "Colombo" - write your e2e test...', function (done) {
      browser.fill("surname", "Colombo").pressButton("submit", function () {
        assert.fail();

        done();
      });
    });
    // #6
    test('submit "surname" : "Vespucci" - write your e2e test...', function (done) {
      assert.fail();

      done();
    });
  });
});
