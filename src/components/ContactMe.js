export const ContactMe = () => {
    return(
        <>
            <h2>связь со мной </h2>
            <form action="/">
                <label htmlFor="name">Ваше имя:</label>
                <input type="text" id="name"
                       placeholder="Введите ваше имя"/>
                <br/>
                <label htmlFor="email">Ваш Email:</label>
                <input type="email" id="email"
                       placeholder="Введите ваше email..."/>
                <br/>
                <label htmlFor="email">Ваше сообщение:</label>
                <br/>
                <textarea id="text" rows="2" cols="15"></textarea>
                <br/>
                <input type="submit" value="Связаться"/>
            </form>
        </>
    )
}