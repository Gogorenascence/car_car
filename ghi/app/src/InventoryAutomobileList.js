import React, { useEffect, useState } from "react";

function InventoryAutomobileList(){
    const [automobiles, setAutomobiles] = useState([])

    const getAutomobileData = async() => {
        const response = await fetch("http://localhost:8100/api/automobiles/")
        const data = await response.json()
        setAutomobiles(data.autos)
    }

    useEffect(()=>{
        getAutomobileData()
    },[]
    )

    return(

        <div>
            <h1>
                Automobiles In Inventory
            </h1>
            <table className="table table-success table-hover table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {automobiles?.map(automobile=> {
                    return(
                    <tr key={automobile.id}>
                        <td> { automobile.vin }</td>
                        <td> { automobile.color }</td>
                        <td> { automobile.year }</td>
                        <td> { automobile.model.name }</td>
                        <td> { automobile.model.manufacturer.name }</td>
                    </tr>
                    ) })}
                </tbody>
            </table>
        </div>

    )
}

export default InventoryAutomobileList;
