import justinT from "./../assets/headshots/justinT.svg";
import shayan from "./../assets/headshots/shayan.svg";
import wali from "./../assets/headshots/wali.svg";
import jaedon from "./../assets/headshots/jaedon.jpg";
import kaushal from "./../assets/headshots/kaushal.jpg";
import josh from "./../assets/headshots/josh.jpg";
import baaj from "./../assets/headshots/baaj.png";
import maanay from "./../assets/headshots/maanay.jpg"
import hamza from "./../assets/headshots/hamza.png"
import ivan from "./../assets/headshots/ivan.jpg"
import jacob from "./../assets/headshots/jacob.jpg"
import justinY from "./../assets/headshots/justinY.jpg";
import krish from "./../assets/headshots/krish.jpg";
import michael from "./../assets/headshots/michael.jpg";
import parneet from "./../assets/headshots/parneet.jpg";
import pranav from "./../assets/headshots/pranav.jpg";
import tinisha from "./../assets/headshots/tinisha.png";
import tyler from "./../assets/headshots/tyler.jpg";
import zain from "./../assets/headshots/zain.jpg";
import david from "./../assets/headshots/david.jpg";
import cameron from "./../assets/headshots/cameron.jpg";
import melody from "./../assets/headshots/melody.jpg"
import erin from "./../assets/headshots/erin.jpg";
import valence from "./../assets/headshots/valence.jpg";
import jason from "./../assets/headshots/jason.jpg";
import talal from "./../assets/headshots/talal.jpg";
import rabia from "./../assets/headshots/rabia.jpg";
import michaelT from "./../assets/headshots/michaelT.jpg"
import tarun from "./../assets/headshots/tarun.jpg"
import seba from "./../assets/headshots/seba.jpg"
import samira from "./../assets/headshots/samira.jpg"
import saad from "./../assets/headshots/saad.jpg"
import karman from "./../assets/headshots/karman.jpg"
import melanie from "./../assets/headshots/melanie.jpg"
import maruf from "./../assets/headshots/maruf.png"
import birnavan from "./../assets/headshots/birnavan.jpg"
import aleena from "./../assets/headshots/aleena.jpg"
import kabisha from "./../assets/headshots/kabisha.jpg"
import mona from "./../assets/headshots/mona.jpg"
import sushant from "./../assets/headshots/sushant.jpg"
import hiba from "./../assets/headshots/hiba.png"
import jessica from "./../assets/headshots/jessica.png"
import veera from "./../assets/headshots/veera.jpg"





