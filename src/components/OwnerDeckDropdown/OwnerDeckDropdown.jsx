import { useState, useEffect, useContext } from 'react';
import deckService from '../../services/deckService';
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from '../../contexts/auth.context';
import cardService from '../../services/cardService';

const OwnerDeckDropdown = ({ card_id }) => {
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
    }

    const addCardToDeck = (deck_id) => {

        cardService
            .addCardToDeck(card_id, deck_id)
            .then(response => {
                console.log(card_id);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Dropdown onClick={getDecks}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Añadir a mazo
                </Dropdown.Toggle>

                <Dropdown.Menu >

                    {
                        showNameDeck?.map((elem) => {
                            return <Dropdown.Item key={elem._id} onClick={() => addCardToDeck(elem._id)} >{elem.name}</Dropdown.Item>
                        })
                    }

                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default OwnerDeckDropdown
