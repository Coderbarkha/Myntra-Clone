import React from 'react';
import { IoSearchSharp, IoClose } from "react-icons/io5";

function FilterCategory(){
    return (
        <div>
            <div className='d-flex justify-content-between items-center '>
                <h4 className='fw-bold fs-6 text-dark mb-2 category-heading'>Category</h4>
                  <IoSearchSharp size={16} color="black" />
            </div>
            <div className='d-flex align-items-center mb-2 category-range'>
                
            </div>

        </div>
    );
}

export default FilterCategory;