import React from 'react';

class SalesAddSale extends React.Component{
    state = {
      price: "",
      customer: "",
      sales_person: "",
      auto: "",
      autos: [],
    }

    handleSubmit = async(event)=> {
      event.preventDefault();
      const data = {...this.state};

      const salesUrl = 'http://localhost:8090/api/sales/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
              price: "",
              customer: "",
              sales_person: "",
              auto: "",
          };

          this.setState(cleared);
        }
      }

      handleInputChange = (event)=> {
        const value = event.target.value;
        this.setState({[event.target.id]:value})
      }

      async componentDidMount() {
        const agentsurl = 'http://localhost:8090/api/agents/';
        const agentresponse = await fetch(agentsurl);
        if (agentresponse.ok) {
            const data = await agentresponse.json();
            this.setState({ sales_persons: data.sales_persons });
        }
        const customersurl = 'http://localhost:8090/api/customers/';
        const customerresponse = await fetch(customersurl);
        if (customerresponse.ok) {
          const data = await customerresponse.json();
          this.setState({ customers: data.customers });
        }
        const autosurl = 'http://localhost:8100/api/automobiles/';
        const autoresponse = await fetch(autosurl);
        if (autoresponse.ok) {
            const data = await autoresponse.json();
            this.setState({ sales_persons: data.autos });
        }
    }


render(){

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a new sales record</h1>
            <form onSubmit={this.handleSubmit} id="create-sale-form">
            <div className="mb-3">
                <select value={this.state.sales_person} onChange={this.handleInputChange} placeholder="Agent" required type="text" name='sales_person' id="sales_person" className="form-select">
                  <option value="">Choose an agent</option>
                  {this.state.sales_persons?.map(sales_person => {
                    return (
                      <option key={sales_person.id} value={sales_person.id}>{sales_person.sales_name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="mb-3">
              <select value={this.state.customer} onChange={this.handleInputChange} placeholder="Customer" required type="text" name='customer' id="customer" className="form-select">
                 <option value="">Choose a customer</option>
                  {this.state.customers?.map(customer => {
                    return (
                      <option key={customer.id} value={customer.customer_name}>{customer.employee_number}</option>
                    )
                  })}
                </select>
              </div>
              <div className="mb-3">
              <select value={this.state.auto} onChange={this.handleInputChange} placeholder="Auto" required type="text" name='auto' id="auto" className="form-select">
                  <option value="">Choose a automobile</option>
                  {this.state.autos?.map(auto => {
                    return (
                      <option key={auto.id} value={auto.id}>{auto.vin}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleInputChange} value={this.state.price}  placeholder="price" required type="text" name="price" id="price" className="form-control" />
                <label htmlFor="price">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            </div>
          </div>
        </div>
  );
}
}
export default SalesAddSale;
