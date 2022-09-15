import { Image } from "./Image";

export const UserTable = () => {
  return (
    <div className="info">
      <Image />
      <div className="info-text">
        <h1>Максим Фёдоров 2</h1>
        <p>
          Я студент 1 курса <strong>магистратуры</strong>
        </p>
        <p>Я учусь программировать</p>
        <h2>мои социальные сети</h2>
        <a href="https://web.telegram.org/z/#775139666" target="_blank">
          Telegram
        </a>
        |
        <a href="https://vk.com/flame_17" target="_blank">
          в контакте
        </a>
      </div>
    </div>
  );
};
