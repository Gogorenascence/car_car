import React, { useEffect, useState } from "react";

function ServiceAppointmentList(){

    const [appointments, setAppointments] = useState([]);
    const getAppointmentData = async() => {
        const response = await fetch("http://localhost:8080/api/appointments/")
        if (response.ok) {
            const data = await response.json();
            data.appointments = data.appointments.filter(appointment=>appointment.app_status === "APPROVED");
            setAppointments(data.appointments)
          }
    }

    useEffect(()=>{
        getAppointmentData()
    },[]
    )

    return(

        <div>
            <h1>
                Scheduled Appointments
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
                    {appointments.map(appointment=> {
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

export default ServiceAppointmentList;
