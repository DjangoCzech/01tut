const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log('Kliknul jsi')
    }

    const handleClick2 = (name) => {
        console.log(`${name} bylo kliknuto`)
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Klikni</button>
            <button onClick={() => handleClick2('Jendo')}>Klikni</button>
            <button onClick={(e) => handleClick3(e)}>Klikni</button>
        </main>
    )
}

export default Content
