import React from 'react';

const options = [
    { title: 'No filter', value: 0 },
    { title: '> 10', value: 10 },
    { title: '> 100', value: 100 },
    { title: '> 200', value: 200 }
]

const Input = ({name, label, value, onChange, type }) => (
    <fieldset>
        <label>{label}</label>
        <input
            className="widget-filter_control"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
        />
    </fieldset>
)

const Select = ({ name, label, value, onChange, options = [] }) => (
    <fieldset>
        <label>{label}</label>
        <select
            className="widget-filter_control"
            name={name}
            value={value}
            onChange={onChange}
        >
            {options.map((option, i) => <option key={i} value={option.value}>{option.title}</option>)}
        </select>
    </fieldset>
)

const Filter = ({ search, filter, onChange }) => (
    <div className="widget-filter">
        <Input
            label='Search'
            name="search"
            type="search"
            value={search}
            onChange={onChange}
        />
        <Select
            label='Filter'
            name="filter"
            value={filter}
            options={options}
            onChange={onChange}
        />
    </div>
)

export default Filter;