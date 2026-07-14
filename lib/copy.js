// ÚNICA FUENTE DE CONTENIDO VISIBLE — todo el texto mostrado por la landing
// vive aquí. Los componentes NO deben tener strings hardcodeados.
export const copy = {
  metadata: {
    title: "500 zdravih kolača — Baka Mara",
    description:
      "500 recepata za mekane, prozračne i ukusne kolače, potpuno bez glutena, mliječnih proizvoda i šećera.",
    productName: "Knjiga „500 kolača bake Mare“",
  },

  hero: {
    urgencyBar: "PONUDA ISTJEČE DANAS · 90% POPUSTA samo danas",
    badge: "Nova knjiga recepata · +3.200 zadovoljnih polaznika",
    headline: {
      before: "ČIM VIDIŠ OVO, TVOJ DOŽIVLJAJ ",
      accent: "ZDRAVIH KOLAČA",
      after: " ZAUVIJEK ĆE SE PROMIJENITI.",
    },
    subheadline:
      "Čeka te 500 recepata za mekane, sočne i neodoljive kolače, potpuno bez glutena, mliječnih sastojaka i šećera. Svaki zalogaj donosi čist užitak, bez nelagode, bez imalo krivnje i bez osjećaja uskraćenosti.",
    ctaLabel: "DA, ŽELIM RECEPTE",
    starsAriaLabel: "Ocjena 5 od 5 zvjezdica",
    starsRating: "5.0",
    socialProof: "+3.200 zadovoljnih kupaca",
    trustChips: [
      { icon: "🌾", text: "Bez glutena" },
      { icon: "🥛", text: "Bez mliječnih proizvoda" },
      { icon: "🍬", text: "Bez šećera" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Knjiga 500 zdravih kolača bake Mare",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Gotovo za", bottom: "20 min" },
      discount: { icon: "🔥", top: "Danas", bottom: "90% POPUSTA" },
    },
  },

  preview: {
    kicker: "Kratki pregled",
    headline: "POGLEDAJ KAKVE ĆEŠ POSLASTICE NAUČITI PRIPREMATI",
    items: [
      { src: "/preview/3-6.webp", alt: "Zdravi kolač 1" },
      { src: "/preview/2-7.webp", alt: "Zdravi kolač 2" },
      { src: "/preview/4-3.webp", alt: "Zdravi kolač 3" },
      { src: "/preview/3-5-1.webp", alt: "Zdravi kolač 4" },
      { src: "/preview/1-7.webp", alt: "Zdravi kolač 5" },
      { src: "/preview/4-2.webp", alt: "Zdravi kolač 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Zdravi kolač 7" },
      { src: "/preview/1-5-1.webp", alt: "Zdravi kolač 8" },
      { src: "/preview/3-3.webp", alt: "Zdravi kolač 9" },
      { src: "/preview/2-4.webp", alt: "Zdravi kolač 10" },
      { src: "/preview/1-4.webp", alt: "Zdravi kolač 11" },
      { src: "/preview/1-6-1.webp", alt: "Zdravi kolač 12" },
      { src: "/preview/2-3.webp", alt: "Zdravi kolač 13" },
      { src: "/preview/chocolate.webp", alt: "Zdravi čokoladni kolač" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Zdravi kolač 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Zdravi kolač 16" },
      { src: "/preview/12-1-2.webp", alt: "Zdravi kolač 17" },
      { src: "/preview/2-6.webp", alt: "Zdravi kolač 18" },
      { src: "/preview/1-8.webp", alt: "Zdravi kolač 19" },
    ],
  },

  benefits: {
    kicker: "Zašto ćeš je obožavati",
    headline: "Zdravi kolači bez kompromisa u okusu",
    items: [
      { icon: "🎂", title: "500 okusa da ti nikada ne dosadi" },
      { icon: "✨", title: "Savršena tekstura čak i bez glutena" },
      { icon: "🌾", title: "Ne trebaju ti posebna brašna" },
      { icon: "⚡", title: "Brzi kolači gotovi za 20 minuta" },
      { icon: "💚", title: "Bez mlijeka i bez šećera" },
      { icon: "📖", title: "Jednostavne upute korak po korak" },
    ],
  },

  samples: {
    kicker: "Isprobaj ih prvo",
    headline: "NEVJEROJATNO UKUSNI KOLAČI (ZDRAVA VERZIJA):",
    badge: "Bez šećera, glutena i laktoze",
    items: [
      {
        name: "ČOKOLADNI KOLAČ",
        variant: "(FIT I PROZRAČAN)",
        kcal: "88",
        time: "20 minuta",
        src: "/samples/pastel-chocolate.gif",
        alt: "Fit čokoladni kolač",
      },
      {
        name: "KOLAČ OD MRKVE",
        variant: "(S FIT ČOKOLADNOM GLAZUROM)",
        kcal: "120",
        time: "20 minuta",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Kolač od mrkve s čokoladom",
      },
      {
        name: "KOLAČ OD BANANE",
        variant: "(FIT)",
        kcal: "90",
        time: "20 minuta",
        src: "/samples/pastel-platano.gif",
        alt: "Fit kolač od banane",
      },
      {
        name: "TRES LECHES KOLAČ",
        variant: "(BEZ LAKTOZE)",
        kcal: "100",
        time: "20 minuta",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Tres leches kolač bez laktoze",
      },
      {
        name: "ČOKOLADNA TORTA",
        variant: "(OD 5 SASTOJAKA)",
        kcal: "108",
        time: "20 minuta",
        src: "/samples/chocotorta.gif",
        alt: "Zdrava čokoladna torta",
      },
      {
        name: "KOLAČ OD LIMUNA",
        variant: "(PRIPREMLJEN U BLENDERU)",
        kcal: "100",
        time: "20 minuta",
        src: "/samples/pastel-limon.gif",
        alt: "Kolač od limuna",
      },
      {
        name: "RED VELVET TORTA",
        variant: "(FIT)",
        kcal: "105",
        time: "19 minuta",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Fit Red Velvet torta",
      },
    ],
    caloriesLabel: "Kalorije",
    timeLabel: "Vrijeme",
  },

  moreRecipesCta: {
    pretitle: "I još preko",
    big: "493",
    post: "RECEPATA ZA KOLAČE...",
    ctaLabel: "PREUZMI SVOJ PRIMJERAK SADA",
  },

  testimonials: {
    kicker: "Stvarni dokazi",
    headline: "POGLEDAJ ŠTO KAŽU ONI KOJI SU JE VEĆ KUPILI",
    subheadline: "Što dijele naši kupci",
    studentsBadge: "+ 3.200 zadovoljnih kupaca",
    items: [
      {
        text: "Jučer sam napravila čokoladni kolač i nije ostao ni komadić 😍 Obitelj me već traži da ga ponovno napravim ovog vikenda. Bez šećera i bez glutena... naprosto nevjerojatno!!",
        time: "10:23",
      },
      {
        text: "Nisam vjerovala da može biti tako ukusno bez mlijeka i šećera. Tres leches bez laktoze me ostavio bez teksta 🤯 Već 3 dana pečem bez prestanka.",
        time: "11:47",
      },
      {
        text: "Imam celijakiju već 10 godina i nikad nisam mogla jesti pravu tortu. S ovom knjigom napokon mogu uživati kao i svi ostali 😭❤️",
        time: "14:02",
      },
      {
        text: "Kolač od mrkve s čokoladnom glazurom ispao je ISTI kao iz slastičarnice, ali bez brašna i šećera. Odnijela sam ga na posao i nitko nije vjerovao da je zdrav hahaha.",
        time: "09:15",
      },
      {
        text: "Imam knjigu već mjesec dana i isprobala sam preko 15 recepata. Fit Red Velvet ispadne tako mekan i s predivnom bojom 🎂 100% preporučujem svima!!",
        time: "16:38",
      },
      {
        text: "U početku sam bila skeptična... ali prvi kolač me odmah osvojio. Fit kolač od banane za 20 minuta je pravo čudo ⭐⭐⭐⭐⭐ Hvala vam što postojite.",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Knjiga recepata na mobitelu, računalu i tabletu",
    },
  },

  categories: {
    kicker: "Da ti nikad ne dosadi",
    headline: "RECEPTI PODIJELJENI PO KATEGORIJAMA",
    groups: [
      {
        title: "100 punjenih kolača",
        items: [
          { src: "/preview/1-4.webp", alt: "Punjeni kolač 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Punjeni kolač 2" },
          { src: "/preview/12-1-2.webp", alt: "Punjeni kolač 3" },
          { src: "/preview/2-3.webp", alt: "Punjeni kolač 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Punjeni kolač 5" },
        ],
      },
      {
        title: "100 voćnih kolača",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Voćni kolač 1" },
          { src: "/preview/2-4.webp", alt: "Voćni kolač 2" },
          { src: "/preview/3-3.webp", alt: "Voćni kolač 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Voćni kolač 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Voćni kolač 5" },
        ],
      },
      {
        title: "100 klasičnih kolača",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Klasični kolač 1" },
          { src: "/preview/2-5-1.webp", alt: "Klasični kolač 2" },
          { src: "/preview/4-2.webp", alt: "Klasični kolač 3" },
        ],
      },
      {
        title: "100 modernih deserata",
        items: [
          { src: "/preview/1-7.webp", alt: "Moderni desert 1" },
          { src: "/preview/2-6.webp", alt: "Moderni desert 2" },
          { src: "/preview/3-5-1.webp", alt: "Moderni desert 3" },
          { src: "/preview/4-3.webp", alt: "Moderni desert 4" },
        ],
      },
      {
        title: "100 hladnih deserata",
        items: [
          { src: "/preview/1-8.webp", alt: "Hladni desert 1" },
          { src: "/preview/2-7.webp", alt: "Hladni desert 2" },
          { src: "/preview/3-6.webp", alt: "Hladni desert 3" },
          { src: "/preview/4-4.webp", alt: "Hladni desert 4" },
        ],
      },
    ],
    ctaLabel: "ŽELIM RECEPTE",
  },

  story: {
    kicker: "Priča iza knjige",
    headline: "KAKO JE NASTALA OVA KNJIGA RECEPATA?",
    paragraphs: [
      "Baka Mara je uvijek ispunjavala našu kuću mirisom kolača koji su okupljali obitelj. Ali kada je moja kći Iva saznala da ne smije jesti gluten, sve se promijenilo.",
      "Kao nutricionistica, odlučila sam zajedno s majkom preoblikovati te recepte u sigurne varijante: bez šećera, bez glutena i bez laktoze. Nakon puno pokušaja, postigle smo rezultate koji su iznenadili čak i samu baku Maru.",
      "Tako je nastala ova knjiga: obiteljsko nasljeđe puno okusa i ljubavi, koje sada može postati dio i tvoje priče.",
    ],
    image: {
      src: "/story.webp",
      alt: "Baka Mara i njezina unuka u kuhinji",
    },
  },

  bonuses: {
    kicker: "Uključeni pokloni",
    headline: "DOBIVAŠ +5 BESPLATNIH BONUSA",
    items: [
      {
        label: "BONUS KNJIGA 1",
        name: "KEKSI I MUFFINI",
        desc: "20 neodoljivih recepata za hrskave kekse i mekane muffine, ukusne i zdrave.",
        price: "19,90 €",
        freeLabel: "DANAS BESPLATNO",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonus Keksi i Muffini" },
      },
      {
        label: "BONUS KNJIGA 2",
        name: "PROTEINSKI RECEPTI ZA AIR FRYER",
        desc: "20 recepata za brza, zdrava i proteinima bogata jela, pripremljena u fritezi na vrući zrak.",
        price: "19,90 €",
        freeLabel: "DANAS BESPLATNO",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonus Air Fryer" },
      },
      {
        label: "BONUS KNJIGA 3",
        name: "RECEPTI ZA ZDRAVE KRAFNE",
        desc: "Hrskavi zalogaji bez grižnje savjesti, zdravi i prepuni okusa u svakom zalogaju.",
        price: "19,90 €",
        freeLabel: "DANAS BESPLATNO",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonus Zdrave Krafne" },
      },
      {
        label: "BONUS KNJIGA 4",
        name: "RECEPTI ZA UKUSNE SALATE",
        desc: "Svježe, jednostavne i zdrave salate za svakodnevno uživanje u balansu i okusu.",
        price: "19,90 €",
        freeLabel: "DANAS BESPLATNO",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonus Salate" },
      },
      {
        label: "BONUS KNJIGA 5",
        name: "67 DETOX SOKOVA",
        desc: "Obnovi svoju energiju sa 67 recepata za prirodne, osvježavajuće i hranjive detox sokove.",
        price: "19,90 €",
        freeLabel: "DANAS BESPLATNO",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonus 67 Detox Sokova" },
      },
    ],
    secretBonus: {
      label: "+3 TAJNA BONUSA",
      name: "Ekskluzivna iznenađenja za one koji danas preuzmu knjigu recepata",
      price: "59,90 €",
      freeLabel: "DANAS BESPLATNO",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Kutija s tajnim bonusima" },
    },
    ctaLabel: "ŽELIM RECEPTE",
  },

  audience: {
    kicker: "Je li ovo za tebe?",
    headline: "ZA OSOBE KOJE TRAŽE:",
    items: [
      "Zdravije recepte",
      "Promjenu prehrambenih navika",
      "Imaju intoleranciju na laktozu",
      "Pate od celijakije",
      "Imaju dijabetes",
    ],
  },

  finalCta: {
    flagline: "Prvih 100 kupaca dobiva 20 besplatnih video lekcija",
    headline: "KNJIGA S 500 KOLAČA BAKE MARE ®",
    subheadline: "Sve što ti treba za pečenje kolača bez grižnje savjesti",
    includesTitle: "+5 BESPLATNIH KNJIGA:",
    includes: [
      "+ UKUSNI RECEPTI ZA SALATE I PRELJEVE",
      "+ RECEPTI ZA ZDRAVE KRAFNE",
      "+ RECEPTI ZA KEKSE I MUFFINE",
      "+ PROTEINSKI RECEPTI ZA AIR FRYER",
      "+ 67 RECEPATA ZA DETOX SOKOVE",
    ],
    secretTitle: "+3 TAJNA BONUSA:",
    discountLabel: "90% POPUSTA",
    regularPriceLabel: "STARA CIJENA:",
    regularPrice: "59,90 €",
    regularPriceSuffix: "...",
    offerPriceLabel: "Samo danas",
    offerCurrency: "",
    offerPrice: "8.90 €",
    button: "DA, ŽELIM KNJIGU",
    urgencyNote: "**PONUDA ISTJEČE DANAS**",
    paymentLabel: "NAČINI PLAĆANJA",
    paymentImage: { src: "/payment-methods.webp", alt: "Načini plaćanja" },
    secureLabel: "100% SIGURNA STRANICA",
    secureImage: { src: "/secure-site.webp", alt: "100% sigurna stranica" },
    image: { src: "/final-mockup.webp", alt: "Knjiga recepata na svim platformama" },
    bonusesBadge: "+8 besplatnih bonusa",
    discountStickerLabel: "Popust",
    discountStickerValue: "90% POPUSTA",
  },

  delivery: {
    kicker: "Dostava",
    headline: "KAKO ĆU DOBITI RECEPTE?",
    items: [
      { icon: "🖨️", text: "Možeš ih ispisati na papir." },
      { icon: "📱", text: "Možeš ih čitati na mobitelu." },
      { icon: "💻", text: "Možeš ih čitati na računalu." },
      { icon: "✅", text: "Možeš ih pregledavati i na tabletu." },
      { icon: "♾️", text: "Doživotni pristup: Uključuje i sve buduće nove recepte." },
      { icon: "📩", text: "Izgubiš li recept, poslat ćemo ti ga ponovno." },
      { icon: "📚", text: "Svakog mjeseca dobivaj nove knjige." },
    ],
  },

  guarantee: {
    kicker: "Bez rizika",
    headline: "ISPROBAJ BEZ RIZIKA — 14 dana bezuvjetnog jamstva.",
    body: "Imaš 14 dana da ih isprobaš. Ako te recepti ne oduševe, vraćam ti novac do zadnjeg centa. Bez komplikacija. Bez stresa.",
    alt: "Pečat za 14 dana bezuvjetnog jamstva",
    image: { src: "/guarantee-badge.webp", alt: "14 dana jamstva" },
  },

  faq: {
    kicker: "Pitanja i odgovori",
    headline: "ČPP — ono što svi pitaju",
    items: [
      {
        q: "Jesu li sastojci skupi?",
        a: "Ne! Koristimo jednostavne sastojke koje već imaš kod kuće: nema kompliciranih ni skupih proizvoda.",
      },
      {
        q: "Je li kolač bez pšenice, mlijeka, laktoze i šećera zaista ukusan?",
        a: "Da, i najbolje od svega: priprema se nevjerojatno lako! Recepti su osmišljeni tako da zadrže okus koji obožavaš, uz lagane sastojke koje je lako pronaći.",
      },
      {
        q: "Jesu li recepti jednostavni za početnike (one koji nikada nisu pekli kolače)?",
        a: "Idealni su za početnike! Sve je objašnjeno korak po korak, s običnim sastojcima i jasnim uputama. Ako znaš upaliti pećnicu, znat ćeš pripremiti i ove kolače.",
      },
      {
        q: "Čime se slade kolači?",
        a: "Možeš birati što ti najviše odgovara: voćem (banana ili datulje), medom ili zaslađivačima poput stevije i eritritola. U svakom receptu navedena je točna količina za svaku opciju.",
      },
      {
        q: "Mogu li šećer zamijeniti voćem (banana, datulje)? Kako to funkcionira?",
        a: "Da, možeš! I lakše je nego što se čini: recept ti govori koje voće koristiti, koliko ga dodati i kako napraviti savršeno sočan i sladak desert.",
      },
      {
        q: "Kakva brašna koristite?",
        a: "Koristimo mješavinu brašna, poput rižinog, zobenog ili bademovog, koja možeš pronaći u svakom supermarketu, često čak i povoljnije od pšeničnog.",
      },
      {
        q: "Za koliko minuta je kolač gotov?",
        a: "Za većinu je potrebno 20 ili 30 minuta. Dok si skuhaš kavu, tvoj kolač već će mirisati cijelom kuhinjom.",
      },
    ],
  },

  footer: {
    brand: "Baka Mara",
    links: [
      { label: "Politika privatnosti", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Uvjeti korištenja", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Politika povrata", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Baka Mara – Sva prava pridržana.",
  },

  stickyCta: {
    priceLabel: "Danas",
    offerPrice: "8.90 €",
    strikePrice: "59,90 €",
    ctaLabel: "ŽELIM KNJIGU",
  },
};