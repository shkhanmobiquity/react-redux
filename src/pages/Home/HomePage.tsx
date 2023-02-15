import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageTitle } from '../../shared/UI';
import { demoSelectors, itemSelector } from '../../stores/demo/selector';
import { demoActions } from '../../stores/demo/slice';

const HomePage: React.FC<any> = () => {
    const pageTitle = ' Lorem ipsum dolor sit amet consectetur adipisicing elit';
    const dispatch = useDispatch();
    const selector =  useSelector(itemSelector)
    // console.log('selector', selector);
    useEffect(() => {
        dispatch(
            demoActions.addToCart({item: {id: 5, name: 'product 1'}})
        );
        // dispatch(
        //     demoActions.addToCart({item: {id: 6, name: 'product 2'}})
        // )
    }, [])
    
    
    return <React.Fragment>
        <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
                <PageTitle>{pageTitle}</PageTitle>
            </div>
        </div>
        <div className="containner-fluid border-bottom-1 py-5">
            <div className="container">
                <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <div className="p-5 text-center">
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

export default HomePage;