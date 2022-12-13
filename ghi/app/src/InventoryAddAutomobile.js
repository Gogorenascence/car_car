import React from "react";

class InventoryAddAutomobile extends React.Component{
    state = {
      color: "",
      year: "",
      vin: "",
      model: "",
      models: [],
    }

  async componentDidMount() {
    const modelsUrl = "http://localhost:8100/api/models";

    const modelResponse = await fetch(modelsUrl);

    if (modelResponse.ok) {
      const data = await modelResponse.json();
      this.setState({ models: data.models });
    }
  }


    handleSubmit = async(event)=> {
      event.preventDefault();
      const data = {...this.state};


      const autoUrl = 'http://localhost:8100/api/automobiles/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify({
            "color": this.state.color,
            "year": this.state.year,
            "vin": this.state.vin,
            "model_id":this.state.model,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(autoUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
                color: "",
                year: "",
                vin: "",
                model: "",
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
            <h1>Add Automobile To Inventory</h1>
            <form onSubmit={this.handleSubmit} id="create-auto-form">
              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.color}
                placeholder="color"
                required type="text"
                name="color"
                id="color"
                className="form-control" />
                <label htmlFor="color">Color</label>
              </div>

              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.year}
                placeholder="year"
                required type="text"
                name="year"
                id="year"
                className="form-control" />
                <label htmlFor="year">Year</label>
              </div>

              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.vin}
                placeholder="vin"
                required type="text"
                name="vin"
                id="vin"
                className="form-control" />
                <label htmlFor="vin">Vin</label>
              </div>

              <div className="mb-3">
                <select
                onChange={this.handleInputChange}
                value={this.state.model}
                id="model"
                name="model"
                placeholder="model"
                required type= "text"
                className="form-select">
                <option value="">Choose a Model</option>
                  {this.state.models.map(model => {
                    return (
                    <option key = {model.id} value={model.id}>
                        {model.name}
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
export default InventoryAddAutomobile;
