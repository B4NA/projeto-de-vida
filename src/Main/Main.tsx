import React from 'react';
import './Main.css';

function Main() {
    let buttonArray = ['Estudar cursos na Alura', 'Criar projetos em Javascript', 'Crie um portfólio', 'Atualizar meu currículo'];
    let arrayTime = {dias:'7',horas:'13',min:'18',seg:'13'}

    return (
        <main>
            <div className="main">
                <h1 className="heading__top">Meus objetivos do ano<strong>_</strong></h1>
                <section className="section__main">
                    <div className="button__div">
                        {buttonArray.map((item,index) => (
                            <button id={`button${index}`}>{item}</button>
                        ))}
                    </div>
                    <div className="bottom__section">
                        <h1 className="heading__bottom">Estudar 4 cursos na Alura</h1>
                        <div className="time">
                            <h1>TEMPO PARA COMPLETAR OBJETIVO</h1>
                            <div className="cronometer">
                                {Object.keys(arrayTime).map((key,_) => (
                                    <div className='display__digit'>
                                        <h1 className="digit">{arrayTime[key as keyof typeof arrayTime]}</h1>
                                        <h1 className="subdigit">{key}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>  
            </div>
        </main>
    )
};

export default Main;