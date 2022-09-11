import {Image} from "./Image";

export const UserTable = () => {
    return (
        <>
            <table cellSpacing="15">
                <tr>
                    <td>
                        <Image/>
                    </td>
                    <td>
                        <h1>Максим Фёдоров 2</h1>
                        <p><em>Я студент 1 курса <strong>магистратуры</strong></em></p>
                        <p><em>Я учусь программировать</em></p>
                    </td>
                </tr>
            </table>
            <hr/>
        </>
    )
}