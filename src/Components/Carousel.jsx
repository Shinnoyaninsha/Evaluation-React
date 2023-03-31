import React, {useEffect, useState} from "react"
import dataCarousel from "./DataCarousel"

let position=0;
let interval=null
export default function Carousel() {
    const [currentImg,setCurrentImg]= useState(dataCarousel[0]);

    const nextImg=()=> {
        position++;
        if(position>dataCarousel.length-1){
            position=0;
        }
        setCurrentImg(dataCarousel[position])
    }

    useEffect(()=>{
        interval = setInterval(() => {
            nextImg();
        }, 4000);
        return () => clearInterval(interval);
});

    return (
        <div>
            <figure>
                <img className='sliderimg' src={currentImg.url} alt={currentImg.alt}/>
                <figcaption className="caption">{currentImg.title}</figcaption>
            </figure>

            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie auctor blandit. Donec efficitur laoreet interdum. Cras tincidunt velit nisl, at feugiat urna dictum ac. Donec sagittis id felis a auctor. Morbi eleifend et odio ut dapibus. Maecenas ut vestibulum nunc. Donec bibendum suscipit porta. Donec vehicula pellentesque posuere. Donec tincidunt tortor et hendrerit cursus. Ut vel diam mi. Nullam id libero eu lorem sollicitudin laoreet. Sed vehicula posuere massa id ultricies. Fusce sit amet diam elit. Nullam eu arcu in dolor vehicula dapibus. Aliquam eu ultricies lacus. Nulla nec nisi at est consequat laoreet eget quis urna.
            </p>

            <p className="description">
                Carte sujet à changement, n'hésitez pas à revenir goûter nos autres plats, cuisinés par la belle Chantal
            </p>
        </div>
    );
}