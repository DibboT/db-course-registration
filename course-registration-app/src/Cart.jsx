import React from "react";
import "./Cart.css";

const Cart = ({ selectedCourse, remainingCredit, totalCredit, totalCost }) => {
    console.log(selectedCourse);
    return (
        <div className="cart-container">
            <h2 className="remaining-hour">Credit Hour Remaining {remainingCredit} hr</h2>
            <hr className="hr-line"></hr>
            <h2 className="course-name">Course Name</h2>
            {selectedCourse.map((course,index) => (
                <ol><li>{index+1}. {course.course_name}</li></ol>
               
            ))}
            <hr className="hr-line"></hr>
            <h2 className="total-credit">Total Credit: {totalCredit}</h2>
            <hr className="hr-line"></hr>
            <h2 className="total-price">Total Price: {totalCost} USD</h2>
               
        </div>
    );
};

export default Cart;
