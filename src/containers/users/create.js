import React, {useState} from "react";
import {connect} from "react-redux"
import {addUser} from "../../redux";
import {Link, useHistory} from "react-router-dom";


function CreateUserContainer(props) {
    const [name, setName] = useState("");
    let history = useHistory();

    return (
        <div>
            <div>
                <div>
                    <input name="user" value={name} onChange={elem => setName(elem.target.value)} required/>
                </div>
                <div>
                    <button onClick={() => {
                        props.addUser(name);
                        history.goBack()
                    }}>Add User
                    </button>
                </div>
            </div>

            <Link to={"/"}>
                Go back to list
            </Link>
        </div>
    );

}

const mapDispatchToProps = (dispatch, props) => {

    return {
        addUser: (username) => {
            console.log("user", username);
            if (username && username.length > 0) {
                dispatch(addUser(username));
            }
        }
    }
};

export default connect(null, mapDispatchToProps)(CreateUserContainer);
