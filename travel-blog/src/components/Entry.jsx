export default function Entry() {
    return (
        <div className="entry">
            <div className="entry_image">
                <img
                    className="main-image"
                    src="https://scrimba.com/links/travel-journal-japan-image-url"
                    alt="mount fuji"
                />
            </div>
            <div className="entry_article">
                <div className="entry_header">
                    <img src="./src/marker.png" alt="marker" className="entry_marker"/>
                    <span className="entry_country">JAPAN</span>
                    <a className="entry_link"
                       href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                       target="_blank">
                        View on Google Maps</a>
                </div>
                <div className="entry_content">
                    <h1 className="entry_place">Mount Fuji</h1>
                    <span className="entry_dates">12 Jan, 2021 - 24 Jan, 2021</span>
                    <span className="entry_text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</span>
                </div>
            </div>
        </div>
    )
}