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
                <button disabled={disabled}>Submit</button>
                <div className="errors">
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
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
                <label>
                    Last Name:&nbsp;
                    <input
                        value={values.last_name}
                        onChange={onChange}
                        name="last_name"
                        type="text"
                    />
                </label>
                <label>
                    Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>
                    Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>
                <label>
                    Terms of Service:&nbsp;
                    <input

                        checked={values.terms}
                        onChange={onChange}
                        name="terms"
                        type="checkbox"
                    />
                </label>
                </div>
                
            </form>
        </div>
    )
}

export default Form;