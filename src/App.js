import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import { useState } from "react";
import Time from "./componentes/Time";

function App() {

  const times = [
    {
      nome: "Programção",
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome:"Front-end",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome:"Data Science",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F862',
    },
    {
      nome:"Devops",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome:"UX e Desing",
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome:"Mobile",
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome:"Inovação e gestão",
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]


  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }/>      

        {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}

      
    </div>
  );
}

export default App;
