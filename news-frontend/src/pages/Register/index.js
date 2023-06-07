import React, {useState} from 'react';
import './register.scss';
import {RegisterBg} from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
        .then((response) => response.json())
        .then((data) => {
            setSuccess(true);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
        });
    };

    return (
        <div className='main-page'>
            <div className='left'>
                <img src={RegisterBg} className='bg-image' alt='imageBg'/>
            </div>
            <div className='right'>
                <p className='title'>Register</p>
                {loading && <p>Loading...</p>}
                {success && <script>alert("Registration Complete");</script>}
                {!loading && (
                    <form onSubmit={handleSubmit}>
                        <Input label="Full Name" placeholder="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <Gap height={18}/>
                        <Input label="Email" placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Gap height={18}/>
                        <Input label="Password" placeholder="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Gap height={20}/>
                        <Button title='Register' type="submit"/>
                        <Gap height={60}/>
                        <Link title="Kembali Ke Login" onClick={() => navigate('/login')}/>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register;
