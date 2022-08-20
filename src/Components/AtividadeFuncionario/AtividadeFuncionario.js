import React from "react";
import styles from "./AtividadeFuncionario.module.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ReactComponent as Seta } from "../../Assets/icons/seta.svg";
import { ReactComponent as Lupa } from "../../Assets/icons/lupa.svg";
const columns = [
  { id: "funcionario", label: "Funcionário", minWidth: 140, align: "center" },
  { id: "entrada", label: "Hora da Entrada", minWidth: 140, align: "center" },
  { id: "pausa", label: "Hora da pausa", minWidth: 140, align: "center" },
  { id: "saida", label: "Hora saída", minWidth: 140, align: "center" },
  { id: "status", label: "Status", minWidth: 140, align: "center" },
  { id: "acoes", label: "Ações", minWidth: 140, align: "center" },
];

const rows = [
  {
    funcionario: "danyllo",
    entrada: "12:30",
    pausa: "13:30",
    saida: "17:00",
    status: "Ativo",
    acoes: "testes",
  },
  {
    funcionario: "danyllo",
    entrada: "12:30",
    pausa: "13:30",
    saida: "17:00",
    status: "Ativo",
    acoes: "testes",
  },
];
const AtividadeFuncionario = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    setResult(props);
  }, [props]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(result);
  return (
    <section>
      <h1 className={styles.title}>Atividade dos funcionários</h1>
      <div className={styles.pesquisa}>
        <div className={styles.pagina}>
          <label htmlFor="pagina">Per page</label>
          <input type="number" id="pagina" name="pagina" />
        </div>
        <div className={styles.inputsInfo}>
          <div className={styles.status}>
            {" "}
            <input
              type="select"
              id="status"
              name="status"
              placeholder="Status"
            />
            <button className={styles.seta}>
              <Seta />
            </button>
          </div>
          <div className={styles.procura}>
            <input
              type="text"
              id="procura"
              name="procura"
              placeholder="Procurar"
            />
            <button className={styles.lupa}>
              <Lupa />
            </button>
          </div>
        </div>
      </div>
      <Paper
        sx={{
          width: "95%",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          borderRadius: "0 0 10px 10px",
          boxShadow: "none",
        }}
      >
        <TableContainer sx={{ maxHeight: 350 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#F3F2F7",
                      textTransform: "uppercase",
                      color: "#5E5873",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: "11.7792px",
                      lineHeight: "14px",
                      letterSpacing: "0.9816px",
                      borderBottom: "none",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.funcionario}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ border: "none" }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </section>
  );
};

export default AtividadeFuncionario;
