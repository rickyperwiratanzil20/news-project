import React, {useState, useEffect} from 'react';
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
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        setSuccess(false);
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess(false);
        setFailed(false);

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
            setFailed(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
            setSuccess(false);
            setFailed(true);
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
                {success && <p>Registration Complete</p>}
                {failed && <p>Registration Failed</p>}
                {!loading && (
                    <form onSubmit={handleSubmit}>
                        <Input label="Full Name" placeholder="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <Gap height={18}/>
                        <Input label="Email" placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Gap height={18}/>
                        <Input label="Password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
