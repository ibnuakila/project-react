export default function Profile(props){
    return (
        <div>
            <h2>Biodata</h2>
            <p>Nama: {props.name}</p>
            <p>Email: {props.email}</p>
        </div>        
    )
}

export function Picture(){
    return (
        <>
            <img
                src="https://i.imgur.com/QIrZWGIs.jpg"
            ></img>
            <h4>Profile Picture</h4>
        </>
    )
}