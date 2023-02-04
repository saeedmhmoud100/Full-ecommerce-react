import React from "react";
import {Spinner} from "react-bootstrap";
import useRandomNum from "../../hooks/useRandomNum";

function LoadingSpinner({animation, variant}){
    let anim,vari;
    if(animation === undefined){
        anim =['border','grow']
    }else {
        anim=[animation]
    }
    if(variant === undefined){
        vari =['primary','secondary','success','danger','warning','info','dark',]
    }else {
        vari=[variant]
    }
    return(
        <Spinner animation={anim[useRandomNum(anim)]} variant={vari[useRandomNum(vari)]} className='align-self-center'></Spinner>
    )
}

export default LoadingSpinner