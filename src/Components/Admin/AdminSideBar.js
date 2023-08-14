import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    const sideBarData = [
        {title:'Users Management',url:'/Full-ecommerce-react/admin/allusers',},
        {title:'Orders Management',url:'/Full-ecommerce-react/admin/allorders',},
        {title:'Add a New Product',url:'/Full-ecommerce-react/admin/addproduct',},
        {title:'Products Management',url:'/Full-ecommerce-react/admin/allproducts',},
        {title:'brands Management',url:'/Full-ecommerce-react/admin/addbrand',},
        {title:'Categories Management',url:'/Full-ecommerce-react/admin/addcategory',},
        {title:'subcategory Management',url:'/Full-ecommerce-react/admin/addsubcategory',},
        {title:'Coupons Management',url:'/Full-ecommerce-react/admin/coupons',},
        {title:'Profile',url:'/Full-ecommerce-react/admin/profile',},
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