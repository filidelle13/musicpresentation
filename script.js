document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(".reveal");
const progressBar = document.querySelector(".scroll-progress");
const sections = [...document.querySelectorAll("main section[id]")];

const revealItems = document.querySelectorAll(".reveal");
const progressBar = document.querySelector(".scroll-progress");
const sections = [...document.querySelectorAll("main section[id]")];
const metaDescription = document.querySelector('meta[name="description"]');
const siteNav = document.querySelector(".site-nav");
const langToggle = document.querySelector(".lang-toggle");
const langToggleBadge = document.querySelector(".lang-toggle-badge");
const langToggleLabel = document.querySelector(".lang-toggle-label");

const textTargets = {
  brand: ".brand",
  navGenre: '.site-nav a[href="#genre"]',
  navHistory: '.site-nav a[href="#history"]',
  navArtists: '.site-nav a[href="#artists"]',
  navEminem: '.site-nav a[href="#eminem"]',
  navSongs: '.site-nav a[href="#songs"]',
  navLyrics: '.site-nav a[href="#lyrics"]',
  heroEyebrow: ".hero-copy .eyebrow",
  heroTitle: ".hero-copy h1",
  heroLead: ".hero-copy .lead",
  heroPrimary: ".hero-actions .button-primary",
  heroSecondary: ".hero-actions .button-secondary",
  panelLabel: ".panel-label",
  panelText: ".panel-text",
  stat1Label: ".stat-grid .stat-card:nth-child(1) .stat-label",
  stat2Label: ".stat-grid .stat-card:nth-child(2) .stat-label",
  stat3Label: ".stat-grid .stat-card:nth-child(3) .stat-label",
  genreEyebrow: "#genre .section-heading .eyebrow",
  genreTitle: "#genre .section-heading h2",
  feature1Title: "#genre .feature-card:nth-child(1) h3",
  feature1Text: "#genre .feature-card:nth-child(1) p",
  feature2Title: "#genre .feature-card:nth-child(2) h3",
  feature2Text: "#genre .feature-card:nth-child(2) p",
  feature3Title: "#genre .feature-card:nth-child(3) h3",
  feature3Text: "#genre .feature-card:nth-child(3) p",
  opinionTitle: "#genre .opinion-banner h3",
  opinionText: "#genre .opinion-banner div p",
  historyEyebrow: "#history .section-heading .eyebrow",
  historyTitle: "#history .section-heading h2",
  timeline1Year: "#history .timeline-item:nth-child(1) .timeline-year",
  timeline1Title: "#history .timeline-item:nth-child(1) h3",
  timeline1Text: "#history .timeline-item:nth-child(1) p",
  timeline2Year: "#history .timeline-item:nth-child(2) .timeline-year",
  timeline2Title: "#history .timeline-item:nth-child(2) h3",
  timeline2Text: "#history .timeline-item:nth-child(2) p",
  timeline3Year: "#history .timeline-item:nth-child(3) .timeline-year",
  timeline3Title: "#history .timeline-item:nth-child(3) h3",
  timeline3Text: "#history .timeline-item:nth-child(3) p",
  artistsEyebrow: "#artists .section-heading .eyebrow",
  artistsTitle: "#artists .section-heading h2",
  artist1Text: "#artists .artist-card:nth-child(1) p",
  artist2Text: "#artists .artist-card:nth-child(2) p",
  artist3Text: "#artists .artist-card:nth-child(3) p",
  eminemEyebrow: "#eminem .section-heading .eyebrow",
  eminemTitle: "#eminem .section-heading h2",
  spotlightTag: "#eminem .spotlight-tag",
  spotlightSubtitle: "#eminem .spotlight-subtitle",
  spotlightText1: "#eminem .spotlight-card p:nth-of-type(3)",
  spotlightText2: "#eminem .spotlight-card p:nth-of-type(4)",
  bioTitle: "#eminem .bio-card h3",
  bio1: "#eminem .bio-list li:nth-child(1)",
  bio2: "#eminem .bio-list li:nth-child(2)",
  bio3: "#eminem .bio-list li:nth-child(3)",
  bio4: "#eminem .bio-list li:nth-child(4)",
  bio5: "#eminem .bio-list li:nth-child(5)",
  bio6: "#eminem .bio-list li:nth-child(6)",
  bio7: "#eminem .bio-list li:nth-child(7)",
  songsEyebrow: "#songs .section-heading .eyebrow",
  songsTitle: "#songs .section-heading h2",
  song1Text: "#songs .song-card:nth-child(1) p",
  song2Text: "#songs .song-card:nth-child(2) p",
  song3Text: "#songs .song-card:nth-child(3) p",
  lyricsEyebrow: "#lyrics .section-heading .eyebrow",
  lyricsTitle: "#lyrics .section-heading h2",
  lyric1Text: "#lyrics .lyric-card:nth-child(1) p:nth-of-type(2)",
  lyric2Text: "#lyrics .lyric-card:nth-child(2) p:nth-of-type(2)",
  lyric3Text: "#lyrics .lyric-card:nth-child(3) p:nth-of-type(2)",
  factsEyebrow: "#facts .section-heading .eyebrow",
  factsTitle: "#facts .section-heading h2",
  fact1Title: "#facts .fact-card:nth-child(1) h3",
  fact1Text: "#facts .fact-card:nth-child(1) p",
  fact2Title: "#facts .fact-card:nth-child(2) h3",
  fact2Text: "#facts .fact-card:nth-child(2) p",
  fact3Title: "#facts .fact-card:nth-child(3) h3",
  fact3Text: "#facts .fact-card:nth-child(3) p",
  fact4Title: "#facts .fact-card:nth-child(4) h3",
  fact4Text: "#facts .fact-card:nth-child(4) p",
  footer: ".site-footer p",
};

