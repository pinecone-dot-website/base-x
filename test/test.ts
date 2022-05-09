import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";

import { BaseX } from "../src/base_x";

chai.use(chaiAsPromised);
const Base = new BaseX();

describe("#covertions", () => {
  it("should convert 1001 in base 2 to 9 in base 10", () => {
    return expect(Base.convert("1001", "BASE2", "BASE10")).to.eventually.equal(
      "9"
    );
  });

  it("should convert 9 in base 10 to 1001 in base 2", () => {
    return expect(Base.convert("9", "BASE10", "BASE2")).to.eventually.equal(
      "1001"
    );
  });

  it("should convert 10 in base 10 to A in base 62", () => {
    return expect(Base.convert("10", "BASE10", "BASE62")).to.eventually.equal(
      "A"
    );
  });

  it("should convert A in base 62 to 10 in base 10", () => {
    return expect(Base.convert("A", "BASE62", "BASE10")).to.eventually.equal(
      "10"
    );
  });

  it("should convert 62 in base 10 to A in base 62", () => {
    return expect(Base.convert("62", "BASE10", "BASE62")).to.eventually.equal(
      "10"
    );
  });

  it("should convert 10 in base 62 to 62 in base 10", () => {
    return expect(Base.convert("10", "BASE62", "BASE10")).to.eventually.equal(
      "62"
    );
  });

  // @see https://www.uuidtools.com/what-is-uuid#format
  // @see https://www.uuidtools.com/decode
  it("should convert uuid to decimal", async () => {
    return expect(
      Base.convert("04eac7f0-cf4a-11ec-8fba-8399dd767c81", "UUID", "BASE10")
    ).to.eventually.equal("6535964726459885450235209290054270081");
  });

  it("should convert 3 in custom base 3 `012` to 10", () => {
    Base.setBase("BASE3", "012");

    return expect(Base.convert("3", "BASE10", "BASE3")).to.eventually.equal(
      "10"
    );
  });

  it("should convert 5 in custom base 4 `0123` to 11", () => {
    Base.setBase("BASE4", "0123");

    return expect(Base.convert("5", "BASE10", "BASE4")).to.eventually.equal(
      "11"
    );
  });

  it("should convert 12 in custom base 4 `0123` to 6 in base 10", () => {
    Base.setBase("BASE4", "0123");

    return expect(Base.convert("12", "BASE4", "BASE10")).to.eventually.equal(
      "6"
    );
  });
});
