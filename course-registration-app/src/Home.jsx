import React, { useEffect, useState } from 'react';
import "./Home.css";
import Cart from "./Cart"
import { toast } from 'react-toastify';

const Home = () => {

    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState([0]);
    const [totalCredit, setTotalCredit] = useState([0]);
    const [totalCost, setTotalCost] = useState([0]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
    }, []);

    const handleSelectCourses = (course) => {
        const isSelect = selectedCourse.find(item => item.id == course.id);
        let count = course.price;
        let credit = course.credit;
        if(isSelect){
            toast.error("You Already Select This")
        }

        else{
            selectedCourse.forEach((item)=>{
                count = count + item.price;
            });
            selectedCourse.forEach((item)=>{
                credit = credit + item.credit;
            })

            const totalRemaining = 20 - credit;
            setRemainingCredit(totalRemaining);
            
            if(credit > 20){
                toast.error("You Can Not Select More Than 20 cr")
            }
            else{
                setTotalCredit(credit);
                setTotalCost(count);
                setSelectedCourse([...selectedCourse, course]);
            }
           
            
        }
        
    }
    return (

        <div>
            <h1>Course Registration</h1>
            <div className="home-container">
                <div className="course-container">
                    {
                        allCourses.map(course => (
                            <div className="card">
                                <div className="img">
                                    <img class="img" src={course.image} />
                                </div>
                                <h2 className="course-title">{course.course_name}</h2>
                                <p className="course-info">{course.course_description}</p>
                                <div className="info">
                                    <p>$ Price: {course.price}</p>
                                    <img class="frame-img" src="https://i.ibb.co/rKhB4Vn/frame.png" />
                                    <p> Credit: {course.credit} hr</p>
                                </div>
                                <button onClick={()=>handleSelectCourses(course)} className="course-select">Select</button>
                            </div>
                        ))
                    }


                </div>
                <div className="cart-container">
                 <Cart selectedCourse={selectedCourse} totalCost={totalCost} remainingCredit={remainingCredit} totalCredit={totalCredit}></Cart>
                    
                </div>
            </div>
        </div>

    )
}

export default Home;