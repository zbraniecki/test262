// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Zibi Braniecki
includes: [testBuiltInObject.js]
---*/

testBuiltInObject(Intl.PluralRules.prototype, false, false, ["constructor", "select", "resolvedOptions"]);
