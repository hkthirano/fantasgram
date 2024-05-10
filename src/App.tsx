import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex-col space-y-2">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className='flex space-x-2'>
              <img src="logo.svg" className="w-8" />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Fantasgram
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

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
  );
}

export default App;
