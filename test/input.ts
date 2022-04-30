import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";

import { BaseX } from "../src/base_x";

chai.use(chaiAsPromised);
const Base = new BaseX();

describe("#input", () => {
  it("should not allow empty source input", () => {
    expect(Base.convert("", "BASE10", "BASE2")).to.eventually.throw();
  });

  it("should not allow source with illegal characters", () => {
    expect(Base.convert("abc", "BASE10", "BASE2")).to.eventually.throw();
  });

  it("should not allow source table that does not exist", () => {
    expect(Base.convert("123", "ABC", "BASE2")).to.eventually.throw();
  });

  it("should not allow destination table that does not exist", () => {
    expect(Base.convert("123", "BASE10", "ABC")).to.eventually.throw();
  });
});
