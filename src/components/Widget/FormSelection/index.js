import React, {useCallback, useEffect, useState} from "react";
import Filter from "../Filter";
import SelectedItems from "../SelectedItems";
import close from '../../../img/close.png'

const generateElements = (name, elementsCount) => {
    let elements = [];
    for (let i = 1; i <= elementsCount; i++) {
        elements.push(`${name} ${i}`)
    }
    return elements;
}
const getNumberFromStr = (str) => parseInt(str.match(/\d+/)[0]);

const ELEMENT_LIST = generateElements('Element', 300);



const FormSelection = ({result, hideForm, setResult}) => {
    const [selectedItems, setSelectedItems] = useState(result);
    const [filterMethod, setFilterMethod] = useState({search: '', filter: 0});

    useEffect(() => {
        return(() => result)
    }, [result])

    const changeItems = (element) => {
        const index = selectedItems.findIndex(item => item === element)

        if(index !== -1) {
            selectedItems.splice(index, 1);
        } else if(selectedItems.length <= 3) {
            selectedItems.push(element)
        }

        setSelectedItems(prevState => [...prevState])
    }

    const onSave = () => {
        setResult(selectedItems);
        hideForm();
    }

    const filtration = useCallback((search, filter) => {
        return ELEMENT_LIST.filter(item => (
            item.toLocaleLowerCase().includes(search.toLowerCase()) && (getNumberFromStr(item) > parseInt(String(filter)))
        ));
    }, [])

    const onChange = e => {
        const {name, value} = e.target;
        setFilterMethod({...filterMethod, [name]: value});
    }

    const filteredItems = filtration(filterMethod.search, filterMethod.filter);

    return (
        <div className='widget-form'>
            <div className="widget-form_header">
                <h2>Select items</h2>
                <button onClick={hideForm}><img src={close} alt="close"/></button>
            </div>
            <Filter onChange={onChange} filter={filterMethod.filter} search={filterMethod.search}/>
            <div className="widget-form_body">
                <ul className='widget-form_list'>
                    {
                        filteredItems.map((item, i) => {
                            const selected = selectedItems.indexOf(item) !== -1;
                            const disabled = selectedItems.length === 3;
                            return (
                                <li
                                    key={i}
                                    className='widget-form_item'
                                >
                                    <label className="checkbox">
                                        <input
                                            checked={selected}
                                            disabled={disabled}
                                            type="checkbox"
                                            onChange={() => changeItems(item)}
                                        />
                                        <span>{item}</span>
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="widget-text">
                Current selected items:
            </div>
            <SelectedItems
                selectedItems={selectedItems}
                changeItems={changeItems}
            />
            <div className="widget-bottom">
                <button onClick={onSave} disabled={selectedItems.length === 0}>Save</button>
                <button onClick={hideForm}>Cancel</button>
            </div>
        </div>
    )
}

export default FormSelection