import { useLocation } from 'react-router-dom';

import {Component} from 'react';

import * as petsService from '../../services/petsService.js';
import PetFormView from '../PetFormView/PetFormView.js';

const WrappedEditComponent = props => {
    const location = useLocation();

    return <EditPet location={location} {...props} />;
};


class EditPet extends Component {
    constructor(props) {
        super(props);

        this.petId = this.props.location.pathname.split('/')[2];

        this.state = {
            name: '',
            description: '',
            imageURL: '',
        };
    }

    componentDidMount() {
        petsService.getOne(this.petId)
            .then(pet => {
                this.setState(pet);
            });
    }

    onEditSubmitHandler(e) {
        console.log(e);
    };

    render() {
        return <PetFormView 
            onSubmitHandler={this.onEditSubmitHandler.bind(this)}
            petName={this.state.name}
            setPetName={(name) => this.setState({name: name})}
            petDescription={this.state.description}
            setPetDescription={(description) => this.setState({description: description})}
            petImg={this.state.imageURL}
            setPetImg={(imageURL) => this.setState({imageURL: imageURL})}
        />;
    }

};

export default WrappedEditComponent;