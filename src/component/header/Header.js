import "./Header.css";
import { HeaderList } from "./HeaderList.js";//List.jsからとってくる

const Header = () => {
    return (
        <div className="header">
            <HeaderList />
        </div>
    );
};

export { Header };
