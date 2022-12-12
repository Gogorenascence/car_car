import React, { useEffect, useState } from "react";

function InventoryManufacturerList(){
    const [manufacturers, setManufacturer] = useState([])

    const getManufacturerData = async() => {
        const response = await fetch("http://localhost:8100/api/manufacturers/")
        const data = await response.json()
        setManufacturer(data.manufacturers)
    }

    useEffect(()=>{
        getManufacturerData()
    },[]
    )

    return(
        <div>
            <h1>
                Manufacturers In Inventory
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers?.map(manufacturer=> {
                    return(
                    <tr key={manufacturer.id}>
                        <td> { manufacturer.name }</td>
                    </tr>
                    ) })}
                </tbody>
            </table>
        </div>
    )
}

export default InventoryManufacturerList;
