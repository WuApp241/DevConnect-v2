import imageSterge   from "../../assets/img/sterge.png";
import imageAbdoul   from "../../assets/img/abdoul.png";
import imageDodge    from "../../assets/img/dodge.png";
import imageMarva    from "../../assets/img/marva.png";
import imageJordan   from "../../assets/img/Jordan.png";
import imageFatou    from "../../assets/img/Fatou.png";
import imageJeannisca from "../../assets/img/jeannisca.png";

export type Developpeur = {
  nom: string;
  specialite: string;
  outils: string[];
  image: string;
  lienPortfolio: string;
};

export const developpeurs: Developpeur[]= [
    {
        nom: "Sterge Dorsel MBADINGA MBADINGA",
        specialite: "Developpeur Front-end",
        outils: ["HTML", "CSS", "Figma", "Github", "JavaScript", "React", "VueJS", "NodeJS"],
        image: imageSterge,
        lienPortfolio: "https://tonton-dxy.github.io/TontonDXY.github.io/",
    },
    {
        nom: "BAKARY Abdoul WADOUD",
        specialite: "Developpeur Fullstack",
        outils: ["HTML", "CSS", "TypeScript", "Next.Js",  "Node.js", "ExpressJS", "Figma", "Github", "MySQL"],
        image: imageAbdoul,
        lienPortfolio: "https://abdoul-12.github.io/My-portfolio/",
    },
    {
        nom: "Dodge Elfry NGUIA",
        specialite: "Developpeur Fullstack",
        outils: ["HTML", "CSS", "TypeScript", "Next.Js", "React", "Node.js", "ExpressJS", "Figma", "Github", "MySQL"],
        image: imageDodge,
        lienPortfolio: "https://dodgeelfry.github.io/portfolio-updated/",
    },
    {
        nom: "Marva Lorene NSA",
        specialite: "Developpeur Fullstack",
        outils: ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git", "Next.js", "Node.js", "React", "Vs code"],
        image: imageMarva,
        lienPortfolio: "https://github.com/marvansa428-dev/portfolio-marva.git",
    },
    {
        nom: "Christ Jordan OBIANG",
        specialite: "Developpeur Front-end",
        outils: ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git"],
        image: imageJordan,
        lienPortfolio: "https://jordancode28.github.io/mon_portfolio/",
    },
    {
        nom: "Fatoumata NSANGOU",
        specialite: "Developpeur Front-end",
        outils: ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git"],
        image: imageFatou,
        lienPortfolio: "https://fatim007.github.io/Portfolio/",
    },
    {
        nom: "Jeannisca NGUINA",
        specialite: "Developpeur Front-end",
        outils: ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git"],
        image: imageJeannisca,
        lienPortfolio: " https://jeannisca.github.io/Portfolio_Jeanni/",
    },
    {
        nom: "Dorcas ANOUBALAMAH",
        specialite: "Developpeur Front-end",
        outils: [],
        image: "",
        lienPortfolio: "",
    },
    {
        nom: "Nancy MALAMENOU",
        specialite: "Developpeur Front-end",
        outils: [],
        image: "",
        lienPortfolio: "",
    },
    {
        nom: "Daliah OBAME",
        specialite: "Developpeur Front-end",
        outils: [],
        image: "",
        lienPortfolio: "",
    },
]