const Props2 = (props) => {
    return (
        <div>
            <h1>porps2 component</h1>
            <button onClick={() => props.mainclear(0)}>clear</button>

            {props.children}
        </div>
    )
}

export default Props2