# base-x

```js
import { BaseX } from "@rackandpinecone/base-x";

const Base = new BaseX();

Base.convert("9", "BASE10", "BASE2"); // "1001"

Base.getBase("BASE10"); // "0123456789"
Base.getBase("BASE16"); // "0123456789ABCDEF"

Base.setBase("BASE4", "0123");
Base.convert("5", "BASE10", "BASE4"); // "11"
```

## Version History

- 0.3.0
  - Refactor to Typescript and use promises
- 0.2.0
  - Refactor to Typescript and use promises
- 0.1.0
  - Initial release and test coverage

[![Build Status](https://travis-ci.org/pinecone-dot-website/base-x.svg?branch=master)](https://travis-ci.org/pinecone-dot-website/base-x)

[![Coverage Status](https://coveralls.io/repos/github/pinecone-dot-website/base-x/badge.svg?branch=main)](https://coveralls.io/github/pinecone-dot-website/base-x?branch=main)
