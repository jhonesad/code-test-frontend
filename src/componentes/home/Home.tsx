import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { User } from '../users/model/user';
import { GeneralState } from '../../redux/modelo/general-state';
import { 
  listAllAsync, 
  newUser, 
  changeUserField, 
  findUserAsync,
  saveUserAsync,
  uploadAvatarAsync
} from '../../redux/acciones/users/users.actions';
import { UserList } from '../users/users-list';
import { UserForm } from '../users/user-form';
 
interface Props {
  users: Array<User>,
  user: User,
  errors: string,
  listAll: () => void,
  newUser: () => void,
  changeUserField: (field: string, payload: string) => void,
  findUser: (name: string) => void,
  saveUser: (user: User, isNew: boolean) => void,
  uploadAvatar: (name: string, data: FormData) => void
}

class Home extends React.Component<Props, any> {

  static propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.any.isRequired,
    listAll: PropTypes.func.isRequired,
    newUser: PropTypes.func.isRequired,
    changeUserField: PropTypes.func.isRequired,
    findUser: PropTypes.func.isRequired,
    saveUser: PropTypes.func.isRequired,
    uploadAvatar: PropTypes.func.isRequired,
    errors: PropTypes.any.isRequired
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedFile: null
    }
  }

  componentDidMount() {
    this.props.listAll();
  }

  addNewUser = () => {
    this.setState({isOpen: true, selectedFile: null});
    this.props.newUser();
  }

  viewEditUser = (user: User) => {
    this.setState({isOpen: true, selectedFile: null});
    this.props.findUser(user.name);
  }

  prepareFileToUpload = (file: any) => {
    this.setState({selectedFile: file});
  }

  onUploadAvatar = () => {
    if(this.state.selectedFile) {
      const data = new FormData();
      data.append('file', this.state.selectedFile);
      const name = this.props.user.name;
      this.props.uploadAvatar(name, data);
      this.setState({isOpen: false, selectedFile: null});
    }
  }

  render() {

    const { isOpen, selectedFile } = this.state;
    const { users, user, changeUserField, saveUser, errors } = this.props;
    
    return (
      <div className="app-user">
        <h4>User</h4>
        {
          isOpen && 
            <UserForm user={user} errors={errors} selectedFile={selectedFile}
              onChangeUserField={changeUserField} 
              onSaveUser={saveUser}
              onSelectFile={file => this.prepareFileToUpload(file)}
              onUploadAvatar={() => this.onUploadAvatar()}></UserForm>
        }
        <div className="card" style = { { marginTop: '10px'} }>
          <div className="card-body">
            <button type="button" className="btn btn-primary" 
              onClick={() => this.addNewUser()}>Add new user
            </button>
            <UserList users={users} 
              onViewEditUser={(user) => this.viewEditUser(user)}></UserList>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: GeneralState) => {
  return state.users;
};

export default connect(
  mapStateToProps,
  {
    listAll: listAllAsync,
    newUser: newUser,
    changeUserField: changeUserField,
    findUser: findUserAsync,
    saveUser: saveUserAsync,
    uploadAvatar: uploadAvatarAsync
  }
)(Home);
