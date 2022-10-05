import Image from "next/image"

export default function Intro() {
    return (
        <div className="intro-bg d-none d-md-block">
            <img src='/assets/gif/main.webp' className="img-fluid intro-img w-100" alt="..." />
            <div className="intro-text">TRY THE<br />PROTOTYPE
                <div>
                    <img src="/assets/images/apple.webp" alt="apple" style={{ maxWidth: "280px" }} />
                </div>
            </div>


            <button className="intro-button">JOIN OUR MAILING LIST</button>
        </div>
    )
}