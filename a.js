function LCS (v, w) {
  var n = v.length;
  var m = w.length;

  // initialize
  var score = [];
  var b = [];
  for (var i = 0; i <= n; i += 1) {
    score.push([0]);
    b.push(['↑']);
  }
  for (var j = 1; j <= m; j += 1) {
    score[0][j] = 0;
    b[0][j] = '←';
  }

  for (var i = 1; i <= n; i += 1) {
    for (var j = 1; j <= m; j += 1) {
      if (v[i - 1] === w[j - 1]) {
        score[i][j] = score[i - 1][j - 1] + 1;
        b[i][j] = '↖';
      } else if (score[i - 1][j] >= score[i][j - 1]) {
        score[i][j] = score[i - 1][j];
        b[i][j] = '↑';
      } else {
        score[i][j] = score[i][j - 1];
        b[i][j] = '←';
      }
    }
  }
  return {score, b};
}

LCS('ATCTGAT', 'TGCATA');

// { score:
//    [ [ 0, 0, 0, 0, 0, 0, 0 ],
//      [ 0, 0, 0, 0, 1, 1, 1 ],
//      [ 0, 1, 1, 1, 1, 2, 2 ],
//      [ 0, 1, 1, 2, 2, 2, 2 ],
//      [ 0, 1, 1, 2, 2, 3, 3 ],
//      [ 0, 1, 2, 2, 2, 3, 3 ],
//      [ 0, 1, 2, 2, 3, 3, 4 ],
//      [ 0, 1, 2, 2, 3, 4, 4 ] ],
//   b:
//    [ [ '↑', '←', '←', '←', '←', '←', '←' ],
//      [ '↑', '↑', '↑', '↑', '↖', '←', '↖' ],
//      [ '↑', '↖', '←', '←', '↑', '↖', '←' ],
//      [ '↑', '↑', '↑', '↖', '←', '↑', '↑' ],
//      [ '↑', '↖', '↑', '↑', '↑', '↖', '←' ],
//      [ '↑', '↑', '↖', '↑', '↑', '↑', '↑' ],
//      [ '↑', '↑', '↑', '↑', '↖', '↑', '↖' ],
//      [ '↑', '↖', '↑', '↑', '↑', '↖', '↑' ] ] }

function printLCS (b, v, i, j) {
  i = (i === undefined) ? b.length - 1 : i;
  j = (j === undefined) ? b[0].length - 1 : j;

  if (i === 0 || j === 0) {
    return '';
  }

  if (b[i][j] === '↖') {
    return printLCS(b, v, i - 1, j - 1) + v[i - 1];
  }

  if (b[i][j] === '↑') {
    return printLCS(b, v, i - 1, j);
  }

  return printLCS(b, v, i, j - 1);
}

var res = LCS('ATCTGAT', 'TGCATA');
printLCS(res.b, 'ATCTGAT');
