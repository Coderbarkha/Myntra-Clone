import React, { useState } from 'react';
import '../styles/global.css';
import FilterPrice from './FilterPrice';
import FilterColor from './FilterColor';
import FilterDiscount from './FilterDiscount';
import FilterCategory from './FilterCategory';

function FilterSidebar(){
    const [FilterSelected, setFilterSelected] = useState(false);

    return(
        <aside className='p-4 filter-sidebar'>
            {/* Header Row */}
            <div className='filter-header mb-4'>
                <h4 className='font-bold text-base'>FILTERS</h4>
                <a href="#" className='text-sm clear-all'>CLEAR ALL</a>
            </div>
            <hr style={{ borderColor: "#7c7c7c", margin: "4px 0" }} />
            <br />
            {/* Different  Filters  */}
            <FilterCategory/>   
            <FilterPrice/>
            <FilterColor/>
            <FilterDiscount/>
        </aside>
    )
}

export default FilterSidebar;
