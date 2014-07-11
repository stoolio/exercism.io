function bottle(number) {
  switch(number) {
    case 1:
      return number + ' bottle';
    case 0:
      return 'no more bottles';
    default:
      return number + ' bottles';
  }
}

function bottles(number) {
  return bottle(number) + ' of beer';
}

function wall(number) {
  return bottles(number) + ' on the wall';
}

function take(number) {
  return 'Take ' + (number === 1 ? 'it' : 'one') + ' down and pass it around, ';
}

function part1(number) {
  return wall(number) + ', ' + bottles(number) + '.\n';
}

function part2(number) {
  return take(number) + wall(number - 1) + '.\n';
}

function line(number) {
  return part1(number) + part2(number);
}

function fixOutliers(lyrics) {
  return lyrics.replace(/^no more\s/, 'No more ')
    .replace(part2(0),'Go to the store and buy some more, ' + wall(99) + '.\n');
}

function verse(number) {
  return fixOutliers(line(number));
}

module.exports = {
  verse: verse,
  sing: function (from, to) {
    to = to || 0;
    var song = [];

    for(var i = from; i >= to; i--) {
      song.push(verse(i));
    }
    return song.join('\n');
  }
};
