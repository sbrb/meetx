
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function EarlyAccess() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        employeeName: "",
        email: "",
        mobileNumber: "",
        dob: "",
        gender: "",
        country: "",
    });
    // const [employees, setEmployees] = useState([]);
    // const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(
    //             "https://crudcrud.com/api/3b6744664e6148eb8655f85ad9942e0f/posts"
    //         );
    //         const data = await response.json();
    //         setEmployees(data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let url =
    //             "https://crudcrud.com/api/3b6744664e6148eb8655f85ad9942e0f/posts";
    //         let method = "POST";
    //         if (selectedEmployeeId) {
    //             url += `/${selectedEmployeeId}`;
    //             method = "PUT";
    //         }
    //         const response = await fetch(url, {
    //             method: method,
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         const data = await response.json();
    //         console.log("Success:", data);
    //         setFormData({
    //             id: "",
    //             employeeName: "",
    //             email: "",
    //             mobileNumber: "",
    //             dob: "",
    //             gender: "",
    //             country: "",
    //         });
    //         setShowModal(false);
    //         setSelectedEmployeeId(null);
    //         fetchData();
    //     } catch (error) {
    //         console.error("Error:", error);
    //     } finally {
    //         setShowModal(false);
    //     }
    // };

    return (
        <div className="app">
            <button className="add-employee-btn" onClick={() => setShowModal(true)}>
                Early Access
            </button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {/* <form onSubmit={handleSubmit}> */}
                        <form >
                            <span className="close-btn" onClick={() => setShowModal(false)}>
                                <FaTimes />
                            </span>
                            <p>Early Access</p>
                            <br />
                            <label> Full Name</label>
                            <input
                                type="text"
                                name="employeeName"
                                value={formData.employeeName}
                                // onChange={handleChange}
                                placeholder="Enter Employee Name"
                                required
                            />

                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                // onChange={handleChange}
                                placeholder="Enter Email Address"
                                required
                            />

                            <label>Mobile Number</label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                // onChange={handleChange}
                                placeholder="Enter Mobile Number"
                                required
                            />
                            <label>Gender:</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                // onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                            <label>Country</label>
                            <select
                                name="country"
                                value={formData.country}
                                // onChange={handleChange}
                                required
                            >
                                <option value="">Select Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Albania">India</option>
                            </select>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EarlyAccess;