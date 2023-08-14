import React from 'react'
import {Row} from "react-bootstrap";
import AdminAllUsersCard from "./AdminAllUsersCard";
import AdminAllUsersHook from "../../hooks/admin/Admin-All-Users-Hook";

function AdminAllUsers(){
    const [allUsersData,loading] = AdminAllUsersHook()
    return(
        <div>
            <div className='admin-content-text'>Management all Users #{(allUsersData && allUsersData.results) || 0}</div>
            <Row className={'p-sm-30px'} >
                {
                    allUsersData && allUsersData.results > 0 ? allUsersData.data.map(item => <AdminAllUsersCard userData={item}/>)
                        : <></>
                }


                {/*{*/}
                {/*    OrdersData&& OrdersData.results > 0 && OrdersData.data ?*/}
                {/*        OrdersData.data.map( item => <AdminAllOrdersItem OrdersData={item} admin={true}/>)*/}
                {/*        : <h3 className={'text-center mt-2'}>there are no orders yet</h3>*/}
                {/*}*/}
                {/*{*/}
                {/*    OrdersData&& OrdersData.results > 0 && OrdersData.paginationResult.numberOfPages > 1 &&*/}

                {/*    <Pagination pagesCount={OrdersData.paginationResult.numberOfPages} onPress={getOrdersData}/>*/}
                {/*}*/}
            </Row>
        </div>
    )
}

export default AdminAllUsers