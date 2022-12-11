import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Get Cars or Die Trying
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <div className="dropdown mx-1">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/InventoryManufacturerList">
                    Manufacturer List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/InventoryAddManufacturer">
                    Add Manufacturer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/modellist">
                    Model List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/InventoryAddModel">
                    Add Model
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/autolist">
                    Automobile List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/autoform">
                    Add Automobile To Inventory
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown mx-1">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/applist">
                    Scheduled Appointments
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appform">
                    Add Appointment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/apphistory">
                    Appointment History
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/techlist">
                    Technician List
                  </Link>
                </li>

              </ul>
            </div>

            <div className="dropdown mx-1">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link className="dropdown-item" to="/saleslist">
                    History
                  </Link>
                </li>
              </ul>
            </div>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
