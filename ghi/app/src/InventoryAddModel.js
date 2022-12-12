import React from "react";
import { BrowserRouter } from "react-router-dom";
import InventoryAddManufacturer from "./InventoryAddManufacturer";

// This is showing in the BrowserRouter,
// the inputs are working and the drop down is showing.
// The POST call is not working and is returning a 400


class InventoryAddModel extends React.Component{
    state = {
      name: "",
      picture_url: "",
      manufacturer_id: "",
      manufacturer_ids: [],
    }

  async componentDidMount() {
    const manufacturerUrl = "http://localhost:8100/api/manufacturers";

    const manResponse = await fetch(manufacturerUrl);

    if (manResponse.ok) {
      const data = await manResponse.json();
      this.setState({ manufacturers: data.manufacturers });
    }
  }


    handleSubmit = async(event)=> {
      event.preventDefault();
      const data = {...this.state};
    //   delete data.sales_persons;

      const modelUrl = 'http://localhost:8100/api/models/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            const cleared = {
              name: "",
              picture_url: "",
              manufacturer_id: "",
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
            <h1>Create A New Model</h1>
            <form onSubmit={this.handleSubmit} id="create-model-form">
              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.name}
                placeholder="name"
                required type="text"
                name="name"
                id="name"
                className="form-control" />
                <label htmlFor="name">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                onChange={this.handleInputChange}
                value={this.state.picture_url}
                placeholder="picture_url"
                required type="text"
                name="picture_url"
                id="picture_url"
                className="form-control" />
                <label htmlFor="picture_url">Add A Picture</label>
              </div>
              <div className="mb-3">
                <select
                onChange={this.handleManufacturerChange}
                required id="manufacturer_id"
                name="manufacturer_id"
                className="form-select">
                <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers?.map(manufacturer => {
                    return (
                        <option key = {manufacturer.id} value={manufacturer.id}>
                          {manufacturer.name}
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
export default InventoryAddModel;
