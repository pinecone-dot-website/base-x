import { expect } from "chai";
import { BaseX } from "../src/base_x";

const Base = new BaseX();

describe("#numFormatter", () => {
  it("should not allow empty source", () => {
    const call = () => {
      Base.convert("", "BASE10", "BASE2");
    };

    expect(call).to.throw();
  });

  it("should not allow empty source table", () => {
    const call = () => {
      Base.convert("123", "ABC", "BASE10");
    };

    expect(call).to.throw();
  });

  it("should not allow empty destination table", () => {
    const call = () => {
      Base.convert("123", "BASE10", "ABC");
    };

    expect(call).to.throw();
  });

  it("should convert 1001 in base 2 to 9 in base 10", () => {
    const result = Base.convert("1001", "BASE2", "BASE10");

    expect(result).to.equal("9");
  });

  it("should convert 9 in base 10 to 1001 in base 2", () => {
    const result = Base.convert("9", "BASE10", "BASE2");

    expect(result).to.equal("1001");
  });

  it("should convert 10 in base 10 to A in base 62", () => {
    const result = Base.convert("10", "BASE10", "BASE62");

    expect(result).to.equal("A");
  });

  it("should convert A in base 62 to 10 in base 10", () => {
    const result = Base.convert("A", "BASE62", "BASE10");

    expect(result).to.equal("10");
  });

  it("should convert 62 in base 10 to A in base 62", () => {
    const result = Base.convert("62", "BASE10", "BASE62");

    expect(result).to.equal("10");
  });

  it("should convert 10 in base 62 to 62 in base 10", () => {
    const result = Base.convert("10", "BASE62", "BASE10");

    expect(result).to.equal("62");
  });

  it("should return false on invalid characters in source table", () => {
    const call = () => {
      Base.convert("ACBD", "BASE2", "BASE10");
    };

    expect(call).to.throw();
  });

  it("should convert 3 in custom base 3 `012` to 10", () => {
    Base.setBase("BASE3", "012");
    const result = Base.convert("3", "BASE10", "BASE3");

    expect(result).to.equal("10");
  });

  it("should convert 5 in custom base 4 `0123` to 11", () => {
    Base.setBase("BASE4", "0123");

    const result = Base.convert("5", "BASE10", "BASE4");

    expect(result).to.equal("11");
  });

  it("should convert 12 in custom base 4 `0123` to 6 in base 10", () => {
    Base.setBase("BASE4", "0123");

    const result = Base.convert("12", "BASE4", "BASE10");

    expect(result).to.equal("6");
  });
});
