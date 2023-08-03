import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    const sideBarData = [
        {title:'Orders Management',url:'/admin/allorders',},
        {title:'Products Management',url:'/admin/allproducts',},
        {title:'Add a New Product',url:'/admin/addproduct',},
        {title:'brands Management',url:'/admin/addbrand',},
        {title:'Categories Management',url:'/admin/addcategory',},
        {title:'subcategory Management',url:'/admin/addsubcategory',},
        {title:'Coupons Management',url:'/admin/coupons',},
        {title:'Profile',url:'/admin/profile',},
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