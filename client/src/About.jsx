import React, { useState } from 'react'
import { Link } from "react-router-dom"


const About = () => {
    const [data, setdata] = useState({ name: "", email: "", comment: "" })

    const inputdata = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setdata({ ...data, [name]: value })
        console.log(data.name, data.email, data.comment)
    }


    const finaldata = async (e) => {
        e.preventDefault();
        const { name, email, comment } = data;
        const res = await fetch("comment", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, comment })
        })
        const bakk = await res.json();
        console.log(bakk)

        if (res.status === 422) {
            window.alert("invaild data")
        } else if (res.status === 201) {
            window.alert(`thanks for response ${name}`)
        } else {
            window.alert("somthing missing")
        }
        setdata({ name: "", email: "", comment: "" })

    }

    return (
        <>
            <div className="container-fluid row g-0 bg-light ">
                <div className="col-md-5 mb-md-0 p-md-4 mx-2">
                    <img src="./img/om.png" className="w-100 picture" alt="..." />
                </div>
                <div className="col-md-5 p-4 ps-md-0 mx-2 align-self-center">
                    <h5 className="mt-0 my-4 d-flex flex-column "><h2 className='profilename'>I</h2><h2 className='profilename'>Am</h2><h2 className='profilename'>Om Prakash</h2></h5>
                    <hr />
                    <h5 className='honda'>FULL STACK DEVELOPMENT(MERN)</h5>
                    <hr />
                    <p className='paragraf'>I Am Full-Stack Developer(MERN) and created projects using Different Langauges.As of now,I a'm Fresher and Student of MCA.I Want aN Opportunity to Improvement Myself.</p>
                </div>
            </div>
            <div className=' container my-5'>
                <div>
                    <h4 className=' mt-3'>Javascript</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "85%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>Html/Css</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>Bootstrap</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{ width: "80%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>React-js</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "85%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>Node-JS</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "75%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>Node-Express</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "80%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>Mongo-DB</h4>
                    <div className="progress my-3">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "75%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                </div>

                <div>
                    <h4 className=' mt-3'>C</h4>
                    <div className="progress my-3">
                        <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                </div>

            </div>

            <div>
                <div class="text-center container">
                    <div class="card-header py-3">
                        About me
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class=" my-4 profilename py-0">INTRODUCTION</h5>
                        <p class="card-text  my-3  heading ">I Am Om Prakash Gupta From Samahuta.I Am Student of Class M.C.A Frist year From KALINGA UNIVERSITY (RAIPUR)..I Have Completed B.C.A  From Jawaharlal Nehru College (Dehri on Sone), I Have Created Many Project Using This Langauges.It Has Been Uploaded On My Github Account.</p>
                        <p class="card-text   my-3  heading ">I Am Quick Learner And Hope To Acheive My Goals Through Sheer Hard Work.I Have A Thirst For knowledge And Like To Devlop my Skill That Can Take Me To A More Advanced Level.I Have A Creative Mind And Am Always Up For New Challenges.I Am Well Organized And Always Plan Ahead to Make Sure I Manage my Time well.</p>
                        <p class="card-text   my-3  heading ">I Am Able To Work On
                            ES6,RESTFULL-API,HTML/CSS,Bootstrap,JAVASCRIPT,NODE-JS,NODE-EXPRSS,MONGODB,MONGOOSE,CRUD OPERATION,REACT-JS,GIT,GITHUB..ETC</p>

                    </div>
                    <div class="card-footer text-muted">
                    </div>
                </div>
            </div>


            <div className='row container my-5 mx-auto'>
                <div className=" col-sm-6 my-2">
                    <img src="./img/op2.jpg" className=' w-100 my-4 bgphoto' alt="" />
                    <h3 className='fuffa'>Front-End side</h3>
                    <p className='my-3 mama'>The front end of a website is everything the user either sees or interacts with when they visit the website. It is responsible for the total look and feel of an online experience</p>
                </div>
                <div className=" col-sm-6 my-2">
                    <img src="./img/op7.jpg" className=' w-100 my-4 bgphoto' alt="" />
                    <h3 className='fuffa'>Back-End side</h3>
                    <p className='my-3 mama'>The back end of a website is everything that goes on behind the scenes, from servers to databases, and much more. In a nutshell, a website’s back end is everything the user doesn’t see</p>
                </div>

                <div className=" col-sm-6 my-2">
                    <img src="./img/op11.jpg" className=' w-100 my-4 bgphoto' alt="" />
                    <h3 className='fuffa'>Database</h3>
                    <p className='my-3 mama'>A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS)</p>
                </div>

                <div className=" col-sm-6 my-2">
                    <img src="./img/op5.jpg" className=' w-100 my-4 bgphoto' alt="" />
                    <h3 className='fuffa'>Hosting</h3>
                    <p className='my-3 mama'>A web hosting service is a type of Internet hosting service that hosts websites for clients, i.e. it offers the facilities required for them to create and maintain a site and makes it accessible on the World Wide Web.</p>
                </div>
            </div>

            <div className='row container my-4 mx-auto'>
                <div className=' col-sm-6 my-4'>
                    <img src="./img/op4.jpg" className='w-100 data' alt="..." />
                </div>
                <div className='col-sm-6 my-4'>
                    <form method='POST'>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name:-</label>
                            <input type="text" name='name' value={data.name} onChange={inputdata} class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email:-</label>
                            <input type="email" name='email' value={data.email} onChange={inputdata} class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">your opinion:-</label>
                            <textarea class="form-control" placeholder='Comment & Phone Number' name='comment' value={data.comment} onChange={inputdata} id="exampleFormControlTextarea1" ></textarea>
                        </div>
                        <button type="button" onClick={finaldata} class="btn btn-secondary">Submit</button>
                    </form>
                </div>
            </div>

            <div className='row container project my-5 mx-auto'>
                <div className='row col-sm-6 my-4 mx-auto'>
                    <div className='col-sm-6 my-3 col-3'>
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
                <div className='my-3 col-sm-6 d-flex flex-column align-items-center justify-content-center'>
                    <Link to="/project" type="button" class="btn btn-secondary">Lets check project</Link>
                </div>
            </div>
        </>
    )
}
export default About;