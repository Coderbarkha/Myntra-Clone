import React from  'react';

function FilterDiscount(){
    return(
        <div>
            <h4 className="fw-bold fs-6 text-dark mb-2 discount-heading">DISCOUNT RANGE</h4>
            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='disocunt10'></input>
                <label htmlFor='discount10' className='me-1'>10% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount20'></input>
                <label htmlFor='discount20' className='me-1'>20% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount30'></input>
                <label htmlFor='discount30' className='me-1'>30% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount40'></input>
                <label htmlFor='discount40' className='me-1'>40% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount50'></input>
                <label htmlFor='discount50' className='me-1'>50% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount60'></input>
                <label htmlFor='discount60' className='me-1'>60% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount70'></input>
                <label htmlFor='discount70' className='me-1'>70% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount80'></input>
                <label htmlFor='discount80' className='me-1'>80% and above</label>
            </div>

            <div className='d-flex align-items-center mb-2 discount-range'>
                <input type='radio' className='form-check-input me-3' name='discount' id='discount90'></input>
                <label htmlFor='discount90' className='me-1'>90% and above</label>
            </div>
        </div>
    )
}

export default FilterDiscount;