const translations = {
  en: {
    pageTitle: "Rap & Eminem | School Presentation",
    metaDescription:
      "A responsive school presentation website about rap and hip-hop with a focus on Eminem.",
    navAriaLabel: "Main navigation",
    brand: "Rap / Hip-Hop",
    navGenre: "Genre",
    navHistory: "History",
    navArtists: "Artists",
    navEminem: "Eminem",
    navSongs: "Songs",
    navLyrics: "Lyrics",
    heroEyebrow: "School presentation in English",
    heroTitle: 'RAP IS <span>RHYTHM, TRUTH,</span> AND IDENTITY.',
    heroLead:
      "This site explores rap and hip-hop as a music genre and focuses on my favourite artist, Eminem. It is a genre that turns words into energy and personal stories into culture.",
    heroPrimary: "Start the presentation",
    heroSecondary: "Go to Eminem",
    panelLabel: "Why this genre matters",
    panelText:
      "Born in the Bronx, hip-hop became a global voice for ambition, struggle, protest, creativity, and survival.",
    stat1Label: "Birth of hip-hop in New York",
    stat2Label: "GRAMMY Awards won by Eminem",
    stat3Label: 'Rap song to win the Oscar: "Lose Yourself"',
    genreEyebrow: "1. The Genre",
    genreTitle: "What genre is it and what makes it unique?",
    feature1Title: "What genre is it?",
    feature1Text:
      "The genre is <strong>rap / hip-hop</strong>. Rap is the vocal art of rhythmic speech, rhyme, flow, and wordplay, while hip-hop is the wider culture built around music, DJing, breakdance, graffiti, style, and self-expression.",
    feature2Title: "Main characteristics",
    feature2Text:
      "Rap usually has a strong beat, heavy rhythm, and very clear lyrics. It can be aggressive, emotional, reflective, fast, or calm. It often uses beats, sampling, bass, drum machines, hooks, and sometimes orchestral or electronic sounds.",
    feature3Title: "Meaning and message",
    feature3Text:
      "This genre often represents freedom, honesty, resistance, and the power of speaking for yourself. It gives a voice to people who feel ignored and turns real life problems into art.",
    opinionTitle: "Do I like this genre?",
    opinionText:
      "Yes, I do. I like rap because it is intense, direct, and full of personality. I enjoy the energy, the rhythm, and the way artists can tell a story with just a beat and a voice. Sometimes it can be too explicit or harsh, but when it is honest, it feels powerful.",
    historyEyebrow: "2. History &amp; Context",
    historyTitle: "When was it born and which social group shaped it?",
    timeline1Year: "Late 1970s",
    timeline1Title: "Born in the South Bronx",
    timeline1Text:
      "Hip-hop began in the South Bronx, New York City. It grew in African American and Latino communities, especially among young people who used music, dance, and art to create identity and community.",
    timeline2Year: "1980s",
    timeline2Title: "From local parties to global attention",
    timeline2Text:
      "The genre became popular through parties, DJs, radio, and records. Rap started entering mainstream culture while still keeping strong connections to street life and social reality.",
    timeline3Year: "1990s and 2000s",
    timeline3Title: "A global cultural force",
    timeline3Text:
      "Rap became one of the most important genres in the world. It was connected to discussions about class, race, identity, violence, ambition, and personal success.",
    artistsEyebrow: "3. Main Artists",
    artistsTitle: "Three important artists in this genre",
    artist1Text:
      "Tupac is one of the strongest voices in rap history. His music mixed anger, poetry, politics, and emotion, and he became a symbol of truth and social awareness.",
    artist2Text:
      "Jay-Z represents lyrical intelligence, business success, and long-term influence. He helped show that rap could be both artistic and strategic.",
    artist3Text:
      "Eminem is famous for his incredible speed, rhyme technique, emotional honesty, and storytelling. He brought Detroit rap to a huge international audience and became one of the best-selling rappers ever.",
    eminemEyebrow: "4. Favourite Artist",
    eminemTitle: "Why Eminem is my favourite artist",
    spotlightTag: "Favourite artist",
    spotlightSubtitle: "Known to the world as Eminem",
    spotlightText1:
      "Eminem is my favourite artist because he is technically brilliant, emotionally honest, and impossible to ignore. His songs can be angry, funny, dark, vulnerable, or motivational, and his flow is one of the most impressive in music.",
    spotlightText2:
      "I also like the fact that he came from a difficult life and built his career through determination, underground battles, and hard work.",
    bioTitle: "Short biography",
    bio1:
      'Eminem was born on <strong>October 17, 1972</strong>, in <strong>St. Joseph, Missouri</strong>, in the United States.',
    bio2:
      'His real name is <strong>Marshall Bruce Mathers III</strong>.',
    bio3:
      "He did not become famous when he was very young. He had a difficult childhood, lived with money problems, and later grew up around Detroit.",
    bio4:
      "As a teenager, he started rapping in clubs and battle competitions. He became known in Detroit's underground scene for his sharp lyrics and technical skill.",
    bio5:
      'His first album, <strong>Infinite</strong>, came out in 1996, but it was not a big success.',
    bio6:
      'His life changed after the <strong>1997 Rap Olympics</strong>, when his music reached Dr. Dre. Dr. Dre signed him, produced <strong>The Slim Shady LP</strong>, and helped launch him into global fame in 1999.',
    bio7:
      'Eminem was also part of the rap group <strong>D12</strong>, but he is most famous as a solo artist.',
    songsEyebrow: "5. Three Songs",
    songsTitle: "Three Eminem songs I like",
    song1Text:
      "This song is about pressure, opportunity, and believing in yourself when life gives you one big moment. I like it because it is energetic, motivating, and perfect before an exam, a match, or a difficult challenge.",
    song2Text:
      "This song is about his family, especially his daughter, and the pain of trying to protect someone you love. I like it because it shows a softer, more human side of Eminem.",
    song3Text:
      "This song is about recovery, strength, and starting again after mistakes. I like it because it sounds honest and powerful, and it sends a message of courage and resilience.",
    lyricsEyebrow: "6. Important Lyrics",
    lyricsTitle: "Short lyrics and why they matter to me",
    lyric1Text:
      "This means total focus. To me, it says that success sometimes comes when we stop being afraid and give everything to the moment.",
    lyric2Text:
      "These words are simple but powerful. They show personal growth, courage, and the decision to move forward instead of hiding from problems.",
    lyric3Text:
      "This line feels intimate and emotional. It reminds me that behind the fame there is a real person trying to protect his family.",
    factsEyebrow: "7. Fun Facts",
    factsTitle: "Interesting facts about the genre, the artist, and the songs",
    fact1Title: "Hip-hop started as culture, not only music",
    fact1Text:
      "It included DJing, MCing, breakdance, graffiti, and a sense of identity for young people in the Bronx.",
    fact2Title: '"Lose Yourself" made history',
    fact2Text:
      "It became the first hip-hop song to win the Academy Award for Best Original Song.",
    fact3Title: "Eminem entered the Rock &amp; Roll Hall of Fame in 2022",
    fact3Text:
      "That shows how strong his cultural impact is, even outside the rap genre.",
    fact4Title: "His alter ego is Slim Shady",
    fact4Text:
      "Slim Shady allowed Eminem to explore darker, more extreme, and more theatrical ideas in his lyrics.",
    footer:
      'Sources used for factual details: <a href="https://www.britannica.com/art/hip-hop" target="_blank" rel="noreferrer">Britannica on hip-hop</a>, <a href="https://www.britannica.com/biography/Eminem" target="_blank" rel="noreferrer">Britannica on Eminem</a>, <a href="https://www.grammy.com/artists/eminem/8580" target="_blank" rel="noreferrer">GRAMMY artist page</a>, <a href="https://rockhall.com/inductees/eminem/" target="_blank" rel="noreferrer">Rock &amp; Roll Hall of Fame</a>.',
  },
  it: {
    pageTitle: "Rap & Eminem | Presentazione scolastica",
    metaDescription:
      "Un sito responsive per una presentazione scolastica sul rap e l'hip-hop con focus su Eminem.",
    navAriaLabel: "Navigazione principale",
    brand: "Rap / Hip-Hop",
    navGenre: "Genere",
    navHistory: "Storia",
    navArtists: "Artisti",
    navEminem: "Eminem",
    navSongs: "Canzoni",
    navLyrics: "Testi",
    heroEyebrow: "Presentazione scolastica bilingue",
    heroTitle: 'IL RAP È <span>RITMO, VERITÀ,</span> IDENTITÀ.',
    heroLead:
      "Questo sito esplora il rap e l'hip-hop come genere musicale e si concentra sul mio artista preferito, Eminem. È un genere che trasforma le parole in energia e le storie personali in cultura.",
    heroPrimary: "Inizia la presentazione",
    heroSecondary: "Vai a Eminem",
    panelLabel: "Perché questo genere conta",
    panelText:
      "Nato nel Bronx, l'hip-hop è diventato una voce globale di ambizione, lotta, protesta, creatività e sopravvivenza.",
    stat1Label: "Nascita dell'hip-hop a New York",
    stat2Label: "GRAMMY Awards vinti da Eminem",
    stat3Label: 'Canzone rap che ha vinto l\'Oscar: "Lose Yourself"',
    genreEyebrow: "1. Il genere",
    genreTitle: "Che genere è e cosa lo rende unico?",
    feature1Title: "Che genere è?",
    feature1Text:
      "Il genere è <strong>rap / hip-hop</strong>. Il rap è l'arte vocale del parlato ritmico, della rima, del flow e del gioco di parole, mentre l'hip-hop è la cultura più ampia costruita attorno a musica, DJing, breakdance, graffiti, stile ed espressione personale.",
    feature2Title: "Caratteristiche principali",
    feature2Text:
      "Il rap ha di solito un beat forte, un ritmo marcato e testi molto chiari. Può essere aggressivo, emotivo, riflessivo, veloce o calmo. Usa spesso beat, sampling, basso, drum machine, ritornelli e a volte suoni orchestrali o elettronici.",
    feature3Title: "Significato e messaggio",
    feature3Text:
      "Questo genere rappresenta spesso libertà, sincerità, resistenza e il potere di parlare con la propria voce. Dà spazio a chi si sente ignorato e trasforma i problemi reali in arte.",
    opinionTitle: "Mi piace questo genere?",
    opinionText:
      "Sì, mi piace. Mi piace il rap perché è intenso, diretto e pieno di personalità. Mi piacciono l'energia, il ritmo e il modo in cui gli artisti riescono a raccontare una storia solo con un beat e una voce. A volte può essere troppo esplicito o duro, ma quando è sincero risulta molto potente.",
    historyEyebrow: "2. Storia e contesto",
    historyTitle: "Quando è nato e quale gruppo sociale lo ha formato?",
    timeline1Year: "Fine anni Settanta",
    timeline1Title: "Nato nel South Bronx",
    timeline1Text:
      "L'hip-hop è nato nel South Bronx, a New York City. Si è sviluppato nelle comunità afroamericane e latine, soprattutto tra i giovani che usavano musica, danza e arte per creare identità e comunità.",
    timeline2Year: "Anni Ottanta",
    timeline2Title: "Dalle feste di quartiere all'attenzione globale",
    timeline2Text:
      "Il genere è diventato popolare attraverso feste, DJ, radio e dischi. Il rap ha iniziato a entrare nella cultura mainstream mantenendo però un forte legame con la strada e con la realtà sociale.",
    timeline3Year: "Anni Novanta e Duemila",
    timeline3Title: "Una forza culturale globale",
    timeline3Text:
      "Il rap è diventato uno dei generi più importanti al mondo. È stato collegato a temi come classe sociale, razza, identità, violenza, ambizione e successo personale.",
    artistsEyebrow: "3. Artisti principali",
    artistsTitle: "Tre artisti importanti di questo genere",
    artist1Text:
      "Tupac è una delle voci più forti della storia del rap. La sua musica univa rabbia, poesia, politica ed emozione, e lui è diventato un simbolo di verità e coscienza sociale.",
    artist2Text:
      "Jay-Z rappresenta intelligenza lirica, successo imprenditoriale e influenza duratura. Ha dimostrato che il rap può essere sia artistico sia strategico.",
    artist3Text:
      "Eminem è famoso per la sua velocità incredibile, la tecnica nelle rime, l'onestà emotiva e lo storytelling. Ha portato il rap di Detroit a un pubblico internazionale enorme ed è diventato uno dei rapper più venduti di sempre.",
    eminemEyebrow: "4. Artista preferito",
    eminemTitle: "Perché Eminem è il mio artista preferito",
    spotlightTag: "Artista preferito",
    spotlightSubtitle: "Conosciuto in tutto il mondo come Eminem",
    spotlightText1:
      "Eminem è il mio artista preferito perché è tecnicamente straordinario, emotivamente sincero e impossibile da ignorare. Le sue canzoni possono essere arrabbiate, divertenti, oscure, vulnerabili o motivazionali, e il suo flow è uno dei più impressionanti della musica.",
    spotlightText2:
      "Mi piace anche il fatto che venga da una vita difficile e che abbia costruito la sua carriera con determinazione, battle underground e tanto lavoro.",
    bioTitle: "Breve biografia",
    bio1:
      'Eminem è nato il <strong>17 ottobre 1972</strong> a <strong>St. Joseph, Missouri</strong>, negli Stati Uniti.',
    bio2:
      'Il suo vero nome è <strong>Marshall Bruce Mathers III</strong>.',
    bio3:
      "Non è diventato famoso da giovanissimo. Ha avuto un'infanzia difficile, ha vissuto problemi economici ed è poi cresciuto nell'area di Detroit.",
    bio4:
      "Da adolescente ha iniziato a rappare nei club e nelle battle competition. Nella scena underground di Detroit è diventato noto per i suoi testi taglienti e per la sua abilità tecnica.",
    bio5:
      'Il suo primo album, <strong>Infinite</strong>, è uscito nel 1996, ma non ha avuto un grande successo.',
    bio6:
      'La sua vita è cambiata dopo le <strong>Rap Olympics del 1997</strong>, quando la sua musica è arrivata a Dr. Dre. Dr. Dre lo ha messo sotto contratto, ha prodotto <strong>The Slim Shady LP</strong> e lo ha aiutato a diventare famoso nel mondo nel 1999.',
    bio7:
      'Eminem ha fatto parte anche del gruppo rap <strong>D12</strong>, ma è soprattutto famoso come artista solista.',
    songsEyebrow: "5. Tre canzoni",
    songsTitle: "Tre canzoni di Eminem che mi piacciono",
    song1Text:
      "Questa canzone parla di pressione, opportunità e fiducia in sé stessi quando la vita ti offre un grande momento. Mi piace perché è energica, motivante e perfetta prima di un esame, di una partita o di una sfida difficile.",
    song2Text:
      "Questa canzone parla della sua famiglia, soprattutto di sua figlia, e del dolore di cercare di proteggere qualcuno che ami. Mi piace perché mostra un lato più dolce e umano di Eminem.",
    song3Text:
      "Questa canzone parla di rinascita, forza e capacità di ricominciare dopo gli errori. Mi piace perché suona sincera e potente e manda un messaggio di coraggio e resilienza.",
    lyricsEyebrow: "6. Versi importanti",
    lyricsTitle: "Brevi versi e perché per me sono importanti",
    lyric1Text:
      "Questo significa concentrazione totale. Per me vuol dire che il successo a volte arriva quando smettiamo di avere paura e diamo tutto a quell'istante.",
    lyric2Text:
      "Queste parole sono semplici ma molto forti. Mostrano crescita personale, coraggio e la decisione di andare avanti invece di nascondersi dai problemi.",
    lyric3Text:
      "Questa frase è intima ed emozionante. Mi ricorda che dietro la fama c'è una persona reale che cerca di proteggere la sua famiglia.",
    factsEyebrow: "7. Curiosità",
    factsTitle: "Curiosità sul genere, sull'artista e sulle canzoni",
    fact1Title: "L'hip-hop è nato come cultura, non solo come musica",
    fact1Text:
      "Comprendeva DJing, MCing, breakdance, graffiti e un forte senso di identità per i giovani del Bronx.",
    fact2Title: '"Lose Yourself" ha fatto la storia',
    fact2Text:
      "È diventata la prima canzone hip-hop a vincere l'Academy Award come Best Original Song.",
    fact3Title: "Eminem è entrato nella Rock &amp; Roll Hall of Fame nel 2022",
    fact3Text:
      "Questo mostra quanto forte sia il suo impatto culturale, anche fuori dal genere rap.",
    fact4Title: "Il suo alter ego è Slim Shady",
    fact4Text:
      "Slim Shady ha permesso a Eminem di esplorare idee più oscure, estreme e teatrali nei suoi testi.",
    footer:
      'Fonti usate per i dettagli fattuali: <a href="https://www.britannica.com/art/hip-hop" target="_blank" rel="noreferrer">Britannica sull\'hip-hop</a>, <a href="https://www.britannica.com/biography/Eminem" target="_blank" rel="noreferrer">Britannica su Eminem</a>, <a href="https://www.grammy.com/artists/eminem/8580" target="_blank" rel="noreferrer">pagina artista dei GRAMMY</a>, <a href="https://rockhall.com/inductees/eminem/" target="_blank" rel="noreferrer">Rock &amp; Roll Hall of Fame</a>.',
  },
};


