import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddChallenge() {
    const [challenge, setChallenge] = useState({
        id: '',
        title: '',
        description: '',
        start: '',
        deadline: '',
        img: '',
        status: 'ongoing',
        color: 'success',
        winner: 'soon'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setChallenge({ ...challenge, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log("Sending data:", challenge); // Debugging: Check what data is sent
    
        try {
            const response = await fetch('http://localhost:4000/add-challenge.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(challenge),
                mode: 'cors',
            });
    
            const text = await response.text(); // Get raw text before attempting to parse JSON
            console.log("Response text:", text); // Log the raw response text
    
            const data = JSON.parse(text); // Parse the response as JSON
            console.log("Parsed data:", data); // Log the parsed response data
    
            if (response.ok) {
                alert('Challenge added successfully!');
                navigate('/');
            } else {
                alert('Error adding challenge');
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };    

    return (
        <div className="container mt-5">
            <h2>Add New Challenge</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="number" name="id" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Start Date</label>
                    <input type="date" name="start" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Deadline</label>
                    <input type="date" name="deadline" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input type="text" name="img" className="form-control" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success">Add Challenge</button>
            </form>
        </div>
    );
}

export default AddChallenge;