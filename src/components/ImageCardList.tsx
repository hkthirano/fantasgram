import ImageCard, { ImageCardProps } from "./ImageCard"

type ImageCardListProps = {
    images: ImageCardProps[]
}

export default function ImageCardList(props: ImageCardListProps) {
    return (
        <div>
            <div className="flex-col space-y-2">
                {props.images.map((val, i) => {
                    return (
                        <ImageCard {...val} key={i} />
                    )
                })}
            </div>
        </div>
    )
}