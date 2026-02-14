import { Box, Container, Stack } from "@mui/material";
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from "react";

export const Map = () => {
    const defaultCenter: LatLngExpression = [-16.5, -68.15]; // fallback si el usuario no da permisos

    const [userPosition, setUserPosition] = useState<LatLngExpression | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat: number = position.coords.latitude;
                    const lng: number = position.coords.longitude;
                    setUserPosition([lat, lng] as LatLngExpression);
                },
                (error) => console.error('Error obteniendo ubicación:', error)
            );
        }
    }, []);

    const MapUpdater = ({ center }: { center: LatLngExpression }) => {
        const map = useMap();
        map.setView(center);
        return null;
    };


    return (
        <Box id="hero" className='w-full'>
            <Container
                className='flex items-center flex-col'
                sx={{
                    pb: { xs: 8, sm: 12 },
                    pt: { xs: 14, sm: 20 },
                }}
            >
                <Stack
                    useFlexGap
                    spacing={2}
                    className='w-full items-center'
                    sx={{ width: { xs: '100%', sm: '70%' } }}
                >
                    <h1 className='text-3xl font-bold text-center'>Nuestras Sucursales</h1>
                    <div style={{ height: '70vh', width: '100%' }}>
                        <MapContainer
                            center={userPosition ?? defaultCenter}
                            zoom={15}
                            scrollWheelZoom={false}
                            style={{ height: '100%', width: '100%' }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {userPosition && <MapUpdater center={userPosition} />}
                            <Marker position={userPosition ?? defaultCenter}>
                                <Popup>Tu ubicación</Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </Stack>
            </Container>
        </Box >
    );
}   