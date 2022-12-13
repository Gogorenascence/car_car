import React, { useEffect, useState } from "react";

function ServiceAppointmentHistory(){
    const [appointments, setAppointments] = useState([])
    const [search, setSearch] = useState('')
    // const [results, setResults]= useState([])

    const getAppointmentData = async() => {
        const response = await fetch("http://localhost:8080/api/appointments/")
        const data = await response.json()
        setAppointments(data.appointments)
        setResults(data.appointments)
    }

    useEffect(()=>{
        getAppointmentData()
    },[]
    )

    return(

        <div>
        <form className="mx-2 d-inline w-100">
            <input type="text" className="form-control border border-right-0" placeholder="Search Vin Number" onChange={(e) => setSearch(e.target.value)} />
            <button>Search</button>
        </form>

            <h1>
               Appointment History
            </h1>
            <table className="table table-success table-hover table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                 <tbody>
                    {results?.map(appointment=> {
                    return(
                    <tr key={appointment.id}>
                        <td> { appointment.app_vin }</td>
                        <td> { appointment.cust_name }</td>
                        <td> { appointment.date }</td>
                        <td> { appointment.time }</td>
                        <td> { appointment.technician.tech_name }</td>
                        <td> { appointment.reason }</td>
                    </tr>
                    ) })}
                </tbody>
            </table>
        </div>

    )
}

export default ServiceAppointmentHistory;
