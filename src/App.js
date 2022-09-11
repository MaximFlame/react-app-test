import './App.css';
import {UserTable} from "./components/UserTable";

function App() {
  return (
    <div className="App">
        <UserTable />
        {/**/}
        <h2>мои социальные сети</h2>
        <ul>
            <li><a href="https://vk.com/flame_17" target="_blank">в контакте</a></li>
            <li><a href="https://vk.com/flame_17" target="_blank">в контакте</a></li>
        </ul>
        <hr/>
      {/*  */}
      <h2>мои хобби</h2>
      <ol>
        <li>плавание</li>
        <li>путешествия</li>
        <li>книги</li>
        <li>слушать музыку</li>
      </ol>
      <hr/>
        {/**/}
        <h2>Опыт в плавание</h2>
      <table>
        <thead>
        <tr>
          <th>Город</th>
          <th>Должность</th>
          <th>Год</th>
        </tr>
        </thead>
        <tbody><tr>
          <td>Озёрный</td>
          <td>плавание</td>
          <td>2007-2018</td>
        </tr>
        <tr>
          <td>ДЮСШ</td>
          <td>пловец</td>
          <td>2013-2020</td>
        </tr>
        </tbody>
      </table>
        <hr/>
        {/*    */}
        <h2>Youtube</h2>
      <a href="Youtube.html">список</a>
      <hr/>
      {/*  */}
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
    </div>
  );
}

export default App;
