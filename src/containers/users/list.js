import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";

function UsersListContainer(props) {
    return (
        <div>
            <p>
                User List
            </p>
            <div>
                {
                    props.users && props.users.length > 0 ?
                        (
                            <ul>
                                {props.users.map(user => <li key={user.id}>{user.name}</li>)}
                            </ul>
                        )
                        :
                        (
                            <p>
                                Empty list
                            </p>
                        )
                }
            </div>
            <Link to={"/create"}>
                Create new user
            </Link>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(UsersListContainer);
