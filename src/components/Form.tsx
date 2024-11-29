import React, {Component} from "react"
import { observer } from "mobx-react";
import InputName from "../inputComponents/InputName";
import InputAddress from "../inputComponents/InputAddress";
import InputCompany from "../inputComponents/InputCompany";

@observer
class Form extends Component<any, any>{
    render() {
        return <div>
            <InputName />
            <InputAddress />
            <InputCompany />
        </div>
    }
}

export default Form;