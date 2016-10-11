---
title: Chapter 3 - Molecular biology primer
---

# DNA and RNA

## Nucleobases
Or base in short. Nitrogen-containing molecules linked to sugar within nucleosides.

A - Adenine, pairs with Thymine.
C - Cytosine, pairs with Guanine.
G - Guanine, pairs with Cytosine.
T - Thymine, pairs with Adenine.
U - Uracil, "RNA-Thymine", pairs with Adenine.

```js
function DNA2RNA(str) {
  var map = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A',
    ' ': ' '  // allow space between group of three bases
  }
  return str.split('').map(c => map[c.toUpperCase()]).join('');
}

DNA2RNA('TAC CGC GGC TAT TAC TGC CAG GAA GGA ACT');
// 'AUG GCG CCG AUA AUG ACG GUC CUU CCU UGA'

function RNA2DNA(str) {
  var map = {
    A: 'T',
    C: 'G',
    G: 'C',
    U: 'A',
    ' ': ' '  // allow space between group of three bases
  }
  return str.split('').map(c => map[c.toUpperCase()]).join('');
}

RNA2DNA('AUG GCG CCG AUA AUG ACG GUC CUU CCU UGA');
// 'TAC CGC GGC TAT TAC TGC CAG GAA GGA ACT'
```
