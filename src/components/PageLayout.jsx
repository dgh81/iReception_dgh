import TopBar from "./TopBar";

export const PageLayout = (props) => {
    return (
        <>
            <TopBar />
            <br />
            <br />
            {props.children}
        </>
    );
};