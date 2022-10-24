const request = require("supertest");
const app = require("./app");
const mockInsight = require('./models/mockInsight')

describe("Push Notifications API", () => {
  it('responds with json', function(done) {
    request(app)
      .post('/')
      .send(mockInsight)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("should POST / --> a succesful OneSignal response", () => {
    return request(app)
      .post("/")
      .send(mockInsight)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(String),
                recipients: expect.any(Number),                
            })
        )
      })
  });

  it("should POST / --> an unsuccesful OneSignal response", () => {
    return request(app)
      .post("/")
      .send({})
      .expect("Content-Type", /json/)
      
      .then((res) => {
        expect(400)
      })
  });
});
