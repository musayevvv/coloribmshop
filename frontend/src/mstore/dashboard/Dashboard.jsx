import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../redux/reducer/productSlice';
import styles from './Dashboard.module.css'

const Dashboard = () => {

    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])


    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            image: '',
        },
        onSubmit: values => {
            if (!values.name || !values.price || !values.image) {
                alert('Zəhmət olmasa bütün sahələri doldurun.');
                return;
            }
            dispatch(postProductsThunk(values));
            formik.resetForm();
        },
    });

    if (error) return <span>Yukleme zamani xeta bas verdi</span>
    if (loading) return <span>Yuklenir</span>
    return (
        <section className={styles.dashboardSection}>
            <div className={styles.container}>
                <div className={styles.dashboardDiv}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                        />
                        <label htmlFor="image">Image</label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                        <button type="submit">Submit</button>
                    </form>

                    {product.map((item) => (
                        <div key={item._id} className={styles.menProduct}>
                            <div className={styles.productimage}><img src={item.image} alt="" /></div>
                            <div className={styles.productBody}>
                                <h5>{item.name}</h5>
                                <h3>${item.price}</h3>
                                <button className={styles.dltButton} onClick={() => dispatch(deleteProductsThunk(item._id))}>REMOVE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Dashboard