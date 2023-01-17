import React from 'react';
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }
    render() {
        return (
            <div>
                <h2>User Information</h2>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Age: {this.state.age}</p>
            </div>
        )
    }
}
export default UserInfo;