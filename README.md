# Emojis

UNICODE emojis to HTML entities, and a testcase with a emoji picker.

# Test
A testcase is presented: test.html


# UNICODE storage
It is possible to store the emoticons inside a (MySQL) database. In order to do this, the character set must be set to utf8mb4 on the database (and tables) as well as the database connection, plus the HTML header should be set to Utf8.

```
  // Change character set to utf8
  $mysqli->set_charset("utf8mb4");
  // or:
  mysqli_set_charset($mysqli, 'utf8mb4');
```

# PHP
To show the emoticons:

```utf8_decode($value);```

# License
The GNU General Public License.

# Credits
Flaneurette, and additional credit to Jacopo Stefanuto and Yan King Yin on stackoverflow for being helpful.
1. https://stackoverflow.com/questions/1338599/the-value-of-this-within-the-handler-using-addeventlistener
