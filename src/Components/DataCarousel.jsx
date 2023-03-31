import {v4 as uuidv4} from "uuid";

const dataCarousel=[
    {
        id: uuidv4(),
        url:'/assets/la_table_de_chantal.jpg',
        title: "Une cuisine familiale et traditionnelle pour se sentir comme chez nous",
        alt: "Un restaurant très accueillant"
},
    {
        id:uuidv4(),
        url:'/assets/la_cuisine_de_chantal.jpg',
        title:"La table de Chantal, c'est aussi la cuisine de Chantal",
        alt:"Un plat très appétissant"
    },
    {
        id:uuidv4(),
        url:'/assets/le_sourire_de_chantal.jpg',
        title:"Mais surtout c'est le sourire de Chantal !",
        alt:"Un sourire de Chantal très charmant"
    }
];

export default dataCarousel;

