import React, { Component } from 'react';

// Error Boundary компонент
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' }; // Алдаа гарсан эсэхийг шалгах state
  }

  // Алдаа гарсан үед гардаг method
  static getDerivedStateFromError(error) {
    return { hasError: true }; // Алдаа гарсан бол hasError = true
  }

  // Алдаа гарсан тохиолдолд энэ method ажиллана
  componentDidCatch(error, info) {
    this.setState({ errorMessage: error.toString() }); // Алдааны мэдээллийг хадгалах
    console.log(info); // Алдааны дэлгэрэнгүй мэдээллийг console дээр хэвлэх
  }

  render() {
    if (this.state.hasError) {
      // Хэрэв алдаа гарсан бол энэ хэсгийг харуулна
      return <h1>Something went wrong: {this.state.errorMessage}</h1>;
    }

    // Алдаа гараагүй бол, child компонентыг хэвийн үзүүлнэ
    return this.props.children;
  }
}

export default ErrorBoundary;
