// src/contexts/formStoreContext.tsx
import React, { createContext } from 'react';
import FormStore from "./FormStore";

const FormStoreContext = createContext(FormStore);  // Create context for formStore

export { FormStoreContext };