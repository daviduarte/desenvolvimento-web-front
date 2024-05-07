import React, { useState } from "react";
import styles from '../styles/home.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function LoginScreen() {

  return (
    <div>                           {/* padding y 5 pixels */}
      <section id="hero" className="py-5 text-center text-dark">
        <Container>
          <h1>Bem-vindo ao Nosso Produto</h1>
          <p className="lead">Descubra as incríveis funcionalidades do nosso produto</p>
                           {/*secondary, sucess, danger, warning, info*/}
                                        {/*lg = large, sm = small*/}
          <Button variant="primary" size="lg">Comece Agora</Button>
        </Container>
      </section>
                                          {/*background light*/}
      <section id="features" className="py-5 bg-light">
        <Container>
                                  {/*margin bottom 4 px*/}
          <h2 className="text-center mb-4">Funcionalidades</h2>
          <Row>
                {/*ocupará 4 unidades de largura em dispositivos de tamanho médio (tamanho de tela de "md")*/}
            <Col md={4} sm={4}>
              <h3>Funcionalidade 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col md={4} sm={4} >
              <h3>Funcionalidade 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col md={4} sm={4} >
              <h3>Funcionalidade 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="pricing" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Preços</h2>
          <Row>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <h3>Plano Básico</h3>
                <p>R$ 10 por mês</p>
                <Button variant="primary">Inscreva-se</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <h3>Plano Pro</h3>
                <p>R$ 20 por mês</p>
                <Button variant="primary">Inscreva-se</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <h3>Plano Premium</h3>
                <p>R$ 30 por mês</p>
                <Button variant="primary">Inscreva-se</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="testimonials" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Depoimentos</h2>
          <Row>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>- João Silva</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>- Maria Oliveira</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>- José Santos</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}