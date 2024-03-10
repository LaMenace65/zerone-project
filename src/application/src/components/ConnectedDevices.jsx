import Device from "./Device";
import {useState} from "react";

export default function ConnectedDevices() {
    const [devices, setDevices] = useState([
        {id: 1, name: "Iphone", location: "Paris, France", connectAt: "20/05/2020 13:20:15"},
        {id: 2, name: "Windows 10", location: "Limoges, France", connectAt: "20/05/2020 13:20:15"},
        {id: 3, name: "Macbook Pro", location: "Paris, France", connectAt: "20/05/2020 13:20:15"},
    ]);

    const deleteDevice = (id) => {
        const copyDevice = [...devices];
        const copyDeviceUpdated = copyDevice.filter(device => device.id !== id);
        // if(confirm('Are you sure you want to delete this device?')){
        setDevices(copyDeviceUpdated);
        // }
    }

    return <>
            <table>
                <thead>
                    <tr>
                        <th>Device Name</th>
                        <th>Localisation</th>
                        <th>Connected At</th>
                    </tr>
                </thead>
                <tbody>
                {devices.map((device) =>
                    <Device
                        key={device.id}
                        deviceInfo={device}
                        onClick={() => deleteDevice(device.id)}
                    />
                )}
                </tbody>
            </table>
    </>
}