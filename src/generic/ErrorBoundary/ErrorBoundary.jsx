import React from "react";

class ErrorBoundary extends React.PureComponent {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // funciones
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  //   /**
  //    * Eventos del ciclo de vida
  //    */

  //   componentDidMount() {
  //     // cuando el componente ya se ha montado
  //     console.log("El componente se ha montado");
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("El componente se ha actualizado");
  //   }

  //   componentWillUnmount() {
  //     console.log("El componente se ha desmontado");
  //   }

  // render
  render() {
    return this.state.hasError ? <h1>Hubo un error</h1> : this.props.children;
  }
}

export default ErrorBoundary;
