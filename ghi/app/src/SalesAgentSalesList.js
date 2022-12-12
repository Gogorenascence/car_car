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
            const agentdata = await agentresponse.json();
            this.setState({ sales_persons: agentdata.sales_persons });
        }
        const salesurl = 'http://localhost:8090/api/sales/';
        const salesresponse = await fetch(salesurl);
        if (salesresponse.ok) {
          const salesdata = await salesresponse.json();
          this.setState({ sales: salesdata.sales });
        }

        console.log(agentdata)
        console.log(salesdata)

        this.setState({
            name: sales_person.sales_name,
            employee_number: sales_person.employee_number

            })

        getData();
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
                <option value="employee_number">number</option>
            </select>

            <input
                value={this.state.filterInput}
                onChange={this.handleInputChange}
            />

            {this.state.sales}

            <table>
                <thead>
                    <tr>
                        <th>Agent</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale=> {
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
