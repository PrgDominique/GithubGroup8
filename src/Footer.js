import Body from "./Body";

const Footer = (props) => {
    return (
        <div>
            <h1>Footer</h1>

            <Body count={props.count}/>

        </div>

    )
}
export default Footer;