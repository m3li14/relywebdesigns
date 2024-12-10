import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Checkbox, FormControlLabel, TextField, Button, Grid, Divider } from '@mui/material';
import emailjs from 'emailjs-com';
import { IoMdSend } from 'react-icons/io';

const features = [
    { id: 'contact', label: 'Contact Form', price: 150 },
    { id: 'gallery', label: 'Image Gallery', price: 150 },
    { id: 'blog', label: 'Blog', price: 500 },
    { id: 'ecommerce', label: 'E-commerce', price: 1500 },
    { id: 'booking', label: 'Booking System', price: 800 },
    { id: 'social', label: 'Social Integration', price: 250 },
    { id: 'seo', label: 'SEO', price: 700 },
    { id: 'analytics', label: 'Analytics', price: 200 },
    { id: 'hosting', label: 'Hosting:', price: 260 }
];

const QuoteCalculator = () => {
    const [quoteCalculated, setQuoteCalculated] = useState(false);
    const [total, setTotal] = useState(0);

    const formik = useFormik({
        initialValues: {
            pages: '',
            selectedFeatures: [],
            name: '',
            email: '',
            phone: ''
        },
        validationSchema: Yup.object({
            pages: Yup.number()
                .required('Required')
                .positive('Must be a positive number')
                .integer('Must be an integer'),
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone: Yup.string().required('Required')
        }),
        onSubmit: (values, { resetForm }) => {
            const pagesCost = values.pages * 100; // e.g., $100 per page
            const featuresCost = values.selectedFeatures.reduce(
                (acc, featureId) => acc + (features.find(f => f.id === featureId)?.price || 0),
                0
            );
            const calculatedTotal = pagesCost + featuresCost;

            setTotal(calculatedTotal);
            setQuoteCalculated(true);

            // Prepare data to send via email
            const emailData = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                pages: values.pages || null, // Include only if it has a value
                selectedFeatures: values.selectedFeatures.length
                    ? values.selectedFeatures.map(featureId => features.find(f => f.id === featureId)?.label).join(', ')
                    : null,
                totalCost: calculatedTotal ? calculatedTotal.toFixed(2) : null,
            };

            // Send email using emailjs
            emailjs.send(
                'service_jgu8a5r', // Replace with your EmailJS service ID
                'template_wtutmlg', // Replace with your EmailJS template ID
                emailData,
                'SqhtzwskGNPLF05Ug' // Replace with your EmailJS user ID
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Quote sent successfully!');
                    resetForm();
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the quote, please try again.');
                });
        }
    });

    const handleCheckboxChange = (featureId) => {
        const selectedFeatures = formik.values.selectedFeatures.includes(featureId)
            ? formik.values.selectedFeatures.filter(id => id !== featureId)
            : [...formik.values.selectedFeatures, featureId];
        formik.setFieldValue('selectedFeatures', selectedFeatures);
    };

    return (
        <div>
            <div className="text-3xl font-bold Company-Main-Font pb-4">Quote Calculator</div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="pages"
                    name="pages"
                    label="Number of Pages"
                    type="number"
                    value={formik.values.pages}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.pages && Boolean(formik.errors.pages)}
                    helperText={formik.touched.pages && formik.errors.pages}
                    margin="dense"
                />

                <div>
                    <div className="text-xl font-bold pt-2">Select Features:</div>
                    <div className='my-2'><Divider /></div>
                </div>

                <Grid container spacing={0}>
                    {features.map(feature => (
                        <Grid item xs={6} sm={4} key={feature.id}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.selectedFeatures.includes(feature.id)}
                                        onChange={() => handleCheckboxChange(feature.id)}
                                        name={feature.id}
                                    />
                                }
                                label={feature.label}
                            />
                        </Grid>
                    ))}
                </Grid>


                <div>
                    <div className="text-xl font-bold pt-2">Your Contact Information:</div>
                    <div className='my-2'><Divider /></div>
                </div>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Full Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email Address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Phone Number"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            margin="normal"
                        />
                    </Grid>
                </Grid>




                <Button color="secondary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}
                    startIcon={<IoMdSend size={20} />}
                >
                    Submit
                </Button>
            </form>

            {quoteCalculated && (
                <div className='mt-2'>
                    Your quote has been sent successfully!
                </div>
            )}
        </div>
    );
};

export default QuoteCalculator;
