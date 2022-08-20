import React from "react";
import styles from "./AdicionarPonto.module.css";
import { ReactComponent as Seta } from "../../Assets/icons/seta.svg";
import AtividadeFuncionario from "../AtividadeFuncionario/AtividadeFuncionario";

const AdicionarPonto = () => {
  const [funcionario, setFuncionario] = React.useState([]);
  const [selected, setSelected] = React.useState("");
  const [horario, setHorario] = React.useState("");
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const user = window.localStorage.getItem("usuario");
    const result = JSON.parse(user);
    if (result) setFuncionario(result);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (selected && horario) {
      setData({ selected, horario });
    }
    setSelected("");
    setHorario("");
  }

  return (
    <section>
      <h1 className={styles.title}>Adicionar ponto</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} className={styles.formItemns}>
          <div>
            <label htmlFor="funcionario">Funcionário</label>
            <select
              value={selected}
              onChange={({ target }) => setSelected(target.value)}
            >
              <option value="" disabled>
                Selecione um funcionário
              </option>

              {funcionario &&
                funcionario.map((option, index) => (
                  <option key={index} value={option.nome}>
                    {option.nome}
                  </option>
                ))}
            </select>

            <button className={styles.seta}>
              <Seta />
            </button>
          </div>
          <div>
            <label htmlFor="horario">Hora entrada</label>
            <input
              type="text"
              id="horario"
              name="horario"
              value={horario}
              onChange={({ target }) => setHorario(target.value)}
              placeholder="Selecione um horário"
            />
          </div>
          <button className={styles.btn}>+ Adicionar entrada</button>
        </form>
      </div>
      <AtividadeFuncionario data={data} />
    </section>
  );
};

export default AdicionarPonto;
