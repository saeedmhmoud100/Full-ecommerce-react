import React from "react";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import DeleteSubCategoriesHook from "../../hooks/subCategory/delete-subCategoty-hook";


const SubCategoriesCard = ({subCat,ii})=>{
    const [deleteLoading,handleDeleteClick] = DeleteSubCategoriesHook()
    // console.log(allData)
    return (

        <div key={ii} className={'px-1 d-inline-block'} style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '2px solid #CCC',
                    borderRadius: '10px',
                    marginRight: "2px"}}>{subCat.name}
            {
                    deleteLoading ?
                        <LoadingSpinner animation={'border'} variant={'primary'} style={{marginLeft:'7px',marginRight:'2px',width:'15px',height:'15px'}}></LoadingSpinner>
                        :
                        <i onClick={_=>handleDeleteClick(subCat._id) } className="fa-solid fa-xmark" style={{marginLeft:'7px',marginRight:'2px',cursor:'pointer'}} ></i>
            }
        </div>

    )
}

export default SubCategoriesCard