import React from "React"
import Axios from "Axios";


handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })

}
 fileChangeHandler = e => {
     this.setState({ file: e.target.files[0] })
 }
 uploadHandler = (file) => {
     const data = new FormData();
     data.append('file', file);

     return fetch('http://localhost:5000/api/users', {
         mode: 'no-cors',
         method: 'POST',
        body: data
    }).then((response) => {
         console.log(response.data);
     })
}
handleSubmit = e => {
    e.preventDefault();
    let newStudent = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dob: this.state.dob,
        hobby: this.state.hobby
    }
    axios.post('http://localhost:5000/api/students', newStudent)
        .then(res => console.log(res.data));

     this.uploadHandler(this.state.file).then((response) => {
         console.log(response.data);
     })

    this.setState({
        firstName: '',
        lastName: '',
        dob: '',
        hobby: ''
    })

    this.props.history.push('/');
}
render() {
    return (


