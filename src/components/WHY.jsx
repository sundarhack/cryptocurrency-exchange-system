import Link from "next/link"

export default function WHY() {


    return (
        <div>
            <div className="header" style={{ color: "white" }}>
                <h1>Why krypton?</h1>

            </div>
            <div className="container">
                <div className='why_box' style={{ padding: "60px" }}>
                    <div style={{ display: "flex" }}>
                        <img src="1.png" alt="" />
                        <div style={{ paddingTop: "60px", paddingLeft: "30px", fontSize: "30px" }}>
                            <h1>Simplicity</h1>
                            <h2 className='why_box_color'>Krypton makes it easy to buy and sell
                                crypto using our web apps</h2>
                        </div>
                    </div>
                </div>

                <div className='why_box' style={{ padding: "60px" }}>
                    <div style={{ display: "flex" }}>
                        <img src="2.png" alt="" />
                        <div style={{ paddingTop: "60px", paddingLeft: "30px", fontSize: "30px" }}>
                            <h1>Educative</h1>
                            <h2 className='why_box_color'>Not sure where to start? Head to our Learn Center and learn about all things
                                crypto.</h2>
                        </div>
                    </div>
                </div>
                <div className='why_box' style={{ padding: "60px" }}>
                    <div style={{ display: "flex" }}>
                        <img src="3.png" alt="" />
                        <div style={{ paddingTop: "60px", paddingLeft: "30px", fontSize: "30px" }}>
                            <h1>Trade and exchange</h1>
                            <h2 className='why_box_color' >Not sure where to start? Head to our Learn Center and learn about all things
                                crypto.</h2>
                        </div>
                    </div>
                </div>


            </div>
            <div style={{ padding: "10px 10px 30px 10px", textAlign: "center" }}>
                <button className="button" role="button" ><Link href="/login">Get Started Here...!</Link></button>
            </div>


        </div>

    )
}