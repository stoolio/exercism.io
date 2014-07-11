var animals = [
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse'
];

var statements = [
  '',
  'wriggled and jiggled and tickled inside her',
  'How absurd',
  'Imagine that,',
  'What a hog,',
  'Just opened her throat and',
  'I don\'t know how she',
  'She\'s dead, of course!'
];

var verses = [
  'start/fly',
  'start/spider/cumulative/fly',
  'start/swallow/cumulative/fly',
  'start/horse'
];

function renderLine() {
  var vars, varLen, args = Array.prototype.slice.call(arguments),
    line = args.shift(),
    matches = line.match(/{{.*?}}/g);

  if(matches === null)
    return line + '\n';

  if(Array.isArray(args[0])) {
    vars = args[0].slice(0,varLen);
  } else {
    vars = args.slice(0,varLen);
  }

  varLen = args.length;

  for (var i = 0; i < varLen; i++) {
    line = line.replace(/{{.*?}}/, vars[i]);
  }

  return line + '\n';
}

var lyrics = {
  start: function (num) {
    return renderLine('I know an old lady who swallowed a {{animal}}.', animals[num - 1]);
  },
  fly: function(num) {
    return "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  },
  spider: function(num) {
    return "It " + statements[num - 1] + ".\n";
  },
  swallow: function(num) {
    if (num < 6)
     return renderLine("{{statement}} to swallow a {{animal}}!", statements[num -1], animals[num - 1]);
   else
    return renderLine("{{statement}} swallowed a {{animal}}!", statements[num -1], animals[num - 1]);
  },
  cumulative: function (num) {
    var line = "She swallowed the {{animal1}} to catch the {{animal2}}.",
      results = '';
    for(var i = num -1; i > 0; i--) {
      results += renderLine(line, animals[i], animals[i-1]);
    }
    return results.replace(/spider\.\n/, 'spider that ' + statements[1] + '.\n');
  },
  horse: function (num) {
    return statements[num -1] + '\n';
  }
};

function verseFormat(num) {
  switch(num) {
    case 1:
    case 2:
      return verses[num-1].split('/');
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return verses[2].split('/');
    case 8:
      return verses[3].split('/');
  }
}

function aVerse(num) {
  var song = '',
    lines = verseFormat(num);
  lines.forEach( function(line) {
    song += (lyrics[line](num));
  });
  return song;
}

module.exports = {
  verse: function (num) {
    return aVerse(num);
  },
  verses: function (from, to) {
    var verses = [];
    for(var i = from; i < to+1; i++) {
      verses.push(aVerse(i));
    }
    return verses.join('\n') + '\n';
  },
  sing: function () {
    song = [];
    for(var i = 1; i < 9; i++) {
      song.push(aVerse(i));
    }
    return song.join('\n') + '\n';
  }
};
