var longestPalindrome = require ('./longest-palindrome');

describe ('#longestPalindrome', function () {
  it('returns the longest palindrome within a string, including whitespace', function () {
    var string = "I am a dazzled racecar driver";
    var outputString = "d racecar d";

    expect(longestPalindrome(string)).toBe(outputString);
  });
  it('returns the longest palindrome within a string, including whitespace', function () {
    var string = "abcdeffedcab";
    var outputString = "cdeffedc";

    expect(longestPalindrome(string)).toBe(outputString);
  });
  it('returns the longest palindrome within a string, including whitespace', function () {
    var string = "113454321";
    var outputString = "34543";

    expect(longestPalindrome(string)).toBe(outputString);
  });
  it('returns the longest palindrome within a string, including whitespace', function () {
    var string = "314.413";
    var outputString = "314.413";

    expect(longestPalindrome(string)).toBe(outputString);
  });
});