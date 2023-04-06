import React from 'react'
import './About.css'
import Empresa from '../img/empresa.jpg'


const About = () => 


<div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title">VIMARBE</h3>
                    </div>
                    <div class="col-md-6">
                    <img class="img-fluid empresa" src={Empresa} alt="Empresa" />

                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">Somos Soluções para Piscinas e área de lazer residencial,condomínios,clubes e Hotéis: </h3>
                        <p className=" lead"> A VIMARBE Produtos e Serviços para Piscinas são uma Empresa especializada, há mais 8 anos, em produtos para tratamento de piscinas e spas, equipamentos para automatizar sua piscinas, equipamentos e acessórios para limpeza, como filtros e motobombas, aquecedores a gás, elétrico, solar e trocador de calor para piscinas. </p>
                     <p className = "lead">Contamos também com toda linha de decoração para sua area externa e varandas, como cadeiras, mesas, espreguiçadeiras, ombrelones e guarda-sol, mesas de centro e poltronas, entregando seus produtos para o Brasil inteiro.</p>
                        <p className = "lead">Além disso, contamos uma equipe treinada para atender aos nossos clientes com o mais alto nível de qualidade.</p>
                        
                    </div>
                </div>
            </div>
        </div>
      
export default About;