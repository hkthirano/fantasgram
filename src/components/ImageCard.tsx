import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export type ImageCardProps = {
    imageUrl: string;
    imageName: string;
    createdDate: string;
}

export default function ImageCard(props: ImageCardProps) {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.imageUrl}
                        alt="塩"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.imageName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.createdDate}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}