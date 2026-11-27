/* Country calling codes for phone fields.
 * Flags are generated from the ISO country code; names are fixed (see NAMES).
 * Countries with a known national number length have an exact rule (RULES). All others use a
 * general check: 6 digits up to the international maximum of 15 digits including the code.
 */

export type CountryCode = {
  iso: string;
  name: string;
  dial: string; // e.g. "+91" or "+1 684" (some Caribbean/Pacific states share +1 and use an area code)
  dialDigits: string; // digits of `dial` only, e.g. "91"
  flag: string;
  min: number; // national number length (without the country code)
  max: number;
  pattern: string; // HTML pattern for the national number
  example?: string; // sample format shown as the placeholder
};

const DIALS: [iso: string, dial: string][] = [
  ["AF", "+93"], ["AL", "+355"], ["DZ", "+213"], ["AS", "+1 684"], ["AD", "+376"], ["AO", "+244"],
  ["AI", "+1 264"], ["AG", "+1 268"], ["AR", "+54"], ["AM", "+374"], ["AW", "+297"], ["AU", "+61"],
  ["AT", "+43"], ["AZ", "+994"], ["BS", "+1 242"], ["BH", "+973"], ["BD", "+880"], ["BB", "+1 246"],
  ["BY", "+375"], ["BE", "+32"], ["BZ", "+501"], ["BJ", "+229"], ["BM", "+1 441"], ["BT", "+975"],
  ["BO", "+591"], ["BQ", "+599"], ["BA", "+387"], ["BW", "+267"], ["BR", "+55"], ["IO", "+246"],
  ["BN", "+673"], ["BG", "+359"], ["BF", "+226"], ["BI", "+257"], ["KH", "+855"], ["CM", "+237"],
  ["CA", "+1"], ["CV", "+238"], ["KY", "+1 345"], ["CF", "+236"], ["TD", "+235"], ["CL", "+56"],
  ["CN", "+86"], ["CO", "+57"], ["KM", "+269"], ["CG", "+242"], ["CD", "+243"], ["CK", "+682"],
  ["CR", "+506"], ["CI", "+225"], ["HR", "+385"], ["CU", "+53"], ["CW", "+599"], ["CY", "+357"],
  ["CZ", "+420"], ["DK", "+45"], ["DJ", "+253"], ["DM", "+1 767"], ["DO", "+1 809"], ["EC", "+593"],
  ["EG", "+20"], ["SV", "+503"], ["GQ", "+240"], ["ER", "+291"], ["EE", "+372"], ["SZ", "+268"],
  ["ET", "+251"], ["FK", "+500"], ["FO", "+298"], ["FJ", "+679"], ["FI", "+358"], ["FR", "+33"],
  ["GF", "+594"], ["PF", "+689"], ["GA", "+241"], ["GM", "+220"], ["GE", "+995"], ["DE", "+49"],
  ["GH", "+233"], ["GI", "+350"], ["GR", "+30"], ["GL", "+299"], ["GD", "+1 473"], ["GP", "+590"],
  ["GU", "+1 671"], ["GT", "+502"], ["GN", "+224"], ["GW", "+245"], ["GY", "+592"], ["HT", "+509"],
  ["HN", "+504"], ["HK", "+852"], ["HU", "+36"], ["IS", "+354"], ["IN", "+91"], ["ID", "+62"],
  ["IR", "+98"], ["IQ", "+964"], ["IE", "+353"], ["IL", "+972"], ["IT", "+39"], ["JM", "+1 876"],
  ["JP", "+81"], ["JO", "+962"], ["KZ", "+7"], ["KE", "+254"], ["KI", "+686"], ["KP", "+850"],
  ["KR", "+82"], ["KW", "+965"], ["KG", "+996"], ["LA", "+856"], ["LV", "+371"], ["LB", "+961"],
  ["LS", "+266"], ["LR", "+231"], ["LY", "+218"], ["LI", "+423"], ["LT", "+370"], ["LU", "+352"],
  ["MO", "+853"], ["MG", "+261"], ["MW", "+265"], ["MY", "+60"], ["MV", "+960"], ["ML", "+223"],
  ["MT", "+356"], ["MH", "+692"], ["MQ", "+596"], ["MR", "+222"], ["MU", "+230"], ["YT", "+262"],
  ["MX", "+52"], ["FM", "+691"], ["MD", "+373"], ["MC", "+377"], ["MN", "+976"], ["ME", "+382"],
  ["MS", "+1 664"], ["MA", "+212"], ["MZ", "+258"], ["MM", "+95"], ["NA", "+264"], ["NR", "+674"],
  ["NP", "+977"], ["NL", "+31"], ["NC", "+687"], ["NZ", "+64"], ["NI", "+505"], ["NE", "+227"],
  ["NG", "+234"], ["NU", "+683"], ["MK", "+389"], ["MP", "+1 670"], ["NO", "+47"], ["OM", "+968"],
  ["PK", "+92"], ["PW", "+680"], ["PS", "+970"], ["PA", "+507"], ["PG", "+675"], ["PY", "+595"],
  ["PE", "+51"], ["PH", "+63"], ["PL", "+48"], ["PT", "+351"], ["PR", "+1 787"], ["QA", "+974"],
  ["RE", "+262"], ["RO", "+40"], ["RU", "+7"], ["RW", "+250"], ["SH", "+290"], ["KN", "+1 869"],
  ["LC", "+1 758"], ["PM", "+508"], ["VC", "+1 784"], ["WS", "+685"], ["SM", "+378"], ["ST", "+239"],
  ["SA", "+966"], ["SN", "+221"], ["RS", "+381"], ["SC", "+248"], ["SL", "+232"], ["SG", "+65"],
  ["SX", "+1 721"], ["SK", "+421"], ["SI", "+386"], ["SB", "+677"], ["SO", "+252"], ["ZA", "+27"],
  ["SS", "+211"], ["ES", "+34"], ["LK", "+94"], ["SD", "+249"], ["SR", "+597"], ["SE", "+46"],
  ["CH", "+41"], ["SY", "+963"], ["TW", "+886"], ["TJ", "+992"], ["TZ", "+255"], ["TH", "+66"],
  ["TL", "+670"], ["TG", "+228"], ["TK", "+690"], ["TO", "+676"], ["TT", "+1 868"], ["TN", "+216"],
  ["TR", "+90"], ["TM", "+993"], ["TC", "+1 649"], ["TV", "+688"], ["UG", "+256"], ["UA", "+380"],
  ["AE", "+971"], ["GB", "+44"], ["US", "+1"], ["UY", "+598"], ["UZ", "+998"], ["VU", "+678"],
  ["VE", "+58"], ["VN", "+84"], ["VG", "+1 284"], ["VI", "+1 340"], ["WF", "+681"], ["YE", "+967"],
  ["ZM", "+260"], ["ZW", "+263"],
];