type TeamMember = {
  id: string;
  name: string;
  position: string;
  headshot: string;
  alt: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "justinT",
    name: "Justin Tran",
    position: "VP of Design",
    headshot: justinT,
    alt: "Justin Tran headshot",
  },
   {
    id: "Melody",
    name: "Melody Kong",
    position: "VP of Design",
    headshot: melody,
    alt: "Melody headshot",
  },
   {
    id: "cameron",
    name: "Cameron Grenier",
    position: "Director of Design",
    headshot: cameron,
    alt: "Cameron headshot",
  },
   {
    id: "erin",
    name: "Erin Liu",
    position: "Director of Design",
    headshot: erin,
    alt: "Erin headshot",
  },
   {
    id: "val",
    name: "Valence Agborchi",
    position: "Director of Design",
    headshot: valence,
    alt: "Valence headshot",
  },
  {
    id: "jaedon",
    name: "Jaedon Visva",
    position: "VP of Tech",
    headshot: jaedon,
    alt: "Jaedon headshot",
  },
  {
    id: "shayan",
    name: "Shayan Dhillon",
    position: "VP of Tech",
    headshot: shayan,
    alt: "Shayan headshot",
  },
   {
    id: "kaushal",
    name: "Kaushal Subramani",
    position: "VP of Tech",
    headshot: kaushal,
    alt: "Shayan headshot",
  },
   {
    id: "Josh",
    name: "Josh Llorin",
    position: "Director of Tech",
    headshot: josh,
    alt: "Shayan headshot",
  },
    {
    id: "Baaj",
    name: "Baajdeep Boparai",
    position: "VP of Corporate",
    headshot: baaj,
    alt: "Baaj headshot",
  },
  {
    id: "Maanay",
    name: "Maanay Shaikh",
    position: "VP of Corporate",
    headshot: maanay,
    alt: "Maanay headshot",
  },
  {
    id: "Hamza",
    name: "Hamza Adnan",
    position: "Director of Corporate",
    headshot: hamza,
    alt: "Hamza headshot",
  },
   {
    id: "Ivan",
    name: "Ivan Zeng",
    position: "Director of Corporate",
    headshot: ivan,
    alt: "Ivan headshot",
  },
  {
    id: "Jacob",
    name: "Jacob Habte",
    position: "Director of Corporate",
    headshot: jacob,
    alt: "Jacob headshot",
  },
   {
    id: "JustinY",
    name: "Justin Yao",
    position: "Director of Corporate",
    headshot: justinY,
    alt: "JustinY headshot",
  },
   {
    id: "kabisha",
    name: "Kabisha Saseendran",
    position: "Director of Corporate",
    headshot: kabisha,
    alt: "kabisha headshot",
  },
    {
    id: "krish",
    name: "Krish Shah",
    position: "Director of Corporate",
    headshot: krish,
    alt: "Krish headshot",
  },
   {
    id: "michael",
    name: "Michael Bainbridge",
    position: "Director of Corporate",
    headshot: michael,
    alt: "michael headshot",
  },
  {
    id: "parneet",
    name: "Parneet Saini",
    position: "Director of Corporate",
    headshot: parneet,
    alt: "parneet headshot",
  },
  {
    id: "pranav",
    name: "Pranav Suresh",
    position: "Director of Corporate",
    headshot: pranav,
    alt: "pranav headshot",
  },
  {
    id: "tinisha",
    name: "Tinisha Babbar",
    position: "Director of Corporate",
    headshot: tinisha,
    alt: "tinisha headshot",
  },
  {
    id: "tyler",
    name: "Tyler Marriott",
    position: "Director of Corporate",
    headshot: tyler,
    alt: "tyler headshot",
  },
   {
    id: "veera",
    name: "Veera Patel",
    position: "Director of Corporate",
    headshot: veera,
    alt: "veera headshot",
  },
   {
    id: "zain",
    name: "Zain Babar",
    position: "Director of Corporate",
    headshot: zain,
    alt: "zain headshot",
  },
    {
    id: "david",
    name: "David Raicu",
    position: "Director of Corporate",
    headshot: david,
    alt: "david headshot",
  },
    {
    id: "jason",
    name: "Jason Francis",
    position: "VP of Operations",
    headshot: jason,
    alt: "jason headshot",
  },
    {
    id: "talal",
    name: "Talal Tariq",
    position: "Director of Operations",
    headshot: talal,
    alt: "talal headshot",
  },
  {
    id: "rabia",
    name: "Rabia Durrani",
    position: "Director of Operations",
    headshot: rabia,
    alt: "rabia headshot",
  },
  {
    id: "michael",
    name: "Michael Tahirovic",
    position: "Director of Operations",
    headshot: michaelT,
    alt: "michaelT headshot",
  },
  {
    id: "tarun",
    name: "Tarundeep Kaur",
    position: "VP of Education",
    headshot: tarun,
    alt: "tarun headshot",
  },
  {
    id: "Seba",
    name: "Seba Parackal",
    position: "Director of Education",
    headshot: seba,
    alt: "seba headshot",
  },
  {
    id: "samira",
    name: "Samira Kaur",
    position: "Director of Education",
    headshot: samira,
    alt: "samira headshot",
  },
  {
    id: "saad",
    name: "Saad Rehan",
    position: "VP of Finance",
    headshot: saad,
    alt: "saad headshot",
  },
   {
    id: "karman",
    name: "Karmanjot Baidwan",
    position: "VP of Finance",
    headshot: karman,
    alt: "karman headshot",
  },
   {
    id: "melanie",
    name: "Melanie Ong",
    position: "VP of Internal",
    headshot: melanie,
    alt: "melanie headshot",
  },
   {
    id: "maruf",
    name: "Maruf Hossain",
    position: "VP of Internal",
    headshot: maruf,
    alt: "maruf headshot",
  },
  {
    id: "birnavan",
    name: "Birnavan Varnacumaaran",
    position: "VP of Marketing",
    headshot: birnavan,
    alt: "birnavan headshot",
  },
  {
    id: "Aleena",
    name: "Aleena Rashid",
    position: "Director of Marketing",
    headshot: aleena,
    alt: "Aleena headshot",
  },
   {
    id: "mona",
    name: "Mona Eletr",
    position: "VP of Strategy",
    headshot: mona,
    alt: "mona headshot",
  },
  {
    id: "wali",
    name: "Ahmad Wali",
    position: "President",
    headshot: wali,
    alt: "Wali headshot",
  },
  {
    id: "hiba",
    name: "Hiba Fatima",
    position: "President",
    headshot: hiba,
    alt: "hiba headshot",
  },
   {
    id: "sushant",
    name: "Sushant Sah",
    position: "E-President",
    headshot: sushant,
    alt: "sushant headshot",
  },
   {
    id: "jessica",
    name: "Jessica Tidd",
    position: "E-President",
    headshot: jessica,
    alt: "Jessica headshot",
  },
];
