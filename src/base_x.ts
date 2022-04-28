export class BaseX {
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
   *	@param input string | number
   *	@param srctable string
   *	@param desttable string
   *  @throws Error
   *	@return string
   */
  convert(
    input: string | number = '',
    src_table: string = 'BASE10',
    dest_table: string = 'BASE2'
  ): string {
    input = input.toString();

    const src = this.getBase(src_table),
      dest = this.getBase(dest_table);

    const src_len = src.length,
      dest_len = dest.length,
      input_len = input.length;

    //
    if (input_len < 1) {
      throw Error("Cannot convert blank value");
    }

    let val = 0;

    // first convert to base 10
    for (let i = 0; i < input_len; i++) {
      const char = input.charAt(i);
      const char_index = src.indexOf(char);

      if (char_index < 0) {
        throw Error(`Invalid character "${char}"`);
      }

      val = val * src_len + char_index;
    }

    // then covert to any base
    let r = val % dest_len;
    let res = dest.charAt(r);
    let q = Math.floor(val / dest_len);

    while (q) {
      r = q % dest_len;
      q = Math.floor(q / dest_len);
      res = dest.charAt(r) + res;
    }

    return res;
  }

  /**
   *
   * @param name
   * @throws Error
   * @returns
   */
  getBase(name: string): string {
    const table = this.bases[name];
    if (!table || !table.length) {
      throw new Error(`Getting table "${name} does not contain any values`);
    }

    return table;
  }

  /**
   *
   * @param name
   * @param table
   * @throws Error
   */
  setBase(name: string, table: string): void {
    if (!table.length) {
      throw new Error(`Cannot set table "${name}" with no values`);
    }

    this.bases[name] = table;
  }
}