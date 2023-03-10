import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "./button/Button";
import Select from "./select/Select";
import { useRouter } from "next/router";

interface Props {
  isOpen: boolean;
  onClose: any;
  onOpen: any;
}

const SelectCountryDialogue: React.FC<Props> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const cancelRef = React.useRef();
  const [countryCode, setCountryCode] = useState("");
  const router = useRouter();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => {
          if (countryCode) {
            // localStorage.setItem("countryCode", JSON.stringify("ML"));
            onClose;
            // router.reload();
          }
        }}
        // size={"full"}
      >
        <AlertDialogOverlay onClick={onOpen}>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Pays
            </AlertDialogHeader>

            <AlertDialogBody>
              Choisissez votre pays pour voir les publications au tour de vous!
              <Box mt={2}>
                <Select
                  placeholder="Choisissez pays"
                  name="countryCode"
                  onChange={(e) => {
                    const val = e.currentTarget.value;
                    setCountryCode(val);
                  }}
                  options={Object.keys(data).map((key) => ({
                    label: data[key],
                    value: key,
                  }))}
                />
              </Box>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                onClick={() => {
                  if (countryCode) {
                    localStorage.setItem(
                      "countryCode",
                      JSON.stringify(countryCode)
                    );
                    onClose();
                    router.reload();
                  }
                }}
              >
                Sauver
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

