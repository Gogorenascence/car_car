import React from "react";

class SalesAddAgent extends React.Component{
    state = {
      sales_name: "",
      employee_number: "",
    }

    handleSubmit = async(event)=> {
      event.preventDefault();
      const data = {...this.state};
      delete data.sales_person

      const sales_personUrl = 'http://localhost:8090/api/agents/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(sales_personUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
              sales_name: "",
              employee_number: "",
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
          <h1>Create a new agent</h1>
          <form onSubmit={this.handleSubmit} id="create-agent-form">
            <div className="form-floating mb-3">
              <input onChange={this.handleInputChange} value={this.state.sales_name}  placeholder="sales_name" required type="text" name="sales_name" id="sales_name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleInputChange} value={this.state.employee_number}  placeholder="employee_number" required type="text" name="employee_number" id="employee_number" className="form-control" />
              <label htmlFor="employee_number">Employee number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          </div>
        </div>
      </div>
  );
}
}
export default SalesAddAgent;
