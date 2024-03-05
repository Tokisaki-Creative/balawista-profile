import { FacebookFilled, TwitterOutlined, LinkedinFilled, InstagramFilled, ShareAltOutlined  } from "@ant-design/icons"

const SocialMediaShare = () => {
    return (
        <div className="flex gap-4 md:gap-8 text-2xl md:text-4xl">
            <FacebookFilled />
            <TwitterOutlined />
            <LinkedinFilled />
            <InstagramFilled />
            <ShareAltOutlined />
        </div>
    )
}

export default SocialMediaShare