export interface Model {
    id: number;
    vehicleId: number;
    spec: Spec;
    minPrice: number;
    imageUrl: string;
}

interface Spec {
    engine?: string;
    transmission?: string;
    bodyType?: string;
    driveType?: string;
}