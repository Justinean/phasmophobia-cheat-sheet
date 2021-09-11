import './photos.css';

function Photos() {
    return (
        <div className="photos">
            <h1>Photos</h1>
            <div className="information">
                <div className="points">
                    <h2>Points:</h2>
                    <p>(Points are for 3 stars only)</p>
                    <ul>
                        <li>Ghost: 100pts</li>
                        <li>Bone: 70pts</li>
                        <li>Ouija Board: 60pts</li>
                        <li>Fingerprints: 50pts</li>
                        <li>Interaction/Footprints: 40pts</li>
                        <li>Dead body/Dirty water: 30pts</li>
                    </ul>
                </div>
                <div className="money">
                    <h2>Money:</h2>
                    <ul>
                        <li>500 = 40$</li>
                        <li>400-499 = 35$</li>
                        <li>300-399 = 30$</li>
                        <li>200-299 = 25$</li>
                        <li>100-199 = 20$</li>
                        <li>50-99 = 15$</li>
                        <li>1-49 = 10$</li>
                        <li>0 = 0$</li>
                    </ul>
                </div>
                <div className="input">
                </div>
            </div>
        </div>
    )
}

export default Photos;