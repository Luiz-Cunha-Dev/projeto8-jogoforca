import React from "react";
import { useState } from "react";
import forca0 from "./img/forca0.png";
import forca1 from "./img/forca1.png";
import forca2 from "./img/forca2.png";
import forca3 from "./img/forca3.png";
import forca4 from "./img/forca4.png";
import forca5 from "./img/forca5.png";
import forca6 from "./img/forca6.png";
import palavras from "./palavras";


const letras = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];

export default function App(){

    const letras = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];
    const [letrasPalavraSorteada, setletrasPalavraSorteada]= useState([]);
    const [selecionadas, setSelecionadas] = useState([]);
    const [letrasRestantes, setLetrasRestantes] = useState([]);


    function sortearPalavra(array){
        let posição = Math.floor(Math.random() * (array.length - 1));
        let palavraSorteada = array[posição];
        let letrasPalavra = [];
        let arrayDetraços = [];
        
        for(let i = 0; i < palavraSorteada.length; i++){
            letrasPalavra.push(palavraSorteada[i]);
            arrayDetraços.push("_");
        }
        console.log(letrasPalavra)
        setletrasPalavraSorteada(letrasPalavra);
        setSelecionadas([]);
        setLetrasRestantes(arrayDetraços);
    }


    function selecionarLetra(index){
        if(!selecionadas.includes(index)){
            let novaArray = [...selecionadas, index];
            setSelecionadas(novaArray)
            console.log(novaArray);
            mostraLetra(letras[index])
        }

    }

    function mostraLetra(letra){
        let letrasAcertadas = [...letrasRestantes]
        for(let i = 0; i < letrasPalavraSorteada.length; i++){
            if(letra.toLowerCase() === letrasPalavraSorteada[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
                letrasAcertadas[i] = letrasPalavraSorteada[i];
                setLetrasRestantes(letrasAcertadas)
            }
        }
        
    }


    return(
        <div className="container">
        <div className="principal">
            <img src={forca0} />    
            <div className="direita">
                <button onClick={() => sortearPalavra(palavras)}>Escolher Palavra</button>
                <div className="palavra">
                    {letrasRestantes.map((l, index) => <div key={index} className="letra">{l}</div> )}
        
                </div>
            </div>
        </div>
        <div className="letras">
            {letras.map((l, index) => <div key={index} onClick={() => selecionarLetra(index)}
             className={`bloco-letra ${selecionadas.includes(index) ? "selecionado" : "" }`}
            >{l}</div>)}
        </div>
        <div className="chutar">
            <span>Já sei a palavra!</span>
            <input type="text"/>
            <button>Chutar</button>
        </div>
        </div>
    )
}

