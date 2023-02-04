import React from "react";
import {Spinner} from "react-bootstrap";

function LoadingSpinner({animation, variant}){
    let anim,vari;
    if(animation === undefined){
        anim =['border','grow']
    }else {
        anim=[animation]
    }
    if(variant === undefined){
        vari =['primary','secondary','success','danger','warning','info','light','dark',]
    }else {
        vari=[variant]
    }
    const rand_num = arr => Math.floor(Math.random()*arr.length)
    return(
        <Spinner animation={anim[rand_num(anim)]} variant={vari[rand_num(vari)]} className='align-self-center'></Spinner>
    )
}

export default LoadingSpinner