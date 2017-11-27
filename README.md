Myndbandaleiga - Stórt verkefni 2 í Vefforritun 1 haust 2017

Helstu upplýsingar:

Verkefnið er samansett af 2 html skjölum sem innihelda hvort eina síðu og hefur
Javascript skjal sem sér um vinnslu í því þeirri html síðu.
Notast er við sass í vinnslu á útliti og því hefur verkefnið css skjal,
styles.css, sem lesið er úr styles.scss skjali og sem inniheldur sass
upplýsingar fyrir báðar síðurnar. Sass-inu er skipt upp í 6 skjöl sem lesin
eru inn í styles.scss en þau eru:
  buttons (takkar)
  container (hólf)
  grid (uppröðun)
  header (titlar)
  play (stillimynd á myndbandi)
  text (textar)
Síðurnar tvær nálgast gögn sín úr json-skjalinu videos.json og sækja gögnin með
Ajax-beiðnum í gegnum js skjölin.
Allt er þetta geymt og unnið með hjálp Github þar sem er hægt að skoða hvernig
verkefnið þróaðist.

  Github: https://github.com/magdadianaa/StortVerkefni2

Notast er við package.json skjal til þess að setja upp öll hjálpartæki sem
notuð eru. Þar er babel sett upp sem þýðir js skjölin úr ES6 í þá uppfærslu sem
vafrinn styður. Einnig setjum við þar upp eslint, sem villules js skjölin og
skilar villum, stylelint, sem villules scss skjölin og skilar villum, sass,
sem les styles.scss yfir í styles.css, og browser-sync, sem gerir okkur kleift
að sjá þær breytingar sem við gerum í kóðanum um leið og við vistum þær.
Í verkefninu eru allar þær myndir sem notaðar eru geymdar í tveim möppum.
Myndir fyrir takka eru geymdar í möppunni img en stillimyndir fyrir videoin og
videoin sjálf eru geymd í möppunni videos.

Keyrsla:

Til þess að keyra verkefnið á eigin tölvu er hægt að opna það á slóð
verkefnisins eða ná í zip-skjalið á sömu slóð.
Ef náð er í zip-skjalið þarf að vera með Node.js eða annað sambærilegt forrit
tölvunni. Þá þarf að notast við npm og skipanalínuna, fara inn í verkefnið og
nota skipunina "npm install" í fyrsta skipta og svo skipunina "npm run dev".
Þá keyrist forritið á aðalvafra notandans. Ef notandi vill keyra forritið upp
aftur síðar þarf einungis að notast við seinni skipunina.
Ef verkefnið er opnað á slóð verkefnisins þá þarf ekki að gera neitt frekar.


Höfundar:

  Ásta Lára Magnúsdóttir        alm20@hi.is
  Birta Dögg Skaftadóttir       bds8@hi.is
  Magdalena Díana Adamsdóttir   mda3@hi.is
  Margrét Valdimarsdóttir       mav28@hi.is

Síðan er skrifuð í UTF-8.
Vefsíðan er sett upp á heimasvæði Margrétar hjá Reiknistofnun Háskóla Íslands
og hefur slóðina :

  https://notendur.hi.is/~mav28/vefforritun/stortverkefni2
