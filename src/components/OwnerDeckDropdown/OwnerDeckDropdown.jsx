import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import deckService from '../../services/deckService';
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from '../../contexts/auth.context';

const OwnerDeckDropdown = () => {
    const { user } = useContext(AuthContext);
    const { _id } = user;
    const [showNameDeck, setShowNameDeck] = useState()

    const getDecks = () => {
        deckService
        .getOwnerDecks(_id)
        .then(response => {
            setShowNameDeck(response.data);
        })
        .catch(err => console.log(err));
    };

    return (
        <>
        <Dropdown onClick={getDecks}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Añadir a mazo
            </Dropdown.Toggle>

            <Dropdown.Menu>
            
                {
                    showNameDeck?.map((elem)=>{

                        return <Dropdown.Item >{elem.name  }</Dropdown.Item>
                    })
                }
            
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
};

export default OwnerDeckDropdown;
