import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function AppHeader() {
    return (
        <div>
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
        </div>
    )
}