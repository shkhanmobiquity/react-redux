import React from 'react';
// Assets
import logo from '../../assets/img/logo.svg';
// UI
import { PageTitle } from '../../shared/UI';

const AboutPage = () => {
    return <React.Fragment>
         <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <PageTitle>About Us</PageTitle>
            </div>
        </div>
        <div className="containner-fluid border-bottom-1 py-5">
            <div className="container">
                <h2 className="text-center">Overview</h2>
                <div className="about-content d-flex mt-5">
                    <div className="col-6">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                    </div>
                </div>
            </div>
        </div>
        <div className="containner-fluid border-bottom-1 bg-secondary py-5">
            <div className="container">
                <h2 className="text-center text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <div className="d-flex">
                    <div className="col-6">
                        <div className="p-2 text-center text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-2 text-center text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi, in tempora rerum doloremque et molestias placeat fuga eos. Aut dolorum recusandae deleniti tenetur minima neque in incidunt provident officiis.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default AboutPage;