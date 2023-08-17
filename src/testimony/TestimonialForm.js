import React, { useState } from "react";
import { firestore } from "../server/firebase-server";
import * as firestone from "@firebase/firestore";

const TestimonialForm = () => {
    const [testimonial, setTestimonial] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await firestore.collection('testimonials').add({
                text: testimonial,
                timestamp: new Date(),
            });
            console.log('Testimonial submitted successfully!');
        }catch (error) {
            console.error('Error submitting testimonial: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                placeholder="Write your Testimony..."/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TestimonialForm;
