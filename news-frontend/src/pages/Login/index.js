import React, {useState} from 'react'
import {LoginBg} from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then((response) => response.json())
        .then((data) => {
            setSuccess(true);
            setLoading(false);
        })
        .catch((error) => {
            console.log('Error:', error);
            setLoading(false);
        });
    };

    return (
        <div className='main-page'>
            <div className='left'>
                <img src={LoginBg} className='bg-image' alt='imageBg'/>
            </div>
            <div className='right'>
                <p className='title'>Login</p>
                {loading && <p>Loading...</p>}
                {success && <p>Login Complete</p>}
                {!loading && (
                    <form onSubmit={handleSubmit}>
                        <Input label="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Gap height={18}/>
                        <Input label="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Gap height={20}/>
                        <Button title='Login' type="submit"/>
                        <Gap height={60}/>
                        <Link title="Don't Have An Account ? Register Here" onClick={() => navigate('/register')}/>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Login;
