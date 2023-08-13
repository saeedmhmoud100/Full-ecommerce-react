import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
    const sideBarData = [
        {title:'Orders Management',url:'/Full-ecommerce-react/user/allorders',},
        {title:'Favorite Products',url:'/Full-ecommerce-react/user/favoriteproducts',},
        {title:'Personal Addresses',url:'/Full-ecommerce-react/user/addresses',},
        {title:'Profile',url:'/Full-ecommerce-react/user/profile',},
    ]
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                {sideBarData.map(e => (
                    <Link to={e.url} style={{ textDecoration: 'none' }}>
                        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                            {e.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default UserSideBar