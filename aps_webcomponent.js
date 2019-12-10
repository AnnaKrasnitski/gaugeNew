(function()  {
	let tmpl = document.createElement('template');
	tmpl.innerHTML = `
			<form id="form">
				<fieldset>
					<legend>Gauge Box Properties</legend>
					<table>
						<tr>
							<td>Value</td>
							<td><input id="aps_val" type="text" name="val" size="20" maxlength="20"></td>
						</tr>
						<tr>
							<td>maximum value</td>
							<td><input id="aps_max" type="text" name="max" size="10" maxlength="10"></td>
							<td>maximum value</td>
							<td><input id="aps_min" type="text" name="min" size="10" maxlength="10"></td>
						</tr>
					</table>
				</fieldset>
				<button type="submit">Submit</button>
			</form>
	`;
	
	class GaugeAps extends HTMLElement {
			  constructor() {
				super();
				this._shadowRoot = this.attachShadow({mode: 'open'});
				this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
				this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));

			  }

			  _submit(e) {
				e.preventDefault();
				this.dispatchEvent(new CustomEvent("propertiesChanged", {
						detail: {
							properties: {
								val: this.aps_val,
								max: this.aps_max,
								min: this.aps_min
							}
						}
				}));
			}

	
			  get val() {
				 return this._shadowRoot.getElementById("aps_val").value ;
			  }
	
			  set val(newValue) {
				  this._shadowRoot.getElementById("aps_val").value = newValue;
			  }
			  get max() {
				return this._shadowRoot.getElementById("aps_max").value ;
			 }
   
			 set max(newMax) {
				this._shadowRoot.getElementById("max").value = newMax;
			 }
			 get min() {
				return this._shadowRoot.getElementById("aps_min").value ;
			 }
   
			 set min(newMin) {
				this._shadowRoot.getElementById("min").value = newMin;
			 }
	
			  static get observedAttributes() {
				  return ['val','min','max'];
			  }
	
			  attributeChangedCallback(name, oldValue, newValue) {
				 if (oldValue != newValue) {
					  this[name] = newValue;
				 }
			  }
	}
	
	customElements.define('com-iprosis-sample-gauge-aps', GaugeAps);
	})();