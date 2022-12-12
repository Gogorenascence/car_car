import React from "react";

class SalesAddCustomer extends React.Component{
    state = {
      customer_name: "",
      address: "",
      phone_number: "",
    }

    handleSubmit = async(event)=> {
      event.preventDefault();
      const data = {...this.state};
      delete data.customer;

      const customerUrl = 'http://localhost:8090/api/customers/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
              customer_name: "",
              address: "",
              phone_number: "",
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
          <h1>Add a new customer</h1>
          <form onSubmit={this.handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
              <input onChange={this.handleInputChange} value={this.state.customer_name}  placeholder="customer_name" required type="text" name="customer_name" id="customer_name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleInputChange} value={this.state.address}  placeholder="address" required type="text" name="address" id="address" className="form-control" />
              <label htmlFor="name">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleInputChange} value={this.state.phone_number}  placeholder="phone_number" required type="text" name="phone_number" id="phone_number" className="form-control" />
              <label htmlFor="phone_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          </div>
        </div>
      </div>
  );
}
}
export default SalesAddCustomer;
