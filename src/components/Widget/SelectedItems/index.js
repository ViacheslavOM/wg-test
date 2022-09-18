import React from 'react';

const SelectedItems = ({selectedItems = [], changeItems}) => {
    return (
        <ul className='widget-result'>
            {
                selectedItems.map((item, i) => (
                    <li className='widget-result_item' key={i}>
                        <span>{item}</span>
                        <button onClick={() => changeItems(item)}>x</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default SelectedItems;