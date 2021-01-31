import React, { useState, useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { doCrypt } from './crypting';
import { Link } from "react-router-dom";

const anagrams = [
]

class Vugenere extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			outputPhrase: ''
		}

		const output = anagrams.map((a) => doCrypt(a, 'ozo', true));
		console.log(output);
	}
	encryptHandler = () => {
		this.phraseOutput.value = doCrypt(this.phraseInput.value, this.keyInput.value, false);
	}
	decryptHandler = () => {
		this.phraseOutput.value = doCrypt(this.phraseInput.value, this.keyInput.value, true);
	}
	render() {
		const { outputPhrase } = this.state;
		return (
			<div className="Vugenere">
				<h1 class="sixth">Vigenère cipher</h1>
				<li>
				<Link className="link" to="/vugenere">Vigenere Cipher Wiki</Link>
				</li>
				<Paper elevation={6}>
					<Box p={3} mb={5}>
						<Grid container justify="center" spacing={40}>
							<Grid item xs={12}>

								<div>
									<div className="input-label">Key</div>
									<input
										ref={(node) => this.keyInput = node}
										type="text"
										className="key-input"
									/>
								</div>
							</Grid>
							<Grid item xs={12}>

								<Grid container justify="center" spacing={80}>
									<Grid item>


										<div className="input-label"><h2 class="second"><span>Phrase</span></h2></div>
										<div id="text_to_vug" class="form-group purple-border">
											<textarea
												class="form-control"
												rows="5"
												cols="25"
												ref={(node) => this.phraseInput = node}
												placeholder={'Input text'}
											/>
										</div>
									</Grid>
									<Grid item>

										<div className="input-label"><h2 class="second"><span>Output</span></h2></div>
										<div id="vug_to_text" class="form-group purple-border">
											<textarea
												class="form-control"
												rows="5"
												cols="25"
												ref={(node) => this.phraseOutput = node} 
												readOnly={true}
												value={outputPhrase}
												placeholder={'Output text'}
											/>
										</div>
									</Grid>
								</Grid>

								<Grid item xs={12}>
									<div id="vug_buttons">
										<button class="btn btn-outline-dark" onClick={this.decryptHandler}>Decrypt</button>
										<button class="btn btn-outline-dark" onClick={this.encryptHandler}>Encrypt</button>
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Paper>
			</div>
		)
	}
}

export default Vugenere;
