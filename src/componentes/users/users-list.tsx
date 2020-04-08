import * as PropTypes from 'prop-types';
import * as React from 'react';
import { User } from './model/user';

export interface UserListProps {
    users: Array<User>,
    onViewEditUser: (user: User) => void
}

export const UserList: React.FC<UserListProps> = (props) => {

    const { users, onViewEditUser } = props;

    return(
        <table className="table table-users">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">View/Edit</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User, index: number) => {
                    return (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.description}</td>
                        <td style={ { textAlign: "center"} }>
                            <span className="viewEditIcon" onClick={() => onViewEditUser(user)}>
                                <i className="fa fa-pencil" aria-hidden="true" title="View/Edit"></i>
                            </span>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    onViewEditUser: PropTypes.func.isRequired
};