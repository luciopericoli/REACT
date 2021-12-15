import React, { Component } from 'react'
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
export default class AlivePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Personajes: [],
        }
    }

FetchDeApi() {
        fetch('https://rickandmortyapi.com/api/character/?status=Dead') 
        .then(response => response.json())
        .then(data => {
            this.setState({
                Personajes: data.results,
            })
        })
}
componentDidMount() {
    this.FetchDeApi()
}

    render() {
        return (
            <div>
                <div className="card-columns">
                    {this.state.Personajes.map(personaje => (
                        <ItemDetailContainer key={personaje.id} personaje={personaje}/>
                    ))}
                </div>
            </div>
        )
    }
}
