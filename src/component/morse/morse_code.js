import { Grid, Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

import MorseTranslation from './text_to_morse';
import MorseTranslationtoText from './morse_to_text'

function MorseCode() {
    return (
        <div className="Morse">
            <h1 class="sixth">Morses Code</h1>
            <li>
                <Link className="link" to="/morse">Morse Code Wiki</Link>
              </li>
            <Paper elevation={6}>
                <Box p={3}>
                    <Grid container justify="center" spacing={40}>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12}>

                            <Grid container justify="center" spacing={80}>
                                <Grid item>
                                    <h2 class="second"><span>Text to Morse</span></h2>
                                    <MorseTranslation />
                                </Grid>
                                <Grid item>
                                    <h2 class="second"><span>Morse to Text</span></h2>
                                    <MorseTranslationtoText />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
    );
}

export default MorseCode;