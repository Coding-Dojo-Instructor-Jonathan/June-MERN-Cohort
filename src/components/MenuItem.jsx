const MenuItem = (props) => {
    const {name, desc} = props
    return (
        <section>
            <h2>{name}</h2>
            <p>{desc}</p>
        </section>
    )
}

export default MenuItem