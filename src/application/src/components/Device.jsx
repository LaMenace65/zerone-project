const Device =  ({deviceInfo, onClick}) => {

    return <>
        <tr>
            <td>{deviceInfo.name}</td>
            <td>{deviceInfo.IPV6ADDRESS}</td>
            <td>{deviceInfo.location}</td>
            <td>{deviceInfo.connectAt}</td>
            <td><button onClick={onClick}>Delete</button></td>
        </tr>
    </>
}

export default Device;