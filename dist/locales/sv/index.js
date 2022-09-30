"use strict";(()=>{var a=["###","##","#"];var e=["{{address.city_prefix}}{{address.city_suffix}}"];var n=["S\xF6der","Norr","V\xE4st","\xD6ster","Aling","Ar","Av","Bo","Br","B\xE5","Ek","En","Esk","Fal","G\xE4v","G\xF6te","Ha","Helsing","Karl","Krist","Kram","Kung","K\xF6","Lyck","Ny"];var r=["stad","land","s\xE5s","\xE5s","holm","tuna","sta","berg","l\xF6v","borg","mora","hamn","fors","k\xF6ping","by","hult","torp","fred","vik"];var i=["s V\xE4g","s Gata"];var t=["Ryssland","Kanada","Kina","USA","Brasilien","Australien","Indien","Argentina","Kazakstan","Algeriet","DR Kongo","Danmark","F\xE4r\xF6arna","Gr\xF6nland","Saudiarabien","Mexiko","Indonesien","Sudan","Libyen","Iran","Mongoliet","Peru","Tchad","Niger","Angola","Mali","Sydafrika","Colombia","Etiopien","Bolivia","Mauretanien","Egypten","Tanzania","Nigeria","Venezuela","Namibia","Pakistan","Mo\xE7ambique","Turkiet","Chile","Zambia","Marocko","V\xE4stsahara","Burma","Afghanistan","Somalia","Centralafrikanska republiken","Sydsudan","Ukraina","Botswana","Madagaskar","Kenya","Frankrike","Franska Guyana","Jemen","Thailand","Spanien","Turkmenistan","Kamerun","Papua Nya Guinea","Sverige","Uzbekistan","Irak","Paraguay","Zimbabwe","Japan","Tyskland","Kongo","Finland","Malaysia","Vietnam","Norge","Svalbard","Jan Mayen","Elfenbenskusten","Polen","Italien","Filippinerna","Ecuador","Burkina Faso","Nya Zeeland","Gabon","Guinea","Storbritannien","Ghana","Rum\xE4nien","Laos","Uganda","Guyana","Oman","Vitryssland","Kirgizistan","Senegal","Syrien","Kambodja","Uruguay","Tunisien","Surinam","Nepal","Bangladesh","Tadzjikistan","Grekland","Nicaragua","Eritrea","Nordkorea","Malawi","Benin","Honduras","Liberia","Bulgarien","Kuba","Guatemala","Island","Sydkorea","Ungern","Portugal","Jordanien","Serbien","Azerbajdzjan","\xD6sterrike","F\xF6renade Arabemiraten","Tjeckien","Panama","Sierra Leone","Irland","Georgien","Sri Lanka","Litauen","Lettland","Togo","Kroatien","Bosnien och Hercegovina","Costa Rica","Slovakien","Dominikanska republiken","Bhutan","Estland","Danmark","F\xE4r\xF6arna","Gr\xF6nland","Nederl\xE4nderna","Schweiz","Guinea-Bissau","Taiwan","Moldavien","Belgien","Lesotho","Armenien","Albanien","Salomon\xF6arna","Ekvatorialguinea","Burundi","Haiti","Rwanda","Makedonien","Djibouti","Belize","Israel","El Salvador","Slovenien","Fiji","Kuwait","Swaziland","Timor-Leste","Montenegro","Bahamas","Vanuatu","Qatar","Gambia","Jamaica","Kosovo","Libanon","Cypern","Brunei","Trinidad och Tobago","Kap Verde","Samoa","Luxemburg","Komorerna","Mauritius","S\xE3o Tom\xE9 och Pr\xEDncipe","Kiribati","Dominica","Tonga","Mikronesiens federerade stater","Singapore","Bahrain","Saint Lucia","Andorra","Palau","Seychellerna","Antigua och Barbuda","Barbados","Saint Vincent och Grenadinerna","Grenada","Malta","Maldiverna","Saint Kitts och Nevis","Marshall\xF6arna","Liechtenstein","San Marino","Tuvalu","Nauru","Monaco","Vatikanstaten"];var o=["Sverige"];var s=["#####"];var l=["Lgh. ###","Hus ###"];var m=["Blekinge","Dalarna","Gotland","G\xE4vleborg","G\xF6teborg","Halland","J\xE4mtland","J\xF6nk\xF6ping","Kalmar","Kronoberg","Norrbotten","Skaraborg","Sk\xE5ne","Stockholm","S\xF6dermanland","Uppsala","V\xE4rmland","V\xE4sterbotten","V\xE4sternorrland","V\xE4stmanland","\xC4lvsborg","\xD6rebro","\xD6sterg\xF6tland"];var d=["{{address.street_name}}{{address.street_suffix}}","{{address.street_prefix}} {{address.street_name}}{{address.street_suffix}}","{{name.first_name}}{{address.common_street_suffix}}","{{name.last_name}}{{address.common_street_suffix}}"];var u={normal:"{{address.street}} {{address.buildingNumber}}",full:"{{address.street}} {{address.buildingNumber}} {{address.secondaryAddress}}"};var f=["Bj\xF6rk","J\xE4rnv\xE4gs","Ring","Skol","Skogs","Ny","Gran","Idrotts","Stor","Kyrk","Industri","Park","Strand","Skol","Tr\xE4dg\xE5rd","\xC4ngs","Kyrko","Villa","Ek","Kvarn","Stations","Back","Furu","Gen","Fabriks","\xC5ker","B\xE4ck","Asp"];var p=["V\xE4stra","\xD6stra","Norra","S\xF6dra","\xD6vre","Undre"];var k=["v\xE4gen","gatan","gr\xE4nden","g\xE4rdet","all\xE9n"];var w={building_number:a,city:e,city_prefix:n,city_suffix:r,common_street_suffix:i,country:t,default_country:o,postcode:s,secondary_address:l,state:m,street:d,street_address:u,street_name:f,street_prefix:p,street_suffix:k},g=w;var b=[56,62,59];var c=["{{cell_phone.common_cell_prefix}}-###-####"];var z={common_cell_prefix:b,formats:c},S=z;var x=["vit","silver","gr\xE5","svart","r\xF6d","gr\xF6n","bl\xE5","gul","lila","indigo","guld","brun","rosa","purpur","korall"];var q={human:x},A=q;var h=["B\xF6cker","Filmer","Musik","Spel","Elektronik","Datorer","Hem","Tr\xE4dg\xE5rd","Verktyg","Livsmedel","H\xE4lsa","Sk\xF6nhet","Leksaker","Kl\xE4dsel","Skor","Smycken","Sport"];var v={adjective:["Liten","Ergonomisk","Robust","Intelligent","S\xF6t","Otrolig","Fantastisk","Praktisk","Slimmad","Grym"],material:["St\xE5l","Metall","Tr\xE4","Betong","Plast","Bomull","Granit","Gummi","Latex"],product:["Stol","Bil","Dator","Handskar","Byxor","Skjorta","Bord","Skor","Hatt"]};var W={department:h,product_name:v},M=W;var L=["{{name.last_name}} {{company.suffix}}","{{name.last_name}}-{{name.last_name}}","{{name.last_name}}, {{name.last_name}} {{company.suffix}}"];var y=["Gruppen","AB","HB","Group","Investment","Kommanditbolag","Aktiebolag"];var Z={name_patterns:L,suffix:y},_=Z;var B={wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],abbr:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"]};var K={wide:["s\xF6ndag","m\xE5ndag","tisdag","onsdag","torsdag","fredag","l\xF6rdag"],abbr:["s\xF6n","m\xE5n","tis","ons","tor","fre","l\xF6r"]};var Y={month:B,weekday:K},E=Y;var J=["se","nu","info","com","org"];var Q={domain_suffix:J},G=Q;var D=["Anna","Eva","Maria","Karin","Sara","Kristina","Lena","Emma","Kerstin","Marie","Malin","Ingrid","Jenny","Hanna","Linda","Annika","Susanne","Elin","Monica","Birgitta","Sofia","Johanna","Inger","Carina","Elisabeth","Julia","Ulla","Katarina","Linn\xE9a","Emelie","Ida","Helena","Camilla","\xC5sa","Anette","Sandra","Gunilla","Anita","Maja","Marianne","Margareta","Amanda","Anneli","Therese","Ann","Josefin","Cecilia","Jessica","Helen","Lisa","Matilda","Caroline","Alice","Frida","Ulrika","Elsa","Barbro","Siv","Rebecca","Madeleine","Klara","Ebba","Sofie","Isabelle","Agneta","Gun","Wilma","Lina","Berit","Pia","Ella","Ellen","Yvonne","Louise","Astrid","Moa","Olivia","Nathalie","Mona","Agnes","Emilia","Alexandra","Alva","Britt","Erika","Viktoria","Ann-Christin","Felicia","Ann-Marie","Sonja","Britt-Marie","Pernilla","Lovisa","Charlotte","Linn","Gunnel","Nina","Mikaela","Karolina","Lisbeth"];var F=["Anna","Eva","Maria","Karin","Sara","Kristina","Lena","Emma","Kerstin","Marie","Malin","Ingrid","Jenny","Hanna","Linda","Annika","Susanne","Elin","Monica","Birgitta","Sofia","Johanna","Inger","Carina","Elisabeth","Julia","Ulla","Katarina","Linn\xE9a","Emelie","Ida","Helena","Camilla","\xC5sa","Anette","Sandra","Gunilla","Anita","Maja","Marianne","Margareta","Amanda","Anneli","Therese","Ann","Josefin","Cecilia","Jessica","Helen","Lisa","Matilda","Caroline","Alice","Frida","Ulrika","Elsa","Barbro","Siv","Rebecca","Madeleine","Klara","Ebba","Sofie","Isabelle","Agneta","Gun","Wilma","Lina","Berit","Pia","Ella","Ellen","Yvonne","Louise","Astrid","Moa","Olivia","Nathalie","Mona","Agnes","Emilia","Alexandra","Alva","Britt","Erika","Viktoria","Ann-Christin","Felicia","Ann-Marie","Sonja","Britt-Marie","Pernilla","Lovisa","Charlotte","Linn","Gunnel","Nina","Mikaela","Karolina","Lisbeth","Lars","Mikael","Anders","Johan","Erik","Per","Peter","Karl","Thomas","Jan","Daniel","Fredrik","Andreas","Hans","Stefan","Mohamed","Mats","Marcus","Mattias","Magnus","Jonas","Oskar","Alexander","Niklas","Bengt","Martin","Bo","Nils","Viktor","Patrik","Bj\xF6rn","David","Leif","Filip","Henrik","Joakim","Emil","Christer","Ulf","Sven","Simon","Christoffer","Anton","Gustav","Robert","Christian","William","Tommy","Kjell","Lucas","Rickard","H\xE5kan","Adam","G\xF6ran","Jakob","Jonathan","Rolf","Lennart","Robin","Sebastian","Elias","Tobias","John","Stig","Axel","Linus","Oliver","Kent","Hugo","Isak","Roger","Jesper","Claes","Albin","Ludvig","J\xF6rgen","Rasmus","Max","Ali","Jimmy","Kenneth","Joel","Gunnar","Dennis","Josef","Johnny","Olle","Liam","Leo","Olof","Pontus","\xC5ke","Kurt","Kevin","Samuel","Edvin","Gabriel","Torbj\xF6rn","Arvid","Felix"];var H=["Andersson","Johansson","Karlsson","Nilsson","Eriksson","Larsson","Olsson","Persson","Svensson","Gustafsson","Pettersson","Jonsson","Jansson","Hansson","Bengtsson","J\xF6nsson","Lindberg","Jakobsson","Magnusson","Olofsson","Lindstr\xF6m","Lindqvist","Lindgren","Berg","Axelsson","Bergstr\xF6m","Lundberg","Lind","Lundgren","Lundqvist","Mattsson","Berglund","Fredriksson","Sandberg","Henriksson","Forsberg","Sj\xF6berg","Ali","Wallin","Mohamed","Engstr\xF6m","Eklund","Danielsson","Lundin","H\xE5kansson","Bj\xF6rk","Bergman","Gunnarsson","Holm","Wikstr\xF6m","Samuelsson","Isaksson","Fransson","Bergqvist","Nystr\xF6m","Holmberg","Arvidsson","L\xF6fgren","S\xF6derberg","Nyberg","Blomqvist","Claesson","Nordstr\xF6m","Ahmed","M\xE5rtensson","Lundstr\xF6m","Hassan","Viklund","Bj\xF6rklund","Eliasson","P\xE5lsson","Berggren","Sandstr\xF6m","Lund","Nordin","Str\xF6m","\xC5berg","Falk","Ekstr\xF6m","Hermansson","Holmgren","Hellstr\xF6m","Dahlberg","Hedlund","Sundberg","Sj\xF6gren","Ek","Blom","Abrahamsson","Martinsson","\xD6berg","Andreasson","Str\xF6mberg","M\xE5nsson","Hansen","\xC5kesson","Dahl","Lindholm","Norberg","Holmqvist"];var N=["Lars","Mikael","Anders","Johan","Erik","Per","Peter","Karl","Thomas","Jan","Daniel","Fredrik","Andreas","Hans","Stefan","Mohamed","Mats","Marcus","Mattias","Magnus","Jonas","Oskar","Alexander","Niklas","Bengt","Martin","Bo","Nils","Viktor","Patrik","Bj\xF6rn","David","Leif","Filip","Henrik","Joakim","Emil","Christer","Ulf","Sven","Simon","Christoffer","Anton","Gustav","Robert","Christian","William","Tommy","Kjell","Lucas","Rickard","H\xE5kan","Adam","G\xF6ran","Jakob","Jonathan","Rolf","Lennart","Robin","Sebastian","Elias","Tobias","John","Stig","Axel","Linus","Oliver","Kent","Hugo","Isak","Roger","Jesper","Claes","Albin","Ludvig","J\xF6rgen","Rasmus","Max","Ali","Jimmy","Kenneth","Joel","Gunnar","Dennis","Josef","Johnny","Olle","Liam","Leo","Olof","Pontus","\xC5ke","Kurt","Kevin","Samuel","Edvin","Gabriel","Torbj\xF6rn","Arvid","Felix"];var I=["{{name.prefix}} {{name.first_name}} {{name.last_name}}","{{name.first_name}} {{name.last_name}} {{name.suffix}}","{{name.first_name}} {{name.last_name}}","{{name.first_name}} {{name.last_name}}","{{name.first_name}} {{name.last_name}} {{name.last_name}}","{{name.male_first_name}} {{name.last_name}}","{{name.female_first_name}} {{name.last_name}}"];var j=["Dr.","Prof.","PhD."];var C={descriptor:["Ansvarig","Senior","Junior","F\xF6retags","Organisatorisk","Intern","Tilltr\xE4dande","Nationell","Internationell","Regional","Global"],level:["Verkst\xE4llande","Program","Varum\xE4rke","S\xE4kerhet","Forskning","Marknadsf\xF6ring","Direktiv","Implementation","Integration","Funktionalitet","Taktik","Marknader","Division","Grupp","Optimering","Infrastruktur","Operativ","Finansiell","Kommunikation"],job:["Direkt\xF6r","Ingenj\xF6r","Handledare","Koordinator","Specialist","Administrat\xF6r","Arkitekt","Analytiker","Designer","Planerare","Tekniker","Utvecklare","Konsult","Representant","Chef","Producent","Assistent"]};var X={female_first_name:D,first_name:F,last_name:H,male_first_name:N,name:I,prefix:j,title:C},P=X;var T=["####-#####","####-######"];var $={formats:T},V=$;var R=["{{address.city}} {{team.suffix}}"];var O=["IF","FF","BK","HK","AIF","SK","FC","SK","BoIS","FK","BIS","FIF","IK"];var aa={name:R,suffix:O},U=aa;var ea={title:"Swedish",address:g,cell_phone:S,color:A,commerce:M,company:_,date:E,internet:G,name:P,phone_number:V,team:U},Ce=ea;})();
