import { showMessage } from "react-native-flash-message"
import colors from "../../styles/colors"

export default function (message) {
    showMessage({
        message: message,
        backgroundColor: colors.mainColor,
        textStyle: {
            textAlign: 'center'
        }
    })
}