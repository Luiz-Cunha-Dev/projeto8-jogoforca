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


<<<<<<< HEAD
=======
const letras = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];
>>>>>>> 08256ea159c31114e6d3ea8a7d7b641945e6e9ef

export default function App(){

    const letras = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];
    const [letrasPalavraSorteada, setletrasPalavraSorteada]= useState([]);
    const [selecionadas, setSelecionadas] = useState([]);
    const [letrasRestantes, setLetrasRestantes] = useState([]);
<<<<<<< HEAD
    const [contadorErros, setContadorErros] = useState(0);
    const [contadorAcertos, setContadorAcertos] = useState(0);
    const [palavraChute, setPalavraChute] = useState("");
    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
=======
>>>>>>> 08256ea159c31114e6d3ea8a7d7b641945e6e9ef


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
<<<<<<< HEAD
        setContadorAcertos(0);
        setContadorErros(0);
        setPalavraChute("");
=======
>>>>>>> 08256ea159c31114e6d3ea8a7d7b641945e6e9ef
    }


    function selecionarLetra(index){
<<<<<<< HEAD
        if(!selecionadas.includes(index) && letrasRestantes.length !== 0){
            let novaArray = [...selecionadas, index];
            setSelecionadas(novaArray)
=======
        if(!selecionadas.includes(index)){
            let novaArray = [...selecionadas, index];
            setSelecionadas(novaArray)
            console.log(novaArray);
>>>>>>> 08256ea159c31114e6d3ea8a7d7b641945e6e9ef
            mostraLetra(letras[index])
        }

    }

    function mostraLetra(letra){
<<<<<<< HEAD
        let letrasAcertadas = [...letrasRestantes];
        let contadorDeAcertos = 0;
        let contadorDeErros = -1*(letrasPalavraSorteada.length);

        if(contadorAcertos < letrasPalavraSorteada.length){
            for(let i = 0; i < letrasPalavraSorteada.length; i++){
            if(letra.toLowerCase() === letrasPalavraSorteada[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
                letrasAcertadas[i] = letrasPalavraSorteada[i];
                setLetrasRestantes(letrasAcertadas);
                contadorDeAcertos++
            }else{
                contadorDeErros++
            }
        }
        setContadorAcertos(contadorAcertos + contadorDeAcertos)
        if(contadorDeErros === 0){
            if(contadorErros !== 6){
                setContadorErros(contadorErros + 1)
            }

        }}
    }

    function chutarPalavra(){
       let arrayPalavraChute = [];
       let arrayPalavra= [];
       let contador = 0;

       if(contadorAcertos < letrasPalavraSorteada.length && contadorErros < 6){
        for(let i = 0; i < palavraChute.length; i++){
            arrayPalavraChute.push(palavraChute[i])
        }

        for(let i = 0; i < letrasPalavraSorteada.length; i++){
            arrayPalavra.push(letrasPalavraSorteada[i].normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        }

        
        for(let i = 0; i < letrasPalavraSorteada.length; i++){

            if(palavraChute[i] === undefined){         
            }
            else if(palavraChute[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === arrayPalavra[i]){
                contador++
            }

            if(contador === letrasPalavraSorteada.length){
                setLetrasRestantes(letrasPalavraSorteada);
                setContadorAcertos(letrasPalavraSorteada.length)
                setContadorErros(contadorErros);
            }else{
                setContadorErros(6);
            }
        }

}
=======
        let letrasAcertadas = [...letrasRestantes]
        for(let i = 0; i < letrasPalavraSorteada.length; i++){
            if(letra.toLowerCase() === letrasPalavraSorteada[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
                letrasAcertadas[i] = letrasPalavraSorteada[i];
                setLetrasRestantes(letrasAcertadas)
            }
        }
        
>>>>>>> 08256ea159c31114e6d3ea8a7d7b641945e6e9ef
    }


    return(
        <div className="container">
        <div className="principal">
<<<<<<< HEAD
            <img data-identifier={`game-image`} src={imagens[contadorErros]} />    
            <div className="direita">
                <button data-identifier="choose-word" onClick={() => sortearPalavra(palavras)}>Escolher Palavra</button>
                <div className={`palavra 
                ${(contadorErros === 6) ? "vermelho" : ""}
                 ${(contadorAcertos === letrasPalavraSorteada.length) ? "verde" : ""}`}>
                    {(contadorErros === 6 ? letrasPalavraSorteada : letrasRestantes).map((l, index) => <div data-identifier={`word`} key={index} className="letra">{l}</div> )}
=======
            <img src={forca0} />    
            <div className="direita">
                <button onClick={() => sortearPalavra(palavras)}>Escolher Palavra</button>
                <div className="palavra">
                    {letrasRestantes.map((l, index) => <div key={index} className="letra">{l}</div> )}
>>>>>>> 08256ea159c31114e6d3ea8a7d7b641945e6e9ef
        
                </div>
            </div>
        </div>
        <div className="letras">
<<<<<<< HEAD
            {letras.map((l, index) => <div  data-identifier={`letter`} key={index}  onClick={() => selecionarLetra(index)}
             className={`bloco-letra 
             ${selecionadas.includes(index) ? "selecionado" : "" }
             ${(letrasRestantes.length === 0) ? "selecionado" : "" }
             ${contadorErros === 6 ? "selecionado" : ""}
             ${contadorAcertos === letrasPalavraSorteada.length ? "selecionado" : ""}
             `}>{l}</div>)}
        </div>
        <div className="chutar" >

            <span>Já sei a palavra!</span>
            <input type="text"
            data-identifier={`type-guess`}
            value={palavraChute}
            onChange={e => setPalavraChute(e.target.value)}
            />
            <button data-identifier="guess-button" className={` 
             ${(letrasRestantes.length === 0) ? "botao-selecionado" : "botao-chutar"}
             ${contadorErros === 6 ? "botao-selecionado" : "botao-chutar"}
             ${contadorAcertos === letrasPalavraSorteada.length ? "botao-selecionado" : "botao-chutar"}
             `}
              onClick={chutarPalavra}>Chutar</button>
=======
            {letras.map((l, index) => <div key={index} onClick={() => selecionarLetra(index)}
             className={`bloco-letra ${selecionadas.includes(index) ? "selecionado" : "" }`}
            >{l}</div>)}
        </div>
        <div className="chutar">
            <span>Já sei a palavra!</span>
            <input type="text"/>
            <button>Chutar</button>
>>>>>>> 08256ea159c31114e6d3ea8a7d7b641945e6e9ef
        </div>
        </div>
    )
}

