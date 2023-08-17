import React, { useEffect, useState } from 'react';
import { firestore } from "../server/firebase-server";

const TestimonialsList = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const snapshot = await firestore.collection('testimonials').get();
            const testimopnialList = snapshot.docs.map((doc) => doc.data());
            setTestimonials(testimopnialList);
        };

        fetchTestimonials();
    }, []);

    return (
        <div>
            <h2>Testminials</h2>
            <ul>
                {testimonials.map((testimonial, index) => (
                    <li key={index}>{testimonial.text}</li>
                ))}
            </ul>
        </div>
    );
};
export default TestimonialsList;
