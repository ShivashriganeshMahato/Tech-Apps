<?php
/*
Consider a guessing game in which a player tries to guess a hidden word. The
hidden word contains only capital letters and has a length known to the player.
A guess contains only capital letters and has the same length as the hidden
word.

After a guess is made, the player is given a hint that is based on a comparison
between the hidden word and the guess. Each position in the hint contains a
character that corresponds to the letter in the same position in the guess.
The following rules determine the characters that appear in the hint.

1. If the letter in the guess is also in the same position in the hidden word,
the corresponding character in the hint is the matching letter.

2. If the letter in the guess is also in the hidden word, but in a different
position, the corresponding character in the hint is "+".

3. If the letter in the guess is not in the hidden word, the corresponding
character in the hint is "*".

The HiddenWord class will be used to represent the hidden word in the game. The
hidden word is passed to the constructor. The class contains a method, getHint,
that takes a guess and produces a hint.

For example, suppose the variable $puzzle is declared as follows.

  $puzzle = new HiddenWord("HARPS");

The following table shows several guesses and the hints that would be produced.

  Call to getHint               String returned
  -------------------------     ---------------
  $puzzle->getHint("AAAAA")     "+A+++"
  $puzzle->getHint("HELLO")     "H****"
  $puzzle->getHint("HEART")     "H*++*"
  $puzzle->getHint("HARMS")     "HAR*S"
  $puzzle->getHint("HARPS")     "HARPS"

Write the complete HiddenWord class, including any necessary instance variables,
its constructor, and the method, getHint, described above. You may assume that
the length of the guess is the same as the length of the hidden word.
*/

/**
 * Generate hidden word and allow testing words against
  */
class HiddenWord {
    private $word;

    public function __construct($word) {
        $this->word = str_split($word);
    }

    public function getHintChar($i, $tChar) {
        if ($this->word[$i] == $tChar) {
            return $tChar;
        } else if (in_array($tChar, $this->word)) {
            return "+";
        } else {
            return "*";
        }
    }

    public function getHint($testWord) {
        $tWord = str_split($testWord);
        $hint = "";

        foreach ($tWord as $i => $tChar) {
            $hint .= $this->getHintChar($i, $tChar);
        }

        return $hint;
    }
}

$puzzle = new HiddenWord("HARPS");

echo $puzzle->getHint("AAAAA");     //"+A+++"
echo "<br>";
echo $puzzle->getHint("HELLO");     //"H****"
echo "<br>";
echo $puzzle->getHint("HEART");     //"H*++*"
echo "<br>";
echo $puzzle->getHint("HARMS");     //"HAR*S"
echo "<br>";
echo $puzzle->getHint("HARPS");     //"HARPS"



?>
