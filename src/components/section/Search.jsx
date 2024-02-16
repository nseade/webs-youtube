import React from 'react'

const Search = () => {
    return (
        <div id ='search'>
            <div className='search_inner'>
                <label htmlFor='cearchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type ='search'
                    name ='serachInput'
                    id ='serachInput'
                    autoComplete='off'
                    className='search_input'
                    placeholder='검색어를 입력해주세요'
                />

            </div>
        </div>
    )
}

export default Search
