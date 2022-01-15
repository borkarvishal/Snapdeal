import React from 'react'


const Search = () => {
    return (
        <div className = "searchBlock">
            <form>
                <input type="search" name ="search" id="search"placeholder="Search products and brands here..." />
                <button style ={{background:"#333"}}>
                    <span>
                        <i class="fas fa-search"></i>
                    </span>
                    <span style={{padding:"5px"}}>Search</span>
                </button>
            </form>
          
        </div>
    )
}

export default Search
