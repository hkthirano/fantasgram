import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function App() {
  return (
    <div className='p-16'>
      <div className="h-screen w-screen flex justify-center">
        <div className="flex-col space-y-4">

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://fantasgramdata.z11.web.core.windows.net/salt_macro.jpg"
                alt="塩"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  塩
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2024/5/9
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://fantasgramdata.z11.web.core.windows.net/salt_micro.jpg"
                alt="塩"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  塩
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2024/5/9
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
