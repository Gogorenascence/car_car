import React, { useEffect, useState } from "react";

function SalesSalesList(){
    const [sales, setSales] = useState([])

    const getSaleData = async() => {
        const response = await fetch("http://localhost:8090/api/sales/")
        const data = await response.json()
        setSales(data.sales)
    }

    useEffect(()=>{
        getSaleData()
    },[]
    )

    return(
        <div>
            <h1>
                Sales History
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Agent</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale=> {
                    return(
                    <tr key={sale.id}>
                        <td>{sale.sales_person.sales_name}</td>
                        <td>{sale.customer.customer_name}</td>
                        <td>{sale.auto.vin}</td>
                        <td>${sale.price.toLocaleString()}</td>
                    </tr>
                    ) })}
                </tbody>
            </table>
        </div>
    )
}

export default SalesSalesList;
