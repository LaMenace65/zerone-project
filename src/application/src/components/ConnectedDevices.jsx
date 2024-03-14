import Device from "./Device";
import {useState} from "react";

export default function ConnectedDevices() {
    const [devices, setDevices] = useState([
        {id: 1, name: "Iphone", location: "Paris, France", IPV6ADDRESS: "6bd1:b46d:d219:36f4:4ba6:f076:699f:966b", connectAt: "20/05/2020 13:20:15"},
        {id: 2, name: "Windows 10", location: "Limoges, France", IPV6ADDRESS: "c01a:b3fe:f104:0485:0196:9236:aca6:6b9e", connectAt: "20/05/2020 13:20:15"},
        {id: 3, name: "Macbook Pro", location: "Paris, France", IPV6ADDRESS: "4364:f280:30e7:7471:9a90:3ac8:cfd8:3cde", connectAt: "20/05/2020 13:20:15"},
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
                        <th>IP address</th>
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