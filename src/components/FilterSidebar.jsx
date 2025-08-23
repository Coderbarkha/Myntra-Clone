import React, { useState } from 'react';
import '../styles/global.css';
import FilterPrice from './FilterPrice';

function FilterSidebar(){
    const [FilterSelected, setFilterSelected] = useState(false);

    return(
        <aside className='p-4 filter-sidebar'>
            {/* Header Row */}
            <div className='filter-header mb-4'>
                <h4 className='font-bold text-base'>FILTERS</h4>
                <a href="#" className='text-sm clear-all'>CLEAR ALL</a>
            </div>
            {/* Different  Filters  */}
            <FilterPrice/>
        </aside>
    )
}

export default FilterSidebar;
