import React from 'react';
import { Input, Picklist, Option } from 'react-rainbow-components';



const CreateCardForm = () => {

const { name, description, color} = signupData

    const inputStyles = {
    width: 300,
    };

    return (

        <div className="rainbow-m-vertical_x-large rainbow-m_auto">
    <Input
        label="Input Text"
        placeholder="Nombre"
        type="text"
        className="rainbow-p-around_medium"
        style={inputStyles}
    />
    <Input
        label="Input Text"
        placeholder="Descripción"
        type="text"
        className="rainbow-p-around_medium"
        style={inputStyles}
    />
<Picklist
        id="picklist-genre"
        style={containerStyles}
        onChange={value => setState({ value })}
        value={state.value}
        required
        error="This Field is Required"
        label="Select Building"
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    >
        <Option name="header" label="Género" variant="header" />
        <Option name="option 1" label="Cine" />
        <Option name="option 2" label="TV" />
        <Option name="option 3" label="Historia" />
        <Option name="option 3" label="Música" />
        <Option name="option 3" label="Literatura" />
        <Option name="option 3" label="Política" />
        <Option name="option 3" label="Otros" />

    </Picklist>;
    <Picklist
        id="picklist-color"
        style={containerStyles}
        onChange={value => setState({ value })}
        value={state.value}
        required
        error="This Field is Required"
        label="Select Building"
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    >
        <Option name="header" label="Color" variant="header" />
        <Option name="option 1" label="Rojo" />
        <Option name="option 2" label="Naranja" />
        <Option name="option 3" label="Amarillo" />
        <Option name="option 3" label="Verde" />
        <Option name="option 3" label="Azul" />
        <Option name="option 3" label="Morado" />
        <Option name="option 3" label="Rosa" />

    </Picklist>;
</div>
    )
}

export default CreateCardForm