//import react from 'react';
import { useState } from "react";

function Contact() {

    const [Email, setEmali] = useState("")
    const [EmailErr, setEmaliErr] = useState("false")
    const [Phonenumber, setPhonenumber] = useState("")
    const [PhonenumberErr, setPhonenumberErr] = useState("false")
    
    function userhandler(e){
        let item=e.target.value;
        if(
            item.length<4
        )
        {
            setEmaliErr(true)
        }
        else
        {
            setEmaliErr(false)
        }
        console.warn(e.target.value)

    }
    function messagehandler(e){
        e.preventDefault()

    }
   return (

        <div>
            <section className="py-2 bg-info my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4> Contact</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 " onSubmit={messagehandler}>
                                    <h6>Contact Form</h6>
                                    <hr />

                                    <div className="form-group py-2">
                                        <lable class="mb-1"> Full Name</lable>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>

                                    <div className="form-group py-2">
                                        <lable class="mb-1"> Phone Number</lable>
                                        <input type="Phone number" onChange={userhandler} className="form-control" placeholder="Enter your Phonenumber" />
                                    </div>

                                    <div className="form-group py-2">
                                        <lable class="mb-1"> Email Address</lable>
                                        <input type="email" className="form-control" placeholder="Enter your Email" />
                                        {EmailErr? <span>*******</span>: null}
                                    </div>

                                    <div className="form-group py-2">
                                        <lable class="mb-1"> Message</lable>
                                        <textarea rows="3" className="form-control" placeholder=" Type Your Message....."></textarea>
                                    </div>

                                    <div className="form-group py-2">

                                        <button type="Submit"  className="btn btn-primary shadow w-60" > Send Message</button>
                                    </div>
                                </div>

                                <div className="col-md-4 border-start">
                                    <h5 className="main heading"> Address Information </h5>
                                    <div className="underline"> </div>
                                    <div>
                                        <p> <h5>
                                            Address
                                        </h5>
                                            #xxxx, kagal , Kolhapur Maharashtra -416xxx, INDIA
                                        </p>

                                        <p>
                                            <h5>
                                                Conctact Number
                                            </h5>
                                            +91 xxxxxxxx89
                                        </p>

                                        <p>
                                            <h4>
                                                Email
                                            </h4>
                                            email@admin.com
                                        </p>


                                    </div>




                                </div>
                            </div>




                        </div>
                    </div>
                </div>

            </section>
        </div>

    );

}
export default Contact;


