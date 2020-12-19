import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    MenuItem,
    Paper,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { ChangeEvent, useState } from "react";
import { Text, TextType } from "../types";
import { registerText } from "../manager";

const useStyles = makeStyles({
    root: {
        height: "100%",
        width: "100%",
        padding: 32,
    },
    grid: {
        height: "100%",
    },
    page: {
        display: "grid",
        placeItems: "center",
        padding: "10% 20%",
    },
});

const TextForm = () => {
    const classes = useStyles();
    const [text, setText] = useState<Text>({
        guid: 0,
        name: "",
        authors: [],
        edition: 0,
        language: "",
        type: TextType.Academic,
        hasImages: false,
    });

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateText(event.target.name, event.target.value);
    };

    const updateText = (property: string, value: string | number | boolean) => {
        setText({ ...text, [property]: value });
    };

    const handleRegisterText = async () => {
        const result = await registerText(text);
    };

    return (
        <div className={classes.page}>
            <Paper className={classes.root}>
                <Grid
                    className={classes.grid}
                    container
                    direction="column"
                    alignItems="center"
                    justify="space-between"
                    spacing={2}
                >
                    <Grid item>Formulário de cadastro de texto</Grid>
                    <Grid container justify="space-between" item spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                color="primary"
                                size="small"
                                name="name"
                                fullWidth
                                id="outlined-basic"
                                label="Nome"
                                aria-label="Nome do texto"
                                variant="outlined"
                                onChange={handleChange}
                                value={text.name}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                color="primary"
                                name="authors"
                                size="small"
                                id="outlined-basic"
                                fullWidth
                                label="Autores"
                                aria-label="Nome dos Autores"
                                variant="outlined"
                                onChange={handleChange}
                                value={text.authors}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="space-between" item spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                color="primary"
                                size="small"
                                name="edition"
                                fullWidth
                                type="number"
                                id="outlined-basic"
                                label="Edição"
                                aria-label="Edição"
                                variant="outlined"
                                onChange={handleChange}
                                value={text.edition}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                color="primary"
                                size="small"
                                id="lingua"
                                name="language"
                                label="Língua"
                                select
                                variant="outlined"
                                aria-label="Língua do texto"
                                onChange={handleChange}
                                fullWidth
                                value={text.language}
                            >
                                <MenuItem value="portugues10">Ten</MenuItem>
                                <MenuItem value="ingles">Inglês</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                color="primary"
                                size="small"
                                id="tipo"
                                name="type"
                                label="Tipo"
                                select
                                aria-label="Tipo do texto"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                value={text.type}
                            >
                                <MenuItem value={TextType.Academic}>
                                    Academico
                                </MenuItem>
                                <MenuItem value={TextType.Literature}>
                                    Literatura
                                </MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={text.hasImages}
                                    onChange={(event) =>
                                        updateText(
                                            event.target.name,
                                            event.target.checked
                                        )
                                    }
                                    name="hasImages"
                                    color="primary"
                                />
                            }
                            label="Tem imagens"
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleRegisterText}
                        >
                            Salvar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default TextForm;
