import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function GoBack() {
  navigationRef.current?.goBack();
}

export const resetStack = newRoute => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: newRoute}],
  });
};


