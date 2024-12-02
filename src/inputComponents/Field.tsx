import React, {Component} from "react";
import Form from "../components/Form";
import FormStore from "../stores/FormStore";
interface PropTypes{
    FormComponent : any,
    req?:Array<string>
}
class Field extends Component<PropTypes>{
    FormComponent :any;
    formStore = FormStore
    constructor(props:PropTypes) {
        super(props);
        this.FormComponent = this.props.FormComponent;
    }
    componentDidUpdate(prevProps: Readonly<PropTypes>, prevState: Readonly<{}>, snapshot?: any) {
        this.FormComponent = this.props.FormComponent;
    }
    render() {
        return <>
            <Form FormStore={this.formStore} req={this.props.req}/>
        </>
    }
}

export default Field;