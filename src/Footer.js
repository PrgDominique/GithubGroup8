import Body from "./Body";

const Footer = (props) => {
    return (
        <div>
            <h1>Footer</h1>

            <Body count={props.count}/>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </div>

    )
}
export default Footer;