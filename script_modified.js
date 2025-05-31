const quotes = {
    // NEU: Eine Kategorie, die alle Lehrerzitate sammelt
    "alle_lehrer": [], // Diese wird unten dynamisch befüllt
    "Schüler": [], // Schülerzitate bleiben separat

    // Einzelne Lehrer-Kategorien
    "Basner": [
      {
        date: "20.01.2023",
        text: "Ich habe mit einer Hand ein kleines Sieb beschichtet und mit der anderen festgehalten... Zack, gib ihm!",
        author: "Alexander Basner"
      },
      {
        date: "20.01.2023",
        text: "Stellen Sie sich vor, mein Kopf ist ein U-Boot und meine Augen sind Torpedorohre.",
        author: "Alexander Basner"
      },
      {
        date: "20.01.2023",
        text: "Deutschrap? ... Ich ficke deine Mutter und schlitze ihren Bauch auf.",
        author: "Alexander Basner"
      },
      {
        date: "17.03.2023",
        text: "Herr Furzan.",
        author: "Alexander Basner"
      },
      {
        date: "31.03.2023",
        text: "Sie sind ein Hosenscheißer.",
        author: "Alexander Basner"
      },
      {
        date: "31.03.2023",
        text: "Er war Zeuge Jehovas.",
        author: "Alexander Basner"
      },
      {
        date: "31.03.2023",
        text: "Nicht mit der erhobenen rechten Hand!",
        author: "Alexander Basner"
      },
      {
        date: "31.03.2023",
        text: "Zielkoordinaten, roter Knopf, Atombombe.",
        author: "Alexander Basner"
      },
      {
        date: "31.03.2023",
        text: "Niemand hat euch so ehrlich die Wahrheit ins Gesicht gesagt wie ich. Was für faule Hunde ihr seid, was für Junkies ihr seid.",
        author: "Alexander Basner"
      },
      {
        date: "14.04.2023",
        text: "Ich stehe auch immer wie ein Igel.",
        author: "Alexander Basner"
      },
      {
        date: "16.05.2023",
        text: "Ich bin im falschen Jahrhundert geboren.",
        author: "Alexander Basner"
      },
      {
        date: "16.05.2023",
        text: "Ich dränge Sie nicht mit der Peitsche wie ägyptische Sklaventreiber.",
        author: "Alexander Basner"
      },
      {
        date: "26.05.2023",
        text: "Wir brauchen keine Matrix – wir sind von Natur aus deppert.",
        author: "Alexander Basner"
      },
      {
        date: "16.06.2023",
        text: "Es gab eine Zeit, da war ich jünger – in der Pubertät.",
        author: "Alexander Basner"
      },
      {
        date: "16.06.2023",
        text: "Ich – dankeschön.",
        author: "Alexander Basner"
      },
      {
        date: "15.09.2023",
        text: "Der ganze Bulut-Clan.",
        author: "Alexander Basner"
      },
      {
        date: "15.09.2023",
        text: "Ich habe mehrere Möglichkeiten, Sie zu quälen.",
        author: "Alexander Basner"
      },
      {
        date: "15.09.2023",
        text: "Unser Adolf.",
        author: "Alexander Basner"
      },
      {
        date: "15.09.2023",
        text: "Da mussten wir Dresden bombardieren.",
        author: "Alexander Basner"
      },
      {
        date: "15.09.2023",
        text: "Der Bart ist auch eine Form psychologischer Kriegsführung.",
        author: "Alexander Basner"
      },
      {
        date: "15.09.2023",
        text: "Die Zukunft ist analog – ich sage es Ihnen!",
        author: "Alexander Basner"
      },
      {
        date: "18.09.2023",
        text: "Alles ganz hübsch mit diesen Offset-Rosetten.",
        author: "Alexander Basner"
      },
      {
        date: "18.09.2023",
        text: "Micky-Maus-Hefte sind besser als am Handy spielen.",
        author: "Alexander Basner"
      },
      {
        date: "18.09.2023",
        text: "Schulpsychologe?",
        author: "Alexander Basner"
      },
      {
        date: "18.09.2023",
        text: "Casimir, das Schulgespenst.",
        author: "Alexander Basner"
      },
      {
        date: "18.09.2023",
        text: "Ich liebe das – dafür braucht man keine Drogen.",
        author: "Alexander Basner"
      },
      {
        date: "19.09.2023",
        text: "Ich habe mich doch nie als Papst verkleidet.",
        author: "Alexander Basner"
      },
      {
        date: "29.09.2023",
        text: "B: Ich habe geweint, gelitten, fast einen Herzinfarkt bekommen und bin ins Burnout geschlittert wegen dieser scheiß Maschine. \n N: Ach so, wie bei der iGen? \n B: Genau, die Dellen sind von meinen Stahlkappenschuhen.",
        author: "Alexander Basner & Nathalie"
      },
      {
        date: "09.10.2023",
        text: "F: Bulut heißt auf Deutsch Wolke. \n N: Und was bedeutet Furkan auf Deutsch? \n B: Furzwolke.",
        author: "Furkan & Nathalie & Alexander Basner"
      },
      {
        date: "13.10.2023",
        text: "B: Ich liebe Verschwörungstheorien. \n N: Brauchen Sie einen Aluhut? \n B: Nein, ich habe meinen Filzhut.",
        author: "Alexander Basner & Nathalie"
      },
      {
        date: "20.10.2023",
        text: "Ich starre einen Kieselstein an und warte, bis Sie meine Ameisen werden.",
        author: "Alexander Basner"
      },
      {
        date: "06.11.2023",
        text: "Jesus steht über allen Herrschern.",
        author: "Alexander Basner"
      },
      {
        date: "09.11.2023",
        text: "Was ist der IQ des Urknalls?",
        author: "Alexander Basner"
      },
      {
        date: "27.11.2023",
        text: "F: Können wir bei Ihrem Auto einen Soundcheck machen? \n B: Ich habe kein Radio in meinem Auto.",
        author: "Furkan & Alexander Basner"
      },
      {
        date: "07.12.2023",
        text: "Schauen Sie keine Frauen an – sie sind zu jung.",
        author: "Alexander Basner"
      },
      {
        date: "07.12.2023",
        text: "Herr Murani soll aufhören mit Frau Vonic zu schäkern, sonst gibt’s noch rote Bäckchen und Kinder.",
        author: "Alexander Basner"
      },
      {
        date: "07.12.2023",
        text: "B: Haben Sie eigentlich immer die Hand zwischen den Beinen – was soll man da denken? \n F: Sie haben mich doch dahin gesetzt.",
        author: "Alexander Basner"
      },
      {
        date: "15.02.2024",
        text: "Frieden ist langweilig, darum schütten wir etwas Öl in die Ukraine.",
        author: "Alexander Basner"
      },
      {
        date: "15.02.2024",
        text: "Der Herr Lebkuchen... ah, nein, wie heißt er?",
        author: "Alexander Basner"
      },
      {
        date: "11.03.2024",
        text: "Ein Vibrator ist es keiner.",
        author: "Alexander Basner"
      },
      {
        date: "11.03.2024",
        text: "Da habe ich einen sadistischen Unterton.",
        author: "Alexander Basner"
      },
      {
        date: "05.04.2024",
        text: "Herr Denemi schaut zu seinem Geschlecht – oder was haben Sie da unten?",
        author: "Alexander Basner"
      },
      {
        date: "22.04.2024",
        text: "Man muss Sie nicht putzen, die Putzfrau macht das ja eh.",
        author: "Alexander Basner"
      },
      {
        date: "23.04.2024",
        text: "Er war im Rollstuhl – dann nicht mehr.",
        author: "Alexander Basner"
      },
      {
        date: "23.04.2024",
        text: "Er hatte keine Beine, weil er Suizid begehen wollte.",
        author: "Alexander Basner"
      },
      {
        date: "25.04.2024",
        text: "Ihr lest ja nicht mal mehr – IHR SEID DER SPRACHE NICHT MEHR WÜRDIG!",
        author: "Alexander Basner"
      },
      {
        date: "25.04.2024",
        text: "ChatGPT ist ein Instrument der Hölle.",
        author: "Alexander Basner"
      },
      {
        date: "25.04.2024",
        text: "Es ist hier zu kalt für Kamele.",
        author: "Alexander Basner"
      },
      {
        date: "25.04.2024",
        text: "So etwas bricht mir das Herz.",
        author: "Alexander Basner"
      },
      {
        date: "25.04.2024",
        text: "Ihr werdet die unintelligenteste Generation Europas.",
        author: "Alexander Basner"
      },
      {
        date: "14.05.2024",
        text: "So wie die Fledermäuse – PIPIPI!",
        author: "Alexander Basner"
      },
      {
        date: "14.05.2024",
        text: "Aww, wie süß – ich hab euch so lieb.",
        author: "Alexander Basner"
      },
      {
        date: "23.05.2024",
        text: "Und jetzt sprechen wir das Chinesisch aus... Kalotten.",
        author: "Alexander Basner"
      },
      {
        date: "23.05.2024",
        text: "Wenn Sie das 'Scherzal' vom Paradeiser abschneiden, ist das eine Kalotte.",
        author: "Alexander Basner"
      },
      {
        date: "06.09.2024",
        text: "Frau Brantner, ich habe Sie in den Ferien nicht belästigt.",
        author: "Alexander Basner"
      },
      {
        date: "25.11.2024",
        text: "Meine Eltern hatten eine schöne Nacht.",
        author: "Alexander Basner"
      },
      {
        date: "25.11.2024",
        text: "Wissen Sie, warum Radfahrer beim Abbiegen die Hand ausstrecken? Nein? Damit man sie besser unter dem Auto hervorholen kann.",
        author: "Alexander Basner & Klasse"
      },
      {
        date: "25.11.2024",
        text: "Ohne Adolf Hitler hätten wir keine Fotokopierer.",
        author: "Alexander Basner"
      },
      {
        date: "25.11.2024",
        text: "Wir betrügen uns selbst mit KI.",
        author: "Alexander Basner"
      },
      {
        date: "25.11.2024",
        text: "Wir gehen jetzt zur allwissenden Müllhalde... Google.",
        author: "Alexander Basner"
      },
      {
        date: "25.11.2024",
        text: "Ich mag Kaffee.\n(zeigt einen Facebook-Post, den er kommentiert hat)",
        author: "Alexander Basner"
      },
      {
        date: "25.11.2024",
        text: "Aus diesem Film dürft ihr euch alles merken – außer 'Zauberwalze'. Das will ich bei der Abschlussprüfung nicht hören.",
        author: "Alexander Basner"
      },
      {
        date: "25.11.2024",
        text: "Amerikaner können alles – außer Fremdsprachen und Geografie.",
        author: "Alexander Basner"
      },
      {
        date: "09.12.2024",
        text: "Herr Klausner, haben Sie zu viele Truhen in Minecraft gebaut?",
        author: "Alexander Basner"
      },
      {
        date: "14.02.2025",
        text: "Irgendwie mag ich jeden Menschen – aber irgendwie auch nicht.",
        author: "Alexander Basner"
      },
      {
        date: "14.02.2025",
        text: "Stellen Sie sich vor, Sie drucken mit echtem Gold – Siebdruck macht's möglich.",
        author: "Alexander Basner"
      },
      {
        date: "07.03.2025",
        text: "Herr Klausner, passen Sie auf, was Sie sagen – sonst geht’s direkt zum Schulpsychologen.",
        author: "Alexander Basner"
      },
      {
        date: "07.03.2025",
        text: "Ich gehe in die Tiefe – und Sie gehen in die Knie. (zu Julian wegen der Abschlussprüfung)",
        author: "Alexander Basner"
      },
      {
        date: "07.03.2025",
        text: "Sie sollten nie ohne Fadenzähler ins Geschäft gehen.",
        author: "Alexander Basner"
      },
      {
        date: "12.03.2025",
        text: "Gälische Meme-Maschine.",
        author: "Alexander Basner"
      },
    ],
    "Böger": [
      {
        date: "06.09.2024",
        text: "Hat euch der Teserakt schon verlassen? \n JA \n Schön.",
        author: "Böger & BTP Klasse"
      },
    ],
    "Eminger": [
      {
        date: "28.06.2024",
        text: "Ihr seid Engel.",
        author: "Martin Eminger"
      },
      {
        date: "01.10.2024",
        text: "Darum geh ich jetzt einen Kaffee trinken – mit möglichst viel Zucker, weil das macht mich glücklich.",
        author: "Martin Eminger"
      },
      {
        date: "24.09.2024",
        text: "Seid ihr kräftig genug, dann steckt ihr es fünffach ineinander.",
        author: "Martin Eminger"
      },
      {
        date: "16.10.2024",
        text: "Also ich als junger Bursche hätte mir früher gewünscht, dass es mehr schwule Burschen gab.",
        author: "Martin Eminger"
      },
      {
        date: "16.10.2024",
        text: "Ich bin kein Araber.",
        author: "Martin Eminger"
      },
      {
        date: "16.10.2024",
        text: "Es gab Kontaktschwierigkeiten.",
        author: "Martin Eminger"
      },
      {
        date: "22.10.2024",
        text: "Wir sind Flüchtlinge im eigenen Land.",
        author: "Martin Eminger"
      },
      {
        date: "04.11.2024",
        text: "Siehst du, das ist meine Druck- und Medientechnik. Die können sowas aushalten.",
        author: "Martin Eminger"
      },
      {
        date: "06.11.2024",
        text: "Dann geht's zum Herrn Spaci, der hat heilende Hände.",
        author: "Martin Eminger"
      },
      {
        date: "12.11.2024",
        text: "Schwammerl... Ah, du bist das Magic Mushroom.",
        author: "Martin Eminger"
      },
      {
        date: "14.11.2024",
        text: "So, jetzt geh ich beinhart Kaffee trinken, denn ihr seid alle inkompetent.",
        author: "Martin Eminger"
      },
      {
        date: "14.11.2024",
        text: "Jetzt ist der Methin nicht da, jetzt kann er mir keinen Kaffee machen, und ihr seid daran schuld.",
        author: "Martin Eminger"
      },
      {
        date: "14.11.2024",
        text: "(hinten bei der Xerox, mit trauriger Stimme) \n Ich bekomm jetzt keinen Kaffee.",
        author: "Martin Eminger"
      },
      {
        date: "14.11.2024",
        text: "Ich hab die OI-Gruppe = Ordinäre Idioten.",
        author: "Martin Eminger"
      },
      {
        date: "14.11.2024",
        text: "Ich seh bescheuert aus... ICH LIEBE BESCHEUERT!",
        author: "Martin Eminger"
      },
      {
        date: "03.12.2024",
        text: "Man kann 15 cm durchhacken.",
        author: "Martin Eminger"
      },
      {
        date: "03.12.2024",
        text: "Kebab heißt aber nicht, dass das sich dreht, oder?",
        author: "Martin Eminger"
      },
      {
        date: "03.12.2024",
        text: "Ich bin wirklich noch ein Dinosaurier.",
        author: "Martin Eminger"
      },
      {
        date: "10.12.2024",
        text: "Habt ihr euch gegenseitig befruchtet?",
        author: "Martin Eminger"
      },
      {
        date: "21.01.2025",
        text: "Deine Unterhose gehört in den privaten Bereich.",
        author: "Martin Eminger"
      },
      {
        date: "30.01.2025",
        text: "Herztest. Das hab ich befürchtet, ihr Romantiker.",
        author: "Martin Eminger"
      },
      {
        date: "30.01.2025",
        text: "Nicht fressen – fräsen!",
        author: "Martin Eminger"
      },
      {
        date: "30.01.2025",
        text: "Fräsen. Das klingt total wissenschaftlich.",
        author: "Martin Eminger"
      },
      {
        date: "30.01.2025",
        text: "Das ist nicht der Fernrohr-Test.",
        author: "Martin Eminger"
      },
      {
        date: "30.01.2025",
        text: "Wenn die Deutschen was gut können, dann Bier.",
        author: "Martin Eminger"
      },
      {
        date: "30.01.2025",
        text: "Wir müssen unser Beweismaterial vernichten.",
        author: "Martin Eminger"
      },
      {
        date: "30.01.2025",
        text: "Man könnte meinen, ein Djinn steckt darin.",
        author: "Martin Eminger"
      },
      {
        date: "11.02.2025",
        text: "Jetzt ist der Herr Schachner sein Geld wert.",
        author: "Martin Eminger"
      },
      {
        date: "11.02.2025",
        text: "Ich werd dem Herrn Schachner noch was anderes sagen, weil ich auf den so sauer bin (Eishockey-Geschichte vom 01.01.2025).",
        author: "Martin Eminger"
      },
      {
        date: "11.02.2025",
        text: "Meine Schuhe kommen vom Lagerhaus.",
        author: "Martin Eminger"
      },
      {
        date: "11.02.2025",
        text: "Leute, er schreibt wirklich mit WIRKLICH... und wenn ich mal eine Sekunde nicht hinsehe, spielt er wieder dieses Spiel, wo Blöcke runterfliegen.",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Oh Furkan, mach mich froh! ",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Wie kann eine Stadt so hässlich sein? (auf Deutschland bezogen)",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Manchmal weiß man nicht, ob es eine Seerobe oder ein Mensch ist.",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Frankfurt ist die hässlichste Stadt.",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Du hast in diesem großen Land Orte, die sind schön – und Orte, die sind extrem hässlich.",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "13. – der Donnerstag.",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Bitte nicht falsch verstehen, aber ich bin nicht so. \n(bezogen auf das Wort „Hurenkinder“, meinte minderjährige Hurenkinder)",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Danke, ich bin kein VKAKI (Volkskanzler Kickl).",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Homogen... hat nichts mit homosexuell zu tun.",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Das ist ja nur meine amtliche Hose. Meine Amtshose.",
        author: "Martin Eminger"
      },
      {
        date: "13.02.2025",
        text: "Stell dir vor, die Maschine hätte Augen.",
        author: "Martin Eminger"
      },
    ],
    "Galehr": [
      {
        date: "12.02.2024",
        text: "(setzt sich hin und sagt:) LOCH",
        author: "Andreas Galehr"
      },
      {
        date: "12.02.2024",
        text: "G: Indem ich ja ein Mädchen für alles bin. \n K: Ja, aber ein ziemlich hässliches.",
        author: "Andreas Galehr & Franz König"
      },
      {
        date: "20.03.2024",
        text: "Ich schau immer Germany’s Next Topmodel, ich weiß sowas.",
        author: "Andreas Galehr"
      },
      {
        date: "28.06.2024",
        text: "Ja, genau, weil du's geschafft hast. Ich brauch nen Stift.",
        author: "Andreas Galehr"
      },
      {
        date: "06.09.2024",
        text: "Ihr habt noch nicht die finanzielle Belastung... aber ich kann mir auch keinen Urlaub leisten.",
        author: "Andreas Galehr"
      },
      {
        date: "06.09.2024",
        text: "Du wirst wahrscheinlich Kebab verkauft haben (zu Furkan).",
        author: "Andreas Galehr"
      },
      {
        date: "06.09.2024",
        text: "Meine Tochter und ich waren bei einem Papa-Tochter-Urlaub... man muss ja mal ins Ausland.",
        author: "Andreas Galehr"
      },
      {
        date: "06.09.2024",
        text: "Das war alles so schwarz-weiß... und die Adele hat man auch gesehen.",
        author: "Andreas Galehr"
      },
      {
        date: "06.09.2024",
        text: "Ach so, 1000 € – das geb ich an einem Tag aus.",
        author: "Andreas Galehr"
      },
      {
        date: "06.09.2024",
        text: "G: Was ist mit dir? \n F: Ich geh ins Ausland. \n G: Ist eh besser so.",
        author: "Andreas Galehr & Felipe Murani"
      },
      {
        date: "19.02.2024",
        text: "Wow, schwarz.",
        author: "Andreas Galehr"
      },
      {
        date: "03.10.2024",
        text: "Jede Maschine besitzt mindestens fünf Kugellager... MINDESTENS.",
        author: "Andreas Galehr"
      },
      {
        date: "26.11.2024",
        text: "Also ich finde, in jeder Freundesgruppe muss es mindestens einen oder vielleicht zwei Ausländer geben – DAS GEHÖRT SICH ZUR HEUTIGEN ZEIT!",
        author: "Andreas Galehr"
      },
      {
        date: "12.02.2025",
        text: "Noch nicht wegfliegen! Es ist noch Unterricht.",
        author: "Andreas Galehr"
      },
      {
        date: "03.03.2025",
        text: "Was hast du da...? Sind das gemixte Hamster? Das sieht aus wie Gedärme und so.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Das ist ja alles mitgepfuscht.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Das sind zehn Pfund... Britisch.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Moment, ich muss nachdenken.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Moment, was steht da? Vordere Lampe... aha, hintere Lampe... ok, ich versteh's eh nicht.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Das ist so dichttisch.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Und dann wissen wir beim Start, dass der Sonnenuntergang startet.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Ich möchte noch jemanden als fehlend eintragen.",
        author: "Andreas Galehr"
      },
      {
        date: "18.03.2025",
        text: "Ich brauch keine – ich hab keine Freunde.",
        author: "Andreas Galehr"
      },
      {
        date: "20.03.2025",
        text: "Ich quäl sie nicht – die sind glücklich.",
        author: "Andreas Galehr"
      },
      {
        date: "27.03.2025",
        text: "Das kann nicht sein, dass ihr nur fünf Leute seid. Ihr müsst mehr werden. Ihr sollt euch vermehren!",
        author: "Andreas Galehr"
      },
      {
        date: "27.03.2025",
        text: "Es ist alles so sinnlos... (verzweifelt)",
        author: "Andreas Galehr"
      },
    ],

    "Gruber": [
      {
        date: "15.05.2024",
        text: "Des is so wie die Gerlindes Spinatknödel.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Hier legst du jetzt deinen Stoff rein.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Ihr kommt auch mit drei Steinen rein und dann mit einem Job raus.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Ist ein laanges Gesicht.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Ich muss quasi was drauflegen, dann macht der Würfel MAGIC.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Wo soll ich es dranhängen? An meinen Slip?",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Das alles ist super cool und easy.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Ich kenne ihn nicht. Ich kann ihn nicht einfach anrufen.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Ich dachte, den sind wir los.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Ich bin so nett – wenn ich mittwochs Unterricht habe, wasche ich mit dir Haare, damit ihr euch denkt: Boa, das ist ja wie in der Werbung!",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "18.09.2024",
        text: "Drückt man, dann ist er dick.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "02.10.2024",
        text: "Ich muss noch ein paar Melonen ausdrucken.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "02.10.2024",
        text: "Irgendwer von euch vibriert die ganze Zeit.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "16.10.2024",
        text: "MELONE, Meloneee... keine Ahnung, wo das ist.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "08.11.2024",
        text: "Was Hades ist deine Mutter... der ist doch ein Mann.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "08.11.2024",
        text: "Herkules, glaubst du, war der fesch? ...I glaub ned.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "13.11.2024",
        text: "Julian, du darfst gerne weiter depressiv sein, wenn dir das hilft.",
        author: "Gerlinde Gruber-Avramidis"
      },
      {
        date: "12.03.2025",
        text: "G: Kabuto-Haare. \n Z: Meinen Sie Naruto?",
        author: "Gerlinde Gruber-Avramidis & Zsanett"
      },
      {
        date: "12.03.2025",
        text: "Meine Oma spielt Pokémon Go.",
        author: "Gerlinde Gruber-Avramidis"
      },
    ],
    "Havrest": [
      {
        date: "18.07.2023",
        text: "ignorier mich nicht du pisser",
        author: "Aryan Havrest"
      },
      {
        date: "21.09.2023",
        text: "sind wie Obdachlose de schweben so umadum",
        author: "Aryan Havrest"
      },
      {
        date: "12.10.2023",
        text: "H: Es kann tatsächlich sein das man durch zu scharfes Essen stirbt    \n  F: WAS",
        author: "Aryan Havrest & Furkan"
      },
      {
        date: "15.10.2023",
        text: "Beatboxen bitte später",
        author: "Aryan Havrest"
      },
      {
        date: "15.10.2023",
        text: "Letztes Mal hatten wir geschissene Animationen, jetzt haben wir eine geschissenere Animation",
        author: "Aryan Havrest"
      },
      {
        date: "15.10.2023",
        text: "Was sind sechs Apfelsäfte",
        author: "Aryan Havrest"
      },
      {
        date: "15.10.2023",
        text: "Irgendein scheiß Saft",
        author: "Aryan Havrest"
      },
      {
        date: "09.11.2023",
        text: "Sarkastisches und hohes HAHAHA",
        author: "Aryan Havrest"
      },
      {
        date: "09.11.2023",
        text: "Was für Polen... Polar",
        author: "Aryan Havrest"
      },
      {
        date: "09.11.2023",
        text: "Handy weg... sonst nehm ichs euch weg und fress es oder so",
        author: "Aryan Havrest"
      },
      {
        date: "09.11.2023",
        text: "Warum schaust du weg?",
        author: "Aryan Havrest"
      },
      {
        date: "09.11.2023",
        text: "in der Werkstatt haben wir Ufos die versprühen Wasser",
        author: "Aryan Havrest"
      },
      {
        date: "09.11.2023",
        text: "Verschwörungstheoretiker würden sagen wir versprühen Drogen die euch alle mindcontrollen",
        author: "Aryan Havrest"
      },
      {
        date: "30.11.2023",
        text: "Schmerzeritis oder wirklich Krank?",
        author: "Aryan Havrest"
      },
      {
        date: "30.11.2023",
        text: "Die Kunststoffmenschen hier",
        author: "Aryan Havrest"
      },
      {
        date: "30.11.2023",
        text: "Ich hab eben kein Respekt für den Holländern",
        author: "Aryan Havrest"
      },
      {
        date: "14.12.2023",
        text: "Jetzt ist genug mit Genshin Opfern",
        author: "Aryan Havrest"
      },
      {
        date: "14.12.2023",
        text: "oder die Flasche die Mate gerade so kuschelt",
        author: "Aryan Havrest"
      },
      {
        date: "11.01.2024",
        text: "ich judge jeden einzelnen von euch, dafür werd ich immerhin bezahlt",
        author: "Aryan Havrest"
      },
      {
        date: "11.01.2024",
        text: "Mein Hobby ist haten das ist was anderes",
        author: "Aryan Havrest"
      },
      {
        date: "25.04.2024",
        text: "wer ist dieser Einstein furry",
        author: "Aryan Havrest"
      },
      {
        date: "25.04.2024",
        text: "Die sind absolut beschissen lader aber gut im fliegen",
        author: "Aryan Havrest"
      },
      {
        date: "25.04.2024",
        text: "kann hier jemand Französisch? Nein ihr habts eh nichts verpasst ist eine komische Sprache",
        author: "Aryan Havrest"
      },
      {
        date: "25.04.2024",
        text: "Wo ist mein Gelb hin",
        author: "Aryan Havrest"
      },
      {
        date: "02.05.2024",
        text: "Buhuuu (zu Sabrina wie die Geister Einkaufsliste voN Spongbob)",
        author: "Aryan Havrest"
      },
      {
        date: "02.05.2024",
        text: "herst GUSCH",
        author: "Aryan Havrest"
      },
      {
        date: "16.05.2024",
        text: "Es klingt ur hart und es ist ur hart",
        author: "Aryan Havrest"
      },
      {
        date: "11.02.2025",
        text: "Ja pech friss draußen",
        author: "Aryan Havrest"
      },
      {
        date: "11.02.2025",
        text: "Der Klassenvorstand wird immer mitimportiert",
        author: "Aryan Havrest"
      },
      {
        date: "11.02.2025",
        text: "Ich frag mich gerde wieso ihr Schädel explodiert",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Ja ein paar Jäger sind schon wahre psychos",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Wir sind Tiere aber keine furrys",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Warum miaust und growlst du? (Zu nirvana)",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Ja bei ihr glaub ich schon eher das sie ein furry ist (Lidija)",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Imagine so ne Raupe kommt und frisst ein Blatt",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Das klingt eher so als ob jemand neben dir gestinkt hat",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "nicht weinen Felipe",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Die werden zuerst Blind und dann sterben sie daran also richtig unangenhem",
        author: "Aryan Havrest"
      },
      {
        date: "25.02.2025",
        text: "Da muss ich brennen (schnaps bezogen)",
        author: "Aryan Havrest"
      },
      {
        date: "04.03.2025",
        text: "Er hätte dich geopfert",
        author: "Aryan Havrest"
      },
      {
        date: "04.03.2022",
        text: "da kannst du etwas ritzen",
        author: "Aryan Havrest"
      },
      {
        date: "25.03.2025",
        text: "Felipe chill mal ein bisschen",
        author: "Aryan Havrest"
      },
      {
        date: "25.03.2025",
        text: "ihr sehr alles nur Allium",
        author: "Aryan Havrest"
      },
      {
        date: "25.03.2025",
        text: "Wir, wir sind Homosapiens und alle homos",
        author: "Aryan Havrest"
      },
      {
        date: "25.03.2025",
        text: "kennt ihr keine anderen Homos?",
        author: "Aryan Havrest"
      },
      {
        date: "25.03.2025",
        text: "Brutale Vorstellung aber wenn ich mir durch den Arm schneide...",
        author: "Aryan Havrest"
      },
    ],
    "Hradil": [
      {
        date: "27.09.2024",
        text: "C: OMG DER HUND  \n A:Wie hießen der Hund?  \n    C: Mein Onkel",
        author: "Christian Hradil & Alex"
      },
      {
        date: "27.09.2024",
        text: "Das machen wir schon Bernard teilt sich mit mir",
        author: "Christian Hradil"
      },
      {
        date: "21.02.2025",
        text: "in mein leben hab ich so eine sinnlose Datei nicht gesehen, also ich will nicht schimpfen aber was (sehr leise) what the fuck",
        author: "Christian Hradil"
      },
      {
        date: "14.03.2025",
        text: "und ich dachte nur so fuck sie kommen... aber Gottseidank war ich so fett",
        author: "Christian Hradil"
      },
      {
        date: "21.03.2025",
        text: "wir haben unsere ganze Farbeinstellung in unseren... schleich dich",
        author: "Christian Hradil"
      },
      {
        date: "21.03.2025",
        text: "ich bin so gefickt",
        author: "Christian Hradil"
      },
      {
        date: "04.04.2025",
        text: "(er niest) \n Gesundheit \n (zu sich selbst)",
        author: "Christian Hradil"
      },
    ],
    "Honkisz": [
      {
        date: "07.03.2023",
        text: "ich kann heute nicht schlafen wenn du mir das nicht jetzt sagst.",
        author: "Bernhard Honkisz"
      },
      {
        date: "07.03.2023",
        text: "Ich kann mit dieser Enttäuschung nicht Leben, ich werde heute zuhause von der Brücke springen",
        author: "Bernhard Honkisz"
      },
      {
        date: "07.03.2023",
        text: "habt ihr die Vordermarken eingestellt ihr Luschen?",
        author: "Bernhard Honkisz"
      },
      {
        date: "07.03.2023",
        text: "das ist der heilige Bogen wenn du denn jetzt veraust, sterbe ich",
        author: "Bernhard Honkisz"
      },
      {
        date: "21.03.2023",
        text: "Wie die Bravo nur für Drucker, Dr Sommer und so",
        author: "Bernhard Honkisz"
      },
      {
        date: "21.03.2023",
        text: "Der Gerät ist gut",
        author: "Bernhard Honkisz"
      },
      {
        date: "21.03.2023",
        text: "Stellt euch mla vor es gibt eine Erfindung namens Internet",
        author: "Bernhard Honkisz"
      },
      {
        date: "21.03.2023",
        text: "Der Mensch hat geheult und musste sich übergeben",
        author: "Bernhard Honkisz"
      },
      {
        date: "21.03.2023",
        text: "Wenn ich mir schau wie du den Fetzen vergewaltigst tut es mir im Herzen weh",
        author: "Bernhard Honkisz"
      },
      {
        date: "21.03.2023",
        text: "Sag es mir! Wenn du es nicht weißt wirst du keinen Kissprint erleben",
        author: "Bernhard Honkisz"
      },
      {
        date: "18.04.2023",
        text: "Warum is alles auf der SChule scheiße?",
        author: "Bernhard Honkisz"
      },
      {
        date: "11.10.2023",
        text: "Ich hab mich weg geworfen",
        author: "Bernhard Honkisz"
      },
      {
        date: "08.05.2024",
        text: "Ich erfinde ein neues Schimpfwort für euch... ich zwei Strebertussen \n (zu Cynthia & Sabrina)",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Du bist nicht in Kosovo hier wird nicht geschlagen, das ist kein Serbe",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Wir geben ihr die Schuld. Es sind immer die Ausländer",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Ich bin auf deine Partnerin gestiegen nur damit du bescheid weißt",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Ihr habt alle Pause außer Kosovaren",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Ich sags euch ganz ehrlich YouTube Tutorial",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Ich kann nichts gegen Türken sagen, aber er kann das",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "irgendwann komm ich drauf ... auch wenn ich mich bis dahin angepinkelt habe",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "heaast ihr Schwimmkapal ",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Die Türken sind ein Wahnsinn",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Wer sowas frisst, frisst kleine Kinder",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "I mog eich olle OWA ... oha des hast des",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Kinder mit euch komm ich nicht weit",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Zum Glück bin ich kein Wiener \n Obwohl ich ein gebürtiger Wiener bin",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Danach lern ich kosocanisch",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Nicht persönlich gemeint aber gute Wahl \n (Fjona hat sich dazu entschieden kein Drucker zu werden)",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Ich kann paar Sachen nicht, eins davon ist Russisch",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Dann kommen sie zu mir und heulen sich aus und ich kann nur sagen das sind lauter Mädchen und Ausländer",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Stell dir vor du ast für deinen Partner gekocht decks auf und er röumt dir dann alles wieder weg, der muss auf den Kellertreppen Wochenlang schlafen und bekommt keine Nachspeise mehr.",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "Das ist das gleiche wie beim Partner, nur darf ich dann auf den Kellertreppen wochenlang schlafen und bekomm keinen Nachspeise",
        author: "Bernhard Honkisz"
      },
      {
        date: "15.05.2024",
        text: "YA WIR ROCKEN \n (mit leiser Stimme) \n den Drucksaal",
        author: "Bernhard Honkisz"
      },
      {
        date: "22.05.2024",
        text: "Es san immer de Ausländer oder de Rothaarigen",
        author: "Bernhard Honkisz"
      },
      {
        date: "22.05.2024",
        text: "FPÖ Wähler wos sunst",
        author: "Bernhard Honkisz"
      },
      {
        date: "29.05.2024",
        text: "Musst aufpassen sonst wirst mein lieblings Türke",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Machs wie da Furkan mit da KI, der glaubt ernsthaft das ich nichts bemerkt habe",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "du Flasche geh zu ihr und lass dir erklären wie man Protokolle abspeichert",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Wie findet ihr den Lengauer? \n Ich sags auch nicht weiter",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Das ist das letzte Land wost im Supermakrt Schusswaffen kaufen kannst, ns serwas",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Bist deppad der Bogen macht da drinnen alles was Spaß macht, nicht das der gleich nen Salto macht",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Geh scheipen dauernd muss man d an deiser Schule irgendwas reparieren, ich fühl mich wie ein Autobastler",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Foltern darf man auch nicht mehr öffentlich",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Jetzt kummst Bier eh geil Suppa",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "ich bin außverkauft \n (auf sein Buch bezogen)",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Auch auf den Bermudas gibts mich",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Ich dachte die Bermudas gibts nur im Fernseher",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Find ich gut das die Sünden gereinigt werden die waren eh schon dreckig",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Zurück zu meinen Freunden denn Zeugen Jehovas",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Also deine neue Freundin ist in einer Sekte aufgrund eines Übersetztungsfehler",
        author: "Bernhard Honkisz"
      },
      {
        date: "05.06.2024",
        text: "Wie heißen die deppaten 50 Schatten",
        author: "Bernhard Honkisz"
      },
      {
        date: "26.11.2024",
        text: "Du bist mein lieblings Türke, aber das kann ich nur sagen weil Furkan nicht da ist",
        author: "Bernhard Honkisz"
      },
    ],
    "Höfferer": [
      {
        date: "21.11.2023",
        text: "Falls meine Schularbeit zu schwer ist, tut mir leid ich verack manchaml",
        author: "Thomas Höfferer"
      },
      {
        date: "27.02.2024",
        text: "Mein Land Lady von Peru",
        author: "Thomas Höfferer"
      },
      {
        date: "09.04.2024",
        text: "Ich weiß nicht einmal wie sie heißt",
        author: "Thomas Höfferer"
      },
      {
        date: "30.04.2024",
        text: "H: Halmai? \n  S: ist nicht da    \n  H:Das ist gut",
        author: "Thomas Höfferer & Sabrina"
      },
    ],
    "Knaus": [
      {
        date: "03.09.2024",
        text: "Damals als ich noch Haare hatte",
        author: "Michael Knaus "
      },
      {
        date: "03.09.2024",
        text: "Duplex war für mich immer was unanstädniges",
        author: "Michael Knaus "
      },
      {
        date: "03.09.2024",
        text: "das ist die Knauschi 5",
        author: "Michael Knaus "
      },
      {
        date: "21.11.2024",
        text: "Nimm dein U-Hagal mit und komm gleich rüber",
        author: "Michael Knaus "
      },
      {
        date: "21.11.2024",
        text: "Bring dein U-Hagal mal in Ordnung \n (zu Nathalie)",
        author: "Michael Knaus "
      },
      {
        date: "21.11.2024",
        text: "K: Steh mal auf und gib deine Schulter zurück \n S: Neee \n K: Doch weil sonst schaust du aus wie ein S oder ein Fragezeichen",
        author: "Michael Knaus & Sabrina"
      },
      {
        date: "26.11.2024",
        text: "Habt ihr Instgram? \n Wenn ja dann Followts mir auf Instagram",
        author: "Michael Knaus "
      },
      {
        date: "26.11.2024",
        text: "Ich bin doch auch Müde, das ist nur eine Motivation dass ich den Unterricht halten kann",
        author: "Michael Knaus "
      },
      {
        date: "26.11.2024",
        text: "Ich geb Alphapartys",
        author: "Michael Knaus "
      },
      {
        date: "26.11.2024",
        text: "Ich hab Alphapartys geschmissen und Bier getrunken",
        author: "Michael Knaus "
      },
      {
        date: "26.11.2024",
        text: "Ihr seht das ich mit jeden einen Verbinung machen will \n Da hinten ist er mit den Haaren und Football \n Da habe ich meine Getränge Abteilung \n und da sind meine Kalender Mädchen \n UND DICH BRING ICH HEUTE NOCH ZUM LACHEN \n (zu Nathalie)",
        author: "Michael Knaus "
      },
      {
        date: "17.12.2024",
        text: "Kriegt ein Sternchen das Eriklein \n Warte ich muss deine Haare dazu zeichnen",
        author: "Michael Knaus "
      },
      {
        date: "17.12.2024",
        text: "Ich bin die Generation von 9/11",
        author: "Michael Knaus "
      },
      {
        date: "17.12.2024",
        text: "Wie nennt man das wenn man traurig ist ... depressiv",
        author: "Michael Knaus "
      },
      {
        date: "17.12.2024",
        text: "Da kannst du dir normalerweise die Kugel geben",
        author: "Michael Knaus "
      },
      {
        date: "17.12.2024",
        text: "KNAUS RAUS",
        author: "Michael Knaus "
      },
      {
        date: "14.01.2025",
        text: "Ich bin der coolste Lehrer und das sind meine Kids \n (parodiert ein Tiktok Video)",
        author: "Michael Knaus "
      },
      {
        date: "14.01.2025",
        text: "Du bist die Quelle des Lachen \n (zu Mate)",
        author: "Michael Knaus"
      },
      {
        date: "14.01.2025",
        text: "Was ist schon lustig in unseren Leben",
        author: "Michael Knaus "
      },
      {
        date: "14.01.2025",
        text: "Geh als Gangster Rapper mir eine Kreide holen und sagts LEBEN ODER KREIDE und wehe wir hören die Sirene",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "Steh ma auf Teletubbie",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "Du bist heute so schön Blau angezogen ",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "Bockig und Hart ... BoCkIg & HaRt",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "Burder sagst du bigger & bigger & bigger",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "In der Produktion ist die Ecke geil",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "K: Teletubbie wieso hast du dich ausgezogen \n J: Ja Herr Professor mir war warm aber ich hab eh noch ws Blaues an \n K: Dann rauf mit den Füßen",
        author: "Michael Knaus & Julian"
      },
      {
        date: "25.02..2025",
        text: "ned den Tinkiwinki hängen lassen",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "Ich will dann Foti, Schreibi, Tippi",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "Fatma FEEEEEEEEHLT",
        author: "Michael Knaus "
      },
      {
        date: "25.02..2025",
        text: "Furkan ist leider auch da",
        author: "Michael Knaus "
      },
    ],
    "König": [
      {
        date: "18.04.2023",
        text: "Weißt du nicht wie man Schwanger wird? HÄÄÄÄ",
        author: "Franz König"
      },
      {
        date: "06.06.2023",
        text: "Wie haben Schnecken Sex? \n Das ist wirklich lustig wie die Sex haben",
        author: "Franz König"
      },
      {
        date: "06.06.2023",
        text: "Die haben Sex das kann ich Kindern nicht zeigen",
        author: "Franz König"
      },
      {
        date: "06.06.2023",
        text: "Ich züchte Schnecken und esse sie",
        author: "Franz König"
      },
      {
        date: "11.09.2023",
        text: "Der Hansi is hässlich weil er keine Federn hat",
        author: "Franz König"
      },
      {
        date: "31.01.2024",
        text: "ich geh zurück in die Zukunft ... SCHAISE",
        author: "Franz König"
      },
      {
        date: "31.01.2024",
        text: "K: Merkt man das ich weine? \n S&N: Ja",
        author: "Franz König & Sabrina & Nathalie"
      },
      {
        date: "07.03.2024",
        text: "Ich zeig euch jetzt was ghosten ist \n ... \n Ihr wurdet gerade geghosted ",
        author: "Franz König"
      },
      {
        date: "28.06.2024",
        text: "Unser Direktor beißt Gottseidank nicht",
        author: "Franz König"
      },
      {
        date: "17.09.2024",
        text: "Bist du ein Swifty?",
        author: "Franz König"
      },
      {
        date: "17.09.2024",
        text: "Wir sind jetzt gemein und ändern das damit Tesarek sich bewegt",
        author: "Franz König"
      },
      {
        date: "17.09.2024",
        text: "Ich hab den Herrn Spaci rübergeswiped",
        author: "Franz König"
      },
      {
        date: "17.09.2024",
        text: "Ihr müsst ir versprechen das ihr Konflikte ohne Gewalt löst, also kein schlagen, keine Kehlen aufschlitzen und so weiter",
        author: "Franz König"
      },
      {
        date: "26.09.2024",
        text: "Das ist so wie beim Auto, wennst in Sitz, Spiegel, Lenkrad alles verstellst fährst auch irgendwan mal an ",
        author: "Franz König"
      },
      {
        date: "26.09.2024",
        text: "Aber nicht zu tief... sonst bist du blau",
        author: "Franz König"
      },
      {
        date: "26.09.2024",
        text: "Wär ich nur betruken gewesen",
        author: "Franz König"
      },
      {
        date: "26.09.2024",
        text: "Ich bin immer leicht Sauer aber nicht Basisch",
        author: "Franz König"
      },
      {
        date: "26.09.2024",
        text: "Wir suchen jetzt den Auftag ... irgendwas mit Eltern",
        author: "Franz König"
      },
      {
        date: "05.11.2024",
        text: "Jeder ist Organspender egal ob du ein Ausweis hast oder nicht",
        author: "Franz König"
      },
      {
        date: "07.11.2024",
        text: "Ich will ihn meine K.O. Tropfen geben",
        author: "Franz König"
      },
      {
        date: "07.11.2024",
        text: "Mein Lieber Druckkollege Bernard",
        author: "Franz König"
      },
      {
        date: "27.11.2024",
        text: "And who the fuck is senefelder",
        author: "Franz König"
      },
      {
        date: "27.11.2024",
        text: "Das war erst die Mama von den konventionellen Druckverfahren",
        author: "Franz König"
      },
      {
        date: "27.11.2024",
        text: "Für mich heißt ihr alle WIEN",
        author: "Franz König"
      },
      {
        date: "27.11.2024",
        text: "Ich bin auch Austria Fan, das ist peinlich genug",
        author: "Franz König"
      },
      {
        date: "27.11.2024",
        text: "Wenn sie auf die Welt kommt ... unbedruckt natürlich",
        author: "Franz König"
      },
      {
        date: "27.11.2024",
        text: "Dann spring ich und sag \n LÜG MICH NICHT AN",
        author: "Franz König"
      },
      {
        date: "27.11.2024",
        text: "Meine Enkeltochter ist erst 4 Monate alt die checkt noch gr nichts",
        author: "Franz König"
      },
      {
        date: "10.12.2024",
        text: "Was sagt die Schulärztin? \n Bist du Tod?",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "Missionarstellung \n ... das wollt ich nicht mit mir besprechen",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "der ist so verzweifelt das er ausm Fenster springt",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "Standardmäsig schaut man sich den Druckbogen unter Depressionen an ... und auch nicht unter Rauschgift außer Herr Tesarek der schaut sich immer Druckbogen an",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "hör auf zu niesen bitte du weißt das ich das nicht will",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: " jetzt ist der Logarithmus simple und sexy zu verwenden",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "shit in shit out",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "wie schnaps...prost meine lieben...ich kann's wie ein Unfall aussehen lassen",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "der mit den Hörnern...nennen wir ihn Lengauer",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "die Dickemessung ist zwar simple und sexy aber...",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: " bitte zahlen sie für mich 56.000 € im Jahr",
        author: "Franz König"
      },
      {
        date: "04.12.2024",
        text: "im April ist der Lengauer der Wächter aber jetzt bin ich es",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Hoit de Goschn wenn ich was liebes sag",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Mit euch ist es immer besonders",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Absolut lit",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Ich bin noch von der Generation die ins phone reinbrüllen wie meine Oma",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Früher waren unsere Telefone Jogurtbecher",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Ich bin ja kein Drogen dealer ",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Ich bin der Geschäftsführer von King organigs ein Organ Handel unternehmen ",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Ich möchte mich kurz vorstellen. Meine Name ist Franz König und bin der Geschäftsführer von King organics",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Ich hab mit einer Klasse mal papierprüfung gemacht danach bin ich vom Herrn Schacher gefeuert worden ",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Wenn du diese Überlegung nicht anstellst \n (stell Mistkübel auf den Tisch und wirft Geld in den Müll)",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Und du kriegst ein Gut und vielleicht noch ein Herzerl ",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Ein hingeschissener scheißdreck",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Mein Name ist Franz König und dieser Kurs heißt fit für die Führungs Ebene ",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Ihm taugt das nicht auch wenn es dir taugt ",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Er kann das wie nen Unfall ausschauen lassen",
        author: "Franz König"
      },
      {
        date: "11.12.2024",
        text: "Leute ich bin euer Coach wenn ihr das versemmelt das ganze dann bin ich enttäuscht und zwar von mir ",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Willkommen an der graphischen dieser Kurs heißt \n Fit für die Fürungsebenen",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Wenn jemand nicht da ist werde ich ihn swipen",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Ihr gebts ma keine Chance zum swipen",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Da Furkan ist nicht da ... geil",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Ihr seid ein ganz wichtiger Teil meines Lebens. \n Nicht der schönste aber ein Teil",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Du hast mich verwirrt wieso fehlst du heute nicht",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Die und die hab ich geghostet diese Bitch",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Kinderarbeit ist mein Erfolgrezept gewesen",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Ein zweites Kind ist entstanden. \n Es schaut seiner Mama sehr ähnlich",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Es entstehen drei Kinder aus dieser Liebesbeziehung da oben",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Oida das heißt viskosimeter du Fisch Kopf",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Wir hätten diese ganzen Schwierigkeiten nicht hätten wir noch einen König",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Wenn wir einen König hätten dann würde er nur vielleicht in eine Richtung schauen",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Ich bin die Pilotin",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Ihr alten Schachteln ",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Wenn ich mir euch anschaue seids ihr nicht nur hässlich sondern auch sehr sehr gelb ",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Ich hab Augenbrauen ja",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Vielleicht hab ich bei der Prüfung einen Eyeliner oder smokey ",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Meine liebenden Studierenden haltets bitte die Goschn",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Meine Mutter hat ausgschaut das war ne schnalle ",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Bei so nem Workflow sieht das aus wie der Stammbaum bei den Habsburgern ",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Fragen ist an der Schule verboten. Fragen darf nur der, der die Antwort weiß",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Jetzt entstehen die Kinder. ",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Shhhh ein druckbaby kommt auf die Welt nicht nur eines sondern drei",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: "Zuerst muss ich euch mit unserer Raster Methode hypnotisieren",
        author: "Franz König"
      },
      {
        date: "08.01.2025",
        text: " Die Hypnose Methode  \n funktioniert immer zumindest bei Hendl",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Ich hab nicht aufgepasst und plötzlich mag ich euch",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Die wir mit dem Nagel aufmachen müssen um zu unseren Druckplatten zukommen",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Wenn ich zb. meinen Eyeliner nehme oder meine Mascara für die Wimpern nehme, auf einmal schau ich aus wie Batman",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Ihr als Druck Technniker seid schuld daran das mich alle mit Batman verwechseln",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Es dreht sich schon die Semmel des Todes",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Der arme Kerl rechnet sich zu einem idioten jetzt",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Heute seid ihr besser als sonst, habt ihr einen Zaubertrank?",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Da schaut euch wer von der Seite an, fühlt ihr euch beobachtet? \n Der manfred schaut ums Eck",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Wisst ihr wer helfen kann? \n Batman",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Alter ich schwör, da ich geh heute zum Billa und kauf ma das",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Geht mir öfters so das ich mit Batman verwechselt werde",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Der Trottel tragt seine Unterhose außen",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Das knappe schwarze",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Er arbeitet im Jahr 2016. \n Ward ihr da schon geboren?",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Ich bin auch 1960",
        author: "Franz König"
      },
      {
        date: "15.01.2025",
        text: "Ich bin auch immer besser wenn es dunkel ist",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Aufgewacht die Sonne lacht",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Er lebt leider nicht mehr aber ich hab ihn geliebt",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Das ist jetzt kein Body shaming, aber mein kollege Tesarek ist jetzt nicht so groß wie der Lengauer \n (klettert plötzlich auf den Tisch)",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Ich war kurz Zähneputzen",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Magst du kurz rausgehen in den Garten?",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Die Missionaren. \n Die rennen aber alle in verschiedene Richtungen und nicht in die selbe",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Stell dir vor wie ich mich Linear freue",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Hände weg von Drogen",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Das ist meine Empfindungskurve ALTER",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Papier, Probe, komsiche Kurve",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Stehpansdom: Franz König = Logarithmus",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Was mach ich als Drucker? \n NOCH MEHR FARBE",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Fix Bruder \n Fix Schwester",
        author: "Franz König"
      },
      {
        date: "22.01.2025",
        text: "Du hast es in unserer Sprache gesagt. Meine Mutter kommt aus der Slowakei",
        author: "Franz König"
      },
      {
        date: "23.01.2025",
        text: "Ic bin Vegner und heiße Fleischfresser",
        author: "Franz König"
      },
      {
        date: "12.02.2025",
        text: "Ich weiß jetzt wer die Zauberhexe ist",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Basner ist ein toller Mensch \n WAS?",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Normalerweise haben nur die Lehrer eine Frage",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "hab ich euch schon mal gesagt wie sehr ich euch hasse?",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "UHH es war kein Schönheitsschalf \n (zu Felipe)",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "jetzt knie ich mich nieder vor euch ... weil mein Schuhband offen ist",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Nein Peter, das mit dem Schnaps war ein Spass \n ... \n nein das war tot ernst",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Fachlich bist du in Ordnung aber Menschlich... \n (zu Peter)",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "aber wir dürfen nicht bedenken",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Ich hab Mut zum scheitern, sonst würd ich nicht eine 4. Fach in Kalkualtion unterrichten",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Wenn weniger als die Hälfte von euch die Prüfung beesteht",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "nur wenn ihr sterben wollt \n (Felipe will mit König saufen gehen)",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Mich hauts wirklich bei einen Bier um ",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Wir waren immer ein Männerunternehmen \n ... \n Leute das war schön",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Seit ihr jetzt dann satanistische Hexen? \n (bezogen auf Schwarzkünslter)",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "wir erinnern uns gemeinsam ans Jahr 1450 zurück",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "AUS GOTTES NAMEN MUSST DU FÜR MICH STERBEN \n du trottelischer Fischkopf",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "ich hab schon ganze Städte getötet \n (wegen Blei Letter)",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "es hat ein richtiger Religionskrieg begonnen",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Nun meine lieben Fetzenschädeln",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Wir Österreicher sollen uns auf die seiter der Amerikaner, die haben mehr Bomben",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Entweder wir pumpen es aus der Erde, dafür brauchen wir Bomben und Amerika, \n oder wir nehmen Traktoren ... aber bitte geht vor den Traktoren, weil da kommen immer so viel Bienen um",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "SCHEIß AUF DIE ROBBENBABYS",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Was hab ich sonst noch für Probleme \n ÖL",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Leute sobald das ausgetrochnet ist seit ihr schrumpelig außer die Hexen unter euch",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "Harz kann dermaßen Hart werden",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "für euch heißt es: \n schneller leben",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "die Frau Sares komtm jetzt, setzt euch bitte jetzt gerade hin",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "sie sind Menschlich in ordnung, ... fachlich naja",
        author: "Franz König"
      },
      {
        date: "17.02.2025",
        text: "das passiert bei unseren Aufsaufen auch",
        author: "Franz König"
      },
      {
        date: "24.02.2025",
        text: "Leute es gibt zwei untersschiede zwischen geschait reden und drucken",
        author: "Franz König"
      },
      {
        date: "24.02.2025",
        text: "da gehen mir wieder alle Pläne durch den Kopf \n (weil Peter anwesend ist)",
        author: "Franz König"
      },
      {
        date: "24.02.2025",
        text: "(irgendwo in Salzburg) \n man darf nur eine Zeitlang drinnen bleiben, da man sonst erleuchtet",
        author: "Franz König"
      },
      {
        date: "24.02.2025",
        text: "Da wird einmal ein UFO gelandet sein",
        author: "Franz König"
      },
      {
        date: "24.02.2025",
        text: "ich zeig euch jetzt ein Foto von meiner Enkelin, die bekommt gerade Zähne und die ist nur Ruhig wenn sie bei mir zuhause ins Aquarium reinschreit",
        author: "Franz König"
      },
      {
        date: "03.03.2025",
        text: "ALTER wieso durch 5",
        author: "Franz König"
      },
      {
        date: "12.03.2025",
        text: "Wald rostet nicht",
        author: "Franz König"
      },
      {
        date: "12.03.2025",
        text: "Der sauft ab, dann könnt ihr lachen",
        author: "Franz König"
      },
      {
        date: "12.03.2025",
        text: "Achso Morden versteh ich",
        author: "Franz König"
      },
      {
        date: "12.03.2025",
        text: "Mit solchen Leuten hast im Hefen zu tun",
        author: "Franz König"
      },
      {
        date: "17.03.2025",
        text: "Ich ls Lehrer darf das ja sagen, aber ...",
        author: "Franz König"
      },
      {
        date: "17.03.2025",
        text: "irgendeiner von euc wppler hat mich angesteckt \n oder der Außerirdische der sich in mir eingenistet hat, bricht gleich aus",
        author: "Franz König"
      },
      {
        date: "24.03.025",
        text: "Es gab in meinen Dorf nur ein schöne, nur mein Problem war das war meine Schwester",
        author: "Franz König"
      },
      {
        date: "24.03.2025",
        text: "und beim rest wusstes du nicht ob es wölfe oder bären sind, die meisten waren aber Braunbären \n ... \n und dann sind wir nach wien gezogen und meine schulleistung sind abgesützt und meine lebensleistung ist gestiegen, ",
        author: "Franz König"
      },
      {
        date: "24.03.2025",
        text: "Den Brieg bereuch ich heute noch an den einen Braunbär",
        author: "Franz König"
      },
      {
        date: "24.03.2025",
        text: "in die hätt ich mich eh nicht verliebt mit den lächerlichen 25 Jahren alters unterschied \n ich war 6 und sie 31 \n (eine Lehrerin von ihm)",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "Gras kauft man in Gramm",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "Kauft man Kokain auch in Gramm?",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "ich wills wissen von euch Drogenprofis",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "mit 252kg bist du nicht einmal ein Kapitales Seerobben Männchen \n da bist du die Witzfigur der Arktis",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "Goggle einmal wie schwer ein Seeprderchen wird \n ...2g ...4g ...10 GramM? \n wär in Kokain ein 1000er \n 14!... HAHA",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "nein nein nein ist nicht in Drogen",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "so peinlich wies ist, ich war schon immer Austria Wien Fan \n i was de san scheiße owa i gfrei mi trotzdem wenn sie gewinnen",
        author: "Franz König"
      },
      {
        date: "31.03.2025",
        text: "dann mach ich mich auf die Socken",
        author: "Franz König"
      },
      {
        date: "28.04.2025",
        text: "stell dir vor neben dir sitzt am Klo \n FRANZ KÖNIG",
        author: "Franz König"
      },
      {
        date: "28.04.2025",
        text: "Wies dann weiter geht wisst ihr eh",
        author: "Franz König"
      },
    ],
    "Lengauer": [
      {
        date: "21.11.2024",
        text: "Ich wollt gerade sagen kennen sie sich überhaupt aus bei einen Computer (zu Mate)",
        author: "Martin Lengauer"
      },
    ],
    "Pixner": [
      {
        date: "27.01.2023",
        text: "er ist wie Schrödingers Katze \n nie d aber auch immer da \n halt nur ist es Schrödingers Manuel",
        author: "Roland Pixner"
      },
      {
        date: "27.01.2023",
        text: "Rinder für Mittelerde",
        author: "Roland Pixner"
      },
      {
        date: "27.01.2023",
        text: "mich kann man bestechen mit Käsebrot",
        author: "Roland Pixner"
      },
      {
        date: "10.03.2023",
        text: "jetzt schauen wir´s uns an ... und zwar von hinten",
        author: "Roland Pixner"
      },
      {
        date: "17.03.2023",
        text: "Die Aliens sind aufm Gürtel gelandet und haben ein Dönerstandl überfallen",
        author: "Roland Pixner"
      },
      {
        date: "17.03.2023",
        text: "In Wahreit ist der GGP Lehrer ein Reptiloid \n in Wahheit ist der Paps ein Reptiloid",
        author: "Roland Pixner"
      },
      {
        date: "23.03.2023",
        text: "Fanz fische geile Äpfel",
        author: "Roland Pixner"
      },
      {
        date: "30.03.2023",
        text: "Ich bitte euch, wenn es nicht ein Loch in euer Döner Budget reißt...",
        author: "Roland Pixner"
      },
      {
        date: "30.03.2023",
        text: "... Döner Budget schonen",
        author: "Roland Pixner"
      },
      {
        date: "31.03.2023",
        text: "Shish Club oder BDSM Club",
        author: "Roland Pixner"
      },
      {
        date: "31.03.2023",
        text: "vielleciht macht er sich ein Only Fans Account",
        author: "Roland Pixner"
      },
      {
        date: "14.04.2023",
        text: "Gottes Willen das die Polen uns nicht behalten",
        author: "Roland Pixner"
      },
      {
        date: "14.04.2023",
        text: "10€ also ein gutes Döner Menü",
        author: "Roland Pixner"
      },
      {
        date: "14.04.2023",
        text: "Flüchtling hat ein Chihuahua entführt und zur Wurst verarbeitet",
        author: "Roland Pixner"
      },
      {
        date: "14.04.2023",
        text: "Da werden Katzen in Gläser gestopft",
        author: "Roland Pixner"
      },
      {
        date: "27.04.2023",
        text: "Alle sind WUIIIII",
        author: "Roland Pixner"
      },
      {
        date: "12.05.2023",
        text: "M: Da wird Knapp \n P: Kurz und Knackig ist gut \n \n (berogen auf Mirko Bikinis)",
        author: "Roland Pixner & Michelle"
      },
      {
        date: "25.05.2023",
        text: "Da wirds für mich spät kommen, hab leider keine Haare mehr",
        author: "Roland Pixner"
      },
      {
        date: "25.05.2023",
        text: "Ich hab tatsächlich mal Haare gehabt",
        author: "Roland Pixner"
      },
      {
        date: "15.06.2023",
        text: "Böser Peter nein aus ",
        author: "Roland Pixner"
      },
      {
        date: "15.06.2023",
        text: "Peter bsit du emotional bereit?",
        author: "Roland Pixner"
      },
      {
        date: "16.06.2023",
        text: "Auch abstechen nur in der Pause",
        author: "Roland Pixner"
      },
      {
        date: "22.02.2024",
        text: "Ich will ja nicht Stress machen, ABER",
        author: "Roland Pixner"
      },
      {
        date: "15.04.2024",
        text: "Es ist eh Vodka aber es hört sich besser an wenn man destilliertes Wasser sagt",
        author: "Roland Pixner"
      },
      {
        date: "11.02.2025",
        text: "Bubatz und so bitte daheim lassen \n die AK-47 auch daheim lassen",
        author: "Roland Pixner"
      },
      {
        date: "11.02.2025",
        text: "Ich hab auch eine Eichhörnchenblase",
        author: "Roland Pixner"
      },
      {
        date: "18.02.2025",
        text: "DAS IST ZU GROß",
        author: "Roland Pixner"
      },
      {
        date: "25.02.2025",
        text: "Könnt ihr euch bitte nachher Töten sonst muss ich nen Scyth holen",
        author: "Roland Pixner"
      },
    ],
    "Pöschko": [
      {
        date: "08.05.2024",
        text: "Das ist wie eine Geschlechtsumwandlung",
        author: "Werner Pöschko"
      },
      {
        date: "08.05.2024",
        text: "Das ist ein harter eingriff in das Bild",
        author: "Werner Pöschko"
      },
      {
        date: "08.05.2024",
        text: "Das ist die Geschlechtsumwandlung was ich gesagt habe",
        author: "Werner Pöschko"
      },
      {
        date: "29.05.2024",
        text: "Bei dir muss ich mich fragen was du für Substranzen einnimmst",
        author: "Werner Pöschko"
      },
    ],
    "Rizk": [
      {
        date: "24.01.2025",
        text: "Ich mach so geile Youtube Videos",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Wir zwei machen ein Musik Video das wird so ein Monster Teil ich sags dir",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Wir machen jetzt Pause und dann machen wir weiter mit Urheberrecht",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Wie heißt diese Obdachlosen Zeitung",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Traust du mir das nicht zu?",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Das ist aber frech",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Das geht ruckizucki",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Das wird ein Monster Teil",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Das is jetzt Speckulatius",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Wenn du geistig behindert bist, bist du ausn schneider",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Du kennst die Musik der KI, die ist geil",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "willst du nichts mit mir zu tun haben? \n ... \n  Magst du mich nicht?",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Echt, scheiß mich an",
        author: "Richard Rizk"
      },
      {
        date: "24.01.2025",
        text: "Also wenn ich heute nochmal zum Studieren beginnen würde ...",
        author: "Richard Rizk"
      },
      {
        date: "31.01.2025",
        text: "R: Wann habt ihr in das letzt mal gesehe? \n F:Jetzt",
        author: "Richard Rizk & Furkan"
      },
      {
        date: "31.01.2025",
        text: "das hatten wir vor deiner Zeit",
        author: "Richard Rizk"
      },
      {
        date: "31.01.2025",
        text: "da gibts Tage da prüf ich in gaaanzen Tag \n und dann gibts Tage wo ich nie prüfe \n (mit extrem trauriger stimme)",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Schlucks runter. Je schneller desto besser",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Schul Exorzist Optimist",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Mögt ihr Äpfel? \n Obst?",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Zeig mir dein blaues Ding",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Ich bin jetzt nicht der riesen Künstler aber das ist ein Apfel \n ein kreativer Apfel",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "bitte fangt jetzt nicht an zu weinen",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Was lest ihr? ... Liebesromane?",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Lost...",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Apfel, Apfel, Apfel, Apfel, Apfel",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Es gibt kein Apfel Advanced",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Ich will nicht persönlich von dir angesprochen werden, lass mich in Ruhe",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "IN DIE MITTE SCHAUEN \n (zu peter)",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Egal was du sagst bei 14 stunden kannst du nichts rechtfertigen \n (zu Peter wegen seiner Bildschirmzeit)",
        author: "Richard Rizk"
      },
      {
        date: "14.02.2025",
        text: "Ich bin nicht Schizophren",
        author: "Richard Rizk"
      },
      {
        date: "21.02.2025",
        text: "bei mir gibt es keine Heizung \n dass heißt auch kein warmes Wasser und ich mag es nicht kalt zu Duschen",
        author: "Richard Rizk"
      },
      {
        date: "28.02.2025",
        text: "Lüg mich nicht an ... du hast natürlich recht \n (wegen gruppen wechsel)",
        author: "Richard Rizk"
      },
      {
        date: "19.03.2025",
        text: "und dann müsst ihr noch ein bisschen Hand anlegen",
        author: "Richard Rizk"
      },
      {
        date: "19.03.2025",
        text: "Alex da unten im Süden",
        author: "Richard Rizk"
      },
      {
        date: "26.03.2025",
        text: "DU bist der komischte von allen \n (zu Felipe)",
        author: "Richard Rizk"
      },
      {
        date: "09.04.2025",
        text: "Dann wirst du in der Prüfung gepeitscht \n (zu peter) \n S:Ohhhh",
        author: "Richard Rizk & Sabrina"
      },
      {
        date: "09.04.2025",
        text: "Da kommt die kleine Peitsche",
        author: "Richard Rizk"
      },
      {
        date: "09.04.2025",
        text: "Da spring ich dir quer übern Tisch",
        author: "Richard Rizk"
      },
      {
        date: "09.04.2025",
        text: "dann bekommst 3 mal die Peitsche",
        author: "Richard Rizk"
      },
      {
        date: "09.04.2025",
        text: "äh, uh, ummmm bin zu klein \n (mit trauriger stimme)",
        author: "Richard Rizk"
      },
    ],
    "Salomon": [
      {
        date: "13.09.2023",
        text: "Holts tief Luft und schreits mich an so das ich gegen die Tafel fliege",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "28.09.2023",
        text: "CYNTHI KOMM SCHON",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "29.09.2023",
        text: "Windofs",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "09.11.2023",
        text: "Wie viele Farben brauchen wir, viel, wenig oder gar keine, na spass gar keine kömm ja nicht",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "09.11.2023",
        text: "Abfallenden Nutten von 3mm",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.11.2024",
        text: "Da ist eine schwarze Schlange",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "07.12.2023",
        text: "ist irgendjemand Schwanger? ich weiß das ist ein freudiges Ereigniss",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "07.12.2023",
        text: "Dielt da jemand mit Drogen?",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "07.12.2023",
        text: "Cynthia hast du´s endlich verstanden? \n Ich glaub du verstehst es eh nie",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "01.02.2024",
        text: "Körner? Genau der Ausgestoßene",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "01.02.2024",
        text: "Da schaut die Farbe vom Siebdruck wesentlich leckerer aus als die Farbe von dieser BOWWWL \n (zu Alex blauer Bowl)",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "01.02.2024",
        text: "Gumi Gumi Flummi weißt du´s?",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "01.02.2024",
        text: "Enttäusch mich nicht \n (zu Michelle)",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "01.02.2024",
        text: "Ich kann dich eh nicht schlagen, du sitz in der 2. Reihe außerdem ist da der Lehrertisch uch noch und ich schlag keine Schüler und überhaupt keine Frauen... Applaus?",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "01.02.2024",
        text: "Ihr habt eh die Flaschen mit dem Taucheranzug",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "01.02.204",
        text: "Dann macht ihr Havrest bis 13:30",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "15.02.2024",
        text: "Ihr braucht alle einen Arzt \n der mit der Habt dich Lieb Jacke",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "21.02.2024",
        text: "(schaut zu Furkan und Fjona) \n Läuft da was? \n (schaut zu Cynthia) \n oder läuft zwischen euch was?",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "21.02.2024",
        text: "S: Schob, Seitenformat schreibt man zusammen \n P: Ich bin Legastheniker",
        author: "Rolf-Dieter Salomon & Peter"
      },
      {
        date: "21.02.204",
        text: "Ich werde immer Dumm und dümmer",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "20.03.2024",
        text: "kommt nie auf die Ideen in einer Druckmaschine sagen das sie Umschlagen werden kann, dann müssen ihr geschlagen werden",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "11.04.2024",
        text: "Ich weiß welche Drogen gut tun 🙂",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "11.04.2024",
        text: "das geht mich nichts an... Das sind Intime Sachen",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "11.04.2024",
        text: "was ist mit euch jetzt passiert?",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "16.04.2024",
        text: "das kommt davon wenn man verheiratet ist \n (Zu Spaci weil er irgendeinen Auschalg auf der Hand hatte)",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "25.04.2024",
        text: "Balazs gib Laut",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "08.05.2024",
        text: "Der Osama binladen ist heute nicht da",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "08.05.2024",
        text: "Aso du bist es, RASII",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.05.2024",
        text: "Aso ja wie so ein Fliegenschiss",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.05.2024",
        text: "Ich darf dich eh nicht schlafen außerdem bin ich eh ein friedlebender Mensch",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.05.2024",
        text: "Fühl ich da irgendwie Aggression?",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.05.2024",
        text: "Erik (mit englischen Akzent) ... Ruhe da hinten",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.05.2024",
        text: "Schmarphone, Telephone, Handy",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.05.2024",
        text: "Leute man kann Scherzen das ist gut, man kann Lachen, dass ist gesund, aber man muss auch ernst bleiben können",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "23.05.2024",
        text: "Ich bin kein Biologe oder sonst etwas",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "05.06.2024",
        text: "Er zeigt mir nicht mal den Stinkefinger",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "06.06.2024",
        text: "Schrei? \n (meint Schreiter)",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "13.02.2025",
        text: "Zieht eure ganz Körper Kondom an",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "20.03.2025",
        text: "dann passts auch \n (mit tiefer stimme)",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "20.03.2025",
        text: "des ist ja voll CrazyYyY",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "20.03.2025",
        text: "erstens muss du schauen ob du nüchtern bist und wenn du dir sicher bist das DU nüchtern bist, dann überlegst ob die Druckamschine nüchtern ist... und die ist nie nüchtern da ist immer ein Alkohol drinnen",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "20.03.2025",
        text: "und das Auge sieht: DaS iSt NiChT gRaU \n(mit tiefer Stimme)",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "20.03.2025",
        text: "Der Rasterpukt weint, weil er Schmerzen hat",
        author: "Rolf-Dieter Salomon"
      },
      {
        date: "27.03.2025",
        text: "Wir machen das mit LAZRE100, und sonst werden eure Vorhänge nie schöner",
        author: "Rolf-Dieter Salomon"
      },
    ],
    "Sares": [
      {
        date: "29.03.2023",
        text: "Schobi? Hast du deinen Laptop mit?",
        author: "Vera Sares"
      },
      {
        date: "19.04.2023",
        text: "Ihr könnt euch das in der Pause einteilen, mit den Gehegen",
        author: "Vera Sares"
      },
      {
        date: "03.05.2023",
        text: "Hat irgendwer seinen Darm nicht unter Kontrolle?",
        author: "Vera Sares"
      },
      {
        date: "01.02.204",
        text: "Mit einen Theorie Lehrer diskutiert man nicht",
        author: "Vera Sares"
      },
      {
        date: "25.04.2024",
        text: "Bei uns in Himberg nicht bei den Türken",
        author: "Vera Sares"
      },
      {
        date: "25.04.2024",
        text: "Du willst mir ernsthaft sagen das du Vegetarisch isst und vorher hast du mich gefragt ob wir ein Döner mit rauf nehmen können?",
        author: "Vera Sares"
      },
      {
        date: "02.05.2024",
        text: "O: Warum denkt jeder ich mach nichts? \n 1/3: HMMMMMM \n S: Sie kennen dich seit 3 jahren",
        author: "Vera Sares & Osama & ein 1/3 der Klasse"
      },
      {
        date: "20.03.2025",
        text: "Nimm die Melone die ist Gut",
        author: "Vera Sares"
      },
      {
        date: "20.03.2025",
        text: "Mit der Melone mach ich jetzt nen Strike",
        author: "Vera Sares"
      },
      {
        date: "19.03.2025",
        text: "Mausi schau da den Plan an \n (zu Zsofia)",
        author: "Vera Sares"
      },
      {
        date: "26.03.2025",
        text: "es geht einmal um mich NUR um mich... bro",
        author: "Vera Sares"
      },
      {
        date: "26.03.2025",
        text: "Naja, gott sei dank bist du NOCH unter uns",
        author: "Vera Sares"
      },
      {
        date: "26.03.2025",
        text: "Naja fast geschafft, hast du dir hübsche Mädchen im Bikini angeschaut \n (zu Felipe)",
        author: "Vera Sares"
      },
      {
        date: "26.03.2025",
        text: "Ohjemine Ohjemine",
        author: "Vera Sares"
      },
    ],
    "Satrapa": [
      {
        date: "20.03.2023",
        text: "Feuer ist nicht so weit von Brantner",
        author: "Dalibor Satrapa"
      },
      {
        date: "28.03.2023",
        text: "Ich kann mir auch nicht Vorstellen eine Frau zu sein. \n War ich nicht, bin ich nicht, werd ich auch nie sein. \n Weiß auch nicht warum ich eine Frau sein sollte",
        author: "Dalibor Satrapa"
      },
      {
        date: "28.03.2023",
        text: "FACHAUSDRUCK: Küken, kein scheiß",
        author: "Dalibor Satrapa"
      },
      {
        date: "18.04.2023",
        text: "Vonic ist Bio \n BioVonic",
        author: "Dalibor Satrapa"
      },
      {
        date: "18.04.2023",
        text: "Waschsand forever",
        author: "Dalibor Satrapa"
      },
      {
        date: "02.05.2023",
        text: "Für ein Linkshänderin sind sie fantastisch",
        author: "Dalibor Satrapa"
      },
      {
        date: "02.05.2023",
        text: "Das war besonder Hübsch. \n Selten so hübsch",
        author: "Dalibor Satrapa"
      },
      {
        date: "02.05.2023",
        text: "Der Flammpunkt von Tirol",
        author: "Dalibor Satrapa"
      },
      {
        date: "08.05.2023",
        text: "Who is the toaster WHOOO",
        author: "Dalibor Satrapa"
      },
      {
        date: "09.05.2023",
        text: "Wenn Sie weiter so tut kann sie Blumen gießen",
        author: "Dalibor Satrapa"
      },
      {
        date: "09.05.2023",
        text: "Ich hatte das Glück das mich meine Eltern nicht verprügelt haben",
        author: "Dalibor Satrapa"
      },
      {
        date: "22.05.2023",
        text: "Ich habe die metallische Kraft die Türen zu öffnen",
        author: "Dalibor Satrapa"
      },
      {
        date: "23.05.2023",
        text: "Beim marschieren sind Sie ein bisschen behindert oder nicht",
        author: "Dalibor Satrapa"
      },
      {
        date: "23.05.2023",
        text: "Und das nicht weil ich sie nicht mag... nämlich garnicht",
        author: "Dalibor Satrapa"
      },
      {
        date: "23.05.2023",
        text: "Ein paar mal auf die Eier drauf und nicht daneben",
        author: "Dalibor Satrapa"
      },
      {
        date: "13.02.2024",
        text: "Sie können sich ja auch geritzt haben, gibt ja genug in der Schule",
        author: "Dalibor Satrapa"
      },
      {
        date: "20.02.2024",
        text: "Für Leute wie Sie würd ich mir einen 6er wünschen",
        author: "Dalibor Satrapa"
      },
      {
        date: "27.02.2024",
        text: "Haben Sie Depressionen?",
        author: "Dalibor Satrapa"
      },
      {
        date: "27.02.2024",
        text: "Wer kommt mit für Hubba Bubba?",
        author: "Dalibor Satrapa"
      },
      {
        date: "27.02.2024",
        text: "Wissen Sie, es gibt wen in dieser Schule der identifiziert sich als Fuchs",
        author: "Dalibor Satrapa"
      },
    ],
    "Schopf": [
      {
        date: "24.05.2023",
        text: "Also den Goldenen Schnitt macht man oft in Indesign \n (er öffnet Illustrator)",
        author: "Stefan Schopf"
      },
      {
        date: "29.01.2024",
        text: "S: Was war mit dem Schuhen? \n F: Die waren sehr Schön",
        author: "Stefan Schopf & Furkan"
      },
      {
        date: "29.11.2024",
        text: "Im Adressfeld müss ma Brav bleiben",
        author: "Stefan Schopf"
      },
      {
        date: "29.11.2024",
        text: "Peter geh zu deinem Mac und weck ihn auf",
        author: "Stefan Schopf"
      },
      {
        date: "29.11.2024",
        text: "Du schaust so giftig",
        author: "Stefan Schopf"
      },
      {
        date: "29.11.2024",
        text: "Du schaust ja direkt da auf seinen Vogel",
        author: "Stefan Schopf"
      },
      {
        date: "29.11.2024",
        text: "Die Semmel kommt",
        author: "Stefan Schopf"
      },
      {
        date: "24.02.2025",
        text: "Was war angenehm, das Buffet? \n (zu Peter)",
        author: "Stefan Schopf"
      },
      {
        date: "27.02.2025",
        text: "wie heißt der Stil? Gosic? Gochik? \n (es war Metal)",
        author: "Stefan Schopf"
      },
      {
        date: "20.03.2025",
        text: "Vielleicht ist der Schwamm in der richtigen Stimmung... perfekt er ist halb Feucht",
        author: "Stefan Schopf"
      },
    ],
    "Simpson": [
      {
        date: "06.09.2024",
        text: "Apropo Mädchen für alles...",
        author: "Timothy Simpson"
      },
    ],
    "Spaci": [
      {
        date: "03.10.2023",
        text: "Alle Knien sich jetzt hin \n ( richtig stolz gesagt)",
        author: "Bernard Spaci"
      },
      {
        date: "31.01.2024",
        text: "Ich will die 1, weil ich bin immer die Nummer 1 .... \n nein ich will keine 1 die ist so klein",
        author: "Bernard Spaci"
      },
      {
        date: "31.01.2024",
        text: "S: 24 ist schon vergeben an König \n B:Was? ihr habt ihn als ersters gefragt?",
        author: "Bernard Spaci & Sabrina"
      },
      {
        date: "21.02.2024",
        text: "Du bist aber Frech",
        author: "Bernard Spaci"
      },
      {
        date: "05.03.2024",
        text: "Meine Freunde der Berge \n ... \n Mögt ihr Berge?",
        author: "Bernard Spaci"
      },
      {
        date: "07.03.2024",
        text: "Ich bin jetzt auch Schüler",
        author: "Bernard Spaci"
      },
      {
        date: "09.04.2024",
        text: "Ihr seit doch schon alte Hasen HEHE",
        author: "Bernard Spaci"
      },
      {
        date: "09.04.2024",
        text: "ihr seit keine Noobs... hoff ich",
        author: "Bernard Spaci"
      },
      {
        date: "09.04.2024",
        text: "die ist neben den Q glaub ich zumindest. \n Also bei mir ist das so",
        author: "Bernard Spaci"
      },
      {
        date: "16.04.2024",
        text: "B: Du heißt ab heute Vronic \n N: auch im Klassenbuch? \n B: Nein nur bei mir",
        author: "Bernard Spaci & Nirvana"
      },
      {
        date: "16.04.2024",
        text: "Das ist der Beamer... Der is ne Fl Fl Fliegeee",
        author: "Bernard Spaci"
      },
      {
        date: "16.04.2024",
        text: "Das heißt c nicht Cey",
        author: "Bernard Spaci"
      },
      {
        date: "30.04.2024",
        text: "Filmst du? Wenn ja muss ich dafür was verlangen",
        author: "Bernard Spaci"
      },
      {
        date: "30.04.2024",
        text: "Sagt alle ganz lieb Dankeschön zu Nirvana, weil wegen ihr sperr ich euch dann ein ",
        author: "Bernard Spaci"
      },
      {
        date: "07.05.2024",
        text: "N: Haben Sie gut geschlafen? \n B: Tatsächlich nicht aber ich weiß nicht wieso",
        author: "Bernard Spaci & Nathalie"
      },
      {
        date: "14.05.2024",
        text: "Versteht ihr was ich meine? \n  Ja \n Ihr seit eifnach Fantastisch",
        author: "Bernard Spaci & Gruppe 1"
      },
      {
        date: "14.05.2024",
        text: "TADA... Sieht mans? Nein warte man siehts gleich",
        author: "Bernard Spaci"
      },
      {
        date: "14.05.2024",
        text: "Ihr seid Gefährlich",
        author: "Bernard Spaci"
      },
      {
        date: "28.05.2024",
        text: "SETZ DICH ... nein Spaß ... LASS ES",
        author: "Bernard Spaci"
      },
      {
        date: "28.05.2024",
        text: "Wenn ich Spiderman wäre, würde ich das tatsächlich schneller reparieren \n (3D-Drucker war kaputt)",
        author: "Bernard Spaci"
      },
      {
        date: "04.06.2024",
        text: "Achhhh geh weg da",
        author: "Bernard Spaci"
      },
      {
        date: "04.06.2024",
        text: "Ja genau diesen Oben, OBEN, OBEN, OOOOBEN",
        author: "Bernard Spaci"
      },
      {
        date: "25.06.2024",
        text: "ich häng mir nur Cheesus auf",
        author: "Bernard Spaci"
      },
      {
        date: "28.06.2024",
        text: "Die Sabrina... immer da um Probleme zu machen, nächstes Jahr bist du drann ne",
        author: "Bernard Spaci"
      },
      {
        date: "26.09.2024",
        text: "So ne Tafel is schon cool ne?",
        author: "Bernard Spaci"
      },
      {
        date: "11.11.2024",
        text: "Ich bin kein Model, ich schau nur so aus",
        author: "Bernard Spaci"
      },
      {
        date: "11.11.2024",
        text: "Ich war mal ein Model, nur für Baby Windeln",
        author: "Bernard Spaci"
      },
      {
        date: "03.12.2024",
        text: "B: Hey Jakub hast du Milch? \n J: Ja warte",
        author: "Bernard Spaci & Jakub"
      },
    ],
    "Stumpf": [
      {
        date: "01.06.2023",
        text: "Ich finde alle Ärsche geil \n Meinen aber am Geilsten",
        author: "Sebastian Stumpf"
      },
      {
        date: "10.11.2023",
        text: "A: Sie sind schlimmer als ein Kleinkind \n S: sagt meine Freundin auch immer",
        author: "Sebastian Stumpf"
      },
      {
        date: "12.01.2024",
        text: "as war ein Terroranschlag",
        author: "Sebastian Stumpf"
      },
      {
        date: "12.04.2024",
        text: "Ich bin der Cowboy vom Beamer \n ich bin der Beamer Boy",
        author: "Sebastian Stumpf"
      },
      {
        date: "12.04.2024",
        text: "Moment, moment, moment, geh weg dich will ich nicht, gehen wir zurück zum Baby",
        author: "Sebastian Stumpf"
      },
      {
        date: "12.04.2024",
        text: "Wenn die Mutter hingeht und sagt hawaishgaisdoiefhaisiawh",
        author: "Sebastian Stumpf"
      },
      {
        date: "12.04.2024",
        text: "Uf du bist hingeflogen ... du lachst es nicht aus und sagst HAHA DU BIST HINGEFLOGEN",
        author: "Sebastian Stumpf"
      },
      {
        date: "12.04.2024",
        text: "das ist nicht mein Tinder \n (swipet nach links)",
        author: "Sebastian Stumpf"
      },
      {
        date: "12.04.2024",
        text: "ich werde AUCH in Karenz gehen",
        author: "Sebastien Stumpf"
      },
      {
        date: "12.04.2024",
        text: "Ich kann den Baby nicht das geben was eine Frau es geben kann",
        author: "Sebastien Stumpf"
      },
      {
        date: "12.04.2024",
        text: "bei meiner Brust kommt nichts raus vielleicht ein bisschen Schweiß",
        author: "Sebastien Stumpf"
      },
      {
        date: "26.04.2024",
        text: "Dann wirst du zu ein Tier, Yolo Molo ",
        author: "Sebastien Stumpf"
      },
      {
        date: "03.05.2024",
        text: "sie macht es nicht selbst ... ihr wird es gemacht",
        author: "Sebastien Stumpf"
      },
      {
        date: "03.05.2024",
        text: "von einen moment \n nein ich will nicht sterben \n auf dem anderen \n bring mich um",
        author: "Sebastien Stumpf"
      },
      {
        date: "03.05.2024",
        text: "Sie wollen nicht mich \n aber sie wollen Milch",
        author: "Sebastien Stumpf"
      },
      {
        date: "03.05.2024",
        text: "Gärtner werden auch cool ... das wär ich gerne",
        author: "Sebastien Stumpf"
      },
      {
        date: "03.05.2024",
        text: "Ich bin ein bisschen Mia beschädigt",
        author: "Sebastien Stumpf"
      },
      {
        date: "03.05.2024",
        text: "NEVER GIVE UP \n nie die hoffnung aufgeben",
        author: "Sebastien Stumpf"
      },
      {
        date: "24.05.2024",
        text: "ein Hund mit Bewusstsein ... DAS BIN ICH",
        author: "Sebastien Stumpf"
      },
      {
        date: "24.05.2024",
        text: "Warum muss ich arbeiten gehen, wieso werde ich nicht gefüttert und gestreichelt",
        author: "Sebastien Stumpf"
      },
      {
        date: "24.05.2024",
        text: "jetzt töte ich den Beamer schaut \n PEWWWW",
        author: "Sebastien Stumpf"
      },
      {
        date: "24.05.2024",
        text: "ist nicht zum verkaufen ... MEIN BABY",
        author: "Sebastien Stumpf"
      },
      {
        date: "24.05.2024",
        text: "N: Hören sie alles? \n S: Ya ... mir entgeht nichts",
        author: "Sebastien Stumpf & Nathalie"
      },
      {
        date: "07.06.2024",
        text: "Sindalle Ohm",
        author: "Sebastien Stumpf"
      },
      {
        date: "07.06.2024",
        text: "jetzt gibt es ein Einreiseverbot für Brad Pitt",
        author: "Sebastien Stumpf"
      },
      {
        date: "07.06.2024",
        text: "Auch wenn er so hot ist kommt er rüber wie ein toxischer Boyfriend oder Husband",
        author: "Sebastien Stumpf"
      },
      {
        date: "14.06.2024",
        text: "Nein Montag ist Socken frei",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.09.2024",
        text: "Ich hab da noch zwei Namen die ich nicht kenne...",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.09.2024",
        text: "Wir haben das Thema ✨Suizid✨ gehabt",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.09.2024",
        text: "HaLlO? Ich will schon Musik",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.09.2024",
        text: "Die Maus? Wohin soll ich sie tun \n (mit verzweifelter Stimme)",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.12.2024",
        text: "Wir sind so lost ehrlich gesagt. So richtig lost.",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.12.2024",
        text: "Wir stecken noch in Kinderfüßen",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.12.2024",
        text: "Jesus Maria ist das kompliziert",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.12.2024",
        text: "Ready to go. Bitte lad mich hoch. BItte schieß mich ins Weltall. Schieß mich ins Internet",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.12.2024",
        text: "Smiley drüber alle supper glücklich",
        author: "Sebastien Stumpf"
      },
      {
        date: "09.12.2024",
        text: "Der Direktor hat uns ernstaft vorgeschlagen das wir es am Samstag machen aber ehrlich gesagt ich hab null Bock drauf",
        author: "Sebastien Stumpf"
      },
      {
        date: "20.01.2025",
        text: "Das ist ein Nazi Softporno irgendwie",
        author: "Sebastien Stumpf"
      },
      {
        date: "20.01.2025",
        text: "Das Ministerium hat es 18+ gennant. Clickbait",
        author: "Sebastien Stumpf"
      },
      {
        date: "10.02.2025",
        text: "Es geht über Männer die Männer waren",
        author: "Sebastien Stumpf"
      },
      {
        date: "10.02.2025",
        text: "ICh glaub ich würde auch sterben",
        author: "Sebastien Stumpf"
      },
      {
        date: "31.03.2025",
        text: "sogar ein lebewesen wie ein Schwamm... SPONGEBOB SCHWAMMKOPF",
        author: "Sebastien Stumpf"
      },
    ],
    "Tesarek": [
      {
        date: "25.06.2024",
        text: "Musst du halt rechnen",
        author: "Roman Tesarek"
      },
      {
        date: "06.09.2024",
        text: "Wer geht in den Aufbaulehrgang? \n ok... Dafür müsst ihr mal die 4. Klasse positiv Abschließen",
        author: "Roman Tesarek"
      },
      {
        date: "06.09.2024",
        text: "Ihr seid doch eh alle so goschad, habt alle gerne den Mund offen",
        author: "Roman Tesarek"
      },
      {
        date: "06.09.2024",
        text: "Wer Fehlt? \n Lang \n Wie hat sie das bis zur 4. geschafft",
        author: "Roman Tesarek"
      },
      {
        date: "06.09.2024",
        text: "Dann werf ich dir ein Crack Eis ins Gesicht. Das bekommt man bei jeder Tankstelle",
        author: "Roman Tesarek" 
      },
      {
        date: "17.09.2024",
        text: "Seid ihr jetzt Zwillinge?",
        author: "Roman Tesarek"
      },
      {
        date: "11.03.2025",
        text: "One Way Ticket nach Ägypten",
        author: "Roman Tesarek"
      },
    ],
    "Todeschini": [
      {
        date: "26.06.2024",
        text: "Du bist Big Bang Theorie",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Pigmente DOWN",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Juli das war ein Attentat",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Die Tode ist zu Tode gekugelschreiberisiert",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Ich Siebdrucker Papier, Karton... Karton Gut Papier BÄHHHH",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "und der Asterix trägt ein ganzes Buch \n (bezogen auf Steinpapier)",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "So viele Makulaturen \n (meint die Klasse)",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Ich muss was trinken ist Hausaufgabe",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Ich schon lange in der Anstallt",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Wie ich geboren bin, kurz nach den Pyramiden",
        author: "Iris Todeschini"
      },
      {
        date: "24.09.2024",
        text: "Dann solls jungfräulich Gelb sein",
        author: "Iris Todeschini"
      },
    ],
    "Ulrich": [
      {
        date: "27.02.2025",
        text: "Ich werde verscheucht",
        author: "Clemens Leopold Ulrich"
      },
      {
        date: "27.02.2025",
        text: "ihr macht´s das, ihr schafft das Kinder",
        author: "Clemens Leopold Ulrich"
      },
    ],
    "Zdarsky": [
      {
        date: "03.06.2024",
        text: "bei mir wird mit keinen Spiel Noten vergeben",
        author: "Petra Zdarsky"
      },
      {
        date: "13.11.2024",
        text: "Jetzt kämpfen wir um den 9 Uhr Slot",
        author: "Petra Zdarsky"
      },
      {
        date: "13.11.2024",
        text: "Danke, Sie sind ein Schatz",
        author: "Petra Zdarsky"
      },
    ],

    // Schüler-Zitate bleiben in einer separaten Kategorie
    "Schüler": [
      {
        date: "11.03.2023",
        text: "ich hab ne Kuh gesehen, die könnte dir gefallen",
        author: "Alex"
      },
      {
        date: "13.03.2023",
        text: "Meine Finger sagen, es ist morgen",
        author: "Alex"
      },
      {
        date: "19.12.2023",
        text: "Da sitzt Honkisz und nicht die Maschine",
        author: "Alex"
      },
      {
        date: "13.03.2023",
        text: "Furkan furkant nicht",
        author: "Alex"
      },
      {
        date: "13.03.2023",
        text: "Ich hab gerade das Alphabet geschafft",
        author: "Alex"
      },
      {
        date: "22.03.2023",
        text: "Im Dunkeln zu fahren ist doch das Beste – da kannst du alle niederfahren und es gibt keine Beweise.",
        author: "Alex"
      },
      {
        date: "02.04.2023",
        text: "Du bist alt gestorben, um jung zu sterben",
        author: "Alex"
      },
      {
        date: "21.04.2023",
        text: "Der Typ weis mehr als meine Familie \n (Pixner)",
        author: "Alex"
      },
      {
        date: "05.05.2023",
        text: "Ich crack jetzt",
        author: "Alex"
      },
      {
        date: "14.04.2023",
        text: "Mobb nicht das nicht vorhanden",
        author: "Alex"
      },
      {
        date: "21.04.2023",
        text: "Ich will eure Liebe smoken",
        author: "Alex"
      },
      {
        date: "02.05.2023",
        text: "Man sieht dich eh nicht, nur dein Gesicht",
        author: "Alex"
      },
      {
        date: "12.05.2023",
        text: "Streber sein ist unser Hobby",
        author: "Alex"
      },
      {
        date: "17.05.2023",
        text: "Wir sind Ferien reif \n genau wie eine Mango",
        author: "Alex"
      },
      {
        date: "17.04.2024",
        text: "5 Karten sind so dick wie 1 davor",
        author: "Alex"
      },
      {
        date: "01.05.2024",
        text: "Ich mag dich du redest wie Wikipedia",
        author: "Alex"
      },
      {
        date: "06.05.2024",
        text: "Rückenschmerzen hab ich so oder so egal ob Kobold oder nicht",
        author: "Alex"
      },
      {
        date: "13.05.2024",
        text: "Du siehst deinen Vater als Vater und nicht als Mann",
        author: "Alex"
      },
      {
        date: "15.05.2024",
        text: "Oh nein Honkisz lernt Fürkisch mit Trukan",
        author: "Alex"
      },
      {
        date: "25.05.2023",
        text: "NATHALIE ich will zurück in die Badewanne",
        author: "Alex"
      },
      {
        date: "11.08.2024",
        text: "Die ÖBB schenkt mir was, dafür das sie immer scheiße bauen",
        author: "Alex"
      },
      {
        date: "08.09.2024",
        text: "ich bin nicht in Therapie wegen meinen Kuscheltiere",
        author: "Alex"
      },
      {
        date: "18.09.2024",
        text: "ich hab angst vor google",
        author: "Alex"
      },
      {
        date: "22.11.2024",
        text: "A: Jaman der Jesus mit Jägermeister \n S: Das ist ein Terrorist \n A: ist doch fast das selbe",
        author: "Alex & Sabrina"
      },
      {
        date: "02.12.2024",
        text: "Achso das ist unsere Schule, ich dachte das sind Sträflinge \n ein bild wo alle im Hof stehen und orange gekleidet sind",
        author: "Alex"
      },




      {
        date: "13.03.2023",
        text: "Auf welche Abenteuer gehts denn heute? Voldemords verschwundene Nase?",
        author: "Andrei"
      },
      {
        date: "16.03.2023",
        text: "Wir sind Wasser und die anderen Nudeln",
        author: "Andrei"
      },
      {
        date: "16.03.2023",
        text: "Ich hasse deutsch Diktatur \n (deutsche Tastatur)",
        author: "Andrei"
      },
      {
        date: "21.03.2023",
        text: "Ich bin eine Einfarb GTO",
        author: "Andrei"
      },
      {
        date: "21.03.2023",
        text: "Nathalie... der Bogen muss doppelt gedruckt werden.... Vorne und Hinten",
        author: "Andrei"
      },
      {
        date: "21.03.2023",
        text: "Nimm doch eine Vierfarb GTO für die ganze Familieeee \n So wie im Disneyland ein Zug",
        author: "Andrei"
      },
      {
        date: "21.03.2023",
        text: "ALLES IST PAPIER",
        author: "Andrei"
      },
      {
        date: "28.03.2023",
        text: "Basner ist der österreichische Walter White aber anstatt Meth macht er Druckmaschinen",
        author: "Andrei"
      },
      {
        date: "08.01.2024",
        text: "Ich soll der Mann sein der Sabrina nie wird, \n Ich bin der Mann der in Michelle ist,  \n und ich soll Nathalie sein",
        author: "Andrei"
      },
      {
        date: "17.01.2024",
        text: "Ich mein du bist Druckergeil",
        author: "Andrei"
      },
      {
        date: "12.04.2024",
        text: "weiß das Gaugeler auch?",
        author: "Andrei"
      },
      {
        date: "01.05.2024",
        text: "Der sieht aus wie Glazköpfiger Havrest mit weniger Bart",
        author: "Andrei"
      },


      {
        date: "06.09.2023",
        text: "König ist die Druckmaschine",
        author: "Lara"
      },
      {
        date: "03.04.2025",
        text: "L: Ich bin kein Klon, ich bin das Urproblem \n A: Du bist der Prototyp",
        author: "Lara & Andrei"
      },



      {
        date: "08.05.2024",
        text: "die Farbe ist voller Farbe",
        author: "Cynthia"
      },
      {
        date: "12.02.2025",
        text: "Peter ist das Leben als Ginger hart?",
        author: "Cynthia"
      },
      {
        date: "14.02.2025",
        text: "Fallen Birnen auch von Bäumen?",
        author: "Cynthia"
      },
      {
        date: "18.02.2025",
        text: "das Teil was man in Wattepad züchtet \n ja genau Kresse",
        author: "Cynthia"
      },
      {
        date: "06.03.2025",
        text: "Das hat mich deep getroffen",
        author: "Cynthia"
      },
      {
        date: "17.03.2025",
        text: "Peter du erinnerst mich an diesen Ski Aggu",
        author: "Cynthia"
      },



      {
        date: "17.04.2023",
        text: "Ich bin nie ich",
        author: "Felipe"
      },
      {
        date: "13.02.2025",
        text: "Lieber ein Stein mit z.b. goldvenen als eine scheibe Plastik DIGGI",
        author: "Felipe"
      },
      {
        date: "18.02.2025",
        text: "Die die uns beim Restaurant eingeladen haben die werden spüren dass ich da bin",
        author: "Felipe"
      },
      {
        date: "18.05.2025",
        text: "Ich schau jetzt auf meiner Schatzkarte nach",
        author: "Felipe"
      },
      {
        date: "26.02.2025",
        text: "Die gebildeten ... mit eine paar Ausnahmen \n (schaut zu Peter)",
        author: "Felipe"
      },
      {
        date: "24.03.2025",
        text: "Ich sags euch ehrlich wenn ihr kein Bock habt 4 Stunden zu warte, ich warte nicht",
        author: "Felipe"
      },
      {
        date: "24.03.2025",
        text: "Mein Snapscore ist nicht in der Milchstraße",
        author: "Felipe"
      },
      {
        date: "27.03.2025",
        text: "Ich zügel meine Worte bevor ich eine Anzeige krieg",
        author: "Felipe"
      },
      {
        date: "27.03.2025",
        text: "Keine Ahnung bin kein Franzose",
        author: "Felipe"
      },

      {
        date: "18.03.2024",
        text: "Reiche Türken sind in Dubai",
        author: "Fjona"
      },
      {
        date: "15.05.2024",
        text: "F: Zum Glück will ich kein Drucker werden \n H: Nicht persönlich gemeint aber gute Wahl",
        author: "Fjona & Honkisz"
      },
 




      {
        date: "06.06.2023",
        text: "Zum glück gibt es faule Menschen. \n Ein Mensch war faul und wollte nicht gehen er hat Fahrrad erfunden",
        author: "Furkan"
      },
      {
        date: "13.12.2024",
        text: "Ich werde in einer Woche abgeschoben JAAAA",
        author: "Furkan"
      },
      {
        date: "11.02.2025",
        text: "Wer ist Pascal? \n (Mathe bezogen)",
        author: "Furkan"
      },
      {
        date: "18.02.2025",
        text: "also wenn ich jetzt die Türe zu mache, er (Höfferer) sieht dass es zu ist und geht weg :D dann haben wir kein Unterricht \n schlau ge!!",
        author: "Furkan"
      },
      {
        date: "26.02.2025",
        text: "Ich bin depressiv Abschlussprüfung man",
        author: "Furkan"
      },
      {
        date: "18.03.2025",
        text: "unser Team besteht aus 4 Leuten, einer von uns ist nicht unter uns",
        author: "Furkan"
      },
      {
        date: "24.03.2025",
        text: "Ich hab ne Minus 4 bekommen",
        author: "Furkan"
      },


      {
        date: "31.03.2025",
        text: "Ich mobbe nicht ich bin nur ehrlich",
        author: "Jacha"
      },



      {
        date: "14.02.2024",
        text: "Furkan kannst du twerken",
        author: "Julian"
      },
      {
        date: "27.01.2025",
        text: "Die Ausgaben sind crazy aber die Probleme steigen parallel",
        author: "Julian"
      },
      {
        date: "13.02.2025",
        text: "Diggi ich hab gerade geschaut ob der Bleistift funktioniert",
        author: "Julian"
      },
      {
        date: "17.02.2025",
        text: "Ich hoffe ich seh Olaf Scholz \n (ein Tag vor Deutschlandreise)",
        author: "Julian"
      },
      {
        date: "17.02.2025",
        text: "Wir sind die Aliens",
        author: "Julian"
      },
      {
        date: "17.02.2025",
        text: "Mir ist ein Alien im Traum gekommen \n Furkan du bist ein Alien",
        author: "Julian"
      },
      {
        date: "18.02.2025",
        text: "Der Reifendruck auf der linken Seite wird leiden \n (Felipe saß im Bus richtung Deutschland auf der linken Seite)",
        author: "Julian"
      },
      {
        date: "18.02.2025",
        text: "Ich kann nichs dagegen machen, Peter rennt mir immer hinterher",
        author: "Julian"
      },
      {
        date: "18.02.2025",
        text: "Ich glaub wenn ich drei Liter Eistee trink brunz ich mich an",
        author: "Julian"
      },
      {
        date: "18.02.2025",
        text: "Bro das bringt nichts da ist mein Speck",
        author: "Julian"
      },
      {
        date: "03.03.2025",
        text: "Mit Peter auf nem Tisch is a bissi eng",
        author: "Julian"
      },
      {
        date: "07.03.2025",
        text: "Ich liebe Kinder,  \n ich hab letzten Sommer auch mit Kinder gearbeitet, \n die Kinder lieben mich",
        author: "Julian"
      },
      {
        date: "07.03.2025",
        text: "du musst mal mit kleinen Kindern fangen spielen, da rennen dir so 20 Spasten hinterher und wollen sich auf dich draufschmeißen",
        author: "Julian"
      },




      {
        date: "13.02.2025",
        text: "Ich persönlich sammle keine Steine",
        author: "Lidija"
      },
      {
        date: "13.02.2025",
        text: "Bitte Acryl ich geb euch 5 Cent \n (Gautschbrief Material)",
        author: "Lidija"
      },
      {
        date: "12.02.2025",
        text: "Peter ist verschwunden in der Wolke",
        author: "Lidija"
      },



      {
        date: "08.12.2023",
        text: "ES IST IN DER LUFT STECKEN GEBLIEBEN",
        author: "Mate"
      },
      {
        date: "03.05.2024",
        text: "Wenn das Blut schlägt",
        author: "Mate"
      },
      {
        date: "24.05.2024",
        text: "Wenn ich eine Frau währe dann wär ich gerne eine russische Frau, die sind schön (meistens)",
        author: "Mate"
      },
      {
        date: "13.02.2025",
        text: "Also wenn man nicht Lesen kann, sieht man den Text wie ein Zeichen? \n (Schopf unterricht Logos)",
        author: "Mate"
      },
      {
        date: "25.02.2025",
        text: "Das is ungarische Mentalität ich sags dir",
        author: "Mate"
      },
      {
        date: "04.03.2025",
        text: "Ich bin kein Mann Herr Professor",
        author: "Mate"
      },
      {
        date: "21.03.2025",
        text: "Sklaven müssen integriert werden \n (Ethik unterricht",
        author: "Mate"
      },



      {
        date: "25.02.2025",
        text: "Bei mir liegt noch Schnee ... mit Sonne",
        author: "Michelle"
      },
      {
        date: "17.02.2025",
        text: "Meine Schwester ist so braun wie ein Türke",
        author: "Michelle"
      },
      {
        date: "18.09.2023",
        text: "Casimier übernimmt meinen Laptop",
        author: "Michelle"
      },
      {
        date: "08.01.2024",
        text: "Schwitz man am Hals?",
        author: "Michelle"
      },
      {
        date: "17.02.2025",
        text: "Wie viele Jacha´s sind ein Formel 1 Auto?",
        author: "Michelle"
      },
      {
        date: "25.02.2025",
        text: "Sind alte Menschen nicht Standart verwirrt?",
        author: "Michelle"
      },
     


      {
        date: "16.03.2023",
        text: "MAMA i hab den Eiffelturm hinig gmacht",
        author: "Nathalie"
      },
      {
        date: "17.03.2023",
        text: "(geht in die Klasse) \n ich glaub mir ist ein bisschen Decke auf den Dings geflogen",
        author: "Nathalie"
      },
      {
        date: "22.03.2023",
        text: "DENK BLOND",
        author: "Nathalie"
      },
      {
        date: "19.04.2023",
        text: "Sie hat ihren Lebenssinn wieder gefunden",
        author: "Nathalie"
      },
      {
        date: "17.05.2023",
        text: "Ich schlag dich zum Ritter, zum Oberritter und zum Kabelsitter",
        author: "Nathalie"
      },
      {
        date: "06.06.2023",
        text: "Irgendwann werden die Ameisen die Weltherrschaft übernehmen",
        author: "Nathalie"
      },
      {
        date: "04.09.2023",
        text: "des macht Luft, de Photosynthese",
        author: "Nathalie"
      },
      {
        date: "08.01.2023",
        text: "Was soll ich mit der Titanic?",
        author: "Nathalie"
      },
      {
        date: "22.02.2024",
        text: "Meine Tränen haben getränt",
        author: "Nathalie"
      },
      {
        date: "07.03.2024",
        text: "Wir haben die Berge der Wildniss",
        author: "Nathalie"
      },
      {
        date: "09.04.2024",
        text: "Grratualiere \n (wollte Danke sagen)",
        author: "Nathalie"
      },
      {
        date: "12.04.2024",
        text: "Cynthia diskirminierst du gerade Schinken?",
        author: "Nathalie"
      },
      {
        date: "15.04.2024",
        text: "Lachen ist Illustrator",
        author: "Nathalie"
      },
      {
        date: "15.04.2024",
        text: "Es sind zu viele illustrator dateien in mein Kopf",
        author: "Nathalie"
      },
      {
        date: "12.05.2024",
        text: "musst du dir denkne, jetzt sind die Blumen verwirrt \(australische Gänseblümchen)",
        author: "Nathalie"
      },
      {
        date: "13.05.2024",
        text: "Du raubst mir deine Gedanken",
        author: "Nathalie"
      },
      {
        date: "15.05.2024",
        text: "Ich hab mit Leine geputzt. \n Die Maschine soll froh sein dass sie jemals so etwas spürt",
        author: "Nathalie"
      },
      {
        date: "20.09.2024",
        text: "DU kannst mir gar nix mehr, mein Auge ist taub",
        author: "Nathalie"
      },
      {
        date: "11.11.2024",
        text: "mein Laptop is das Bermuda Dreieck \n (Dateien sind immer irgendwo glauben wir)",
        author: "Nathalie"
      },
      {
        date: "11.11.2024",
        text: "hin und wieder denk ich mir, ich bin ein Leichenmagnet",
        author: "Nathalie"
      },

      


      {
        date: "09.09.2024",
        text: "Ich mach aus mir ein Aquarium",
        author: "Nirvana"
      },
      {
        date: "14.02.2025",
        text: "Apfel pro plus",
        author: "Nirvana"
      },
      {
        date: "24.02.2025",
        text: "Ich weiß was er ust jetzt \n ein Hippi (Havrest)",
        author: "Nirvana"
      },
      {
        date: "26.02.2025",
        text: "das ist einfach ...  Mandarine",
        author: "Nirvana"
      },
      {
        date: "03.03.2025",
        text: "ich geb ihn gleich ein Ramadam",
        author: "Nirvana"
      },
      {
        date: "24.03.2025",
        text: "Digga was ist das für ein Arsch fick test",
        author: "Nirvana"
      },
      {
        date: "25.03.2025",
        text: "Boa ich hasse eigentlich Taylor Swift aber das Lied ist gut",
        author: "Nirvana"
      },
      {
        date: "07.04.2025",
        text: "Boa ich hoff Schopf attackiert Felipe wieder",
        author: "Nirvana"
      },


      {
        date: "13.02.2025",
        text: "Bruder es ist einfach Waschstein ich mach Wuduu damit",
        author: "Osama"
      },
      {
        date: "27.02.2025",
        text: "ICH WILL NE KUH, noch eine Kuh",
        author: "Osama"
      },
      {
        date: "26.03.2025",
        text: "Bro ich kenn nur Fahrrad",
        author: "Osama"
      },
      {
        date: "06.05.2025",
        text: "Ich schalte es nicht au Flugzeuggmodus sonst triff ich den Reproturm",
        author: "Osama"
      },
      {
        date: "11.05.2025",
        text: "Morgen wird unser Hof zu Nuketown",
        author: "Osama"
      },



      {
        date: "06.06.2024",
        text: "Lass mich einmal schlau sein",
        author: "Peter"
      },
      {
        date: "28.06.2024",
        text: "Warum rennen die alle Digga",
        author: "Peter"
      },
      {
        date: "28.06.2024",
        text: "Der Name war noch nicht mal fertig gesagt und schon rennt sie schon",
        author: "Peter"
      },
      {
        date: "22.01.2025",
        text: "Die is anders Verpackt \n (Von Henry Danger Schwoz)",
        author: "Peter"
      },
      {
        date: "13.02.2025",
        text: "Ich bin käuflich aber nicht desperate",
        author: "Peter"
      },
      {
        date: "17.02.2025",
        text: "Ich wär fast verbrannt geworden",
        author: "Peter"
      },
      {
        date: "18.02.2025",
        text: "Ich bin ein Mathe Problem",
        author: "Peter"
      },
      {
        date: "18.02.2025",
        text: "Willst du ein Spiel spielen wo man sich gegenseitig aufschlitzen muss? \n (zu Julian)",
        author: "Peter"
      },
      {
        date: "18.02.2025",
        text: "Ein LKW, auf einen LKW auf einen LKW \n OK...",
        author: "Peter"
      },
      {
        date: "18.02.2025",
        text: "In irgendeinen LKW sind safe Leute drinnen",
        author: "Peter"
      },
      {
        date: "18.02.2025",
        text: "Das gegenseitige Füßeln war nicht mehr normal",
        author: "Peter"
      },
      {
        date: "21.02.2025",
        text: "Ich identifiziere mich als fetten Goldfisch",
        author: "Peter"
      },
      {
        date: "24.02.2025",
        text: "Er verarbeitet mich zum Döner Spieß",
        author: "Peter"
      },
      {
        date: "03.03.2025",
        text: "P: Ich bin weg vom Fenster \n L: Nein bist du nicht \n (Peter sitzt neben dem Fenster)",
        author: "Peter & Lidija"
      },
      {
        date: "03.03.2025",
        text: "Wo bleibt die Döner Preis Bremse?",
        author: "Peter"
      },
      {
        date: "03.03.2025",
        text: "Julian hast du ein Koks Beutel?",
        author: "Peter"
      },
      {
        date: "04.03.2025",
        text: "Ich wollte mich eigentlich als Basner verkleiden",
        author: "Peter"
      },
      {
        date: "17.03.2025",
        text: "Ich peitsche dich gleich zu deinen Vorfahren zurück",
        author: "Peter"
      },
      {
        date: "17.03.2025",
        text: "jetzt kriegt er Tischlinge",
        author: "Peter"
      },
      {
        date: "17.03.2025",
        text: "vielleicht können wir Mathematiker machen",
        author: "Peter"
      },
      {
        date: "19.03.2025",
        text: "Das richt wie frisch ausgepackte China Ware",
        author: "Peter"
      },
      {
        date: "19.03.2025",
        text: "Du machst Temu Packet auf und hörst die Kinder schreien \n Hilfe Hilfe",
        author: "Peter"
      },
      {
        date: "19.03.2025",
        text: "Was hast du in deinem Keller Breaking Bad oder was? \n Zu nathalie wegen Kokskeller (Brennstoff) ",
        author: "Peter"
      },
      {
        date: "26.03.2025",
        text: "Ay neues Statment meine Ki is rassistisch \n Der Bastard schreibt mir eine Website über die AFD",
        author: "Peter"
      },
      {
        date: "23.04.2025",
        text: "Ich hatte keinen bock Vergangenheitsform zu sein",
        author: "Peter"
      },
      {
        date: "28.04.2025",
        text: "der wird ein Bombenfalzen NA HALLO \n (zu Osama)",
        author: "Peter"
      },



      {
        date: "13.11.2023",
        text: "Ich mach Schnitzel aus dir \n (zu Jacha im Tunrunterricht)",
        author: "Sabrina"
      },
      {
        date: "23.3.2023",
        text: "Manchmal muss ich auch Mobben",
        author: "Sabrina"
      },
      {
        date: "31.03.2023",
        text: "Ich bete zum Ramen Gott",
        author: "Sabrina"
      },
      {
        date: "06.04.2023",
        text: "How dare you? Du Buagette Hater",
        author: "Sabrina"
      },
      {
        date: "12.04.2023",
        text: "Ich brauch eine Anti-Aggressions Therapie",
        author: "Sabrina"
      },
      {
        date: "14.04.2023",
        text: "DU machst ✨ und dann...",
        author: "Sabrina"
      },
      {
        date: "14.04.2023",
        text: "Sie versucht das biblische Geheimnis zu lösen",
        author: "Sabrina"
      },
      {
        date: "18.04.2023",
        text: "Das Auto autet nicht",
        author: "Sabrina"
      },
      {
        date: "19.04.2023",
        text: "Für mich ist Obst und Gemüse,Obst und Gemüse. \n nichts anderes",
        author: "Sabrina"
      },
      {
        date: "20.04.2023",
        text: "Ist Menschenfelisch essen vegan?",
        author: "Sabrina"
      },
      {
        date: "23.04.2023",
        text: "Bei mordenden Maschinen \n (wollte moderneren schreiben)",
        author: "Sabrina"
      },
      {
        date: "28.04.2023",
        text: "M: Ich hab Bock auf Aperol \n S: und ich hab bock auf Schnitzel und hier sind wir",
        author: "Sabrina"
      },
      {
        date: "09.05.2023",
        text: "schnüffelst du gerne an Nagellack?",
        author: "Sabrina"
      },
      {
        date: "10.06.2023",
        text: "Die Berge machen dich zum Metalhead",
        author: "Sabrina"
      },
      {
        date: "13.06.2023",
        text: "Ich wurde aggresiv weil ich kein Österreich gefunden habe",
        author: "Sabrina"
      },
      {
        date: "16.10.2023",
        text: "S: Mach sie fertig \n N: Wen? \n S: ALLE",
        author: "Sabrina & Nathalie"
      },
      {
        date: "06.11.2023",
        text: "Honkizs ist wie ein Werwolf, Werdruckmaschine",
        author: "Sabrina"
      },
      {
        date: "31.01.2024",
        text: "die ganzen Probleme sind heir oder bei Novak",
        author: "Sabrina"
      },
      {
        date: "23.04.2024",
        text: "Mein großer Hobby Gärtner",
        author: "Sabrina"
      },
      {
        date: "23.04.2024",
        text: "Sehen Sie sich das an das Teil ist von 19 Hundert Hitler",
        author: "Sabrina"
      },
      {
        date: "15.05.2024",
        text: "Er ist nicht genug Balkan",
        author: "Sabrina"
      },
      {
        date: "23.09.2024",
        text: "Ich bin gebürtiger Volltrottel",
        author: "Sabrina"
      },
      {
        date: "14.10.2024",
        text: "Wenn du dreimal Zeugen Jehovas sagst steht Honkisz ",
        author: "Sabrina"
      },
      {
        date: "24.10.2024",
        text: "DAS DING KANN SCHWEBEN ... \n ja hab kurz hingeschaut und auf einmal schwebt das Ding",
        author: "Sabrina"
      },
      {
        date: "04.11.2024",
        text: "Ich hab heute in der Früh ein Baby gesehen und ich dachte dass das nicht echt ist",
        author: "Sabrina"
      },
      {
        date: "15.11.2024",
        text: "Ich geh nicht aufn Christkindlmarkt um mit normales Essen zu holen sondern ich geh aufn Christkindlmarkt um mir Diabetes zu holen",
        author: "Sabrina"
      },
      {
        date: "16.01.2025",
        text: "Niederländisch lernen is so \n ... \n ein paar Bier und du kannst es",
        author: "Sabrina"
      },
      {
        date: "13.02.2025",
        text: "Stell dir vor Furkan aus Frankfurt",
        author: "Sabrina"
      },
      {
        date: "27.03.2025",
        text: "Julian hat so ein Bastard Lachen",
        author: "Sabrina"
      },



      {
        date: "13.03.2023",
        text: "Ich hb ihn gefragt ob er hoch oder quer Format wilk und er sagt er ist nicht queer",
        author: "Zsofia"
      },
      {
        date: "24.05.2024",
        text: "Schon wieder die Berge ich kann nicht mehr",
        author: "Zsofia"
      },
      {
        date: "24.05.2024",
        text: "Weniger Pedophile \n (leise geasgt aber jeder hats gehört)",
        author: "Zsofia"
      },
      {
        date: "09.09.2024",
        text: "alle meine Menschen sind gestorben",
        author: "Zsofia"
      },
      {
        date: "24.05.2024",
        text: "Rotlicht Kirche",
        author: "Zsofia"
      },
      {
        date: "07.03.2025",
        text: "Ich tanz auch gleich weg",
        author: "Zsofia"
      },
      {
        date: "18.03.2025",
        text: "some people are so unfähig",
        author: "Zsofia"
      },
      {
        date: "10.04.2025",
        text: "Na gut jetzt hab ich dich fast geköpft ahhahah \n Erik wird geköpft",
        author: "Zsofia"
      },

    ],
  };

   // Diese Funktion wird einmalig beim Laden des Skripts aufgerufen,
  // um die "alle_lehrer"-Kategorie zu befüllen.
  (function populateAllLehrerQuotes() {
      quotes.alle_lehrer = []
    for (const category in quotes) {
      // Füge nur Zitate von Lehrern hinzu, die nicht "Schüler" sind
      if (category !== "Schüler" && category !== "alle_lehrer") {
        quotes.alle_lehrer = quotes.alle_lehrer.concat(quotes[category]);
      };
    }
  })();

  let allCategoryQuotes = []; // Alle Zitate der aktuell ausgewählten Kategorie
  let filteredQuotes = [];    // Zitate nach Anwendung des Suchfilters
  let quoteHistory = [];      // Speichert die Indizes der angezeigten Zitate im gefilterten Set
  let currentHistoryIndex = -1; // Zeigt auf den aktuellen Index im quoteHistory-Array

  /**
   * Setzt die Zitate zurück und generiert ein neues Zitat basierend auf der ausgewählten Kategorie.
   * Wird beim Ändern der Kategorie aufgerufen.
   */
  function resetAndGenerateQuote() {
      const categoryElement = document.getElementById('category');
      const selectedCategory = categoryElement.value;
      localStorage.setItem('selectedCategory', selectedCategory);
      

      // Setzt alle Zitate für die neue Kategorie
      allCategoryQuotes = quotes[selectedCategory] || [];

      // Suchfeld leeren und Sichtbarkeit aktualisieren
      document.getElementById('search-input').value = '';
      updateSearchVisibility(selectedCategory);

      // Verlauf zurücksetzen
      quoteHistory = [];
      currentHistoryIndex = -1;

      // Filter anwenden (ohne Suchbegriff, falls das Feld leer ist) und dann ein Zitat generieren
      filterQuotes();
  }

  /**
   * Zeigt oder verbirgt die Suchleiste basierend auf der ausgewählten Kategorie.
   * @param {string} category - Die aktuell ausgewählte Kategorie.
   */
  function updateSearchVisibility(category) {
      const searchContainer = document.getElementById('search-container');
      if (category === 'alle_lehrer' || category === 'Schüler') {
          searchContainer.style.display = 'flex'; // Zeigt die Suchleiste an
      } else {
          searchContainer.style.display = 'none'; // Verbirgt die Suchleiste
      }
  }

  /**
   * Filtert die Zitate basierend auf dem Suchbegriff im Autorfeld.
   * Wird beim Tippen im Suchfeld oder Klicken des Suchen-Buttons aufgerufen.
   */
  function filterQuotes() {
      const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();

      if (searchTerm === '') {
          filteredQuotes = [...allCategoryQuotes]; // Alle Zitate, wenn Suchfeld leer ist
      } else {
          filteredQuotes = allCategoryQuotes.filter(quote =>
              quote.author.toLowerCase().includes(searchTerm)
          );
      }

      // Verlauf zurücksetzen und neues Zitat generieren nach dem Filtern
      quoteHistory = [];
      currentHistoryIndex = -1;
      generateQuote();
  }

  /**
   * Generiert und zeigt ein zufälliges Zitat aus den aktuell gefilterten Zitaten an.
   */
  function generateQuote() {
      const quoteDateElement = document.getElementById('quote-date');
      const quoteTextElement = document.getElementById('quote-text');
      const quoteAuthorElement = document.getElementById('quote-author');
      const quoteNumberElement = document.getElementById('quote-number');
      const categoryElement = document.getElementById('category');
      const category = categoryElement.value;

      if (filteredQuotes.length === 0) {
          quoteDateElement.textContent = '';
          quoteTextElement.innerHTML = "Keine Zitate gefunden für diese Auswahl.";
          quoteAuthorElement.textContent = '';
          quoteNumberElement.textContent = "Anzahl der Zitate: 0";
          // Speichern des leeren Zustands
          localStorage.setItem('lastQuoteIndex', null);
          return;
      }

      let newIndex;

      // Wenn wir uns im Verlauf zurückbewegt haben, gehen wir beim "Nächstes Zitat" wieder vorwärts
      if (currentHistoryIndex < quoteHistory.length - 1) {
          currentHistoryIndex++;
          newIndex = quoteHistory[currentHistoryIndex];
      } else {
          // Wir sind am Ende des Verlaufs oder es gibt noch keinen Verlauf,
          // also generieren wir ein neues, zufälliges Zitat.
          let availableIndices = [];
          for (let i = 0; i < filteredQuotes.length; i++) {
              // Füge nur Indizes hinzu, die noch nicht im Verlauf sind
              if (!quoteHistory.includes(i)) {
                  availableIndices.push(i);
              }
          }

          if (availableIndices.length === 0) {
              // Alle Zitate wurden angezeigt, den Verlauf zurücksetzen, um von vorne zu beginnen
              quoteHistory = [];
              currentHistoryIndex = -1;
              // Jetzt sind wieder alle Indizes verfügbar
              for (let i = 0; i < filteredQuotes.length; i++) {
                  availableIndices.push(i);
              }
          }

          // Wähle einen zufälligen Index aus den verfügbaren
          newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          
          // Füge den neuen Index zum Verlauf hinzu und aktualisiere den aktuellen Verlauf-Index
          quoteHistory.push(newIndex);
          currentHistoryIndex = quoteHistory.length - 1;
      }

      const quote = filteredQuotes[newIndex];
      let text = quote.text;
      text = text.replace(/\n/g, '<br>');

      quoteDateElement.textContent = quote.date;
      quoteTextElement.innerHTML = `"${text.replace(/"/g, '&quot;')}"`;
      quoteAuthorElement.textContent = quote.author;
      // Zeigt die aktuelle Nummer des Zitats im Verlauf an (1-basiert)
      quoteNumberElement.textContent = `Zitat ${currentHistoryIndex + 1} von ${filteredQuotes.length}`;

      // Speichert die aktuelle Kategorie und den Index des Zitats im localStorage
      localStorage.setItem('selectedCategory', category);
      localStorage.setItem('lastQuoteIndex', newIndex);
  }

  /**
   * Zeigt das vorherige Zitat im Verlauf an.
   */
  function showPreviousQuote() {
      const quoteDateElement = document.getElementById('quote-date');
      const quoteTextElement = document.getElementById('quote-text');
      const quoteAuthorElement = document.getElementById('quote-author');
      const quoteNumberElement = document.getElementById('quote-number');
      const categoryElement = document.getElementById('category');
      const category = categoryElement.value;

      // Prüfen, ob es ein vorheriges Zitat im Verlauf gibt
      if (currentHistoryIndex > 0) {
          currentHistoryIndex--; // Gehe einen Schritt im Verlauf zurück
          const previousIndex = quoteHistory[currentHistoryIndex]; // Hole den Index des vorherigen Zitats

          const quote = filteredQuotes[previousIndex];
          let text = quote.text;
          text = text.replace(/\n/g, '<br>');

          quoteDateElement.textContent = quote.date;
          quoteTextElement.innerHTML = `"${text.replace(/"/g, '&quot;')}"`;
          quoteAuthorElement.textContent = quote.author;
          // Zeigt die aktuelle Nummer des Zitats im Verlauf an (1-basiert)
          quoteNumberElement.textContent = `Zitat ${currentHistoryIndex + 1} von ${filteredQuotes.length}`;

          // Speichert den neuen Zustand im localStorage
          localStorage.setItem('selectedCategory', category);
          localStorage.setItem('lastQuoteIndex', previousIndex);
      } else {
          // Optional: Nachricht, dass kein vorheriges Zitat verfügbar ist
          // console.log("Kein vorheriges Zitat verfügbar.");
      }
  }

  // Initialisierung beim Laden der Seite
  document.addEventListener("DOMContentLoaded", function() {
      const savedCategory = localStorage.getItem('selectedCategory');
      const lastQuoteIndex = localStorage.getItem('lastQuoteIndex');
      const categoryElement = document.getElementById('category');

      // Befüllt die 'alle_lehrer'-Kategorie dynamisch
      populateAllLehrerQuotes();

      if (savedCategory && quotes[savedCategory]) {
          categoryElement.value = savedCategory;
          allCategoryQuotes = quotes[savedCategory];
          updateSearchVisibility(savedCategory);

          // Filtert die Zitate basierend auf dem (leeren) Suchfeld beim Initialisieren
          const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
          if (searchTerm === '') {
              filteredQuotes = [...allCategoryQuotes];
          } else {
              filteredQuotes = allCategoryQuotes.filter(quote =>
                  quote.author.toLowerCase().includes(searchTerm)
              );
          }

          if (lastQuoteIndex !== null && filteredQuotes[parseInt(lastQuoteIndex)]) {
              // Wenn ein gültiger Index gespeichert ist, wird dieser als aktuelles Zitat angezeigt.
              // Initialisiere den Verlauf mit dem zuletzt angezeigten Zitat
              quoteHistory = [parseInt(lastQuoteIndex)];
              currentHistoryIndex = 0; // Der erste Eintrag im Verlauf ist der aktuelle

              const quote = filteredQuotes[quoteHistory[currentHistoryIndex]];
              let text = quote.text;
              text = text.replace(/\n/g, '<br>');

              document.getElementById('quote-date').textContent = quote.date;
              document.getElementById('quote-text').innerHTML = `"${text.replace(/"/g, '&quot;')}"`;
              document.getElementById('quote-author').textContent = quote.author;
              quoteNumberElement.textContent = `Zitat ${currentHistoryIndex + 1} von ${filteredQuotes.length}`;
          } else {
              // Wenn kein gültiger Index gespeichert ist, ein neues Zitat generieren
              generateQuote(); // Dies wird auch den Verlauf initialisieren
          }
        } else {
          // Wenn keine Kategorie gespeichert ist, Standardkategorie laden und Zitat anzeigen
          const defaultCategory = categoryElement.value;
          localStorage.setItem('selectedCategory', defaultCategory);
          updateSearchVisibility(defaultCategory);
          resetAndGenerateQuote();
        }
        
  });

window.onload = () => {
  resetAndGenerateQuote();
};
