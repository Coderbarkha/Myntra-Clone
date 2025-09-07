import React, { useState } from "react";
import { X, Search } from "lucide-react";

function FilterBrand() {
  const brands = [
    { name: "98 Degree North", count: 237 },
    { name: "7 alt by Pantaloons", count: 234 },
    { name: "7 Cavalry", count: 190 },
    { name: "3Colors", count: 131 },
    { name: "7TH LEGION", count: 85 },
    { name: "4 TRIPLE O FIVE O BY MUFTI", count: 59 },
    { name: "7OUNCE", count: 42 },
    { name: "3BROS", count: 34 },
    { name: "9FIGR", count: 22 },
    { name: "513", count: 21 },
    { name: "24 Street", count: 10 },
    { name: "18th HighStreet", count: 5 },
    { name: "15BUTTONS", count: 5 },
    { name: "8SECONDS", count: 2 },
    { name: "Allen Solly", count: 1367 },
    { name: "ADRO", count: 1281 },
    { name: "Adidas", count: 957 },
    { name: "Arrow Sport", count: 796 },
    { name: "Aeropostale", count: 674 },
    { name: "ASCIS", count: 622 },
    { name: "Ajile by Pantaloons", count: 599 },
    { name: "AMERICAN EAGLE FITTERS", count: 595 },
    { name: "AUSK", count: 569 },
    { name: "Alcis", count: 543 },
    { name: "Arrow", count: 542 },
    { name: "appulse", count: 538 },
    { name: "Andamen", count: 381 },
    { name: "AUXAMIS", count: 214 },
    { name: "AD by Arvind", count: 206 },
    { name: "AMSWAN", count: 178 },
    { name: "AUSTIVO", count: 171 },
    { name: "Adidas Originals", count: 165 },
    { name: "ARMISTO", count: 158 },
    { name: "Antony Morato", count: 155 },
    { name: "Adobe", count: 153 },
    { name: "AUTNA", count: 143 },
    { name: "Anikmart", count: 142 },
    { name: "Arrow New York", count: 136 },
    { name: "ARRAY", count: 126 },
    { name: "ATHLISIS", count: 123 },
    { name: "ARISE", count: 123 },
    { name: "ARBOUR", count: 121 },
    { name: "ALARM", count: 103 },
    { name: "Alan Jones", count: 98 },
    { name: "AXMANN", count: 96 },
    { name: "Austin Wood", count: 95 },
    { name: "ATICX", count: 94 },
    { name: "Ascend 47", count: 80 },
    { name: "Allen Solly Sport", count: 72 },
    { name: "ARIIX", count: 67 },
    { name: "Athflex", count: 65 },
    { name: "Albion by CM", count: 63 },
    { name: "ACTOHOLIC", count: 57 },
    { name: "Allen Cooper", count: 55 },
    { name: "ASTHETIC NATION", count: 53 },
    { name: "Asthetic Bodies", count: 48 },
    { name: "ALCOTT", count: 47 },
    { name: "AEDENBURG", count: 44 },
    { name: "Antiloop", count: 42 },
    { name: "ANTHEM", count: 40 },
    { name: "Art By Ritik", count: 36 },
    { name: "AgAtelier", count: 32 },
    { name: "ATLANS", count: 30 },
    { name: "AGIL ARMERO", count: 28 },
    { name: "Anax Aesthetics", count: 27 },
    { name: "ARDEUR", count: 26 },
    { name: "AAYAN BABY", count: 26 },
    { name: "ABLING", count: 24 },
    { name: "ARTICALE", count: 23 },
    { name: "AYCS", count: 22 },
    { name: "ALMOST SANE", count: 22 },
    { name: "Allen Solly Tribe", count: 21 },
    { name: "AVEJO", count: 19 },
    { name: "Adrunaline Fit", count: 18 },
    { name: "ADORATE", count: 18 },
    { name: "ATTIITUDE", count: 17 },
    { name: "ALAKH HUB", count: 17 },
    { name: "abnorml.", count: 17 },
    { name: "Aux India Company", count: 16 },
    { name: "Aristitch", count: 16 },
    { name: "ATTITUDE START OF FASHION", count: 15 },
    { name: "AUSTIEX", count: 14 },
    { name: "ANML", count: 14 },
    { name: "ARMENOR", count: 13 },
    { name: "ARISTOBRAT", count: 12 },
    { name: "Anta", count: 12 },
    { name: "ADWYN PETER", count: 12 },
    { name: "A & Y", count: 12 },
    { name: "AVVA", count: 11 },
    { name: "Aerio", count: 11 },
    { name: "all yours", count: 10 },
    { name: "AGUANTE", count: 10 },
    { name: "anzeer", count: 9 },
    { name: "AMIGOS", count: 9 },
    { name: "Arya Giri", count: 8 },
    { name: "ARTLESS", count: 8 },
    { name: "AMMARZO", count: 8 },
    { name: "ALTINYILDIZ CLASSICS AC Co.", count: 8 },
    { name: "abof", count: 8 },
    { name: "A AND K", count: 7 },
    { name: "AMUL COMFY", count: 6 },
    { name: "ATLANCE", count: 5 },
    { name: "Adyavastram", count: 4 },
    { name: "Apraa & Parma", count: 3 },
    { name: "Afalusz", count: 3 },
    { name: "AAITHAN", count: 3 },
    { name: "Aventura Outfitters", count: 2 },
    { name: "American Crew", count: 2 },
    { name: "ALLEYRICH", count: 2 },
    { name: "aLL", count: 2 },
    { name: "Arrow Blue Jean Co.", count: 1 },
    { name: "ALAWO", count: 1 },
    { name: "Being Human", count: 4030 },
    { name: "Blackberrys", count: 3083 },
    { name: "Basics", count: 2862 },
    { name: "Banana Club", count: 1670 },
    { name: "Bewakoof", count: 1612 },
    { name: "BYFORD by Pantaloons", count: 1529 },
    { name: "BRAWNY BATTLER", count: 1345 },
    { name: "BEYOU FASHION", count: 1187 },
    { name: "Blisstone", count: 1129 },
    { name: "BAESD", count: 1074 },
    { name: "Bushirt", count: 1025 },
    { name: "boohooMAN", count: 971 },
    { name: "BULLMER", count: 906 },
    { name: "Beverly Hills Polo Club", count: 869 },
    { name: "Be Crazy", count: 814 },
    { name: "BENNY BROOKS", count: 774 },
    { name: "Bene Kleed", count: 759 },
    { name: "Blu MNKY", count: 695 },
    { name: "bigbanana", count: 687 },
    { name: "Beyoung", count: 628 },
    { name: "berry blues", count: 609 },
    { name: "BE POSITIVE", count: 521 },
    { name: "British Club", count: 462 },
    { name: "Besick", count: 407 },
    { name: "BEAT LONDON by PEPE JEANS", count: 340 },
    { name: "BDSQUARE", count: 322 },
    { name: "Black Collection", count: 319 },
    { name: "Big Hello - The Plus Life", count: 316 },
    { name: "BS BLUE SQUAD", count: 313 },
    { name: "Bonkers Corner", count: 303 },
    { name: "BEN SHERMAN", count: 300 },
    { name: "BRATMA", count: 266 },
    { name: "Bruun & Stengade", count: 229 },
    { name: "BROWN BROTHERS", count: 228 },
    { name: "bollti", count: 218 },
    { name: "BLACK BUCK", count: 193 },
    { name: "Bewakoof Plus", count: 193 },
    { name: "Bewakoof Heavy Duty", count: 184 },
    { name: "BODYACTIVE", count: 176 },
    { name: "Bloopers Store", count: 172 },
    { name: "Big Hello - The Plus Life", count: 74 },
    { name: "BOLLYWOO.OOO", count: 67 },
    { name: "Breakbounce", count: 66 },
    { name: "BLUENCE", count: 62 },
    { name: "BOMBAE TEES", count: 55 },
    { name: "BubbleTwyst", count: 51 },
    { name: "BOLDFIT", count: 46 },
    { name: "Bucciato Private Limited", count: 42 },
    { name: "bigbanana Originals", count: 42 },
    { name: "Belliskey", count: 40 },
    { name: "Burnt Umber", count: 38 },
    { name: "BUNCH OF BAD", count: 38 },
    { name: "BLUWEEA", count: 35 },
    { name: "Burton", count: 33 },
    { name: "Blue Buddha", count: 32 },
    { name: "BlendCulture", count: 32 },
    { name: "BHF", count: 30 },
    { name: "Body Mechanics", count: 28 },
    { name: "Bruun & Stengade", count: 27 },
    { name: "Bombay High", count: 27 },
    { name: "Backbenchers", count: 27 },
    { name: "BRACLO", count: 26 },
    { name: "BEVDAAS", count: 24 },
    { name: "Bonjour", count: 21 },
    { name: "BeriBlu", count: 21 },
    { name: "BURGER BAE", count: 18 },
    { name: "Baller Athletik", count: 17 },
    { name: "Big Bunny", count: 15 },
    { name: "Braveo", count: 14 },
    { name: "BESIMPLE", count: 14 },
    { name: "Ben Martin", count: 14 },
    { name: "BAWSE", count: 14 },
    { name: "bearbrother", count: 13 },
    { name: "borse lele", count: 11 },
    { name: "Balaji Trading Com", count: 11 },
    { name: "BLACK BLINK", count: 10 },
    { name: "Be Savage", count: 10 },
    { name: "Bumchums", count: 9 },
    { name: "BLUE TYGA", count: 9 },
    { name: "Bareblow", count: 9 },
    { name: "Bamboology", count: 8 },
    { name: "BRUTE FORCE", count: 7 },
    { name: "BRAVE SOUL", count: 7 },
    { name: "Benvenuto Grazie", count: 7 },
    { name: "BOMBAY TROOPER", count: 6 },
    { name: "BWG", count: 5 },
    { name: "bummer", count: 5 },
    { name: "BROWN BROTHERS", count: 5 },
    { name: "Blacksmith", count: 5 },
    { name: "BIS CREATIONS", count: 5 },
    { name: "BE AWARA", count: 5 },
    { name: "British Club", count: 4 },
    { name: "Blue Saint", count: 4 },
    { name: "BANGS AND CRACKLES", count: 4 },
    { name: "Bofrike", count: 3 },
    { name: "BUNKODE", count: 2 },
    { name: "BRONOMICS", count: 2 },
    { name: "BOYCOTT", count: 2 },
    { name: "Blu MNKY", count: 2 },
    { name: "BEAST CRICKET", count: 2 },
    { name: "BUMCHIQ", count: 1 },
    { name: "BRIEF CHICKADE", count: 1 },
    { name: "Bell Paper", count: 1 },
    { name: "Banana Labs", count: 1 },
    { name: "COLOR CAPITAL", count: 3242 },
    { name: "Calvin Klein Jeans", count: 1934 },
    { name: "Campus Sutra", count: 1142 },
    { name: "Celio", count: 930 },
    { name: "CASUALBUD", count: 925 },
    { name: "Cantabil", count: 778 },
    { name: "CHKOKKO", count: 737 },
    { name: "Classic Polo", count: 595 },
    { name: "Crimsoune Club", count: 477 },
    { name: "ColorPlus", count: 472 },
    { name: "CHOZI", count: 391 },
    { name: "Club York", count: 369 },
    { name: "CULT", count: 362 },
    { name: "Crazymonk", count: 317 },
    { name: "Crocodile", count: 315 },
    { name: "Camey", count: 258 },
    { name: "CLAFOUTIS", count: 217 },
    { name: "Columbia", count: 187 },
    { name: "Calvin Klein", count: 178 },
    { name: "CELSIUS", count: 175 },
    { name: "CAMLA", count: 169 },
    { name: "Converse", count: 130 },
    { name: "COBB", count: 127 },
    { name: "CRYPTIC", count: 107 },
    { name: "catch", count: 104 },
    { name: "Colors and Blends", count: 99 },
    { name: "CODE by Lifestyle", count: 99 },
    { name: "Cool Plus", count: 98 },
    { name: "CAPTCHA", count: 80 },
    { name: "CHKOKKO Plus", count: 71 },
    { name: "Christy World", count: 67 },
    { name: "CODE OF HONOUR", count: 61 },
    { name: "Clothe Funn", count: 60 },
    { name: "CANOE", count: 58 },
    { name: "Cloak & Decker by Monte Carlo", count: 57 },
    { name: "COMICSENSE", count: 49 },
    { name: "CLOFLIX", count: 46 },
    { name: "Cloak & Decker", count: 45 },
    { name: "CLAPTON", count: 45 },
    { name: "COLOR HUNT", count: 43 },
    { name: "Crazybee Tshirt", count: 39 },
    { name: "Chombooka", count: 38 },
    { name: "CS LIFE", count: 33 },
    { name: "Chennis", count: 30 },
    { name: "Coitonic", count: 29 },
    { name: "CHRISTONE", count: 26 },
    { name: "COTTON AVENUE", count: 25 },
    { name: "culish", count: 23 },
    { name: "Cloroot", count: 23 },
    { name: "Colorchakra", count: 22 },
    { name: "CAVA", count: 22 },
    { name: "Canjuice", count: 20 },
    { name: "CAVALLO by Linen Club", count: 18 },
    { name: "Canary London", count: 17 },
    { name: "CL SPORT", count: 16 },
    { name: "Chromozome", count: 15 },
    { name: "CABIN COMFY", count: 15 },
    { name: "Calm Down", count: 14 },
    { name: "Crazy Mosquitoes", count: 13 },
    { name: "COMBRAIDED", count: 13 },
    { namE: "Code 61", count: 13 },
    { name: "Cayman", count: 13 },
    { name: "callaway", count: 11 },
    { name: "Creatures of Habit", count: 10 },
    { name: "Colt", count: 10 },
    { name: "CTRL+P", count: 9 },
    { name: "COVE AND LANE", count: 7 },
    { name: "CHIMPAAANZEE", count: 7 },
    { name: "CHANDRASTYLE", count: 6 },
    { name: "Cation", count: 5 },
    { name: "Capdazz", count: 5 },
    { name: "Calvin Klein Underwear", count: 5 },
    { name: "Cotstyle", count: 4 },
    { name: "Cherokee", count: 3 },
    { name: "Casual Tees", count: 3 },
    { name: "Creed", count: 2 },
    { name: "COOFT", count: 2 },
    { name: "Conditions Apply", count: 2 },
    { name: "Calizar", count: 2 },
    { name: "Cute Pals", count: 1 },
    { name: "COTTON ON", count: 1 },
    { name: "CLUBWIN", count: 1 },
    { name: "Clawear", count: 1 },
    { name: "ChaseOverIN", count: 1 },
    { name: "CHARACTR CO IN", count: 1 },
    { name: "Cannabie", count: 1 },
    { name: "Callino London", count: 1 },
    { name: "C CALOYA", count: 1 },
    { name: "Cloroot", count: 23 },
    { name: "Colorchakra", count: 22 },
    { name: "CAVA", count: 22 },
    { name: "Canjuice", count: 20 },
    { name: "CAVALLO by Linen Club", count: 18 },
    { name: "Canary London", count: 17 },
    { name: "CL SPORT", count: 16 },
    { name: "Chromozome", count: 15 },
    { name: "CABIN COMFY", count: 15 },
    { name: "Calm Down", count: 14 },
    { name: "Crazy Mosquitoes", count: 13 },
    { name: "COMBRAIDED", count: 13 },
    { name: "Code 61", count: 13 },
    { name: "Cayman", count: 13 },
    { name: "callaway", count: 11 },
    { name: "Creatures of Habit", count: 10 },
    { name: "Colt", count: 10 },
    { name: "CTRL+P", count: 9 },
    { name: "CHIMPAAANZEE", count: 7 },
    { name: "CHANDRASTYLE", count: 6 },
    { name: "Cation", count: 5 },
    { name: "Capdazz", count: 5 },
    { name: "Calvin Klein Underwear", count: 5 },
    { name: "Cotstyle", count: 4 },
    { name: "Cherokee", count: 3 },
    { name: "Casual Tees", count: 3 },
    { name: "Creed", count: 2 },
    { name: "COOFT", count: 2 },
    { name: "Conditions Apply", count: 2 },
    { name: "Calizar", count: 2 },
    { name: "C9 AIRWEAR", count: 2 },
    { name: "Cute Pals", count: 1 },
    { name: "COTTON ON", count: 1 },
    { name: "CLUBWIN", count: 1 },
    { name: "Clawear", count: 1 },
    { name: "ChaseOverIN", count: 1 },
    { name: "CHARACTR CO IN", count: 1 },
    { name: "Cannabie", count: 1 },
    { name: "Callino London", count: 1 },
    { name: "C CALOYA", count: 1 },
    { name: "Duke", count: 1119 },
    { name: "Dollar", count: 588 },
    { name: "DILLINGER", count: 582 },
    { name: "DeFacto", count: 403 },
    { name: "Difference of Opinion", count: 372 },
    { name: "Decathlon", count: 348 },
    { name: "dostitch", count: 347 },
    { name: "Dennis Lingo", count: 288 },
    { name: "DOOR74", count: 195 },
    { name: "Dzant", count: 186 },
    { name: "Ducati", count: 167 },
    { name: "DAMENSCH", count: 151 },
    { name: "DIDA", count: 118 },
    { name: "DOMIN8", count: 92 },
    { name: "Disney by Wear Your Mind", count: 84 },
    { name: "DIXCY SCOTT", count: 73 },
    { name: "DCYPHR", count: 57 },
    { name: "Divra Clothing", count: 44 },
    { name: "Deefab", count: 43 },
    { name: "deb", count: 42 },
    { name: "DYCA", count: 40 },
    { name: "DENNISON", count: 39 },
    { name: "Dockers", count: 38 },
    { name: "Dravix", count: 36 },
    { name: "Dream of Glory Inc", count: 35 },
    { name: "Dogman", count: 35 },
    { name: "Dogi Verg", count: 35 },
    { name: "DAFABFIT", count: 33 },
    { name: "DRAGON HILL", count: 29 },
    { name: "Dadu Dayal", count: 28 },
    { name: "DRYP EVOLUT", count: 23 },
    { name: "Desi OG", count: 23 },
    { name: "Double Two", count: 22 },
    { name: "DIAZ", count: 22 },
    { name: "Darestyles", count: 20 },
    { name: "Diving Deep", count: 14 },
    { name: "Desi Minimals", count: 14 },
    { name: "DDOUDDOU", count: 14 },
    { name: "DEEPMAYRA COLLECTION", count: 12 },
    { name: "Dollar Bigboss", count: 11 },
    { name: "Dash and Dot", count: 9 },
    { name: "DREAM ISLAND", count: 8 },
    { name: "Dexter by Kook N Keech", count: 8 },
    { name: "Doodlage", count: 6 },
    { name: "DC by Wear Your Mind", count: 5 },
    { name: "Danvoir Paris", count: 5 },
    { name: "DOKCHAN", count: 3 },
    { name: "DC by Kook N Keech", count: 3 },
    { name: "DS WORLD", count: 2 },
    { name: "djbravo 47", count: 2 },
    { name: "DEEZENO", count: 2 },
    { name: "DANZA-SON", count: 2 },
    { name: "DRVP", count: 1 },
    { name: "DIXCY SCOTT MAXIMUS", count: 1 },
    { name: "DEVEINS", count: 1 },
    { name: "EPPE", count: 289 },
    { name: "Elibolz", count: 235 },
    { name: "ether", count: 225 },
    { name: "Edyssa", count: 189 },
    { name: "Enciger", count: 158 },
    { name: "Eszett", count: 141 },
    { name: "EAZY", count: 124 },
    { name: "ETC", count: 100 },
    { name: "Espanshe", count: 84 },
    { name: "encore by INVICTUS", count: 83 },
    { name: "Estilocus", count: 73 },
    { name: "EKSDEE", count: 67 },
    { name: "ECOLINE Clothing", count: 67 },
    { name: "EcoLove", count: 66 },
    { name: "EXILION", count: 56 },
    { name: "Eyebogler", count: 42 },
    { namE: "ENDEAVOUR WEAR", count: 17 },
    { name: "Enchanted Drapes", count: 16 },
    { name: "Everestwolf", count: 13 },
    { name: "EQL", count: 12 },
    { name: "Eleven Brothers", count: 12 },
    { name: "effy", count: 10 },
    { name: "Echolope", count: 10 },
    { name: "Entertainment Store", count: 9 },
    { name: "ELPIDA", count: 9 },
    { name: "ETRO", count: 8 },
    { name: "Eyolf", count: 6 },
    { name: "EVERDION", count: 6 },
    { name: "Eton", count: 6 },
    { name: "ekchala", count: 5 },
    { name: "EROBOLD", count: 4 },
    { name: "ELBATROSS", count: 4 },
    { name: "Extra Butter", count: 1 },
    { name: "Emerals", count: 1 },
    { name: "Emartos", count: 1 },
    { name: "ELABORADO", count: 1 },
    { name: "Ecko Unltd", count: 1 },
    { name: "Fossil", count: 3210 },
    { name: "Gap", count: 2765 },
    { name: "HRX by Hrithik Roshan", count: 98765 },
    { name: "H&M", count: 76543 },
    { name: "Jack & Jones", count: 43210 },
    { name: "Levi's", count: 65432 },
    { name: "Nike", count: 32109 },
    { name: "Puma", count: 87654 },
    { name: "Roadster", count: 123456 },
    { name: "Tommy Hilfiger", count: 8765 },
    { name: "U.S. Polo Assn.", count: 54321 },
    { name: "Van Heusen", count: 7650 },
    { name: "WROGN", count: 10987 },
    { name: "Zara", count: 8888 },
  ];

  const alphabets = [
    "#",
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
  ];

  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group brands by first letter
  const groupedBrands = {};
  filteredBrands.forEach((brand) => {
    const firstChar = /^[0-9]/.test(brand.name[0])
      ? "#"
      : brand.name[0].toUpperCase();
    if (!groupedBrands[firstChar]) groupedBrands[firstChar] = [];
    groupedBrands[firstChar].push(brand);
  });

  return (
    <div className="mb-3">
      {/* Header with Search Icon */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4 className="fw-bold fs-6 text-dark m-0">BRAND</h4>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setShowMore(true)}
        >
          <Search size={16} color="gray" />
        </div>
      </div>

      {/* Top brands */}
      <div className="d-flex flex-column">
        {brands.slice(0, 5).map((item) => (
          <div key={item.name} className="d-flex align-items-center mb-2">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id={`brand-${item.name}`}
            />
            <label htmlFor={`brand-${item.name}`}>
              {item.name} ({item.count})
            </label>
          </div>
        ))}

        {/* +More */}
        <span
          className="mt-1"
          style={{
            color: "rgb(252, 86, 113)",
            cursor: "pointer",
            fontWeight: "400",
          }}
          onClick={() => setShowMore(true)}
        >
          +1375 more
        </span>
      </div>

      {/* Side Panel */}
      {showMore && (
        <div
          className="position-fixed top-0 start-0 bg-white shadow-lg"
          style={{
            zIndex: 1050,
            width: "80%",
            height: "90%",
            overflow: "hidden",
            borderRadius: "8px",
            margin: "2% 10%",
          }}
        >
          {/* Header with Search + Close */}
          <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search Brand"
              style={{ borderColor: "blue", maxWidth: "250px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <X
              size={24}
              className="cursor-pointer"
              onClick={() => setShowMore(false)}
            />
          </div>

          {/* Alphabet bar */}
          <div className="px-3 py-2 border-bottom">
            <div className="d-flex flex-wrap">
              {alphabets.map((letter) => (
                <span
                  key={letter}
                  className="me-2 mb-1"
                  style={{
                    cursor: "pointer",
                    fontWeight: "500",
                    opacity:
                      hoveredLetter && hoveredLetter !== letter ? 0.4 : 1,
                  }}
                  onMouseEnter={() => setHoveredLetter(letter)}
                  onMouseLeave={() => setHoveredLetter(null)}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Brand Grid (flowing multi-columns) */}
          <div
            className="p-3"
            style={{
              maxHeight: "75%",
              overflowY: "auto",
              columnCount: 4,
              columnGap: "2rem",
            }}
          >
            {alphabets.map((letter) => {
              const brandsForLetter = groupedBrands[letter] || [];
              if (brandsForLetter.length === 0) return null;

              return (
                <div
                  key={letter}
                  style={{ breakInside: "avoid" }}
                  className="mb-3"
                >
                  <strong className="d-block mb-2">{letter}</strong>
                  {brandsForLetter.map((item) => {
                    const show = !hoveredLetter || hoveredLetter === letter;
                    return (
                      <div
                        key={item.name}
                        className="d-flex align-items-center mb-1"
                        style={{ opacity: show ? 1 : 0.3 }}
                      >
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                          id={`brand-panel-${item.name}`}
                        />
                        <label htmlFor={`brand-panel-${item.name}`}>
                          {item.name} ({item.count})
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBrand;
