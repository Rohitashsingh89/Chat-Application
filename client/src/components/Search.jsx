import React from 'react';
// import user from './user.png';


function Search() {
  return (
    <>
    <div className='searchbar'>
      <div className="searchinfo">
        <input type="text" name="search" id="search" className='search' placeholder='Search or start a new Chat' />
      </div>
      {/* <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>          
        </div>
      </div> */}
      
    </div>

    </>
  )
}

export default Search;