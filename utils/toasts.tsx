import { LOGO_URL } from '../constants/index';
import toast from "react-hot-toast";

const Logo = () => {

    return (
        <img src={LOGO_URL} alt="logo" width={48} />
    )
}

export const successToast = (text: string) => toast(text, {
    icon: <Logo />,
    style: {
        borderRadius: '10px',
        background: '#105e2c',
        color: '#fff',
    }
})