const data = {
  AF: "Afghanistan",
  ZA: "Afrique du Sud",
  AL: "Albanie",
  DZ: "Alg??rie",
  DE: "Allemagne",
  AD: "Andorre",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctique",
  AG: "Antigua-et-Barbuda",
  AN: "Antilles n??erlandaises",
  SA: "Arabie saoudite",
  AR: "Argentine",
  AM: "Arm??nie",
  AW: "Aruba",
  AU: "Australie",
  AT: "Autriche",
  AZ: "Azerba??djan",
  BS: "Bahamas",
  BH: "Bahre??n",
  BD: "Bangladesh",
  BB: "Barbade",
  BY: "B??larus",
  BE: "Belgique",
  BZ: "Belize",
  BJ: "B??nin",
  BM: "Bermudes",
  BT: "Bhoutan",
  BO: "Bolivie",
  BA: "Bosnie-Herz??govine",
  BW: "Botswana",
  BR: "Br??sil",
  BN: "Brun??i Darussalam",
  BG: "Bulgarie",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodge",
  CM: "Cameroun",
  CA: "Canada",
  CV: "Cap-Vert",
  EA: "Ceuta et Melilla",
  CL: "Chili",
  CN: "Chine",
  CY: "Chypre",
  CO: "Colombie",
  KM: "Comores",
  CG: "Congo-Brazzaville",
  KP: "Cor??e du Nord",
  KR: "Cor??e du Sud",
  CR: "Costa Rica",
  CI: "C??te d???Ivoire",
  HR: "Croatie",
  CU: "Cuba",
  DK: "Danemark",
  DG: "Diego Garcia",
  DJ: "Djibouti",
  DM: "Dominique",
  EG: "??gypte",
  SV: "El Salvador",
  AE: "??mirats arabes unis",
  EC: "??quateur",
  ER: "??rythr??e",
  ES: "Espagne",
  EE: "Estonie",
  VA: "??tat de la Cit?? du Vatican",
  FM: "??tats f??d??r??s de Micron??sie",
  US: "??tats-Unis",
  ET: "??thiopie",
  FJ: "Fidji",
  FI: "Finlande",
  FR: "France",
  GA: "Gabon",
  GM: "Gambie",
  GE: "G??orgie",
  GS: "G??orgie du Sud et les ??les Sandwich du Sud",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Gr??ce",
  GD: "Grenade",
  GL: "Groenland",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernesey",
  GN: "Guin??e",
  GQ: "Guin??e ??quatoriale",
  GW: "Guin??e-Bissau",
  GY: "Guyana",
  GF: "Guyane fran??aise",
  HT: "Ha??ti",
  HN: "Honduras",
  HU: "Hongrie",
  BV: "??le Bouvet",
  CX: "??le Christmas",
  CP: "??le Clipperton",
  AC: "??le de l'Ascension",
  IM: "??le de Man",
  NF: "??le Norfolk",
  AX: "??les ??land",
  KY: "??les Ca??mans",
  IC: "??les Canaries",
  CC: "??les Cocos - Keeling",
  CK: "??les Cook",
  FO: "??les F??ro??",
  HM: "??les Heard et MacDonald",
  FK: "??les Malouines",
  MP: "??les Mariannes du Nord",
  MH: "??les Marshall",
  UM: "??les Mineures ??loign??es des ??tats-Unis",
  SB: "??les Salomon",
  TC: "??les Turks et Ca??ques",
  VG: "??les Vierges britanniques",
  VI: "??les Vierges des ??tats-Unis",
  IN: "Inde",
  ID: "Indon??sie",
  IQ: "Irak",
  IR: "Iran",
  IE: "Irlande",
  IS: "Islande",
  IL: "Isra??l",
  IT: "Italie",
  JM: "Jama??que",
  JP: "Japon",
  JE: "Jersey",
  JO: "Jordanie",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KG: "Kirghizistan",
  KI: "Kiribati",
  KW: "Kowe??t",
  LA: "Laos",
  LS: "Lesotho",
  LV: "Lettonie",
  LB: "Liban",
  LR: "Lib??ria",
  LY: "Libye",
  LI: "Liechtenstein",
  LT: "Lituanie",
  LU: "Luxembourg",
  MK: "Mac??doine",
  MG: "Madagascar",
  MY: "Malaisie",
  MW: "Malawi",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malte",
  MA: "Maroc",
  MQ: "Martinique",
  MU: "Maurice",
  MR: "Mauritanie",
  YT: "Mayotte",
  MX: "Mexique",
  MD: "Moldavie",
  MC: "Monaco",
  MN: "Mongolie",
  ME: "Mont??n??gro",
  MS: "Montserrat",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibie",
  NR: "Nauru",
  NP: "N??pal",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nig??ria",
  NU: "Niue",
  NO: "Norv??ge",
  NC: "Nouvelle-Cal??donie",
  NZ: "Nouvelle-Z??lande",
  OM: "Oman",
  UG: "Ouganda",
  UZ: "Ouzb??kistan",
  PK: "Pakistan",
  PW: "Palaos",
  PA: "Panama",
  PG: "Papouasie-Nouvelle-Guin??e",
  PY: "Paraguay",
  NL: "Pays-Bas",
  PE: "P??rou",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Pologne",
  PF: "Polyn??sie fran??aise",
  PR: "Porto Rico",
  PT: "Portugal",
  QA: "Qatar",
  HK: "R.A.S. chinoise de Hong Kong",
  MO: "R.A.S. chinoise de Macao",
  QO: "r??gions ??loign??es de l???Oc??anie",
  CF: "R??publique centrafricaine",
  CD: "R??publique d??mocratique du Congo",
  DO: "R??publique dominicaine",
  CZ: "R??publique tch??que",
  RE: "R??union",
  RO: "Roumanie",
  GB: "Royaume-Uni",
  RU: "Russie",
  RW: "Rwanda",
  EH: "Sahara occidental",
  BL: "Saint-Barth??l??my",
  KN: "Saint-Kitts-et-Nevis",
  SM: "Saint-Marin",
  MF: "Saint-Martin",
  PM: "Saint-Pierre-et-Miquelon",
  VC: "Saint-Vincent-et-les Grenadines",
  SH: "Sainte-H??l??ne",
  LC: "Sainte-Lucie",
  WS: "Samoa",
  AS: "Samoa am??ricaines",
  ST: "Sao Tom??-et-Principe",
  SN: "S??n??gal",
  RS: "Serbie",
  CS: "Serbie-et-Mont??n??gro",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapour",
  SK: "Slovaquie",
  SI: "Slov??nie",
  SO: "Somalie",
  SD: "Soudan",
  LK: "Sri Lanka",
  SE: "Su??de",
  CH: "Suisse",
  SR: "Suriname",
  SJ: "Svalbard et ??le Jan Mayen",
  SZ: "Swaziland",
  SY: "Syrie",
  TJ: "Tadjikistan",
  TW: "Ta??wan",
  TZ: "Tanzanie",
  TD: "Tchad",
  TF: "Terres australes fran??aises",
  IO: "Territoire britannique de l'oc??an Indien",
  PS: "Territoire palestinien",
  TH: "Tha??lande",
  TL: "Timor oriental",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinit??-et-Tobago",
  TA: "Tristan da Cunha",
  TN: "Tunisie",
  TM: "Turkm??nistan",
  TR: "Turquie",
  TV: "Tuvalu",
  UA: "Ukraine",
  EU: "Union europ??enne",
  UY: "Uruguay",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vi??t Nam",
  WF: "Wallis-et-Futuna",
  YE: "Y??men",
  ZM: "Zambie",
  ZW: "Zimbabwe",
};

export default SelectCountryDialogue;
