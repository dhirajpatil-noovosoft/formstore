import React, { createContext, Component, ReactNode } from 'react';
import FormStore from "./FormStore";
// Create the context
const FormStoreContext = createContext<typeof FormStore | undefined>(undefined);

// Create the FormStoreProvider component (Provider for class components)
interface FormStoreProviderProps {
    children: ReactNode;
}

class FormStoreProvider extends Component<FormStoreProviderProps> {
    render() {
        const { children } = this.props;
        return (
            <FormStoreContext.Provider value={FormStore}>
                {children}
            </FormStoreContext.Provider>
        );
    }
}

// A higher-order component (HOC) to consume the context in class-based components
const withFormStore = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    return class extends Component<P> {
        render() {
            return (
                <FormStoreContext.Consumer>
                    {(formStore) => {
                        if (!formStore) {
                            throw new Error("FormStore context is not available");
                        }
                        return <WrappedComponent {...this.props} formStore={formStore} />;
                    }}
                </FormStoreContext.Consumer>
            );
        }
    };
};

export { FormStoreProvider, withFormStore };
