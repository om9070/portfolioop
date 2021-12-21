import React from 'react'

const Footer = () => {
    return (
        <>
            <div className=' row footer  d-flex justify-content-around bg-dark'>
                <div className='my-2 col-12 col-sm-4'>
                    <h4>Address</h4>
                    <li>mr_o.p</li>
                    <li>Village:-Samahuta</li>
                    <li>City:-Dehri-on-sone</li>
                    <li>Pincode:-821303(Bihar)</li>
                </div>
                <div className='my-2 col-12 col-sm-4'>
                    <h4>Service</h4>
                    <li>client-side developer</li>
                    <li>server-side develeper</li>
                    <li>database</li>
                    <li>hosting</li>
                </div>
                <div className='my-2 col-12 col-sm-4'>
                    <h4>Contact-me</h4>
                    <li>om70796790@gmail.com</li>
                    <li>7079679070</li>

                </div>
            </div>
        </>
    )
}
export default Footer;