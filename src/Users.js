import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import fetchUsers from './store/actions/userActions'
const Users = () => {
    const {users}  = useSelector(state => state.users);
    const {allUsers} = useSelector(state => state.api);
    console.log("api users: ",allUsers);
   const dispatch = useDispatch();
   React.useEffect(() => {
    dispatch(fetchUsers(dispatch));
   },[])
    return (
        <div>
         {users ? users.map(users => (
             <div className="row" key={users.id}>
             <div className="name">{users.name}</div>
             <div className="address">{users.address}</div>
             <div className="user-btn">
             <button id="fab fa-affiliatetheme" className="btn btn-danger" onClick={() => dispatch({type: 'DELETE_USER', id: users.id})}>Delete</button>
            
             </div>
             
             </div>
         )): ''}
        </div>
    )
}

export default Users
 