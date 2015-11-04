function longestPalindrome(str) {
  var rev = str.split("").reverse().join("");
  return str == rev;
}
module.exports = function (str) {
  var outputString_length = 0;
    outputString = '';

  for (var i = 0; i < str.length; i++) {
    var subs = str.substr(i, str.length);

  for (var j = subs.length; j >= 0; j--) {
    var sub_subs = subs.substr(0, j);
    if (sub_subs.length <= 1)
      continue;

      if (longestPalindrome(sub_subs)) {

    if (sub_subs.length > outputString_length) {
      outputString_length = sub_subs.length;
      outputString = sub_subs;
    }
    }
  }
  }
    return outputString;
};