/* Exact national-number rules for the most-used countries. */
const RULES: Record<string, { min: number; max: number; pattern: string; example: string }> = {
  IN: { min: 10, max: 10, pattern: "[6-9][0-9]{9}", example: "98765 43210" },
  US: { min: 10, max: 10, pattern: "[2-9][0-9]{9}", example: "415 555 0123" },
  CA: { min: 10, max: 10, pattern: "[2-9][0-9]{9}", example: "416 555 0123" },
  GB: { min: 9, max: 10, pattern: "[1-9][0-9]{8,9}", example: "7400 123456" },
  AU: { min: 9, max: 9, pattern: "4[0-9]{8}", example: "412 345 678" },
  AE: { min: 9, max: 9, pattern: "[2-9][0-9]{8}", example: "50 123 4567" },
  SA: { min: 9, max: 9, pattern: "5[0-9]{8}", example: "50 123 4567" },
  SG: { min: 8, max: 8, pattern: "[89][0-9]{7}", example: "8123 4567" },
  DE: { min: 10, max: 11, pattern: "1[5-7][0-9]{8,9}", example: "1512 3456789" },
  FR: { min: 9, max: 9, pattern: "[1-9][0-9]{8}", example: "6 12 34 56 78" },
  ES: { min: 9, max: 9, pattern: "[5-9][0-9]{8}", example: "612 345 678" },
  NL: { min: 9, max: 9, pattern: "[1-9][0-9]{8}", example: "6 12345678" },
  BR: { min: 10, max: 11, pattern: "[1-9][0-9]{9,10}", example: "11 91234 5678" },
  MX: { min: 10, max: 10, pattern: "[1-9][0-9]{9}", example: "55 1234 5678" },
  CN: { min: 11, max: 11, pattern: "1[3-9][0-9]{9}", example: "138 0013 8000" },
  JP: { min: 10, max: 11, pattern: "[1-9][0-9]{9,10}", example: "90 1234 5678" },
  PK: { min: 10, max: 10, pattern: "[1-9][0-9]{9}", example: "300 1234567" },
  BD: { min: 10, max: 10, pattern: "1[3-9][0-9]{8}", example: "1712 345678" },
  NP: { min: 10, max: 10, pattern: "9[0-9]{9}", example: "984 123 4567" },
  LK: { min: 9, max: 9, pattern: "[1-9][0-9]{8}", example: "71 234 5678" },
  PH: { min: 10, max: 10, pattern: "9[0-9]{9}", example: "917 123 4567" },
  MY: { min: 9, max: 10, pattern: "1[0-9]{8,9}", example: "12 345 6789" },
  TH: { min: 9, max: 9, pattern: "[689][0-9]{8}", example: "81 234 5678" },
  KR: { min: 9, max: 10, pattern: "1[0-9]{8,9}", example: "10 1234 5678" },
  RU: { min: 10, max: 10, pattern: "9[0-9]{9}", example: "912 345 67 89" },
  ZA: { min: 9, max: 9, pattern: "[1-8][0-9]{8}", example: "71 234 5678" },
  KE: { min: 9, max: 9, pattern: "[17][0-9]{8}", example: "712 345678" },
  EG: { min: 10, max: 10, pattern: "1[0-9]{9}", example: "10 1234 5678" },
  TR: { min: 10, max: 10, pattern: "5[0-9]{9}", example: "501 234 56 78" },
  ID: { min: 9, max: 11, pattern: "8[0-9]{8,10}", example: "812 3456 7890" },
  IT: { min: 9, max: 10, pattern: "[0-9]{9,10}", example: "312 345 6789" },
};

