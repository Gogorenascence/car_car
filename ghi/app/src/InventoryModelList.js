import React, { useEffect, useState } from "react";

function InventoryModelList(){
    const [models, setModel] = useState([])

    const getModelData = async() => {
        const response = await fetch("http://localhost:8100/api/models/")
        const data = await response.json()
        setModel(data.models)
    }

    useEffect(()=>{
        getModelData()
    },[]
    )

    return(

        <div>
            <h1>
                Models In Inventory
            </h1>
            <table className="table table-success table-hover table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models?.map(model=> {
                    return(
                    <tr key={model.id}>
                        <td> { model.name }</td>
                        <td> {model.manufacturer.name }</td>
                        <td>
                        <td className="d-flex justify-contend-md-center"><img src={model.picture_url} alt="" width="300" height="1000" className="img-fluid img-thumbnail" /></td>
                        </td>
                    </tr>
                    ) })}
                </tbody>
            </table>
        </div>

    )
}

export default InventoryModelList;