const revealItems = document.querySelectorAll(".reveal");
const progressBar = document.querySelector(".scroll-progress");
const sections = [...document.querySelectorAll("main section[id]")];
const metaDescription = document.querySelector('meta[name="description"]');
const siteNav = document.querySelector(".site-nav");
const langToggle = document.querySelector(".lang-toggle");
const langToggleBadge = document.querySelector(".lang-toggle-badge");
const langToggleLabel = document.querySelector(".lang-toggle-label");

const textTargets = {
  brand: ".brand",
  navGenre: '.site-nav a[href="#genre"]',
  navHistory: '.site-nav a[href="#history"]',
  navArtists: '.site-nav a[href="#artists"]',
  navEminem: '.site-nav a[href="#eminem"]',
  navSongs: '.site-nav a[href="#songs"]',
  navLyrics: '.site-nav a[href="#lyrics"]',
  heroEyebrow: ".hero-copy .eyebrow",
  heroTitle: ".hero-copy h1",
  heroLead: ".hero-copy .lead",
  heroPrimary: ".hero-actions .button-primary",
  heroSecondary: ".hero-actions .button-secondary",
  panelLabel: ".panel-label",
  panelText: ".panel-text",
  stat1Label: ".stat-grid .stat-card:nth-child(1) .stat-label",
  stat2Label: ".stat-grid .stat-card:nth-child(2) .stat-label",
  stat3Label: ".stat-grid .stat-card:nth-child(3) .stat-label",
  genreEyebrow: "#genre .section-heading .eyebrow",
  genreTitle: "#genre .section-heading h2",
  feature1Title: "#genre .feature-card:nth-child(1) h3",
  feature1Text: "#genre .feature-card:nth-child(1) p",
  feature2Title: "#genre .feature-card:nth-child(2) h3",
  feature2Text: "#genre .feature-card:nth-child(2) p",
  feature3Title: "#genre .feature-card:nth-child(3) h3",
  feature3Text: "#genre .feature-card:nth-child(3) p",
  opinionTitle: "#genre .opinion-banner h3",
  opinionText: "#genre .opinion-banner div p",
  historyEyebrow: "#history .section-heading .eyebrow",
  historyTitle: "#history .section-heading h2",
  timeline1Year: "#history .timeline-item:nth-child(1) .timeline-year",
  timeline1Title: "#history .timeline-item:nth-child(1) h3",
  timeline1Text: "#history .timeline-item:nth-child(1) p",
  timeline2Year: "#history .timeline-item:nth-child(2) .timeline-year",
  timeline2Title: "#history .timeline-item:nth-child(2) h3",
  timeline2Text: "#history .timeline-item:nth-child(2) p",
  timeline3Year: "#history .timeline-item:nth-child(3) .timeline-year",
  timeline3Title: "#history .timeline-item:nth-child(3) h3",
  timeline3Text: "#history .timeline-item:nth-child(3) p",
  artistsEyebrow: "#artists .section-heading .eyebrow",
  artistsTitle: "#artists .section-heading h2",
  artist1Text: "#artists .artist-card:nth-child(1) p",
  artist2Text: "#artists .artist-card:nth-child(2) p",
  artist3Text: "#artists .artist-card:nth-child(3) p",
  eminemEyebrow: "#eminem .section-heading .eyebrow",
  eminemTitle: "#eminem .section-heading h2",
  spotlightTag: "#eminem .spotlight-tag",
  spotlightSubtitle: "#eminem .spotlight-subtitle",
  spotlightText1: "#eminem .spotlight-card p:nth-of-type(3)",
  spotlightText2: "#eminem .spotlight-card p:nth-of-type(4)",
  bioTitle: "#eminem .bio-card h3",
  bio1: "#eminem .bio-list li:nth-child(1)",
  bio2: "#eminem .bio-list li:nth-child(2)",
  bio3: "#eminem .bio-list li:nth-child(3)",
  bio4: "#eminem .bio-list li:nth-child(4)",
  bio5: "#eminem .bio-list li:nth-child(5)",
  bio6: "#eminem .bio-list li:nth-child(6)",
  bio7: "#eminem .bio-list li:nth-child(7)",
  songsEyebrow: "#songs .section-heading .eyebrow",
  songsTitle: "#songs .section-heading h2",
  song1Text: "#songs .song-card:nth-child(1) p",
  song2Text: "#songs .song-card:nth-child(2) p",
  song3Text: "#songs .song-card:nth-child(3) p",
  lyricsEyebrow: "#lyrics .section-heading .eyebrow",
  lyricsTitle: "#lyrics .section-heading h2",
  lyric1Text: "#lyrics .lyric-card:nth-child(1) p:nth-of-type(2)",
  lyric2Text: "#lyrics .lyric-card:nth-child(2) p:nth-of-type(2)",
  lyric3Text: "#lyrics .lyric-card:nth-child(3) p:nth-of-type(2)",
  factsEyebrow: "#facts .section-heading .eyebrow",
  factsTitle: "#facts .section-heading h2",
  fact1Title: "#facts .fact-card:nth-child(1) h3",
  fact1Text: "#facts .fact-card:nth-child(1) p",
  fact2Title: "#facts .fact-card:nth-child(2) h3",
  fact2Text: "#facts .fact-card:nth-child(2) p",
  fact3Title: "#facts .fact-card:nth-child(3) h3",
  fact3Text: "#facts .fact-card:nth-child(3) p",
  fact4Title: "#facts .fact-card:nth-child(4) h3",
  fact4Text: "#facts .fact-card:nth-child(4) p",
  footer: ".site-footer p",
};