/* Fixed English names. They are written out (not read from Intl.DisplayNames) because the server
 * and the browser spell some names differently, which causes a hydration mismatch. */
const NAMES: Record<string, string> = {
  AF: "Afghanistan", AL: "Albania", DZ: "Algeria", AS: "American Samoa", AD: "Andorra", AO: "Angola",
  AI: "Anguilla", AG: "Antigua & Barbuda", AR: "Argentina", AM: "Armenia", AW: "Aruba", AU: "Australia",
  AT: "Austria", AZ: "Azerbaijan", BS: "Bahamas", BH: "Bahrain", BD: "Bangladesh", BB: "Barbados",
  BY: "Belarus", BE: "Belgium", BZ: "Belize", BJ: "Benin", BM: "Bermuda", BT: "Bhutan",
  BO: "Bolivia", BQ: "Caribbean Netherlands", BA: "Bosnia & Herzegovina", BW: "Botswana", BR: "Brazil",
  IO: "British Indian Ocean Territory", BN: "Brunei", BG: "Bulgaria", BF: "Burkina Faso", BI: "Burundi",
  KH: "Cambodia", CM: "Cameroon", CA: "Canada", CV: "Cape Verde", KY: "Cayman Islands",
  CF: "Central African Republic", TD: "Chad", CL: "Chile", CN: "China", CO: "Colombia", KM: "Comoros",
  CG: "Congo - Brazzaville", CD: "Congo - Kinshasa", CK: "Cook Islands", CR: "Costa Rica",
  CI: "Côte d’Ivoire", HR: "Croatia", CU: "Cuba", CW: "Curaçao", CY: "Cyprus", CZ: "Czechia",
  DK: "Denmark", DJ: "Djibouti", DM: "Dominica", DO: "Dominican Republic", EC: "Ecuador", EG: "Egypt",
  SV: "El Salvador", GQ: "Equatorial Guinea", ER: "Eritrea", EE: "Estonia", SZ: "Eswatini", ET: "Ethiopia",
  FK: "Falkland Islands", FO: "Faroe Islands", FJ: "Fiji", FI: "Finland", FR: "France", GF: "French Guiana",
  PF: "French Polynesia", GA: "Gabon", GM: "Gambia", GE: "Georgia", DE: "Germany", GH: "Ghana",
  GI: "Gibraltar", GR: "Greece", GL: "Greenland", GD: "Grenada", GP: "Guadeloupe", GU: "Guam",
  GT: "Guatemala", GN: "Guinea", GW: "Guinea-Bissau", GY: "Guyana", HT: "Haiti", HN: "Honduras",
  HK: "Hong Kong", HU: "Hungary", IS: "Iceland", IN: "India", ID: "Indonesia", IR: "Iran", IQ: "Iraq",
  IE: "Ireland", IL: "Israel", IT: "Italy", JM: "Jamaica", JP: "Japan", JO: "Jordan", KZ: "Kazakhstan",
  KE: "Kenya", KI: "Kiribati", KP: "North Korea", KR: "South Korea", KW: "Kuwait", KG: "Kyrgyzstan",
  LA: "Laos", LV: "Latvia", LB: "Lebanon", LS: "Lesotho", LR: "Liberia", LY: "Libya", LI: "Liechtenstein",
  LT: "Lithuania", LU: "Luxembourg", MO: "Macao", MG: "Madagascar", MW: "Malawi", MY: "Malaysia",
  MV: "Maldives", ML: "Mali", MT: "Malta", MH: "Marshall Islands", MQ: "Martinique", MR: "Mauritania",
  MU: "Mauritius", YT: "Mayotte", MX: "Mexico", FM: "Micronesia", MD: "Moldova", MC: "Monaco",
  MN: "Mongolia", ME: "Montenegro", MS: "Montserrat", MA: "Morocco", MZ: "Mozambique", MM: "Myanmar",
  NA: "Namibia", NR: "Nauru", NP: "Nepal", NL: "Netherlands", NC: "New Caledonia", NZ: "New Zealand",
  NI: "Nicaragua", NE: "Niger", NG: "Nigeria", NU: "Niue", MK: "North Macedonia",
  MP: "Northern Mariana Islands", NO: "Norway", OM: "Oman", PK: "Pakistan", PW: "Palau",
  PS: "Palestine", PA: "Panama", PG: "Papua New Guinea", PY: "Paraguay", PE: "Peru", PH: "Philippines",
  PL: "Poland", PT: "Portugal", PR: "Puerto Rico", QA: "Qatar", RE: "Réunion", RO: "Romania",
  RU: "Russia", RW: "Rwanda", SH: "St Helena", KN: "St Kitts & Nevis", LC: "St Lucia",
  PM: "St Pierre & Miquelon", VC: "St Vincent & Grenadines", WS: "Samoa", SM: "San Marino",
  ST: "São Tomé & Príncipe", SA: "Saudi Arabia", SN: "Senegal", RS: "Serbia", SC: "Seychelles",
  SL: "Sierra Leone", SG: "Singapore", SX: "Sint Maarten", SK: "Slovakia", SI: "Slovenia",
  SB: "Solomon Islands", SO: "Somalia", ZA: "South Africa", SS: "South Sudan", ES: "Spain",
  LK: "Sri Lanka", SD: "Sudan", SR: "Suriname", SE: "Sweden", CH: "Switzerland", SY: "Syria",
  TW: "Taiwan", TJ: "Tajikistan", TZ: "Tanzania", TH: "Thailand", TL: "Timor-Leste", TG: "Togo",
  TK: "Tokelau", TO: "Tonga", TT: "Trinidad & Tobago", TN: "Tunisia", TR: "Türkiye", TM: "Turkmenistan",
  TC: "Turks & Caicos Islands", TV: "Tuvalu", UG: "Uganda", UA: "Ukraine", AE: "United Arab Emirates",
  GB: "United Kingdom", US: "United States", UY: "Uruguay", UZ: "Uzbekistan", VU: "Vanuatu",
  VE: "Venezuela", VN: "Vietnam", VG: "British Virgin Islands", VI: "U.S. Virgin Islands",
  WF: "Wallis & Futuna", YE: "Yemen", ZM: "Zambia", ZW: "Zimbabwe",
};

