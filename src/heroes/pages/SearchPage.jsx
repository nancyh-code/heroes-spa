import React from 'react';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/UseForm';

export const SearchPage = () => {
  const { searchText, name, lastName, onInputChange } = useForm({
    searchText: '',
    name: '',
    lastName: '',
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchText, name, lastName);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <input
              type='text'
              placeholder='Name'
              className='form-control'
              name='name'
              autoComplete='off'
              value={name}
              onChange={onInputChange}
            />
            <input
              type='text'
              placeholder='LastName'
              className='form-control'
              name='lastName'
              autoComplete='off'
              value={lastName}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-3'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Result</h4>
          <hr />
          <div className='alert alert-primary'>Search a hero</div>
          <div className='alert alert-danger'>
            There is not hero with <b>ABC</b>
          </div>
          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
