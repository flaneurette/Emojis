# Emojis

Emojis is a Emoji picker written in JavaScript. It converts UNICODE emojis to HTML entities. It produces a selective list of commonly used emojis. For additional emojis, see reference [2].

# Example
A testcase is presented: test.html

# Storage
It is possible to store the emoticons inside a (MySQL) database. In order to do this, the character set must be set to utf8mb4 on the database (and tables) as well as the database connection, plus the HTML header should be set to Utf8. To store the emojis with PHP MySQLi:

```
// Change character set to utf8
$mysqli->set_charset("utf8mb4");
// or:
mysqli_set_charset($mysqli, 'utf8mb4');
```
# Output
To show the emoticons in PHP:

```utf8_decode($emojies);```
# License
The GNU General Public License.

# Credits
Flaneurette, and additional credit to Jacopo Stefanuto and Yan King Yin on stackoverflow for being helpful.
[1]. https://stackoverflow.com/questions/1338599/the-value-of-this-within-the-handler-using-addeventlistener
[2]. https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AEmoji%3DYes%3A%5D&esc=on&g=&i=
