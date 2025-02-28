import Title from "../components/title/Title";
import Description from "../components/description/Description";

const MainPage = () => {
    return (
        <div>
            <Description name="Ares" age={17}/>
            <Title position='CB' height={184}/>
        </div>
    )
}
export default MainPage;