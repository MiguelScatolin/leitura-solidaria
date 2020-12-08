import { Grid, MenuItem, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
    root: {
        height: "100vh",
        width: "100vw",
    },
});

const TextForm = () => {
    const classes = useStyles();
    /* name: string;
    authors: string[];
    edition?: number;
    language: string;
    type: TextType;
    hasImages: boolean; */
    return (
        <Paper className={classes.root}>
            <Grid container direction="column" xs={12}>
                Formulário de cadastro de texto
                <Grid item>
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        aria-label="Nome do texto"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-basic"
                        label="Autores"
                        aria-label="Nome dos Autores"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-basic"
                        label="Autores"
                        aria-label="Nome dos Autores"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="lingua"
                        label="Língua"
                        value="20"
                        select
                        variant="outlined"
                        aria-label="Língua do texto"
                    >
                        <MenuItem value="portugues10">Ten</MenuItem>
                        <MenuItem value="ingles">Inglês</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        id="tipo"
                        label="Tipo"
                        value="20"
                        select
                        aria-label="Tipo do texto"
                        variant="outlined"
                    >
                        <MenuItem value="Literatura">Literatura</MenuItem>
                        <MenuItem value="artigo">Artigo</MenuItem>
                    </TextField>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default TextForm;
