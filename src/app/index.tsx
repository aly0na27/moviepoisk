import {withProviders} from "./providers/"
import {Routing} from "../pages";
import {Header} from "../widgets/header";
import {store} from "./store.ts";
import {Provider} from "react-redux";

function App() {

    return (
        <Provider store={store}>
            <Header/>
            <Routing/>
        </Provider>

    )
}

export default withProviders(App)
