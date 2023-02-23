import Image from "next/image"

type Images = {
    name: string
    width: number
    height: number
}

export default function HeroImage(props: Images){
    return (
    <>
        <Image src={"/"+props.name} width={props.width} height={props.height} alt=""/>
    </>)
}