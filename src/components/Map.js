import React from "react";
import { VectorMap } from "react-jvectormap";

const Map = () => {

    const mapData = {
        CN: 1,
        IN: 1,
        SA: 1,
        EG: 1,
        SE: 1,
        FI: 1,
        FR: 1,
        US: 1
    };

    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen" />
            <div>
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "100%",
                        height: "520px"
                    }}
                    onRegionClick={(e) => handleClick(e)} //gets the country code
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#e4e4e4",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                        },
                        hover: {
                            "fill-opacity": 0.8,
                            cursor: "pointer"
                        },
                        selected: {
                            fill: "#2938bc" //color for the clicked country
                        },
                        selectedHover: {}
                    }}
                    regionsSelectable={true}
                    series={{
                        regions: [
                            {
                                values: mapData, //this is your data
                                scale: ["#146804", "#ff0000"], //your color game's here
                                normalizeFunction: "polynomial"
                            }
                        ]
                    }}
                />
            </div>
        </>
    );
};

export default Map;