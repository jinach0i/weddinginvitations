
import Map from "@/containers/map-section";
import Reach from "@/containers/to-reach-section";

export default function Location() {
    return (
        <section className="location">
            <div className="inner1">
                <h2 className="parisienne">위치</h2>
                <Map />
                <Reach />
            </div>
        </section>
    )
};
