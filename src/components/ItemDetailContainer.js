import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [listado, setListado] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", id);
		getDoc(queryDoc).then((res) => setListado({ id: res.id, ...res.data() }));
	}, [id]);

	return <ItemDetail listado={listado} />;
};

export default ItemDetailContainer;
