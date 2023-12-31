
  render() {
    let hideForm = ""
    let hatList = "form-select d-none"

    if (this.state.toggled === false){
      hideForm = "d-none"
      hatList = ""
    }

    return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <div classNme={hideForm}>
          <h1>Create a new hat</h1>
          <form onSubmit={this.handleSubmit} id="create-hat-form">
            <div className="form-floating mb-3">
              <input onChange={this.handleChange} value={this.state.style}  placeholder="Style" required type="text" name="style" id="style" className="form-control" />
              <label htmlFor="style">Style</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleChange} value={this.state.fabric}  placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control" />
              <label htmlFor="fabric">Fabric</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={this.handleChange} value={this.state.pictureUrl}  placeholder="Picture Url" required type="text" name="picture_url" id="picture_url" className="form-control" />
              <label htmlFor="picture_url">Picture URL</label>
            </div>
            <div className="mb-3">
              <select value={this.state.location} onChange={this.handleChange} required id="location" name="location" className="form-select">
                <option value="">Choose a location</option>
                {this.state.locations.map(location => {
                  return (
                    <option key={location.id} value={location.id}>
                      {location.closet_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
            <button onClick ={this.toggleState} className="btn btn-primary">View Hats</button>
          </form>
          </div>
          <div className ={hatList}>
           <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Style</th>
                      <th>Location</th>
                  </tr>
              </thead>
              <tbody>
                {this.state.hats.map(hat => {
                  return (
                    <tr key={hat.href}>
                      <td>{ hat.style }</td>
                      <td>{ hat.location.closet_name }</td>
                      <td><button onClick={()=>this.handleDelete(hat)} className = "btn btn-secondary"> Delete Hat </button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button onClick = { this.toggleState} className="btn btn-primary">Create A New Hat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default Hats;
