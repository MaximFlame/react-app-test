export const ContactMe = () => {
  return (
    <>
      <h2>связь со мной </h2>
      <form action="/">
        <div className="row">
          <div className="form-group">
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" id="name" placeholder="Введите ваше имя..." />
          </div>
          <div className="form-group">
            <label htmlFor="email">Ваш email:</label>
            <input type="email" id="email" placeholder="Введите email..." />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Ваше сообщение:</label>
          <textarea id="text" rows="2" cols="15"></textarea>
        </div>
        <input className="btn" type="submit" value="Связаться" />
      </form>
    </>
  );
};