const translations = {
  en: {
    pageTitle: "Rap & Eminem | School Presentation",
    metaDescription:
      "A responsive school presentation website about rap and hip-hop with a focus on Eminem.",
    navAriaLabel: "Main navigation",
    brand: "Rap / Hip-Hop",
    navGenre: "Genre",
    navHistory: "History",
    navArtists: "Artists",
    navEminem: "Eminem",
    navSongs: "Songs",
    navLyrics: "Lyrics",
    heroEyebrow: "School presentation in English",
    heroTitle: 'RAP IS <span>RHYTHM, TRUTH,</span> AND IDENTITY.',
    heroLead:
      "This site explores rap and hip-hop as a music genre and focuses on my favourite artist, Eminem. It is a genre that turns words into energy and personal stories into culture.",
    heroPrimary: "Start the presentation",
    heroSecondary: "Go to Eminem",
    panelLabel: "Why this genre matters",
    panelText:
      "Born in the Bronx, hip-hop became a global voice for ambition, struggle, protest, creativity, and survival.",
    stat1Label: "Birth of hip-hop in New York",
    stat2Label: "GRAMMY Awards won by Eminem",
    stat3Label: 'Rap song to win the Oscar: "Lose Yourself"',
    genreEyebrow: "1. The Genre",
    genreTitle: "What genre is it and what makes it unique?",
    feature1Title: "What genre is it?",
    feature1Text:
      "The genre is <strong>rap / hip-hop</strong>. Rap is the vocal art of rhythmic speech, rhyme, flow, and wordplay, while hip-hop is the wider culture built around music, DJing, breakdance, graffiti, style, and self-expression.",
    feature2Title: "Main characteristics",
    feature2Text:
      "Rap usually has a strong beat, heavy rhythm, and very clear lyrics. It can be aggressive, emotional, reflective, fast, or calm. It often uses beats, sampling, bass, drum machines, hooks, and sometimes orchestral or electronic sounds.",
    feature3Title: "Meaning and message",
    feature3Text:
      "This genre often represents freedom, honesty, resistance, and the power of speaking for yourself. It gives a voice to people who feel ignored and turns real life problems into art.",
    opinionTitle: "Do I like this genre?",
    opinionText:
      "Yes, I do. I like rap because it is intense, direct, and full of personality. I enjoy the energy, the rhythm, and the way artists can tell a story with just a beat and a voice. Sometimes it can be too explicit or harsh, but when it is honest, it feels powerful.",
    historyEyebrow: "2. History &amp; Context",
    historyTitle: "When was it born and which social group shaped it?",
    timeline1Year: "Late 1970s",
    timeline1Title: "Born in the South Bronx",
    timeline1Text:
      "Hip-hop began in the South Bronx, New York City. It grew in African American and Latino communities, especially among young people who used music, dance, and art to create identity and community.",
    timeline2Year: "1980s",
    timeline2Title: "From local parties to global attention",
    timeline2Text:
      "The genre became popular through parties, DJs, radio, and records. Rap started entering mainstream culture while still keeping strong connections to street life and social reality.",
    timeline3Year: "1990s and 2000s",
    timeline3Title: "A global cultural force",
    timeline3Text:
      "Rap became one of the most important genres in the world. It was connected to discussions about class, race, identity, violence, ambition, and personal success.",
    artistsEyebrow: "3. Main Artists",
    artistsTitle: "Three important artists in this genre",
    artist1Text:
      "Tupac is one of the strongest voices in rap history. His music mixed anger, poetry, politics, and emotion, and he became a symbol of truth and social awareness.",
    artist2Text:
      "Jay-Z represents lyrical intelligence, business success, and long-term influence. He helped show that rap could be both artistic and strategic.",
    artist3Text:
      "Eminem is famous for his incredible speed, rhyme technique, emotional honesty, and storytelling. He brought Detroit rap to a huge international audience and became one of the best-selling rappers ever.",
    eminemEyebrow: "4. Favourite Artist",
    eminemTitle: "Why Eminem is my favourite artist",
    spotlightTag: "Favourite artist",
    spotlightSubtitle: "Known to the world as Eminem",
    spotlightText1:
      "Eminem is my favourite artist because he is technically brilliant, emotionally honest, and impossible to ignore. His songs can be angry, funny, dark, vulnerable, or motivational, and his flow is one of the most impressive in music.",
    spotlightText2:
      "I also like the fact that he came from a difficult life and built his career through determination, underground battles, and hard work.",
    bioTitle: "Short biography",
    bio1:
      'Eminem was born on <strong>October 17, 1972</strong>, in <strong>St. Joseph, Missouri</strong>, in the United States.',
    bio2:
      'His real name is <strong>Marshall Bruce Mathers III</strong>.',
    bio3:
      "He did not become famous when he was very young. He had a difficult childhood, lived with money problems, and later grew up around Detroit.",
    bio4:
      "As a teenager, he started rapping in clubs and battle competitions. He became known in Detroit's underground scene for his sharp lyrics and technical skill.",
    bio5:
      'His first album, <strong>Infinite</strong>, came out in 1996, but it was not a big success.',
    bio6:
      'His life changed after the <strong>1997 Rap Olympics</strong>, when his music reached Dr. Dre. Dr. Dre signed him, produced <strong>The Slim Shady LP</strong>, and helped launch him into global fame in 1999.',
    bio7:
      'Eminem was also part of the rap group <strong>D12</strong>, but he is most famous as a solo artist.',
    songsEyebrow: "5. Three Songs",
    songsTitle: "Three Eminem songs I like",
    song1Text:
      "This song is about pressure, opportunity, and believing in yourself when life gives you one big moment. I like it because it is energetic, motivating, and perfect before an exam, a match, or a difficult challenge.",
    song2Text:
      "This song is about his family, especially his daughter, and the pain of trying to protect someone you love. I like it because it shows a softer, more human side of Eminem.",
    song3Text:
      "This song is about recovery, strength, and starting again after mistakes. I like it because it sounds honest and powerful, and it sends a message of courage and resilience.",
    lyricsEyebrow: "6. Important Lyrics",
    lyricsTitle: "Short lyrics and why they matter to me",
    lyric1Text:
      "This means total focus. To me, it says that success sometimes comes when we stop being afraid and give everything to the moment.",
    lyric2Text:
      "These words are simple but powerful. They show personal growth, courage, and the decision to move forward instead of hiding from problems.",
    lyric3Text:
      "This line feels intimate and emotional. It reminds me that behind the fame there is a real person trying to protect his family.",
    factsEyebrow: "7. Fun Facts",
    factsTitle: "Interesting facts about the genre, the artist, and the songs",
    fact1Title: "Hip-hop started as culture, not only music",
    fact1Text:
      "It included DJing, MCing, breakdance, graffiti, and a sense of identity for young people in the Bronx.",
    fact2Title: '"Lose Yourself" made history',
    fact2Text:
      "It became the first hip-hop song to win the Academy Award for Best Original Song.",
    fact3Title: "Eminem entered the Rock &amp; Roll Hall of Fame in 2022",
    fact3Text:
      "That shows how strong his cultural impact is, even outside the rap genre.",
    fact4Title: "His alter ego is Slim Shady",
    fact4Text:
      "Slim Shady allowed Eminem to explore darker, more extreme, and more theatrical ideas in his lyrics.",
    footer:
      'Sources used for factual details: <a href="https://www.britannica.com/art/hip-hop" target="_blank" rel="noreferrer">Britannica on hip-hop</a>, <a href="https://www.britannica.com/biography/Eminem" target="_blank" rel="noreferrer">Britannica on Eminem</a>, <a href="https://www.grammy.com/artists/eminem/8580" target="_blank" rel="noreferrer">GRAMMY artist page</a>, <a href="https://rockhall.com/inductees/eminem/" target="_blank" rel="noreferrer">Rock &amp; Roll Hall of Fame</a>.',
  },
  it: {
    pageTitle: "Rap & Eminem | Presentazione scolastica",
    metaDescription:
      "Un sito responsive per una presentazione scolastica sul rap e l'hip-hop con focus su Eminem.",
    navAriaLabel: "Navigazione principale",
    brand: "Rap / Hip-Hop",
    navGenre: "Genere",
    navHistory: "Storia",
    navArtists: "Artisti",
    navEminem: "Eminem",
    navSongs: "Canzoni",
    navLyrics: "Testi",
    heroEyebrow: "Presentazione scolastica bilingue",
    heroTitle: 'IL RAP È <span>RITMO, VERITÀ,</span> IDENTITÀ.',
    heroLead:
      "Questo sito esplora il rap e l'hip-hop come genere musicale e si concentra sul mio artista preferito, Eminem. È un genere che trasforma le parole in energia e le storie personali in cultura.",
    heroPrimary: "Inizia la presentazione",
    heroSecondary: "Vai a Eminem",
    panelLabel: "Perché questo genere conta",
    panelText:
      "Nato nel Bronx, l'hip-hop è diventato una voce globale di ambizione, lotta, protesta, creatività e sopravvivenza.",
    stat1Label: "Nascita dell'hip-hop a New York",
    stat2Label: "GRAMMY Awards vinti da Eminem",
    stat3Label: 'Canzone rap che ha vinto l\'Oscar: "Lose Yourself"',
    genreEyebrow: "1. Il genere",
    genreTitle: "Che genere è e cosa lo rende unico?",
    feature1Title: "Che genere è?",
    feature1Text:
      "Il genere è <strong>rap / hip-hop</strong>. Il rap è l'arte vocale del parlato ritmico, della rima, del flow e del gioco di parole, mentre l'hip-hop è la cultura più ampia costruita attorno a musica, DJing, breakdance, graffiti, stile ed espressione personale.",
    feature2Title: "Caratteristiche principali",
    feature2Text:
      "Il rap ha di solito un beat forte, un ritmo marcato e testi molto chiari. Può essere aggressivo, emotivo, riflessivo, veloce o calmo. Usa spesso beat, sampling, basso, drum machine, ritornelli e a volte suoni orchestrali o elettronici.",
    feature3Title: "Significato e messaggio",
    feature3Text:
      "Questo genere rappresenta spesso libertà, sincerità, resistenza e il potere di parlare con la propria voce. Dà spazio a chi si sente ignorato e trasforma i problemi reali in arte.",
    opinionTitle: "Mi piace questo genere?",
    opinionText:
      "Sì, mi piace. Mi piace il rap perché è intenso, diretto e pieno di personalità. Mi piacciono l'energia, il ritmo e il modo in cui gli artisti riescono a raccontare una storia solo con un beat e una voce. A volte può essere troppo esplicito o duro, ma quando è sincero risulta molto potente.",
    historyEyebrow: "2. Storia e contesto",
    historyTitle: "Quando è nato e quale gruppo sociale lo ha formato?",
    timeline1Year: "Fine anni Settanta",
    timeline1Title: "Nato nel South Bronx",
    timeline1Text:
      "L'hip-hop è nato nel South Bronx, a New York City. Si è sviluppato nelle comunità afroamericane e latine, soprattutto tra i giovani che usavano musica, danza e arte per creare identità e comunità.",
    timeline2Year: "Anni Ottanta",
    timeline2Title: "Dalle feste di quartiere all'attenzione globale",
    timeline2Text:
      "Il genere è diventato popolare attraverso feste, DJ, radio e dischi. Il rap ha iniziato a entrare nella cultura mainstream mantenendo però un forte legame con la strada e con la realtà sociale.",
    timeline3Year: "Anni Novanta e Duemila",
    timeline3Title: "Una forza culturale globale",
    timeline3Text:
      "Il rap è diventato uno dei generi più importanti al mondo. È stato collegato a temi come classe sociale, razza, identità, violenza, ambizione e successo personale.",
    artistsEyebrow: "3. Artisti principali",
    artistsTitle: "Tre artisti importanti di questo genere",
    artist1Text:
      "Tupac è una delle voci più forti della storia del rap. La sua musica univa rabbia, poesia, politica ed emozione, e lui è diventato un simbolo di verità e coscienza sociale.",
    artist2Text:
      "Jay-Z rappresenta intelligenza lirica, successo imprenditoriale e influenza duratura. Ha dimostrato che il rap può essere sia artistico sia strategico.",
    artist3Text:
      "Eminem è famoso per la sua velocità incredibile, la tecnica nelle rime, l'onestà emotiva e lo storytelling. Ha portato il rap di Detroit a un pubblico internazionale enorme ed è diventato uno dei rapper più venduti di sempre.",
    eminemEyebrow: "4. Artista preferito",
    eminemTitle: "Perché Eminem è il mio artista preferito",
    spotlightTag: "Artista preferito",
    spotlightSubtitle: "Conosciuto in tutto il mondo come Eminem",
    spotlightText1:
      "Eminem è il mio artista preferito perché è tecnicamente straordinario, emotivamente sincero e impossibile da ignorare. Le sue canzoni possono essere arrabbiate, divertenti, oscure, vulnerabili o motivazionali, e il suo flow è uno dei più impressionanti della musica.",
    spotlightText2:
      "Mi piace anche il fatto che venga da una vita difficile e che abbia costruito la sua carriera con determinazione, battle underground e tanto lavoro.",
    bioTitle: "Breve biografia",
    bio1:
      'Eminem è nato il <strong>17 ottobre 1972</strong> a <strong>St. Joseph, Missouri</strong>, negli Stati Uniti.',
    bio2:
      'Il suo vero nome è <strong>Marshall Bruce Mathers III</strong>.',
    bio3:
      "Non è diventato famoso da giovanissimo. Ha avuto un'infanzia difficile, ha vissuto problemi economici ed è poi cresciuto nell'area di Detroit.",
    bio4:
      "Da adolescente ha iniziato a rappare nei club e nelle battle competition. Nella scena underground di Detroit è diventato noto per i suoi testi taglienti e per la sua abilità tecnica.",
    bio5:
      'Il suo primo album, <strong>Infinite</strong>, è uscito nel 1996, ma non ha avuto un grande successo.',
    bio6:
      'La sua vita è cambiata dopo le <strong>Rap Olympics del 1997</strong>, quando la sua musica è arrivata a Dr. Dre. Dr. Dre lo ha messo sotto contratto, ha prodotto <strong>The Slim Shady LP</strong> e lo ha aiutato a diventare famoso nel mondo nel 1999.',
    bio7:
      'Eminem ha fatto parte anche del gruppo rap <strong>D12</strong>, ma è soprattutto famoso come artista solista.',
    songsEyebrow: "5. Tre canzoni",
    songsTitle: "Tre canzoni di Eminem che mi piacciono",
    song1Text:
      "Questa canzone parla di pressione, opportunità e fiducia in sé stessi quando la vita ti offre un grande momento. Mi piace perché è energica, motivante e perfetta prima di un esame, di una partita o di una sfida difficile.",
    song2Text:
      "Questa canzone parla della sua famiglia, soprattutto di sua figlia, e del dolore di cercare di proteggere qualcuno che ami. Mi piace perché mostra un lato più dolce e umano di Eminem.",
    song3Text:
      "Questa canzone parla di rinascita, forza e capacità di ricominciare dopo gli errori. Mi piace perché suona sincera e potente e manda un messaggio di coraggio e resilienza.",
    lyricsEyebrow: "6. Versi importanti",
    lyricsTitle: "Brevi versi e perché per me sono importanti",
    lyric1Text:
      "Questo significa concentrazione totale. Per me vuol dire che il successo a volte arriva quando smettiamo di avere paura e diamo tutto a quell'istante.",
    lyric2Text:
      "Queste parole sono semplici ma molto forti. Mostrano crescita personale, coraggio e la decisione di andare avanti invece di nascondersi dai problemi.",
    lyric3Text:
      "Questa frase è intima ed emozionante. Mi ricorda che dietro la fama c'è una persona reale che cerca di proteggere la sua famiglia.",
    factsEyebrow: "7. Curiosità",
    factsTitle: "Curiosità sul genere, sull'artista e sulle canzoni",
    fact1Title: "L'hip-hop è nato come cultura, non solo come musica",
    fact1Text:
      "Comprendeva DJing, MCing, breakdance, graffiti e un forte senso di identità per i giovani del Bronx.",
    fact2Title: '"Lose Yourself" ha fatto la storia',
    fact2Text:
      "È diventata la prima canzone hip-hop a vincere l'Academy Award come Best Original Song.",
    fact3Title: "Eminem è entrato nella Rock &amp; Roll Hall of Fame nel 2022",
    fact3Text:
      "Questo mostra quanto forte sia il suo impatto culturale, anche fuori dal genere rap.",
    fact4Title: "Il suo alter ego è Slim Shady",
    fact4Text:
      "Slim Shady ha permesso a Eminem di esplorare idee più oscure, estreme e teatrali nei suoi testi.",
    footer:
      'Fonti usate per i dettagli fattuali: <a href="https://www.britannica.com/art/hip-hop" target="_blank" rel="noreferrer">Britannica sull\'hip-hop</a>, <a href="https://www.britannica.com/biography/Eminem" target="_blank" rel="noreferrer">Britannica su Eminem</a>, <a href="https://www.grammy.com/artists/eminem/8580" target="_blank" rel="noreferrer">pagina artista dei GRAMMY</a>, <a href="https://rockhall.com/inductees/eminem/" target="_blank" rel="noreferrer">Rock &amp; Roll Hall of Fame</a>.',
  },
};

