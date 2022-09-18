import React from 'react';
import './index.scss'

const Search = () => {
    return (
        <section className='search'>
            <h4>Grid</h4>
            <form action="/" className='search-form-grid'>
                <input type="search" className='search-input'/>
                <button type='submit' className='search-button'>Search</button>
            </form>
            <form action="/" className='search-form-grid'>
                <input type="search" className='search-input'/>
                <button type='submit' className='search-button'>Go</button>
            </form>
            <h4>Flex</h4>
            <form action="/" className='search-form-flex'>
                <input type="search" className='search-input'/>
                <button type='submit' className='search-button'>Search</button>
            </form>
            <form action="/" className='search-form-flex'>
                <input type="search" className='search-input'/>
                <button type='submit' className='search-button'>Go</button>
            </form>
            <h4>Table</h4>
            <form action="/" className='search-form-table'>
                <div className="search-container">
                    <input type="search" className='search-input'/>
                </div>
                <div className="search-container">
                    <button type='submit' className='search-button'>Search</button>
                </div>
            </form>
            <form action="/" className='search-form-table'>
                <div className="search-container">
                    <input type="search" className='search-input'/>
                </div>
                <div className="search-container">
                    <button type='submit' className='search-button'>Go</button>
                </div>
            </form>
        </section>
    );
};

export default Search;