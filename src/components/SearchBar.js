import React, { useState } from 'react';


const SearchBar = props => {
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onTermSubmit(value);
    }
    return (
        <form className='ui form head SearchBar' onSubmit={e => { onFormSubmit(e) }}>
            <div className='ui left icon input eight wide field '>
                <i className="search icon"></i>
                <input className="inputField"
                    type='text'
                    style={{ backgroundColor: '#DFDFDF', paddingTop: '5px', paddingBottom: '5px' }}
                    value={value}
                    onChange={onChange} />
            </div>
        </form>

    )

}

export default SearchBar;