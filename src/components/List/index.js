import React from 'react';
import './index.scss'

const List = () => {
    return (
        <section className="adaptive-list">
            <nav className="adaptive-list__nav" tabIndex={1} >
                <span className="adaptive-list__toggle-btn">
                    <span/>
                    <span/>
                    <span/>
                </span>
                <ul className="adaptive-list__list">
                    <li>
                        <input type="radio" id="1" className="adaptive-list__input" name="list" value={1} checked />
                        <label htmlFor="1" className="adaptive-list__label">World Of Tanks</label>
                    </li>
                    <li>
                        <input type="radio"  id="2" className="adaptive-list__input" name="list" value={2} checked />
                        <label htmlFor="2"  className="adaptive-list__label">World Of Warplanes</label>
                    </li>
                    <li>
                        <input type="radio" id="3" className="adaptive-list__input" name="list" value={3} checked />
                        <label htmlFor="3" className="adaptive-list__label">World Of Warships</label>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default List;