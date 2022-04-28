class BaseX {
  bases: { [key: string]: string } = {
    BASE2: "01",
    BASE8: "01234567",
    BASE10: "0123456789",
    BASE16: "0123456789ABCDEF",
    BASE32: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    BASE62: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    BASE75:
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_.,!=-*(){}[]",
  };

  /**
   *
   *	@param src string | number
   *	@param srctable string
   *	@param desttable string
   *  @throws Error
   *	@return string
   */
  convert(src: string | number, srctable: string, desttable: string): string {
    src = src.toString();

    const srclen = srctable.length,
      destlen = desttable.length,
      numlen = src.length;

    let val = 0;

    //
    if (srctable.length < 1) {
      throw Error("Source table does not contain values");
    }

    if (desttable.length < 1) {
      throw Error("Destination table does not contain values");
    }

    // first convert to base 10
    for (let i = 0; i < numlen; i++) {
      const char = src.charAt(i);
      const char_index = srctable.indexOf(char);

      if (char_index < 0) {
        throw Error(`Invalid character "${char}"`);
      }

      val = val * srclen + char_index;
    }

    // then covert to any base
    let r = val % destlen;
    let res = desttable.charAt(r);
    let q = Math.floor(val / destlen);

    while (q) {
      r = q % destlen;
      q = Math.floor(q / destlen);
      res = desttable.charAt(r) + res;
    }

    return res;
  }

  /**
   *
   * @param name
   * @returns
   */
  getBase(name: string): string {
    return this.bases[name];
  }

  /**
   *
   * @param name
   * @param table
   */
  setBase(name: string, table: string): void {
    this.bases[name] = table;
  }
}

const base_x = new BaseX();

export default base_x;
