import "mocha";
import * as chai from "chai";
const expect = chai.expect;
import ImageDatabase from "../../src/model/ImageDatabase";

describe("ImageDatabase test", () => {
  let db: ImageDatabase;
  before(async () => {
    db = new ImageDatabase({database: "image_db"});
    await db.connect();
    await db.Images.remove({}); // drop DB
    await db.Images.create(
      [
        {path: "img1.jpg", extension: "jpg", mimetype: "image/jpg"},
        {path: "img2.png", extension: "png", mimetype: "image/png"},
        {path: "img3.svg", extension: "svg", mimetype: "image/svg+xml", metadata: {width: 300, height: 400}},
      ],
    );
  });
  describe("runtime environment", () => {
    it("should not fail initial configuration", () => {
        expect(-1).to.be.equal(-1);
        expect("success").to.be.a("string").and.equal("success");
    });

  });
  describe("ImageDatabase", () => {
    it("should have 3 elements initially", async () => {
      const count = await db.Images.count();
      expect(count).to.be.equal(3);
    });
    it("should findOne element with image path of 'img1.jpg'", async() => {
      const img1 = await db.Images.findOne({path: "img1.jpg"});
      expect(img1).to.have.property("path");
      expect(img1.path).to.be.equal("img1.jpg");
      expect(img1).to.have.property("extension");
      expect(img1.extension).to.be.equal("jpg");

    });
  });

  describe("ImageDocument", () => {
    it("should not have a metadata property unless defined", async () => {
      const img1 = await db.Images.findOne({path: "img1.jpg"});
      const img3 = await db.Images.findOne({path: "img3.svg"});
      // console.log("metadata", img1.metadata);
      expect(img1.metadata).to.be.undefined;
      expect(img3).to.have.property("metadata");
      expect(img3.metadata.width).to.be.equal(300);
      expect(img3.metadata.height).to.be.equal(400);
    });
  });
});
