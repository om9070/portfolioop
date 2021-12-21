import React from 'react'

const Contact = () => {
    return (<>
        <div className=' container'>
            <div className='row my-5'>
                <div className=' col-sm-6 align-self-center order-last  order-sm-frist'>
                    <div className=' d-flex'>
                        <i class="fa fa-thumbs-up mx-3" style={{ fontSize: "30px" }}>:-</i>
                        <h3>Om Prakash gupta</h3>
                    </div>
                    <hr />
                    <div className=' d-flex'>
                        <i class="fa fa-mobile mx-3" style={{ fontSize: "30px" }}>:-</i>
                        <h3>7079679070</h3>
                    </div>
                    <hr />
                    <div className=' d-flex'>
                        <i class="fa fa-at m-lg-2" style={{ fontSize: "30px" }}>:-</i>
                        <h3>om70796790@gmail.com</h3>
                    </div>
                    <hr />
                </div>
                <div className=' col-sm-6 order-Frist order-sm-last'>
                    <img src="./img/op9.jpg" className=' w-100 my-2' alt="" />
                </div>

            </div>

            <div className='row my-5'>
                <div className=' col-sm-7'>
                    <img src="./img/op10.jpg" className=' w-100' alt="" />
                </div>
                <div className='row col-sm-4 align-items-center  mx-auto'>
                    <div className='col-sm-6 my-3  col-3'>
                        <a href="https://www.facebook.com/profile.php?id=100011935544089" rel="noreferrer" target="_blank">  <i class="fab fa-facebook social" style={{ fontSize: "55px", color: "blue" }}></i></a>
                    </div>

                    <div className='col-sm-6 my-3 col-3'>
                        <a href="https://www.instagram.com/o.p9070/?r=nametag" rel="noreferrer" target="_blank">  <i class="fa fa-instagram social" style={{ fontSize: "55px", color: "red" }}></i></a>
                    </div>
                    <div className='col-sm-6 my-3 col-3'>
                        <a href="https://www.linkedin.com/in/om-prakash-b0033319a" rel="noreferrer" target="_blank">   <i class="fa fa-linkedin social" style={{ fontSize: "55px", color: "blueviolet" }}></i></a>
                    </div>
                    <div className='col-sm-6 my-3 col-3'>
                        <a href="https://github.com/om9070" rel="noreferrer" target="_blank">   <i class="fa fa-github social" style={{ fontSize: "55px", color: "coral" }}></i></a>

                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default Contact;