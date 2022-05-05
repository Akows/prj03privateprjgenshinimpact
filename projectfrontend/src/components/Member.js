import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Member() {
    
    const paperStyle = {
        padding: '50px 20px', 
        width:'600', 
        margin:'20px auto'
    }

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    const [members, setMembers] = React.useState('');

    const handleClick = (e) => {
        e.preventDefault();

        const member = {id, pwd};

        console.log(member)

        fetch(
            "http://localhost:8090/member/signup", {
            method:"POST",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify(member)
        }).then(() => {
            console.log('New Member Added!')
        })
    }

    React.useEffect(() => {
        fetch("http://localhost:8090/member/getallmembers")
        .then(res => res.json())
        .then((result) => {
            setMembers(result);
        }
    )}, [])

    return (
            <Container>
                    <Paper elevation={3} style={paperStyle}>
                        <h1 style={{color: '#28AEFF'}}> 
                                <u>Add Member</u> 
                        </h1>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                                <TextField id="standard-basic" label="ID" variant="standard" fullWidth value={id} onChange={(e) => setId(e.target.value)}/>
                                <TextField id="standard-basic" label="Password" variant="standard" fullWidth value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                        </Box>

                        <Button variant="contained" onClick={handleClick}>
                            Submit
                        </Button>

                        <h1>Members List</h1>
                        <Paper elevation={3} style={paperStyle}>
                                {members&&members.map(member => (
                                        <Paper elevation={6} style={{margin:'10px', padding: '15px', textAlign:'left'}} key={member.membernumber}>
                                            <b>Member Number :</b> {member.membernumber} <br/>
                                            <b>Member ID : </b>{member.id} <br/>
                                            <b>Member PASSWORD : </b>{member.pwd} <br/>
                                        </Paper>
                                ))}
                        </Paper>

                    </Paper>
            </Container>
    );
}
