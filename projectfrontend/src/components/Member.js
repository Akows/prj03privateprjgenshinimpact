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

    const handleClick = (e) => {
        e.preventDefault();

        const member = {id, pwd};

        console.log(member)

    }

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

                        {id}
                        {pwd}

                        <Button variant="contained" onClick={handleClick}>
                            Submit
                        </Button>

                    </Paper>
            </Container>
    );
}
