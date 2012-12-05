# Week 3, practicum geomapping
In het hoorcollege heb je gehoord dat we deze week aan het werk gaan met D3.js en de Google Maps API. Als het goed is heb je ook al een icoon bedacht wat je op de kaart van Amsterdam (of een andere gemeente) wilt tekenen. Zoals je aan het voorbeeldbestand zult zien is het niet gemakkelijk een goede vorm te tekenen, het vereist enige oefening. Dit is niet zo vreemd, voordat je met Illustrator iets voor elkaar krijgt moet je ook even oefenen. (^.^)

We gaan op verschillende manieren kijken naar de mogelijkheden van de Google API en D3.js, we beginnen eenvoudig. Tijdens de oefeningen wordt gebruik gemaakt van Sublime Text 2 maar je mag ook een andere editor gebruiken.

# Kleur bekennen
1. Open het bestand KleurBekennen.html in je browser en editor.

Bekijk de visualisatie, merk op dat er op de kaart punten staan,  in het datagedeelte van het bestand (vanaf regel 106) zie je dat deze punten ook in de GeoJSON terug te vinden zijn.

2. Zet een van de punten tussen commentaar, je mag regelcommentaar - // - of blokcommentaar - /* … */ - gebruiken.
3. Herlaad je visualisatie en merk op dat het uitgecommentaarde punt niet meer op de kaart staat.

Groen is nou niet echt een kleur die iets met Amsterdam te maken heeft, misschien willen we ook de verschillende stadsdelen een andere kleur geven. Om onderscheid te kunnen maken tussen de verschillende stadsdelen hebben we een referentie nodig waar we stijlelementen (css) aan kunnen koppelen. We gaan proberen om de naam van de verschillende stadsdelen als class mee te geven aan het svg path.

4. Vervang de puntkomma aan het einde van regel 98 voor een komma en haal de linecomment - // - voor regel 99 weg.
5. Voeg nu een stijlregel toe in het css gedeelte van het bestand (regel 36) voor het stadsdeel 'Centrum', de waarde uit het 'Name' gedeelte van het GeoJSON bestand. Bijvoorbeeld:
.SvgOverlay path.Centrum {
	stroke: Red;
	stroke-width: 1px;
	fill: White;
	fill-opacity: .4;
}
6. Herhaal dit voor nog twee stadsdelen, haal ook nog een aantal punten weg. (zie 1.)

Je ziet dat ook in dit type visualisaties de inhoud, het gedrag en de vormgeving van elkaar gescheiden zijn. Hoe ontzettend netjes (O.o)=b

# Wat is het?
In een poging jullie relevante data als input te geven heb ik net een geomapping rondje gelopen. Aanvankelijk wilde ik een vogelbekdier op de kaart tekenen, jullie mogen zelf bepalen of mij dat gelukt is (hint: nee).

1. Open jouw google docs en upload het bestand platypus.kml
2. Dubbelklik het bestand en bekijk de (lelijke) visualisatie
3. Open nu het bestand in je editor en bekijk de structuur
4. Open ook het bestand Platypus.html en bekijk de data functie platypus() op regel 107.

Het is de bedoeling dat we de coordinaten in de functie (van stadsdeel centrum) vervangen door de coordinaten van de platypus  of wat daar voor door moet gaan. Om dat te doen gaan we eerst het bestand platypus.kml naar onze hand zetten. De volgende codes en toetsencombinaties zijn specifiek voor sublime text 2 en zullen in andere editors anders werken.

5. Sla het bestand op onder een andere naam, bijvoorbeeld platypus_formatting.kml
6. Verwijder de bovenste en onderste regels van de kml, dit zijn de omringende tags waar geen daadwerkelijke coordinaten in zitten. Het gaat om regel 1, 2 en 3 en om 700,701 en 702.
7. Type CMD/CTRL + f om een zoekopdracht te starten. Zoek op <when> en klik op 'find all'. Als het goed is zijn alle instanties van de <when> tag nu geselecteerd.

Omdat we niet met tijdstippen werken is de informatie in de <when> elementen overbodig. Deze zullen we verwijderen.

8. Druk op het pijltje naar links om aan het begin van de regel te gaan staan, houdt SHIFT ingedrukt en beweeg naar het einde van de regel. Verwijder vervolgens door op Backspace of Delete te drukken de hele regel. Je kunt eventueel al de witregel boven de <when> elementen verwijderen zodat alle <gx:coord> elementen zonder witruimte onder elkaar komen te staan.
9. Type opnieuw CMD/CTRL + f om een zoekopdracht te starten. Zoek ditmaal op <gx:coord> (find all) en vervang al deze tag voor een blokhaak openen [. Als je een andere editor gebruikt kan je de functie 'alles vervangen' gebruiken.
10. Type nogmaals CMD/CTRL + f en zoek ditmaal op </gx:coord> (de sluiten tag) (find all). Vervang deze voor blokhaak sluiten en een komma ],. Als je in sublime werkt kan je alle coordinaten achter elkaar zetten door na de komma de enter te verwijderen door op Delete te drukken (fn + Backspace op de Mac)

Als het goed is heeft je bestand nu de volgende structuur:
[4.9098605776113455 52.36013396510783 66.0],
[4.91000926555182 52.360178500314376 53.0],
[4.9101863763705484 52.36014638065096 45.0],
[…],
…

of als je de enters verwijderd hebt

[4.9098605776113455 52.36013396510783 66.0],[4.91000926555182 52.360178500314376 53.0],[4.9101863763705484 52.36014638065096 45.0],[…],…

Nu rest ons nog de drie waarden in elk coördinaat welke staan voor de lengtegraad of lattitude, de breedtegraad of longitude en de hoogte of altitude, van elkaar te scheiden met komma's.

11. Type een laatste keer CMD/CTRL + f en zoek op een spatie, klik op find all en type vervolgens een komma.

Je bestand ziet er nu als volgt uit:

[4.9098605776113455,52.36013396510783,66.0],[4.91000926555182,52.360178500314376,53.0],[4.9101863763705484,52.36014638065096,45.0],

of achter elkaar. Nu we het juiste formaat hebben kunnen we deze lijst (array) met coordinaten in ons originele bestand plakken.

12. Pas tenslotte in het Platypus.html bestand de naamgeving en beschrijving van de polygoon nog eventjes aan.

# Google maps layout
Ik heb de tool op http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html gebruikt om de stijl van de google maps onder de visualisatie te bepalen. Een stijl kan op die pagina gegenereerd worden en je kunt vervolgens die stijl meegeven aan de google maps api aanroep in je html bestand. We gaan proberen of we een alternatieve stijl voor de kaartweergave kunnen implementeren.

1. Open het bestand MapsLayout.html in een browser en in je editor.
2. Open de url http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html en speel wat met stijlen. Let op, elk stijlelement moet je toevoegen door op 'Add' in de linkerkolom te klikken. Als je tevreden bent met de weergave klik je onderin de linkerkolom op 'Show JSON'.
3. Kopieer als je klaar bent alle JSON tekens.
4. Verwijder in MapsLayout.html de stijlinhoud op regel 56, let op: verwijder niet de naam styles, de puntkomma of de komma achteraan de regel maar alleen alles tussen de blokhaken […]
5. Plak op die plaats jouw uit de tool gekopieerde stijlbepaling.
6. Bekijk het resultaat in je browser.

# Afronding
Gefeliciteerd! Je bent nu in staat een eigen kml bestand met de hand om te vormen en te implementeren in d3.js en de google maps API! Laten we hopen dat jouw GPS logger een bestandsformaat genereert wat wel geconverteerd kan worden. Succes met loggen!

