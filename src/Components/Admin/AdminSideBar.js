import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    const sideBarData = [
        {title:'Orders Management',url:'/admin/allorders',},
        {title:'Products Management',url:'/admin/allproducts',},
        {title:'Add brand',url:'/admin/addbrand',},
        {title:'Add Category',url:'/admin/addcategory',},
        {title:'Add a subcategory',url:'/admin/addsubcategory',},
        {title:'Add Product',url:'/admin/addproduct',},
    ]
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                {sideBarData.map((e,i) => (
                    <Link key={i} to={e.url} style={{ textDecoration: 'none' }}>
                        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                            {e.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AdminSideBar