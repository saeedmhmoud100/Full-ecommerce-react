import React from "react";
import {Spinner} from "react-bootstrap";
import useRandomNum from "../../hooks/useRandomNum";

function LoadingSpinner({animation, variant,className,style}){
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
        <Spinner style={style} animation={anim[useRandomNum(anim)]} variant={vari[useRandomNum(vari)]} className={`align-self-center ${className}`}></Spinner>
    )
}

export default LoadingSpinner