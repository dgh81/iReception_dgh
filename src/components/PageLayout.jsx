import TopBar from "./TopBar";

export const PageLayout = (props) => {
    return (
        <>
            <TopBar />
            <br />
            <br />
            {/* TODO: Hvordan virker props.children her ?!?! (Fordi Navbar etc skal nedarves til alle children - se App.js hvor PageLayout indeholder Pages.)
            Se https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9&ab_channel=Codevolution ved 6:27 */}
            {props.children}
        </>
    );
};