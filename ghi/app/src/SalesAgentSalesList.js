import React from "react";

class SalesAgentSalesList extends React.Component {

    state = {
        sales_person: "",
        sales_persons: [],
        sales: [],
        filterInput: "",
        fieldInput: "name"
    };

    async componentDidMount() {
        const agentsurl = 'http://localhost:8090/api/agents/';
        const agentresponse = await fetch(agentsurl);
        if (agentresponse.ok) {
            const data = await agentresponse.json();
            this.setState({ sales_persons: data.sales_persons });
        }
        const salesurl = 'http://localhost:8090/api/sales/';
        const salesresponse = await fetch(salesurl);
        if (salesresponse.ok) {
          const data = await salesresponse.json();
          this.setState({ sales: data.sales });
        }

    }

    handleInputChange = (event) => {
    this.setState({
        filterInput: event.target.value
    });
    };

    handleFieldChange = (event) => {
    this.setState({
        fieldInput: event.target.value
    });
    };

    handleApplyFilter = (event) => {};

render(){
    return(
        <div>
            <h1>
                Sales History
            </h1>
            <h1>People</h1>

            <select onChange={this.handleFieldChange}>
                <option value="name">name</option>
            </select>

            <input
                value={this.state.filterInput}
                onChange={this.handleInputChange}
            />

            <table className="table table-success table-hover table-striped" >
                <thead>
                    <tr>
                        <th>Agent</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.sales.filter((sale) => sale.sales_person.sales_name.includes(this.state.filterInput))
                    .map(sale=> {
                        return(
                            <tr key={sale.id}>
                                <td>{sale.sales_person.sales_name}</td>
                                <td>{sale.customer.customer_name}</td>
                                <td>{sale.auto.vin}</td>
                                <td>${sale.price.toLocaleString()}</td>
                            </tr>
                    ) })}
                </tbody>
            </table>
        </div>
    )
}

}

export default SalesAgentSalesList;
