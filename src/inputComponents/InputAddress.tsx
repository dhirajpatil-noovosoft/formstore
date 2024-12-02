import React, {Component} from "react";
import formStore from "../stores/FormStore"
import {observer} from "mobx-react";
interface Props{
    req:boolean
}
interface structure{
    Address:string
}
@observer
class InputAddress extends Component<Props, structure> {
    FormStore:any = formStore
    state:structure = {
        Address : ""
    }
    constructor(props:Props) {
        super(props);
        this.FormStore = formStore
        this.handleChangeInputAddress = this.handleChangeInputAddress.bind(this)
    }

    handleChangeInputAddress(event: React.ChangeEvent<HTMLInputElement>){
        const add = event.target.value
        this.setState(
            {
                Address:add
            }
        )
        this.FormStore.updateFormField("address", add);
    }
    render() {
        console.log("rendering address")
        const {Address} = this.state
        return <div className={(this.FormStore.disable)?"disable" : ""} style = {{display : "flex"}}>
            <p>Enter Your Address : <>{(this.props.req)?"*" : "" }</></p>
            <input
                type="text"
                value={Address}
                onChange={this.handleChangeInputAddress}
                placeholder="home ..."
                style={{padding: "8px", marginBottom: "20px"}}
            /></div>
    }
}

export default InputAddress