import Botao from "../botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programção",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Desing",
    "Mobile",
    "Inovação",
    "Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar os cards do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite sua idade"
        />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} itens={times} label="Time" />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
