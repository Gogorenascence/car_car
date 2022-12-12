import React from "react";

class ServiceAddTech extends React.Component{
    state = {
      tech_name: '',
      emp_number: '',
    }

    handleSubmit = async(event)=> {
      event.preventDefault();
      const data = {...this.state};


      const technicianUrl = 'http://localhost:8080/api/technicians/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
            const cleared = {
              tech_name: '',
              emp_number:''
          };

          this.setState(cleared);
        }
      }

      handleInputChange = (event)=> {
        const value = event.target.value;
        this.setState({[event.target.id]:value})
      }

render(){

    return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create A New Technician</h1>
          <form onSubmit={this.handleSubmit} id="create-agent-form">

            <div className="form-floating mb-3">
              <input
              onChange={this.handleInputChange}
              value={this.state.tech_name}
              placeholder="tech_name"
              required type="text"
              name="tech_name"
              id="tech_name"
              className="form-control" />
              <label htmlFor="tech_name">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
              onChange={this.handleInputChange}
              value={this.state.emp_number}
              placeholder="emp_number"
              required type="text"
              name="emp_number"
              id="emp_number"
              className="form-control" />
              <label htmlFor="emp_number">Employee Number</label>
            </div>

            <button className="btn btn-primary">Create</button>
          </form>
          </div>
        </div>
      </div>
  );
}
}
export default ServiceAddTech;
