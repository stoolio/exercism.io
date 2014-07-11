//   \xc4 - Ä
//   \xcb - Ë
//   \xcf - Ï
//   \xd6 - Ö
//   \xdc - Ü
//   \u0178 - Ÿ

//   \xe4 - ä
//   \xeb - ë
//   \xef - ï
//   \xf6 - ö
//   \xfc - ü
//   \xff - ÿ

umlaut = {
  upper: /\xc4|\xcb|\xcf|\xd6|\xdc|\u0178/,
  lower: /\xe4|\xeb|\xef|\xf6|\xfc|\xff/
};

function normalizeString(str) {
  return str.replace(umlaut.upper, 'A')
          .replace(umlaut.lower, 'a')
          .replace(/\s|\d/g,'')
          .replace(/\W/g, '');
}

function isAllCaps(str) {
  return /^[A-Z\s]+$/.test(str);
}

function isQuestion(str) {
  return str.lastIndexOf('?') === str.length-1;
}

function isEmpty(str) {
  return str.trim() === '';
}

function Bob() {

}

Bob.prototype.hey = function(input) {
  var question = isQuestion(input);

  if(isEmpty(input))
    return 'Fine. Be that way!';

  input = normalizeString(input);

  if(isAllCaps(input))
    return 'Woah, chill out!';
  else if (question)
    return 'Sure.';
  else
    return 'Whatever.';
};

module.exports = Bob;