/* Turns "IN" into the flag emoji 🇮🇳 using regional indicator symbols. */
function flagFor(iso: string) {
  return iso.replace(/./g, (letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)));
}

function buildCountryCodes(): CountryCode[] {
  return DIALS.map(([iso, dial]) => {
    const dialDigits = dial.replace(/\D/g, "");
    const rule = RULES[iso];
    const min = rule?.min ?? 6;
    const max = rule?.max ?? 15 - dialDigits.length;
    return {
      iso,
      name: NAMES[iso] ?? iso,
      dial,
      dialDigits,
      flag: flagFor(iso),
      min,
      max,
      pattern: rule?.pattern ?? `[0-9]{${min},${max}}`,
      example: rule?.example,
    };
  }).sort((a, b) => {
    // Plain comparison (no locale), so the server and the browser always produce the same order.
    const key = (name: string) => name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const ka = key(a.name);
    const kb = key(b.name);
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });
}

export const COUNTRY_CODES: CountryCode[] = buildCountryCodes();

export const DEFAULT_COUNTRY_ISO = "IN";

/* Keeps only digits. If someone types or pastes the code ("+91 98765 43210") or the local
 * trunk zero ("06 12 34 56 78" for France), those are removed so the number matches the format. */
export function cleanNationalNumber(raw: string, country: CountryCode) {
  let digits = raw.replace(/\D/g, "");
  if (digits.length > country.max && digits.startsWith(country.dialDigits)) {
    digits = digits.slice(country.dialDigits.length);
  }
  if (digits.length > country.max && digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  return digits.slice(0, country.max);
}
