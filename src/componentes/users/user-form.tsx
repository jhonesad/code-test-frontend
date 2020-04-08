import * as PropTypes from 'prop-types';
import * as React from 'react';
import { User } from './model/user';

export interface UserFormProps {
    user: User,
    onChangeUserField: (field: string, payload: string) => void,
    onSaveUser: (user: User, isNew: boolean) => void,
    onSelectFile: (file: any) => void,
    onUploadAvatar: () => void,
    errors: string
}

export const UserForm: React.FC<UserFormProps> = (props) => {

    const [submitted, setSubmitted] = React.useState(false);
    const { user, onUploadAvatar, errors } = props;

    const handleOnChangeFormField = (event: React.FormEvent<HTMLInputElement>) => {
        props.onChangeUserField(event.currentTarget.id, event.currentTarget.value);
    }

    const saveUser = () => {
        setSubmitted(true);
        if(user.name && user.description) {
            const isNew = user.id === null;
            props.onSaveUser(user, isNew);
        }
    }

    const onFileChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        if(event.currentTarget.files !== null) {
            props.onSelectFile(event.currentTarget.files[0]);            
        }    
    } 

    const loadImage = (data: any) : any => {
        return `data:image/jpeg;base64,${data}`;
    }

    return (
        <form>
            <div className="card">
                <div className="card-body user-card">    
                    <div className="form-group row">
                        <div className="col">
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name"
                                        className={'form-control' + (submitted && !user.name ? ' is-invalid' : '')} 
                                        value={user.name || ''}
                                        onChange={e => handleOnChangeFormField(e)}/>
                                    {submitted && !user.name &&
                                        <div className="invalid-feedback">The name is required</div>
                                    }
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" 
                                        className={'form-control' + (submitted && !user.description ? ' is-invalid' : '')} 
                                        value={user.description || ''}
                                        onChange={e => handleOnChangeFormField(e)}/>
                                    {submitted && !user.description &&
                                        <div className="invalid-feedback">The description is required</div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            { user.avatar !== null && user.avatar !== undefined && <img alt='avatar' className='avatar' src={loadImage(user.avatar)} /> }
                            { (user.avatar === null || user.avatar === undefined) && <img alt='avatar' className='avatar' src="https://visioncanaria.com.uy/media/images/empty.jpg"/> }
                            { user.id && <input type="file" className="form-control-file" id="avatar" onChange={e => onFileChangeHandler(e)}/> }
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" 
                        onClick={() => saveUser()}>Save
                    </button>
                    <span> </span>
                    {
                        user.id && 
                        <button type="button" className="btn btn-secondary" 
                            onClick={() => onUploadAvatar()}>Upload Avatar
                        </button>
                    }
                    { errors && 
                        <div className="alert alert-danger errors-user" role="alert">{errors}</div>
                    }
                </div>
            </div>
        </form>
    );
}

UserForm.propTypes = {
    user: PropTypes.any.isRequired,
    onChangeUserField: PropTypes.func.isRequired,
    onSaveUser: PropTypes.func.isRequired,
    onSelectFile: PropTypes.func.isRequired,
    onUploadAvatar: PropTypes.func.isRequired,
    errors: PropTypes.any.isRequired
}