import React from "react";

class SalesAgentSalesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
            customer: '',
            sales_person: '',
            auto: '',
            customers: [],
            sales_persons: [],
            autos: [],
        };

        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleAutoChange = this.handleAutoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/api/conferences/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ conferences: data.conferences });

        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.conferences;
        const conference = data.conference

        const conferenceUrl = `http://localhost:8000${conference}presentations/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            const newPresentation = await response.json();
            console.log(newPresentation);

            const cleared = {
                presenter_name: '',
                presenter_email: '',
                company_name: '',
                title: '',
                synopsis: '',
                conference: '',
            };
            this.setState(cleared);
        }
    }


    handlePresenterNameChange(event) {
        const value = event.target.value;
        this.setState({ presenter_name: value })
    }
    handlePresenterEmailChange(event) {
        const value = event.target.value;
        this.setState({ presenter_email: value })
    }
    handleCompanyNameChange(event) {
        const value = event.target.value;
        this.setState({ company_name: value })
    }
    handleTitleChange(event) {
        const value = event.target.value;
        this.setState({ title: value })
    }
    handleSynopsisChange(event) {
        const value = event.target.value;
        this.setState({ synopsis: value })
    }
    handleConferenceChange(event) {
        const value = event.target.value;
        this.setState({ conference: value })
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new presentation</h1>
                        <form onSubmit={this.handleSubmit} id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input value={this.state.presenter_name} onChange={this.handlePresenterNameChange}
                                    placeholder="Presenter name" required type="text" name="presenter_name" id="presenter_name" className="form-control" />
                                <label htmlFor="presenter_name">Presenter name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.presenter_email} onChange={this.handlePresenterEmailChange}
                                    placeholder="Presenter email" required type="email" name="presenter_email" id="presenter_email" className="form-control" />
                                <label htmlFor="presenter_email">Presenter email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.company_name} onChange={this.handleCompanyNameChange}
                                    placeholder="Company name" type="text" name="company_name" id="company_name" className="form-control" />
                                <label htmlFor="company_name">Company name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.title} onChange={this.handleTitleChange}
                                    placeholder="Title" required type="text" name="title" id="title" className="form-control" />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="mb-3">
                                <textarea value={this.state.synopsis} onChange={this.handleSynopsisChange} className="form-control" id="synopsis" rows="3" name="synopsis"></textarea>
                                <label htmlFor="synopsis">Synopsis</label>
                            </div>
                            <div className="mb-3">
                                <select value={this.state.conference}  onChange={this.handleConferenceChange} required name="conference" id="conference" className="form-select">
                                    <option  value="">Choose a conference</option>
                                    {this.state.conferences.map(conference => {
                                        return (
                                            <option key={conference.id} value={conference.id}>{conference.name}</option>
                                        );
                                    })}
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

export default SalesAgentSalesList;
