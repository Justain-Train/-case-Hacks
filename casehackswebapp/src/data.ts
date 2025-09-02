import microsoft from "./assets/sponsorlogos/microsoft.svg"
import shopify from "./assets/sponsorlogos/shopify.svg";
import pwc from "./assets/sponsorlogos/pwc.svg";
import amazon from "./assets/sponsorlogos/amazon.svg";
import wealthsimple from "./assets/sponsorlogos/wealthsimple.svg";
import reddit from "./assets/sponsorlogos/reddit.svg";
import dropbase from "./assets/sponsorlogos/dropbase.svg";
import sunlife from "./assets/sponsorlogos/sunlife.svg";
import redbull from "./assets/sponsorlogos/redbull.svg";
import rogers from "./assets/sponsorlogos/rogers.svg";
import onepassword from "./assets/sponsorlogos/onepassword.svg"

type Sponsors = {
  title : string,
  logo: string,
  src: string,
  alt : string
}


type FAQType = {
  question: string;
  answer: string;
};

export const FAQDATA: FAQType[] = [
  {
    question : "What is a [case]-based hackathon?",
    answer : "It's a case competition where participants will pitch an actualization of their solution. Judging criteria is not focused on programming ability, but instead on design, presentation, delivery and creativity of solutions."
  },
  {
    question : "Do I need to know how to code?",
    answer : "Nope! The usage of AI and generative development technology, such as Copilot, Cursor, Claude, and many others, is strongly encouraged for first-time programmers to introduce themselves to using technology in new ways. The goal is not to build your solutions from scratch, but to design them with the help of these tools."
  },
  {
    question : "Who can participate",
    answer : "Everyone! Our competition is meant for anybody with an interest in design, development and presentation. Students of all years with a background in Business, Economics, Computer Science, Data Science or any adjacent field are all on equal footing. [case]Hacks takes the delivery of [case] competitions, with the creativity of hackathons, to deliver a competition that’s the first of its kind."
  },
  {
    question: "When and where will the competition be?",
    answer: "Stay tuned 😉"
  },
  {
    question: "Who is the handsome hawk?",
    answer: "Casey! He's a first-year CS/BBA student who loves developing his dream projects. Right now he's not sure if he likes hackathons more or case competitions, so he's helping us build something right in between."
  },
  {
    question: "Do I need to know how to pitch?",
    answer: "Nope! We will teach you 🙂 It's our mission to help students of all backgrounds learn skills complementary to their curriculum. Our hands-on workshops led by upper-year students are geared toward helping beginners understand the do's and dont's of presenting."
  },
  {
    question:"Is it free?",
    answer: "Yup! All of our workshops, resources and competitions are free."
  },
  {
    question: "What else do you do other than competitions?",
    answer: "We offer tons of experiences for workshops, networking and learning. Follow us on our social media to stay up to date with new events and opportunities coming soon!"
  }
]
  

export const SPONSORS : Sponsors[] = [
  {
    title : "microsoft",
    logo : microsoft,
    src: "https://www.microsoft.com/en-ca/about",
    alt : "Microsoft_logo"
  },
  {
    title : "shopify",
    logo: shopify,
    src: "https://www.shopify.com",
    alt: "Shopify_logo"
  },
  {
    title: "pwc",
    logo: pwc,
    src: "https://www.pwc.com",
    alt : "pwc_logo"
  },
  {
    title:  "amazon",
    logo: amazon,
    src: "https://www.aboutamazon.com/about-us",
    alt: "amazon_logo"
  },
  {
    title: "wealthsimple",
    logo: wealthsimple,
    src: "https://www.wealthsimple.com/en-ca/about",
    alt: "wealthsimple_logo"
  },
  {
    title: "reddit",
    logo: reddit,
    src: "https://www.business.reddit.com/learn/what-is-reddit",
    alt: "reddit_logo"
  },
  {
    title: "dropbase",
    logo: dropbase,
    src: "https://www.dropbase.com",
    alt: "dropbase_logo"
  },
  {
    title: "sunlife",
    logo: sunlife,
    src: "https://www.sunlife.ca/en/",
    alt: "sunlife_logo"
  },
  {
    title: "redbull",
    logo: redbull,
    src: "https://www.redbull.com/ca-en/energydrink/company-profile",
    alt: "redbull_logo"
  },
  {
    title: "rogers",
    logo: rogers,
    src: "https://about.rogers.com/",
    alt: "rogers_logo"
  },
  {
    title: "1password",
    logo: onepassword,
    src: "https://www.1password.com",
    alt: "1password_logo"
  }
]

