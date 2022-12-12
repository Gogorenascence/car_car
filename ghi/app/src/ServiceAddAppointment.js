import React from "react";
import { BrowserRouter } from "react-router-dom";



class ServiceAddAppointment extends React.Component{
    state = {
      app_vin: "",
      cust_name: "",
      date: "",
      time: "",
      reason: "",
      technician: "",
      technicians: [],
    }

  async componentDidMount() {
    const technicianUrl = "http://localhost:8080/api/technicians";

    const technicianResponse = await fetch(technicianUrl);


    if (technicianResponse.ok) {
      const data = await technicianResponse.json();
      console.log(data)
      this.setState({ technicians: data.technicians });
    }
  }


    handleSubmit = async(event)=> {
      event.preventDefault();
      const data = {...this.state};
      console.log(data)
    //   delete data.sales_persons;

      const appointmentUrl = 'http://localhost:8080/api/appointments/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify({
            "app_vin": this.state.app_vin,
			"cust_name": this.state.cust_name,
			"date": this.state.date,
			"time": this.state.time,
			"reason": this.state.reason,
			"app_status": this.state.app_status,
			"technician": this.state.technician,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            const cleared = {
                app_vin: "",
                cust_name: "",
                date: "",
                time: "",
                reason: "",
                technician: "",
            };
            this.setState(cleared);
          }
    };
        //
        // }


      handleInputChange = (event)=> {
        const value = event.target.value;
        this.setState({[event.target.id]:value})
      }

render(){

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create A New Appointment</h1>
            <form onSubmit={this.handleSubmit} id="create-appointment-form">
              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.vin}
                placeholder="app_vin"
                required type="text"
                name="app_vin"
                id="app_vin"
                className="form-control" />
                <label htmlFor="app_vin">Vin</label>
              </div>

              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.cust_name}
                placeholder="cust_name"
                required type="text"
                name="cust_name"
                id="cust_name"
                className="form-control" />
                <label htmlFor="cust_name">Customer Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.date}
                placeholder="date"
                required type="text"
                name="date"
                id="date"
                className="form-control" />
                <label htmlFor="date">Date</label>
              </div>
              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.time}
                placeholder="time"
                required type="text"
                name="time"
                id="time"
                className="form-control" />
                <label htmlFor="time">Time</label>
              </div>
              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.reason}
                placeholder="reason"
                required type="text"
                name="reason"
                id="reason"
                className="form-control" />
                <label htmlFor="reason">Reason</label>
              </div>
              <div className="mb-3">
                <select
                onChange={this.handleInputChange}
                required id="technician"
                name="technician"
                className="form-select">
                <option value="">Choose a Technician</option>
                  {this.state.technicians.map(technician => {
                    return (
                        <option key = {technician.id} value={technician.id}>
                          {technician.tech_name}
                        </option>
                    )
                    })};
                      </select>
                    </div>

              <button className="btn btn-primary">Create</button>
            </form>
            </div>
          </div>
        </div>


      );
    }
}
export default ServiceAddAppointment;
