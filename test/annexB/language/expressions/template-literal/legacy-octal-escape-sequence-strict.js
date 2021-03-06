// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.8
description: >
    The expression within the template should be evaluated according to the
    semantics of the surrounding context.
    The SV of EscapeSequence :: HexEscapeSequence is the SV of the
    HexEscapeSequence.
negative:
  phase: early
  type: SyntaxError
flags: [onlyStrict]
---*/

throw "Test262: This statement should not be evaluated.";

`${'\07'}`;
