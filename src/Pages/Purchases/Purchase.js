import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { _id } = useParams();
    const [tool, setTool] = useState([]);
    const [orderQuantity, setOrderQuantity] = useState(100);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => {
                const exist = data.find(tool => tool._id === _id);
                console.log(exist);
                setTool(exist);
            });
    }, [_id]);
    if (!tool) {
        return <Loading></Loading>
    }

    const handleIncreaseQuantity = (event) => {
        const newQuantity = orderQuantity + 1;
        tool.quantity = tool.quantity - 1;
        tool.price = 30 * parseInt(newQuantity);
        setOrderQuantity(newQuantity);
        console.log("newQuantity1:" ,newQuantity, "orderQuantity1", orderQuantity,tool.quantity);
        // const bookedTool = {
        //     name: tool.name,
        //     price: tool.price,
        //     quantity: newQuantity,
        //     email: user.email,
        //     description: tool.description,
        //     displayName: user.displayName,
        //     paid: false,
        //     pending: true
        // }

        // const url = `http://localhost:5000/tool?email=${user?.email}`;

        // fetch(url, {
        //     method: "PUT",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookedTool)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
    }



    const handleDecreaseQuantity = (event) => {
        if (orderQuantity <= 100) {
            return Swal.fire({
                icon: "error",
                title: "Try Again",
                text: `You Must be Ordered at least 100`,
            });
        }
        const newQuantity = orderQuantity - 1;
        tool.quantity = tool.quantity + 1;
        tool.price = 30 * parseInt(newQuantity);
        setOrderQuantity(newQuantity);
        console.log("newQuantity:" ,newQuantity, "orderQuantity", orderQuantity);
    }

    return (
        <div>
            <div className="card w-[80%] mx-auto bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <img src={tool?.image} alt="" />
                    <h2 className="card-title">{tool?.name}</h2>
                    <p>{tool?.description}</p>
                    <p>Price: {parseInt(tool?.price)}$</p>
                    <p>In Stock: {tool?.quantity}</p>
                    <p>Minimum Order: 100</p>
                    <div className='flex justify-center items-center'>
                        <input type="number" readOnly value={orderQuantity} className='input input-bordered' />
                        <PlusIcon
                            onClick={handleIncreaseQuantity}
                            className='w-9 h-9 cursor-pointer ml-3'></PlusIcon>
                        <MinusIcon
                            onClick={handleDecreaseQuantity}
                            className='w-9 h-9 cursor-pointer ml-3'></MinusIcon>
                    </div>

                    <div className="card-actions">
                        <label htmlFor="booking-modal" className="btn btn-primary modal-button">Purchase</label>
                    </div>
                </div>
            </div>
            {tool && <PurchaseModal tool={tool} ></PurchaseModal>}
        </div>
    );
};

export default Purchase;