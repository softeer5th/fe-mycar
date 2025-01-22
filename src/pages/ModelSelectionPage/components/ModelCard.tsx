import { Model } from "../../../domain/Model";

const ModelCard = ({id, vehicleId, spec, minPrice, imageUrl}: Model) => { 

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default ModelCard;