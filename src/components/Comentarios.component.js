import React, { Component } from "react";


export default class Comenta extends Component {
    render(){
        return(

            <div className="container">

                <button className="styleofButtom" onClick={()=>document.getElementById("comentsection").style.display=""}>Comentar</button>
                
                <div id="comentsection" style={{display: "none"}}>
                    <hr />
                    <div>
                    <textarea id="textarea" className="input-text" placeholder="Nuevo comentario"></textarea>
                    <button className="btn-comentario">Realizar</button>
                    <button className="btn-cancelar" onClick={()=>document.getElementById("comentsection").style.display="none"}>Cancelar</button>
                    </div>
                </div>
                
            </div>

        )
    }
}