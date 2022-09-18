import React, {useState} from "react";
import './index.scss';
import FormSelection from "./FormSelection";
import SelectedItems from "./SelectedItems";

const Widget = () => {
    const [toggle, setToggle] = useState(false);
    const [result, setResult] = useState([]);

    const toggleForm = () => {
        setToggle(prevState => !prevState)
    }

    const getResult = (result) => {
        setResult([...result])
    }

    const removeItem = (element) => {
        const index = result.findIndex(item => item === element)
        if(index !== -1) {
            result.splice(index, 1);
            getResult(result)
        }
    }

    return (
        <section className='widget'>
            <h2>Select items</h2>
            <div className="widget-descr">
                {`You currently have ${result.length} selected items`}
            </div>

            {!toggle ? (
                <div className='widget-header'>
                    <SelectedItems
                        key={Math.floor(Math.random())}
                        selectedItems={result}
                        changeItems={removeItem}
                    />
                    <div className="widget-buttons">
                        <button onClick={toggleForm}>Change my choice</button>
                    </div>
                </div>
                ) : (
                    <FormSelection
                        hideForm={toggleForm}
                        result={[...result]}
                        setResult={getResult}
                    />
                )
            }
        </section>
    )
}

export default Widget;