import React from "react";

const Form = (props) => {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <h2>Add a user</h2>
                <div className="form-group">
                <label>
                    First Name:&nbsp;
                    <input
                        value={values.first_name}
                        onChange={onChange}
                        name="first_name"
                        type="text"
                    />
                </label>                
                <div className="errors">{errors.first_name}</div>
                <br />
                <label>
                    Last Name:&nbsp;
                    <input
                        value={values.last_name}
                        onChange={onChange}
                        name="last_name"
                        type="text"
                    />
                </label>
                    <div className="errors">{errors.last_name}</div>
                <br />
                <label>
                    Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                    <div className="errors">{errors.email}</div>
                <br />
                <label>
                    Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>
                    <div className="errors">{errors.password}</div>
                <br />
                <label>
                    Terms of Service:&nbsp;
                    <input

                        checked={values.terms}
                        onChange={onChange}
                        name="terms"
                        type="checkbox"
                    />
                </label>
                    <div className="errors">{errors.terms}</div>
                    
                <button disabled={disabled} name="submit">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form;