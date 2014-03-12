<?
//Datenbank Model
$topic[0] = "Zahnärztliche Implantologie";
$topic[1] = "Angstfreie Behandlung";
$topic[2] = "Hilotherapie";
//-----------------
$anzahl = 12;

echo "<div id='sbWrapper'>";


for ($x = 0; $x < $anzahl; $x++) {
    echo "<div class='switchBox nr".$x."'><div class='content'>".$topic[$x]."</div></div>";

}

echo "</div></div>";



?>





