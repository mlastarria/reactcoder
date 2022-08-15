import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SummaryOutline, SummaryTitle, SummarySubKey, SummarySubValue, SummaryRow, SummaryFormGroup, SummaryInput, SummaryErrorSpan } from './styledComponents';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const CartSummary = (props) => {
    const { count, price } = props;
    const test = useContext(CartContext)
    const MySwal = withReactContent(Swal)


    const onConfirm = (name, email, phone) => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        const order = {
            buyer: {
                name,
                email,
                phone,
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({ id: item.id, title: item.name, price: item.price, quantity: item.quantity })),
            total: price,
        }

        addDoc(orderCollection, order)
        
            .then(({ id }) => 
            MySwal.fire({
                title: <strong>¡Orden Ingresada!</strong>,
                html: <i>Su id de compra es + {id}</i>,
                icon: 'success'
              })
            )


            .catch(err => console.log(err))
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formik = useFormik({
        initialValues: {
            buyer_name: '',
            buyer_email: '',
            buyer_phone: '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            buyer_name: Yup.string().required('Required'),
            buyer_email: Yup.string().email('Invalid email address').required('Required'),
            buyer_phone: Yup.string().required('Required').matches(phoneRegExp, 'Phone number is not valid')
        }),
        onSubmit: values => {
            const { buyer_name, buyer_email, buyer_phone } = values;
            onConfirm(buyer_name, buyer_email, buyer_phone);
        },
        onReset: () => {
        }
    });

    return (
        <SummaryOutline>
            <SummaryTitle>Resumen de Compra</SummaryTitle>
            <SummaryRow>
                <SummarySubKey>Cantidad:</SummarySubKey>
                <SummarySubValue>{count}</SummarySubValue>
            </SummaryRow>
            <SummaryRow>
                <SummarySubKey>Precio Total:</SummarySubKey>
                <SummarySubValue>${price}</SummarySubValue>
            </SummaryRow>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <SummaryFormGroup className="form-group">
                    <SummaryInput
                        id="buyer_name"
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        value={formik.values.buyer_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.buyer_name && formik.errors.buyer_name &&
                        <SummaryErrorSpan>{formik.errors.buyer_name}</SummaryErrorSpan>
                    }
                </SummaryFormGroup>
                <SummaryFormGroup className="form-group">
                    <SummaryInput
                        id="buyer_email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        value={formik.values.buyer_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.buyer_email && formik.errors.buyer_email &&
                        <SummaryErrorSpan>{formik.errors.buyer_email}</SummaryErrorSpan>
                    }
                </SummaryFormGroup>
                <SummaryFormGroup className="form-group">
                    <SummaryInput
                        id="buyer_phone"
                        type="tel"
                        placeholder="Phone"
                        className="form-control"
                        value={formik.values.buyer_phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.buyer_phone && formik.errors.buyer_phone &&
                        <SummaryErrorSpan>{formik.errors.buyer_phone}</SummaryErrorSpan>
                    }
                </SummaryFormGroup>
                <button type="submit" className="btn btn-success w-100 mt-3 mb-2">CONFIRMAR COMPRA</button>
                <button type="reset" className="btn btn-danger w-100">BORRAR FORMULARIO</button>
            </form>
        </SummaryOutline>
    )
}

export default CartSummary;
