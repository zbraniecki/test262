// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Zibi Braniecki
includes: [testIntl.js]
---*/

taintDataProperty(Object.prototype, "1");
new Intl.PluralRules("und");
