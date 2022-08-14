import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
    return (

        <div className="col">

            <div className="card h-100 p-3">
                <Link to={`/item/${info.id}`}>
                    <img src={info.imagenurl} className="card-img-top" alt="..." />
                </Link>

                <div className="card-body">
                    <h4 className="card-title">{info.nombre}</h4>
                    <p className="card-text">US$ {info.precio}</p>
                    <Link to={`/item/${info.id}`}> <button className="btn btn-primary" type="button" >Ver Detalles</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Item;



