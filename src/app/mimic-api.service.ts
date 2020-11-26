import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MimicApiService {
  items:any= {
    data:
    [
      {
        "_id": "5fbfa809f67d99734c013b81",
        "index": 0,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Carmen Reyes",
        "company": "ZILLA",
        "phone": "+1 (864) 593-2872",
        "address": "362 Brighton Court, Tivoli, Oklahoma, 6972"
      },
      {
        "_id": "5fbfa809f9fc0572400b2088",
        "index": 1,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Edith Hines",
        "company": "TELEQUIET",
        "phone": "+1 (850) 520-2809",
        "address": "603 Seigel Court, Berlin, Ohio, 1213"
      },
      {
        "_id": "5fbfa8095ef29dff15ae14aa",
        "index": 2,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Yolanda Stark",
        "company": "BOINK",
        "phone": "+1 (914) 516-3024",
        "address": "689 Chester Street, Chumuckla, Tennessee, 8717"
      },
      {
        "_id": "5fbfa809beb8b03f42aa2228",
        "index": 3,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Ilene Mcpherson",
        "company": "SPHERIX",
        "phone": "+1 (836) 508-3758",
        "address": "231 Duryea Place, Coventry, Vermont, 3788"
      },
      {
        "_id": "5fbfa809c3c1631d10f76dc1",
        "index": 4,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Araceli Vazquez",
        "company": "ASSURITY",
        "phone": "+1 (920) 473-2220",
        "address": "854 Moffat Street, Twilight, Florida, 4773"
      },
      {
        "_id": "5fbfa8090548920d80ced136",
        "index": 5,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Mccarthy Mckee",
        "company": "ENTHAZE",
        "phone": "+1 (882) 444-2250",
        "address": "122 Seagate Terrace, Westwood, West Virginia, 8012"
      },
      {
        "_id": "5fbfa809d4d122c5a9b9e27d",
        "index": 6,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Andrews Nieves",
        "company": "MIRACLIS",
        "phone": "+1 (855) 434-2642",
        "address": "117 Leonora Court, Grenelefe, Nevada, 3144"
      },
      {
        "_id": "5fbfa809242a4a16897caf44",
        "index": 7,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Allie Holmes",
        "company": "SYBIXTEX",
        "phone": "+1 (948) 473-2322",
        "address": "528 Landis Court, Marienthal, Montana, 939"
      },
      {
        "_id": "5fbfa809471f6e0f495c9a0d",
        "index": 8,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Jessica Osborne",
        "company": "COMTRACT",
        "phone": "+1 (983) 412-3033",
        "address": "420 Nixon Court, Kempton, Idaho, 6087"
      },
      {
        "_id": "5fbfa809397f3ecfef55da9e",
        "index": 9,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Jessie Chandler",
        "company": "ZEDALIS",
        "phone": "+1 (963) 554-3350",
        "address": "755 Ivan Court, Roeville, Oregon, 6457"
      },
      {
        "_id": "5fbfa80980040ecf59144b52",
        "index": 10,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Delia Holland",
        "company": "GAZAK",
        "phone": "+1 (903) 536-2588",
        "address": "460 Allen Avenue, Balm, Texas, 8978"
      },
      {
        "_id": "5fbfa809575ca6f5a082fa9b",
        "index": 11,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Edna Holman",
        "company": "CHORIZON",
        "phone": "+1 (898) 418-2007",
        "address": "537 Lloyd Court, Brantleyville, Wyoming, 915"
      },
      {
        "_id": "5fbfa80965258d3e37fad597",
        "index": 12,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Espinoza Bray",
        "company": "INTERLOO",
        "phone": "+1 (863) 471-2493",
        "address": "274 Corbin Place, Rosburg, Guam, 4653"
      },
      {
        "_id": "5fbfa809da8e157593806a20",
        "index": 13,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Rios Trevino",
        "company": "ACCUFARM",
        "phone": "+1 (902) 400-3429",
        "address": "568 Ira Court, Hondah, Kansas, 7649"
      },
      {
        "_id": "5fbfa809ff1cc20a842976aa",
        "index": 14,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Marilyn Hutchinson",
        "company": "IPLAX",
        "phone": "+1 (948) 477-3219",
        "address": "412 Gardner Avenue, Verdi, Indiana, 8207"
      },
      {
        "_id": "5fbfa809707233a26e0746f1",
        "index": 15,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Fowler Mueller",
        "company": "MAGNEATO",
        "phone": "+1 (873) 452-2466",
        "address": "806 Jodie Court, Spelter, Hawaii, 3948"
      },
      {
        "_id": "5fbfa809d4af6e86dcbc4ddf",
        "index": 16,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Bette Bradford",
        "company": "ZYTRAC",
        "phone": "+1 (941) 532-3724",
        "address": "196 Surf Avenue, Williamson, District Of Columbia, 1415"
      },
      {
        "_id": "5fbfa809310216c246d68dfe",
        "index": 17,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Janna Meyer",
        "company": "EARTHMARK",
        "phone": "+1 (974) 453-2050",
        "address": "509 Woodrow Court, Norvelt, North Carolina, 3382"
      },
      {
        "_id": "5fbfa8098c878879c101f4db",
        "index": 18,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Valerie Nichols",
        "company": "EXOZENT",
        "phone": "+1 (850) 535-2607",
        "address": "633 Nova Court, Allensworth, Wisconsin, 5433"
      },
      {
        "_id": "5fbfa80978e531ee5bbf8906",
        "index": 19,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Cooley Wade",
        "company": "ORONOKO",
        "phone": "+1 (802) 439-3781",
        "address": "241 Jaffray Street, Monument, Washington, 4776"
      },
      {
        "_id": "5fbfa8099d077cb5f2f93d1a",
        "index": 20,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Kristi Gilmore",
        "company": "TWIGGERY",
        "phone": "+1 (917) 488-3449",
        "address": "157 Malta Street, Ironton, Kentucky, 4573"
      },
      {
        "_id": "5fbfa809291414be80fed30b",
        "index": 21,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Hartman James",
        "company": "INQUALA",
        "phone": "+1 (858) 519-3012",
        "address": "675 Ash Street, Enlow, Alabama, 8254"
      },
      {
        "_id": "5fbfa8096443d79be3ba8423",
        "index": 22,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Stanton Rowe",
        "company": "COGENTRY",
        "phone": "+1 (876) 594-3342",
        "address": "795 Logan Street, Collins, Arizona, 7643"
      },
      {
        "_id": "5fbfa8090263b14bbb9c618d",
        "index": 23,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Patsy Madden",
        "company": "SPEEDBOLT",
        "phone": "+1 (875) 537-3100",
        "address": "298 Oxford Walk, Grantville, Louisiana, 2423"
      },
      {
        "_id": "5fbfa80986f8333be6755a22",
        "index": 24,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Janie Fisher",
        "company": "ECOSYS",
        "phone": "+1 (811) 450-2035",
        "address": "569 Montieth Street, Marshall, Colorado, 1060"
      },
      {
        "_id": "5fbfa8092a850d1039d7c552",
        "index": 25,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Harvey Burch",
        "company": "UBERLUX",
        "phone": "+1 (857) 576-2870",
        "address": "983 Ryerson Street, Heil, New York, 5273"
      },
      {
        "_id": "5fbfa80956ad0257edfc2235",
        "index": 26,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Conway Mcmahon",
        "company": "SLAX",
        "phone": "+1 (817) 429-3621",
        "address": "463 Crosby Avenue, Babb, New Hampshire, 7924"
      },
      {
        "_id": "5fbfa809fff247f5fa06b93a",
        "index": 27,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Queen Ballard",
        "company": "CALCULA",
        "phone": "+1 (837) 400-2401",
        "address": "863 Kenmore Court, Kraemer, Marshall Islands, 5920"
      },
      {
        "_id": "5fbfa8099bec9c5e83c4ee19",
        "index": 28,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Garza Le",
        "company": "ROTODYNE",
        "phone": "+1 (890) 461-2978",
        "address": "351 Mill Road, Brutus, Michigan, 2030"
      },
      {
        "_id": "5fbfa809df7e1a0ed03dfdd7",
        "index": 29,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Lilia Keith",
        "company": "ANIXANG",
        "phone": "+1 (944) 466-3100",
        "address": "741 Willoughby Street, Welch, Utah, 3722"
      },
      {
        "_id": "5fbfa8099d4126a03e10cd6c",
        "index": 30,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Eleanor Allen",
        "company": "EPLODE",
        "phone": "+1 (822) 438-3167",
        "address": "259 Dahill Road, Cartwright, American Samoa, 7744"
      },
      {
        "_id": "5fbfa80938f271d299919229",
        "index": 31,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Crane Mcconnell",
        "company": "CORPORANA",
        "phone": "+1 (993) 544-2694",
        "address": "151 Bay Parkway, Blackgum, Iowa, 4634"
      },
      {
        "_id": "5fbfa809cef17637a19fa9c7",
        "index": 32,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Harrison Lindsey",
        "company": "XURBAN",
        "phone": "+1 (956) 564-3359",
        "address": "294 Fane Court, Riverton, Missouri, 9133"
      },
      {
        "_id": "5fbfa809efb88ec64149646e",
        "index": 33,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Riddle Alston",
        "company": "MINGA",
        "phone": "+1 (887) 595-3238",
        "address": "968 Brightwater Avenue, Norwood, Minnesota, 938"
      },
      {
        "_id": "5fbfa80990e707128413287d",
        "index": 34,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Sims Simpson",
        "company": "STELAECOR",
        "phone": "+1 (838) 479-2152",
        "address": "137 Delmonico Place, Lacomb, New Jersey, 4838"
      },
      {
        "_id": "5fbfa80929c61a8c17487f35",
        "index": 35,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Darcy Hebert",
        "company": "COMTENT",
        "phone": "+1 (957) 598-2585",
        "address": "688 Colonial Road, Harrison, Puerto Rico, 1962"
      },
      {
        "_id": "5fbfa8097a315f3c38d46b31",
        "index": 36,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Kaitlin Jacobs",
        "company": "KOG",
        "phone": "+1 (831) 511-2670",
        "address": "307 Clermont Avenue, Biddle, Nebraska, 6100"
      },
      {
        "_id": "5fbfa809663d018425e8e925",
        "index": 37,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Edwina Durham",
        "company": "DARWINIUM",
        "phone": "+1 (866) 494-3685",
        "address": "197 Randolph Street, Kieler, Virginia, 4597"
      },
      {
        "_id": "5fbfa8096acf5c5b33a0a691",
        "index": 38,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Mclean Maxwell",
        "company": "TERAPRENE",
        "phone": "+1 (936) 516-2661",
        "address": "440 Chester Court, Mulberry, Arkansas, 5008"
      },
      {
        "_id": "5fbfa80977abcba704c1044b",
        "index": 39,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Gomez Douglas",
        "company": "ZAPHIRE",
        "phone": "+1 (959) 552-3976",
        "address": "695 Caton Place, Dunnavant, South Dakota, 2963"
      },
      {
        "_id": "5fbfa80966a12d8235a412ee",
        "index": 40,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Velez Rosa",
        "company": "RENOVIZE",
        "phone": "+1 (829) 482-2261",
        "address": "831 Union Street, Blue, Maryland, 8724"
      },
      {
        "_id": "5fbfa809dcbc8d743e019e8b",
        "index": 41,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Rachael Cummings",
        "company": "GEEKETRON",
        "phone": "+1 (832) 439-3413",
        "address": "763 Orient Avenue, Brandywine, South Carolina, 3150"
      },
      {
        "_id": "5fbfa809a6cb726e9e91ade7",
        "index": 42,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Kennedy Mcclure",
        "company": "VINCH",
        "phone": "+1 (882) 527-3717",
        "address": "755 Heyward Street, Cade, Mississippi, 8147"
      },
      {
        "_id": "5fbfa8093d8965398bf2c947",
        "index": 43,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Heath Juarez",
        "company": "FUELTON",
        "phone": "+1 (818) 555-3677",
        "address": "472 Moultrie Street, Motley, Massachusetts, 3750"
      },
      {
        "_id": "5fbfa809f30441053a15a4a9",
        "index": 44,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Charlotte Delacruz",
        "company": "SCENTRIC",
        "phone": "+1 (813) 461-2421",
        "address": "715 Tampa Court, Bainbridge, Maine, 2876"
      },
      {
        "_id": "5fbfa80995a5b2aea85467be",
        "index": 45,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Nancy Oneill",
        "company": "QOT",
        "phone": "+1 (906) 565-3652",
        "address": "363 Aurelia Court, Brewster, Illinois, 613"
      },
      {
        "_id": "5fbfa809fd64b23813d634ff",
        "index": 46,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Bianca Mercado",
        "company": "TSUNAMIA",
        "phone": "+1 (919) 411-3601",
        "address": "600 Clymer Street, Orviston, New Mexico, 1007"
      },
      {
        "_id": "5fbfa8090b85648ca6c3c1c9",
        "index": 47,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Samantha Sawyer",
        "company": "GINK",
        "phone": "+1 (975) 584-2703",
        "address": "176 Blake Court, Stollings, Palau, 3486"
      },
      {
        "_id": "5fbfa80955200b3aa5021e90",
        "index": 48,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Mcdaniel Sutton",
        "company": "CINCYR",
        "phone": "+1 (935) 538-3995",
        "address": "138 Thornton Street, Wheatfields, Georgia, 9133"
      },
      {
        "_id": "5fbfa8091751e3e5ec233639",
        "index": 49,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Kari Hancock",
        "company": "AQUOAVO",
        "phone": "+1 (837) 530-2549",
        "address": "498 Strickland Avenue, Troy, Connecticut, 5887"
      },
      {
        "_id": "5fbfa809438b1896c8d08d89",
        "index": 50,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Katy Wells",
        "company": "DUOFLEX",
        "phone": "+1 (802) 476-3379",
        "address": "866 Schermerhorn Street, Dyckesville, Alaska, 1271"
      },
      {
        "_id": "5fbfa809d0e0ed012a98749b",
        "index": 51,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Gilmore Barry",
        "company": "TRASOLA",
        "phone": "+1 (953) 592-3569",
        "address": "849 Argyle Road, Wanship, North Dakota, 8569"
      },
      {
        "_id": "5fbfa809881b5a3440ecd4a5",
        "index": 52,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Roseann Chavez",
        "company": "GOLOGY",
        "phone": "+1 (831) 569-3490",
        "address": "894 Tudor Terrace, Yogaville, Rhode Island, 3428"
      },
      {
        "_id": "5fbfa80951946f6580f4513f",
        "index": 53,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Barnes Stuart",
        "company": "KONGLE",
        "phone": "+1 (868) 472-2591",
        "address": "741 Garden Place, Faywood, Delaware, 7323"
      },
      {
        "_id": "5fbfa8094066f0e640f45f63",
        "index": 54,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Greta Bright",
        "company": "ZOUNDS",
        "phone": "+1 (826) 543-3317",
        "address": "227 Seeley Street, Baden, Pennsylvania, 8094"
      },
      {
        "_id": "5fbfa809ed97954d3fcc295b",
        "index": 55,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Laverne Sherman",
        "company": "CONJURICA",
        "phone": "+1 (961) 437-2199",
        "address": "805 Stryker Court, Grill, California, 7543"
      },
      {
        "_id": "5fbfa80995be0006b4fdc27a",
        "index": 56,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Farley Gonzales",
        "company": "ZILLACON",
        "phone": "+1 (955) 464-2638",
        "address": "194 Joralemon Street, Boykin, Virgin Islands, 2104"
      },
      {
        "_id": "5fbfa8094198fe5424eaa084",
        "index": 57,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Blankenship Ramirez",
        "company": "ARCHITAX",
        "phone": "+1 (821) 597-2254",
        "address": "794 Beverly Road, Manila, Northern Mariana Islands, 736"
      },
      {
        "_id": "5fbfa809286e12c959335daa",
        "index": 58,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Blackwell Combs",
        "company": "SYNKGEN",
        "phone": "+1 (917) 589-3301",
        "address": "444 Hopkins Street, Worton, Oklahoma, 2819"
      },
      {
        "_id": "5fbfa8099f35fd719de7f171",
        "index": 59,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Walker Andrews",
        "company": "TUBESYS",
        "phone": "+1 (946) 520-2636",
        "address": "499 Norwood Avenue, Maxville, Ohio, 5962"
      },
      {
        "_id": "5fbfa809cb0452cc1d337f1b",
        "index": 60,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Randall Mullins",
        "company": "XPLOR",
        "phone": "+1 (852) 543-2904",
        "address": "914 Fanchon Place, Springville, Tennessee, 2724"
      },
      {
        "_id": "5fbfa809916ed4b8f2420ffe",
        "index": 61,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Rodriguez Carter",
        "company": "ZEPITOPE",
        "phone": "+1 (954) 558-3161",
        "address": "305 Troutman Street, Kenwood, Vermont, 615"
      },
      {
        "_id": "5fbfa80958d8b9f64656c601",
        "index": 62,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Manning Blackburn",
        "company": "PERKLE",
        "phone": "+1 (964) 597-2256",
        "address": "433 Ridge Court, Tooleville, Florida, 4865"
      },
      {
        "_id": "5fbfa809939970c88b695649",
        "index": 63,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Woods Browning",
        "company": "INFOTRIPS",
        "phone": "+1 (812) 564-2971",
        "address": "482 Adelphi Street, Tedrow, West Virginia, 5316"
      },
      {
        "_id": "5fbfa809af32da4ac86874f5",
        "index": 64,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Lakeisha Hanson",
        "company": "ICOLOGY",
        "phone": "+1 (964) 411-3227",
        "address": "668 Sumner Place, Otranto, Nevada, 926"
      },
      {
        "_id": "5fbfa809062c56c66c5e41ff",
        "index": 65,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Francine Carroll",
        "company": "BUZZWORKS",
        "phone": "+1 (853) 407-2700",
        "address": "697 Kent Avenue, Westboro, Montana, 2904"
      },
      {
        "_id": "5fbfa809f0d767b8aa5b0ef9",
        "index": 66,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Figueroa Wolfe",
        "company": "ZENTILITY",
        "phone": "+1 (866) 559-3944",
        "address": "998 Woodruff Avenue, Hanover, Idaho, 5495"
      },
      {
        "_id": "5fbfa8096740aa6d8ecf42ee",
        "index": 67,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Katie Rosario",
        "company": "MANTRIX",
        "phone": "+1 (927) 462-2551",
        "address": "821 Barlow Drive, Caln, Oregon, 6299"
      },
      {
        "_id": "5fbfa8094d0762e938762cff",
        "index": 68,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Patterson Hart",
        "company": "MAROPTIC",
        "phone": "+1 (894) 513-3206",
        "address": "422 Florence Avenue, Brecon, Texas, 6225"
      },
      {
        "_id": "5fbfa809f918c95fd255d875",
        "index": 69,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Juanita Wiley",
        "company": "COMFIRM",
        "phone": "+1 (862) 564-2714",
        "address": "922 Bragg Court, Elwood, Wyoming, 1234"
      },
      {
        "_id": "5fbfa80906c66b5781ed3338",
        "index": 70,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Melendez Hardy",
        "company": "KOZGENE",
        "phone": "+1 (848) 558-3953",
        "address": "148 Sharon Street, Ellerslie, Guam, 4811"
      },
      {
        "_id": "5fbfa8099a57999b3fecdd26",
        "index": 71,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Brigitte Dotson",
        "company": "PULZE",
        "phone": "+1 (803) 598-2182",
        "address": "678 Louis Place, Winston, Kansas, 2306"
      },
      {
        "_id": "5fbfa809def2616786a0a62e",
        "index": 72,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Pace Cameron",
        "company": "GEEKUS",
        "phone": "+1 (937) 588-2501",
        "address": "464 Branton Street, Haena, Indiana, 8758"
      },
      {
        "_id": "5fbfa809f89ea13e01bffd62",
        "index": 73,
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "Dee Kent",
        "company": "TETAK",
        "phone": "+1 (866) 501-2553",
        "address": "216 Bergen Street, Mansfield, Hawaii, 1459"
      },
      {
        "_id": "5fbfa8093bb124ee74d740cb",
        "index": 74,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Orr Hester",
        "company": "POSHOME",
        "phone": "+1 (950) 487-2800",
        "address": "715 Ditmars Street, Waiohinu, District Of Columbia, 6984"
      },
      {
        "_id": "5fbfa809c4365bb69ce5fac3",
        "index": 75,
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "Mccoy Valdez",
        "company": "COMVEYOR",
        "phone": "+1 (967) 464-3737",
        "address": "883 Newton Street, Greenbush, North Carolina, 6395"
      }
    ]
    
  }
  constructor() { }
  getScrollingData(startIndex, endIndex){
    if(this.items.data.length>endIndex){
      return of(this.items.data.slice(startIndex, endIndex));
    }else{
      return null
    }
  }      
}