const savedLanguage = (() => {
  try {
    return window.localStorage.getItem("rap-language");
  } catch {
    return null;
  }
})();

const setLanguage = (language) => {
  const pack = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.title = pack.pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", pack.metaDescription);
  }

  if (siteNav) {
    siteNav.setAttribute("aria-label", pack.navAriaLabel);
  }

  Object.entries(textTargets).forEach(([key, selector]) => {
    const element = document.querySelector(selector);

    if (element && pack[key]) {
      element.innerHTML = pack[key];
    }
  });

  if (langToggle && langToggleBadge && langToggleLabel) {
    const isItalian = language === "it";
    langToggle.classList.toggle("is-italian", isItalian);
    langToggle.setAttribute("aria-pressed", String(isItalian));
    langToggle.setAttribute(
      "aria-label",
      isItalian ? "Switch page back to English" : "Translate page to Italian"
    );
    langToggleBadge.textContent = isItalian ? "IT" : "EN";
    langToggleLabel.textContent = isItalian
      ? "Torna all'inglese"
      : "Traduci in italiano";
  }

  try {
    window.localStorage.setItem("rap-language", language);
  } catch {
    // Ignore persistence errors and keep the in-memory language state.
  }
};
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  progressBar.style.transform = `scaleX(${progress})`;
};

const updateActiveLink = () => {
  const marker = window.scrollY + window.innerHeight * 0.28;

  sections.forEach((section) => {
    const isCurrent =
      marker >= section.offsetTop &&
      marker < section.offsetTop + section.offsetHeight;

    const id = section.getAttribute("id");
    const link = document.querySelector(`.site-nav a[href="#${id}"]`);

    if (link) {
      link.classList.toggle("is-active", isCurrent);
    }
  });
};

const updateGlow = (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--glow-x", `${x}%`);
  document.documentElement.style.setProperty("--glow-y", `${y}%`);
};

window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateActiveLink();
});

window.addEventListener("resize", updateActiveLink);
window.addEventListener("pointermove", updateGlow);
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "it" ? "en" : "it";
    setLanguage(nextLanguage);
  });
}

setLanguage(savedLanguage === "it" ? "it" : "en");
updateScrollProgress();
updateActiveLink();
