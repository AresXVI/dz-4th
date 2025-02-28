import About from "../components/About";
import Title from "../components/Title";
import './MainPage.css'
function MainPage() {
    return (
        <div className="MainPage">
            <About title="Some title" body="Some body"/>
            <Title greet="Hello world"/>
        </div>
    )
}

export default MainPage;