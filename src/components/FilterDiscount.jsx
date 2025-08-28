import React from  'react';

function FilterDiscount(){
    const discounts=[10,20,30,40,50,60,70,80,90];
    return(
        <div>
            <h4 className="fw-bold fs-6 text-dark mb-2 discount-heading">DISCOUNT RANGE</h4>
            {discounts.map((value) => (
  <div key={value}>
    <div className='d-flex align-items-center mb-2 discount-range'>
      <input 
        type='radio' 
        className='form-check-input me-3' 
        name='discount' 
        id={`discount${value}`} 
      />
      <label htmlFor={`discount${value}`} className='me-1'>
        {value}% and above
      </label>
    </div>
    
  </div>
))}


            <hr style={{ borderColor: "#7c7c7c", margin: "4px 0" }} />
        </div>
    )
}

export default FilterDiscount;