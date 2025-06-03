import logoImg from "../assets/logo.png"
export default function Header(){
    return (
        <header>
            <img src={logoImg} alt="" />
            <p>A simple app to manage clients.</p>
        </header>
    )
}