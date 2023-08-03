import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

const Icon = () => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    position: "relative",
                    bottom: "30px",
                    // zIndex: "1"
                    // bottom: "40px",
                    // background-image : url(/sport-car_3085330.png),
                }}
            >
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "26vh",
                        width: "7vw",
                        borderRadius: "10px",
                    }}>
                        <CardContent >
                       
                        </CardContent> <img src="https://cdn-icons-png.flaticon.com/128/3085/3085330.png" alt="" style={{
                        backgroundColor: "white",
                        height: "80px",
                        width: "80px",
                        borderRadius: "10px",
                        padding:"0px",
                    }} />
                        <Typography>Car</Typography>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "26vh",
                        width: "7vw",
                        borderRadius: "10px",
                    }}>
                         <CardContent>
                        </CardContent><img src="https://cdn-icons-png.flaticon.com/512/3731/3731784.png" alt="" style={{
                        backgroundColor: "white",
                        height: "80px",
                        width: "80px",
                        borderRadius: "10px",
                        padding:"0px",
                    }} />
                        <Typography>Bike</Typography>
                </Card>
                <Card
                 style={{
                    backgroundColor: "white",
                    height: "26vh",
                    width: "7vw",
                    borderRadius: "10px",
                }}>
                         <CardContent>
                        </CardContent> <img src="https://icons.veryicon.com/png/o/business/circular-multi-color-function-icon/health-health.png" alt="" style={{
                        backgroundColor: "white",
                        height: "80px",
                        width: "80px",
                        borderRadius: "10px",
                        padding:"0px",
                    }} />
                        <Typography>Health</Typography>
                </Card>
                <Card
                style={{
                    backgroundColor: "white",
                    height: "26vh",
                    width: "7vw",
                    borderRadius: "10px",
                }}>
                   
                         <CardContent>
                        </CardContent><img src="https://cdn-icons-png.flaticon.com/128/10942/10942114.png" alt="" style={{
                        backgroundColor: "white",
                        height: "80px",
                        width: "80px",
                        borderRadius: "10px",
                        padding:"0px",
                    }} />
                        <Typography>Travel</Typography>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "26vh",
                        width: "7vw",
                        borderRadius: "10px"
                    }}>
                         <CardContent>
                        </CardContent><img src="https://cdn-icons-png.flaticon.com/128/2875/2875428.png" alt="" style={{
                        backgroundColor: "white",
                        height: "80px",
                        width: "80px",
                        borderRadius: "10px",
                        padding:"0px",
                    }} />
                        <Typography>Busniness</Typography>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "26vh",
                        width: "7vw",
                        borderRadius: "10px",
                    }}>
                         <CardContent>
                        </CardContent>
                        <img src="https://cdn-icons-png.flaticon.com/128/5091/5091974.png" alt="" style={{
                        backgroundColor: "white",
                        height: "80px",
                        width: "80px",
                        borderRadius: "10px",
                        padding:"0px",
                    }} />
                        <Typography>Renewal</Typography>
                </Card>
            </div>

        </div>
    )
}

export default Icon
