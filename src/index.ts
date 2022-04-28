class BaseX {
  BASE2 = "01";
  BASE8 = "01234567";
  BASE10 = "0123456789";
  BASE16 = "0123456789ABCDEF";
  BASE32 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  BASE75 =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_.,!=-*(){}[]";

  /**
   *
   *	@param src string
   *	@param srctable string
   *	@param desttable string
   *	@return string | false
   */
  convert(src = "", srctable: string, desttable: string) {
    // src = src.toString();

    const srclen = srctable.length,
      destlen = desttable.length,
      numlen = src.length;

    let val = 0;

    //
    if (srctable.length < 1 || desttable.length < 1) return false;

    // first convert to base 10
    for (var i = 0; i < numlen; i++) {
      val = val * srclen + srctable.indexOf(src.charAt(i));
    }

    if (val < 0) return false;

    // then covert to any base
    var r = val % destlen;
    var res = desttable.charAt(r);
    var q = Math.floor(val / destlen);

    while (q) {
      r = q % destlen;
      q = Math.floor(q / destlen);
      res = desttable.charAt(r) + res;
    }

    return res;
  }
}

const base_x = new BaseX();

export { base_x };
